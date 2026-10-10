#!/usr/bin/env python3
"""Create sagivo/ev-charger-guide and push the full working tree via GitHub git-database REST API."""
import base64
import http.client
import json
import os
import socket
import sys
import time
import urllib.request
import urllib.error

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request

REPO = "sagivo/ev-charger-guide"
WORKDIR = os.path.expanduser("~/workspace/ev-charger-guide")
SKIP_DIRS = {"node_modules", "dist", ".git", ".astro"}
SKIP_FILES = {".gh_blob_cache.json"}

TRANSIENT = (urllib.error.URLError, http.client.RemoteDisconnected,
             http.client.BadStatusLine, TimeoutError, socket.timeout)

def api(method, path, data=None, retries=8):
    body = json.dumps(data).encode() if data is not None else None
    for attempt in range(retries):
        req = urllib.request.Request(
            f"https://api.github.com{path}", method=method, data=body,
            headers={"Content-Type": "application/json", "Accept": "application/vnd.github+json"})
        add_surrogate_to_request(req, "custom.github", allowed_hosts=("api.github.com",))
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                raw = r.read().decode()
                return json.loads(raw) if raw else {}
        except urllib.error.HTTPError as e:
            detail = e.read().decode()[:300]
            print(f"HTTP {e.code} {method} {path} (try {attempt+1}/{retries}): {detail}", flush=True)
            if e.code in (401, 403, 404, 422):
                raise RuntimeError(f"HTTP {e.code}: {detail}")
        except TRANSIENT as e:
            print(f"TRANSIENT {type(e).__name__} {method} {path} (try {attempt+1}/{retries})", flush=True)
        if attempt < retries - 1:
            time.sleep(min(3 * 2 ** attempt, 60))
    raise RuntimeError(f"API failed: {method} {path}")

def main():
    # 1. Create repo (idempotent-ish: 422 means it exists)
    try:
        repo = api("POST", "/user/repos", {
            "name": "ev-charger-guide",
            "private": False,
            "description": "EV Charger Guide — independent, research-based guides to Level 2 EV home chargers (Astro + pagefind). Amazon Associates affiliate site.",
            "auto_init": False,
        })
        print("repo created:", repo.get("html_url"), flush=True)
    except RuntimeError as e:
        if "422" in str(e):
            print("repo already exists, continuing", flush=True)
        else:
            raise

    # 2. Collect files
    files = []
    for root, dirs, names in os.walk(WORKDIR):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for n in names:
            if n in SKIP_FILES:
                continue
            full = os.path.join(root, n)
            rel = os.path.relpath(full, WORKDIR)
            files.append((rel, full))
    files.sort()
    print(f"{len(files)} files to push", flush=True)

    # 3. Create blobs
    tree_entries = []
    for i, (rel, full) in enumerate(files):
        with open(full, "rb") as fh:
            content = fh.read()
        try:
            payload = {"content": content.decode("utf-8"), "encoding": "utf-8"}
        except UnicodeDecodeError:
            payload = {"content": base64.b64encode(content).decode(), "encoding": "base64"}
        sha = api("POST", f"/repos/{REPO}/git/blobs", payload)["sha"]
        tree_entries.append({"path": rel, "mode": "100644", "type": "blob", "sha": sha})
        if (i + 1) % 20 == 0:
            print(f"  blobs {i+1}/{len(files)}", flush=True)

    # 4. Tree (repo may be empty: no base_tree)
    try:
        base = api("GET", f"/repos/{REPO}/git/ref/heads/main")["object"]["sha"]
        base_tree = api("GET", f"/repos/{REPO}/git/commits/{base}")["tree"]["sha"]
        parents = [base]
        print("existing main:", base[:8], flush=True)
    except RuntimeError as e:
        if "404" in str(e):
            base_tree, parents = None, []
            print("empty repo: initial commit", flush=True)
        else:
            raise
    tree_payload = {"tree": tree_entries}
    if base_tree:
        tree_payload["base_tree"] = base_tree
    new_tree = api("POST", f"/repos/{REPO}/git/trees", tree_payload)["sha"]
    print("tree:", new_tree[:8], flush=True)

    commit = api("POST", f"/repos/{REPO}/git/commits", {
        "message": "EV Charger Guide: Level 2 EV home charger affiliate site (11 reviews, 6 guides, 3 calculators)",
        "tree": new_tree,
        "parents": parents,
    })["sha"]
    print("commit:", commit[:8], flush=True)

    if parents:
        api("PATCH", f"/repos/{REPO}/git/refs/heads/main", {"sha": commit})
        print("main updated", flush=True)
    else:
        api("POST", f"/repos/{REPO}/git/refs", {"ref": "refs/heads/main", "sha": commit})
        print("main created", flush=True)
    print("DONE https://github.com/" + REPO, flush=True)

if __name__ == "__main__":
    main()
