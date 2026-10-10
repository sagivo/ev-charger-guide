/**
 * Charts and diagrams rendered to HTML strings at build time, so they work both
 * in Astro pages (via <Visual />) and inside markdown (via `[[chart:power]]`
 * placeholders, see rehype-visuals.ts). Hover/focus tooltips come from the
 * global [data-tip] handler in BaseLayout.
 *
 * Palette (validated for CVD separation and 3:1 contrast on #fff):
 *   NACS = #1f7fd6 (electric blue), J1772 = #e8930c (amber), dual = #2f9e44 (green).
 */
import { MODELS, priceTier, PRICE_TIERS, CONNECTOR_LABEL, type ChargerModel } from "../data/models";
import { outletsTable, adaptersTable } from "./accessory-tables";

const NACS = "#1f7fd6";
const J1772 = "#e8930c";
const DUAL = "#2f9e44";

const connColor = (m: ChargerModel) => (m.connector === "nacs" ? NACS : m.connector === "j1772" ? J1772 : DUAL);

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function figure(title: string, sub: string, body: string, note?: string) {
  return `<figure class="viz">
  <figcaption class="viz-head"><strong>${esc(title)}</strong><span>${esc(sub)}</span></figcaption>
  ${body}
  ${note ? `<p class="viz-note">${note}</p>` : ""}
</figure>`;
}

/** Horizontal bar chart of rated charging power, colored by connector. */
export function powerChart(models: ChargerModel[] = MODELS): string {
  const rows = [...models].sort((a, b) => b.maxKw - a.maxKw || a.shortName.localeCompare(b.shortName));
  const max = 12;
  const legend = `<div class="viz-legend" aria-hidden="true">
    <span><i style="background:${NACS}"></i>NACS</span>
    <span><i style="background:${J1772}"></i>J1772</span>
    <span><i style="background:${DUAL}"></i>NACS + J1772</span>
  </div>`;
  const bars = rows
    .map((m) => {
      const mph = Math.round(m.maxKw * 3.2);
      return `<a class="hbar" href="/chargers/${m.id}/" data-tip-value="${m.maxKw} kW · ~${mph} miles of range per hour" data-tip-label="${esc(m.shortName)} · ${CONNECTOR_LABEL[m.connector]}">
      <span class="hbar-label">${esc(m.shortName)}</span>
      <span class="hbar-track"><span class="hbar-fill" style="width:${(m.maxKw / max) * 100}%;background:${connColor(m)}"></span></span>
      <span class="hbar-val">${m.maxKw} kW</span>
    </a>`;
    })
    .join("");
  const axis = `<div class="hbar-axis" aria-hidden="true"><span></span><span class="hbar-ticks">${[0, 3, 6, 9, 12]
    .map((t) => `<i style="left:${(t / max) * 100}%">${t} kW</i>`)
    .join("")}</span><span></span></div>`;
  return figure(
    "Rated charging power by model",
    "Manufacturer ratings at 240 V. Miles-per-hour assumes ~3.2 mi/kWh efficiency.",
    `${legend}<div class="hbar-chart" role="list">${bars}</div>${axis}`,
    `Your car also caps the rate — most EVs accept 11.5 kW or less on AC. <a href="/tools/charge-time-calculator/">Run your numbers</a>.`
  );
}

/** Scatter: rated power (kW) vs starting price. */
export function valueChart(models: ChargerModel[] = MODELS): string {
  const xMax = 12;
  const yMax = 1100;
  // Label the extremes and the value frontier programmatically.
  const cheapest = [...models].sort((a, b) => a.priceLow - b.priceLow)[0];
  const strongest = [...models].sort((a, b) => b.maxKw - a.maxKw)[0];
  const bestVal = [...models].sort((a, b) => b.maxKw / b.priceLow - a.maxKw / a.priceLow)[0];
  const labelFor = (m: ChargerModel): string => {
    if (m.id === cheapest.id) return "right";
    if (m.id === strongest.id) return "above";
    if (m.id === bestVal.id && m.id !== cheapest.id && m.id !== strongest.id) return "below";
    return "";
  };
  const dots = models
    .map((m) => {
      const x = (m.maxKw / xMax) * 100;
      const y = (m.priceLow / yMax) * 100;
      const pos = labelFor(m);
      const label = pos ? `<span class="sc-lbl ${pos}">${esc(m.shortName)}</span>` : "";
      return `<a class="sc-dot" href="/chargers/${m.id}/" style="left:${x}%;bottom:${y}%;--dot:${connColor(m)}" data-tip-value="${priceTier(m).sym} ${priceTier(m).label} · ${m.maxKw} kW" data-tip-label="${esc(m.shortName)}" aria-label="${esc(m.shortName)}: ${priceTier(m).label} price tier, ${m.maxKw} kW"><i></i>${label}</a>`;
    })
    .join("");
  const yTicks = [0, 350, 550, 750];
  const grid =
    yTicks.map((t) => `<span class="sc-gy" style="bottom:${(t / yMax) * 100}%"></span>`).join("") +
    [0, 3, 6, 9, 12].map((t) => `<span class="sc-gx" style="left:${(t / xMax) * 100}%"><em>${t}</em></span>`).join("");
  return figure(
    "Power vs. price",
    "Each dot is one model (max kW vs. typical street price). Up and to the right is more power; lower is cheaper.",
    `<div class="sc-wrap"><div class="sc-plot">${grid}${dots}</div><div class="sc-xlab">Rated power (kW at 240 V)</div></div>`,
    `Hover or tap a dot for details. Full numbers are in the <a href="/chargers/">comparison chart</a>.`
  );
}

/** NACS vs J1772 explainer, side by side. */
export function connectorsDiagram(): string {
  const nacs = `<svg viewBox="0 0 240 150" role="img" aria-label="NACS connector: a compact five-pin plug">
    <rect x="70" y="30" width="100" height="90" rx="45" fill="#0e2a46"/>
    <g fill="#e8f4fc">
      <circle cx="105" cy="62" r="9"/><circle cx="135" cy="62" r="9"/>
      <circle cx="95" cy="92" r="9"/><circle cx="145" cy="92" r="9"/>
      <rect x="112" y="84" width="16" height="10" rx="3"/>
    </g>
    <text x="120" y="140" text-anchor="middle" font-size="16" fill="#0a1622" font-weight="800">NACS · SAE J3400</text>
  </svg>`;
  const j1772 = `<svg viewBox="0 0 240 150" role="img" aria-label="J1772 connector: a larger round five-pin plug">
    <circle cx="120" cy="72" r="48" fill="#0e2a46"/>
    <g fill="#e8f4fc">
      <circle cx="120" cy="48" r="9"/><circle cx="98" cy="66" r="9"/><circle cx="142" cy="66" r="9"/>
      <circle cx="106" cy="92" r="9"/><circle cx="134" cy="92" r="9"/>
    </g>
    <text x="120" y="140" text-anchor="middle" font-size="16" fill="#0a1622" font-weight="800">J1772</text>
  </svg>`;
  const panel = (svg: string, name: string, how: string, good: string, bad: string) =>
    `<div class="dg-panel">${svg}<h4>${name}</h4><p>${how}</p><p class="dg-pro">✓ ${good}</p><p class="dg-con">✕ ${bad}</p></div>`;
  return figure(
    "NACS vs J1772: the 2026 connector landscape",
    "Virtually every new US EV from model year 2025 onward ships with a native NACS port.",
    `<div class="dg-grid two">
      ${panel(nacs, "NACS (SAE J3400)", "Tesla's connector, now the North American standard. Compact, and every 2025+ US EV uses it natively.", "Future-proof: no adapter for new EVs", "Older non-Tesla EVs need a NACS-to-J1772 adapter")}
      ${panel(j1772, "J1772", "The longtime universal plug for non-Tesla EVs. Still fine for pre-2025 EVs (Leaf, Bolt, older Ioniq 5, Mach-E).", "Works natively with older EVs; chargers often cheaper", "New EVs need a J1772-to-NACS adapter")}
    </div>`,
    `Deep dive: <a href="/posts/nacs-vs-j1772-explained/">NACS vs J1772 explained (2026 transition)</a>.`
  );
}

/** Hardwired vs plug-in install explainer, side by side. */
export function installDiagram(): string {
  const hardwired = `<svg viewBox="0 0 240 150" role="img" aria-label="Hardwired install: charger wired directly to a dedicated breaker">
    <rect x="30" y="24" width="70" height="100" rx="8" fill="#dbe6ef" stroke="#0a1622" stroke-width="3"/>
    <rect x="42" y="40" width="46" height="8" rx="4" fill="#0a1622"/><rect x="42" y="54" width="46" height="8" rx="4" fill="#0a1622"/>
    <rect x="42" y="68" width="46" height="8" rx="4" fill="#1f7fd6"/>
    <path d="M100 74 C 140 74, 140 60, 175 60" fill="none" stroke="#0a1622" stroke-width="5"/>
    <rect x="168" y="40" width="44" height="40" rx="10" fill="#0e2a46"/>
    <path d="M192 46 182 60h7l-2 9 11-12h-7l3-8z" fill="#c8f03c"/>
  </svg>`;
  const plugin = `<svg viewBox="0 0 240 150" role="img" aria-label="Plug-in install: charger plugged into a NEMA 14-50 outlet">
    <rect x="30" y="50" width="56" height="56" rx="8" fill="#dbe6ef" stroke="#0a1622" stroke-width="3"/>
    <circle cx="52" cy="72" r="7" fill="#0a1622"/><circle cx="70" cy="72" r="7" fill="#0a1622"/>
    <circle cx="52" cy="90" r="7" fill="#0a1622"/><rect x="64" y="86" width="12" height="8" fill="#0a1622"/>
    <path d="M86 78 C 120 78, 120 60, 150 60" fill="none" stroke="#0a1622" stroke-width="5"/>
    <rect x="143" y="40" width="44" height="40" rx="10" fill="#0e2a46"/>
    <path d="M167 46 157 60h7l-2 9 11-12h-7l3-8z" fill="#c8f03c"/>
  </svg>`;
  const panel = (svg: string, name: string, how: string, good: string, bad: string) =>
    `<div class="dg-panel">${svg}<h4>${name}</h4><p>${how}</p><p class="dg-pro">✓ ${good}</p><p class="dg-con">✕ ${bad}</p></div>`;
  return figure(
    "Hardwired vs plug-in (NEMA 14-50)",
    "The install type decides your max amperage and whether you need an electrician.",
    `<div class="dg-grid two">
      ${panel(hardwired, "Hardwired", "An electrician wires the charger straight to a dedicated breaker. Required for 48 A+ (60 A circuit).", "Max power (48–50 A); cleanest look; required by some rebate programs", "Electrician required; charger stays with the house")}
      ${panel(plugin, "NEMA 14-50 plug", "The charger plugs into a 240 V outlet, like a dryer outlet. Caps at 40 A continuous on a 50 A circuit.", "DIY-friendly; take the charger if you move; cheaper install", "40 A max; the outlet must be industrial-grade (not a cheap dryer outlet)")}
    </div>`,
    `Deep dive: <a href="/posts/hardwired-vs-plug-in-ev-charger/">hardwired vs plug-in</a> and <a href="/tools/panel-capacity-checker/">panel capacity checker</a>.`
  );
}

export const VISUALS: Record<string, () => string> = {
  "chart:power": () => powerChart(),
  "chart:value": () => valueChart(),
  "diagram:connectors": connectorsDiagram,
  "diagram:install": installDiagram,
  "accessories:outlets": outletsTable,
  "accessories:adapters": adaptersTable,
};
