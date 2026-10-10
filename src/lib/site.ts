// Central site config. Domain: ev-charger-guide-aif.pages.dev (Cloudflare-assigned; plain subdomain was taken)
// (also update `SITE` in astro.config.mjs and public/robots.txt).
export const SITE_NAME = "EV Charger Guide";
export const SITE_URL = "https://ev-charger-guide-aif.pages.dev";
export const SITE_TAGLINE = "Level 2 EV home charger guides, comparisons, and calculators.";
export const SITE_DESCRIPTION =
  "Independent guides to Level 2 EV home chargers: charger comparisons, charge-time calculators, NACS vs J1772 explainers, and installation cost breakdowns so you buy the right charger the first time.";
export const OG_DEFAULT = `${SITE_URL}/og-default.png`;

// Amazon Associates Store ID. Every product link on the site picks it up.
// After changing it, clear Astro's content cache (rm -rf node_modules/.astro)
// so already-rendered markdown links are rebuilt with the new tag.
export const AMAZON_TAG = "room4205-20";

// Primary navigation, shared by header and footer.
export const NAV = [
  { href: "/posts/best-level-2-ev-chargers-2026/", label: "Best Chargers" },
  { href: "/chargers/", label: "Compare" },
  { href: "/guides/", label: "Guides" },
  { href: "/tools/", label: "Tools" },
];
