/**
 * EV charger accessories on amazon.com. All are universal-fit items found via
 * Amazon search (no OEM-specific parts for these chargers). `asin` is set only
 * where a real listing ASIN was confirmed; otherwise the buy link is an Amazon
 * search link carrying the Associates tag.
 */
export type AccessoryKind = "outlet" | "adapter" | "holster" | "pedestal" | "other";

export interface Accessory {
  asin?: string;
  name: string;
  kind: AccessoryKind;
  brand: string;
  /** made by the charger's manufacturer */
  oem: boolean;
  /** model ids this fits ("universal" for generic items) */
  fits: string[];
  price: number;
  why: string;
  fitNote?: string;
}

export const ACCESSORIES: Accessory[] = [
  // ---- NEMA 14-50 outlets (for plug-in installs — get the industrial grade)
  { name: "Hubbell HBL9450A NEMA 14-50 receptacle", kind: "outlet", brand: "Hubbell", oem: false, fits: ["universal"], price: 99, why: "The industrial-grade 14-50 outlet electricians recommend for EV charging: solid brass contacts that won't overheat under a continuous 40A load, unlike cheap dryer outlets." },
  { name: "Bryant 9450FR NEMA 14-50 receptacle", kind: "outlet", brand: "Bryant", oem: false, fits: ["universal"], price: 59, why: "Hubbell's sister brand at a lower price with the same heavy-duty internals. A solid second choice for a plug-in install." },
  // ---- J1772 <-> NACS adapters
  { name: "Tesla SAE J1772 charging adapter", kind: "adapter", brand: "Tesla", oem: true, fits: ["universal"], price: 50, why: "Tesla's official J1772-to-NACS adapter lets any Tesla charge from a J1772 charger like the Grizzl-E or ChargePoint J1772. Small, and it lives in the frunk." },
  { name: "Lectron J1772 to Tesla NACS adapter", kind: "adapter", brand: "Lectron", oem: false, fits: ["universal"], price: 70, why: "A popular third-party J1772-to-NACS adapter rated for 48A/60A, handy if your J1772 charger didn't come with one.", fitNote: "Match the adapter's amp rating to your charger." },
  { name: "A2Z EV NACS to J1772 adapter", kind: "adapter", brand: "A2Z EV", oem: false, fits: ["universal"], price: 120, why: "Lets a non-Tesla EV (J1772 port) use a NACS charger like the Tesla Wall Connector. Useful for mixed-EV households." },
  // ---- Cable holsters / organizers
  { name: "EV charger cable holder wall mount", kind: "holster", brand: "Generic", oem: false, fits: ["universal"], price: 25, why: "A wall-mounted holster keeps the charge handle and coiled cable off the garage floor. Check the holster diameter matches your charger's handle." },
  { name: "J1772 dummy socket holster dock", kind: "holster", brand: "Generic", oem: false, fits: ["universal"], price: 20, why: "A simple dummy-socket dock for the J1772 handle when your charger didn't include one — keeps the connector clean and dry." },
  // ---- Pedestal mounts
  { name: "EV charger pedestal mount post", kind: "pedestal", brand: "Generic", oem: false, fits: ["universal"], price: 199, why: "A floor-standing post for chargers when there's no wall near the parking spot — common for driveway installs. Confirm the mounting pattern fits your charger." },
  // ---- Misc
  { name: "NEMA 14-50 weatherproof outdoor box", kind: "other", brand: "Generic", oem: false, fits: ["universal"], price: 45, why: "A weatherproof in-use cover for an outdoor 14-50 outlet feeding a plug-in charger. Required by code in many areas for outdoor receptacles." },
];

export const KIND_LABEL: Record<AccessoryKind, string> = {
  outlet: "NEMA 14-50 outlet",
  adapter: "Connector adapter",
  holster: "Cable holster",
  pedestal: "Pedestal mount",
  other: "Outdoor box",
};

const KIND_ORDER: AccessoryKind[] = ["outlet", "adapter", "holster", "pedestal", "other"];

/** Accessories for one model: OEM first, then third-party, ordered by usefulness. */
export function accessoriesFor(modelId: string): Accessory[] {
  return ACCESSORIES.filter((a) => a.fits.includes(modelId) || a.fits.includes("universal")).sort(
    (a, b) => Number(b.oem) - Number(a.oem) || KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind)
  );
}

export function getAccessory(asin: string): Accessory | undefined {
  return ACCESSORIES.find((a) => a.asin === asin);
}
