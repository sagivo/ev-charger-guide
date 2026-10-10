// Per-page social share images (1200x630), rendered at build time with satori + resvg.
// /og/posts/<slug>.png and /og/chargers/<id>.png
import type { APIRoute, GetStaticPaths } from "astro";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { getPosts, CATEGORY_LABEL } from "../../lib/posts";
import { MODELS, CONNECTOR_LABEL } from "../../data/models";

// Load the CommonJS builds: satori's ESM build reads __dirname at import time,
// which doesn't exist in Astro's ESM prerender bundle.
const require = createRequire(import.meta.url);
const satori: typeof import("satori").default = require("satori").default;
const { Resvg }: typeof import("@resvg/resvg-js") = require("@resvg/resvg-js");
const font = (pkg: string, file: string) => readFileSync(require.resolve(`${pkg}/files/${file}`));
const FONTS = [
  { name: "Inter", data: font("@fontsource/inter", "inter-latin-400-normal.woff"), weight: 400 as const },
  { name: "Inter", data: font("@fontsource/inter", "inter-latin-700-normal.woff"), weight: 700 as const },
  { name: "Sora", data: font("@fontsource/sora", "sora-latin-800-normal.woff"), weight: 800 as const },
];

interface Card {
  kicker: string;
  title: string;
  sub: string;
  score?: string;
}

export const getStaticPaths = (async () => {
  const posts = await getPosts();
  return [
    ...posts.map((p) => ({
      params: { slug: `posts/${p.id}` },
      props: { kicker: p.data.tag ?? CATEGORY_LABEL[p.data.category], title: p.data.title, sub: "Independent, research-based EV charger guide" } as Card,
    })),
    ...MODELS.map((m) => ({
      params: { slug: `chargers/${m.id}` },
      props: {
        kicker: `${m.brand} review`,
        title: `${m.name}`,
        sub: `${m.maxAmps} A · ${m.maxKw} kW · ${CONNECTOR_LABEL[m.connector]} connector`,
        score: m.score.toFixed(1),
      } as Card,
    })),
  ];
}) satisfies GetStaticPaths;

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { kicker, title, sub, score } = props as Card;
  const tree = h(
    "div",
    {
      width: 1200, height: 630, display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: "64px 72px", background: "linear-gradient(150deg, #081a2e 0%, #0e2a46 55%, #16395c 100%)", color: "#fff", fontFamily: "Inter",
    },
    [
      h("div", { display: "flex", alignItems: "center", gap: 18 }, [
        h("div", { width: 56, height: 56, borderRadius: 14, background: "linear-gradient(135deg,#1f7fd6,#0e2a46)", border: "2px solid #40b955", display: "flex", alignItems: "center", justifyContent: "center" },
          h("div", { width: 14, height: 14, borderRadius: 999, background: "#c8f03c" })),
        h("div", { fontFamily: "Sora", fontWeight: 800, fontSize: 28 }, "EV Charger Guide"),
        h("div", { marginLeft: "auto", fontSize: 22, color: "#c8f03c", border: "2px solid rgba(200,240,60,.45)", borderRadius: 999, padding: "8px 22px", textTransform: "uppercase", letterSpacing: 3, fontWeight: 700 }, kicker),
      ]),
      h("div", { display: "flex", alignItems: "flex-end", gap: 40 }, [
        h("div", { display: "flex", flexDirection: "column", flex: 1 }, [
          h("div", { fontFamily: "Sora", fontWeight: 800, fontSize: title.length > 60 ? 54 : 64, lineHeight: 1.1, letterSpacing: -1.5 }, title),
          h("div", { fontSize: 28, color: "#cfe0f0", marginTop: 22 }, sub),
        ]),
        score
          ? h("div", { display: "flex", flexDirection: "column", alignItems: "center", background: "#c8f03c", color: "#0e2413", borderRadius: 24, padding: "18px 26px" }, [
              h("div", { fontFamily: "Sora", fontWeight: 800, fontSize: 72, lineHeight: 1 }, score),
              h("div", { fontSize: 20, fontWeight: 700, marginTop: 4 }, "/ 10 score"),
            ])
          : null,
      ]),
      h("div", { display: "flex", height: 10, borderRadius: 999, background: "linear-gradient(90deg,#1f7fd6,#c8f03c)" }),
    ]
  );
  const svg = await satori(tree as any, { width: 1200, height: 630, fonts: FONTS });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
