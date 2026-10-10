/** Accessory tables rendered into markdown via `[[accessories:outlets]]` / `[[accessories:adapters]]`. */
import { ACCESSORIES, type Accessory } from "../data/accessories";
import { AFFILIATE_REL, amazonLink } from "./amazon";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const buy = (a: Accessory) =>
  `<a class="btn buy btn-xs" href="${amazonLink(a.name, a.asin)}" rel="${AFFILIATE_REL}" target="_blank">Check price</a>`;

function table(caption: string, items: Accessory[], cols: { head: string; cell: (a: Accessory) => string }[]) {
  return `<div class="cmp-wrap acc-table"><table class="cmp">
  <caption>${esc(caption)}</caption>
  <thead><tr>${cols.map((c) => `<th scope="col">${c.head}</th>`).join("")}<th scope="col"><span class="sr-only">Buy</span></th></tr></thead>
  <tbody>${items
    .map((a) => `<tr>${cols.map((c, i) => (i === 0 ? `<th scope="row">${c.cell(a)}</th>` : `<td data-label="${c.head}">${c.cell(a)}</td>`)).join("")}<td class="c-buy">${buy(a)}</td></tr>`)
    .join("")}</tbody>
</table></div>`;
}

export function outletsTable(): string {
  const items = ACCESSORIES.filter((a) => a.kind === "outlet").sort((a, b) => a.price - b.price);
  return table("NEMA 14-50 outlets for plug-in installs (compatibility checked October 2026)", items, [
    { head: "Outlet", cell: (a) => esc(a.name) },
    { head: "Why", cell: (a) => esc(a.why) + (a.fitNote ? ` <span class="fine">(${esc(a.fitNote)})</span>` : "") },
  ]);
}

export function adaptersTable(): string {
  const items = ACCESSORIES.filter((a) => a.kind === "adapter").sort((a, b) => a.price - b.price);
  return table("J1772 / NACS adapters on Amazon (compatibility checked October 2026)", items, [
    { head: "Adapter", cell: (a) => esc(a.name) },
    { head: "Why", cell: (a) => esc(a.why) + (a.fitNote ? ` <span class="fine">(${esc(a.fitNote)})</span>` : "") },
  ]);
}
