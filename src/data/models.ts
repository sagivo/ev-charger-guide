export type ConnectorType = "nacs" | "j1772" | "dual";
export type Tier = "budget" | "mid" | "premium";

export interface ChargerModel {
  /** URL slug: /chargers/<id>/ */
  id: string;
  name: string;
  /** Compact name for tables and buttons, e.g. "Home Flex". */
  shortName: string;
  brand: string;
  tier: Tier;
  releaseYear: number;
  /** max rated amperage */
  maxAmps: number;
  /** max rated power at 240V in kW */
  maxKw: number;
  /** human-readable adjustable range, e.g. "16–48 A" */
  ampsRange: string;
  /** charging cable length in feet */
  cableFt: number;
  connector: ConnectorType;
  /** connector nuance, e.g. NACS variant sold separately */
  connectorNote?: string;
  /** install options, e.g. "Hardwired" / "NEMA 14-50 plug" / "Hardwired or NEMA 14-50 plug" */
  install: string;
  /** smart features summary */
  smart: string;
  /** outdoor/weather rating */
  outdoor: string;
  /** manufacturer warranty */
  warranty?: string;
  /** typical US street price range (guidance only — prices move; verify on Amazon) */
  priceLow: number;
  priceHigh: number;
  /** Caveats shown under the spec table (variant differences, unverified figures). */
  specNotes?: string[];
  /** Amazon search query for the buy link */
  query: string;
  /** Amazon ASIN — when set, links go straight to the product page */
  asin?: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  /** Editorial score out of 10 — research-based, see /how-we-research/ */
  score: number;
  scores: { power: number; features: number; value: number; install: number };
  /** One-paragraph verdict */
  verdict: string;
  sources: string[];
}

/**
 * Specs and US street prices as of October 10, 2026, compiled from manufacturer
 * pages, dated retailer/deal listings and professional reviews (see `sources`).
 * Treat as guidance — prices move weekly; verify on Amazon before buying.
 */
export const MODELS: ChargerModel[] = [
  {
    id: "tesla-universal-wall-connector",
    name: "Tesla Universal Wall Connector",
    shortName: "Universal Wall Connector",
    brand: "Tesla",
    tier: "premium",
    releaseYear: 2023,
    maxAmps: 48,
    maxKw: 11.5,
    ampsRange: "12–48 A",
    cableFt: 24,
    connector: "dual",
    connectorNote: "Integrated Magic Dock nests a J1772 adapter inside the NACS handle — no separate adapter needed.",
    install: "Hardwired",
    smart: "Wi-Fi, Tesla app (scheduling, energy monitoring, charge history), power-share for up to 6 units, over-the-air updates",
    outdoor: "NEMA 3R, rated for outdoor installation (−30 °C to 50 °C)",
    warranty: "4 years",
    priceLow: 550,
    priceHigh: 600,
    specNotes: [
      "No verified amazon.com ASIN surfaced — the buy link is an Amazon search for Tesla's official storefront listing.",
      "Price is Tesla's official storefront price; third-party sellers may list it higher.",
    ],
    query: "Tesla Universal Wall Connector",
    bestFor: "The most future-proof single-car charger for mixed or transitional households — any EV, no adapters to buy.",
    pros: [
      "Only home charger with a factory-integrated NACS + J1772 connector",
      "48 A / 11.5 kW with power-sharing for multi-EV garages",
      "Excellent Tesla app with scheduling and energy tracking",
    ],
    cons: [
      "Hardwired only — needs an electrician, no plug-in option",
      "~$100+ premium over the standard Wall Connector",
      "Overkill if every car in the house is a Tesla",
    ],
    score: 9.2,
    scores: { power: 9.5, features: 9.5, value: 8.5, install: 8 },
    verdict:
      "The Universal Wall Connector is the charger we'd recommend to anyone whose garage will see both Tesla and non-Tesla EVs. The integrated Magic Dock removes the adapter dance entirely, it delivers a full 48 amps, and the Tesla app is the best in the business. The only real costs are the hardwired-only install and the premium over the standard Wall Connector.",
    sources: [
      "https://www.evshift.com/456331/amazon-just-brought-the-price-down-on-the-tesla-universal-wall-connector-with-j1772-nacs-connectors-to-550/",
      "https://insideevs.com/reviews/686375/tesla-universal-wall-connector-review/",
    ],
  },
  {
    id: "chargepoint-home-flex",
    name: "ChargePoint Home Flex",
    shortName: "Home Flex",
    brand: "ChargePoint",
    tier: "premium",
    releaseYear: 2019,
    maxAmps: 50,
    maxKw: 12,
    ampsRange: "16–50 A",
    cableFt: 23,
    connector: "j1772",
    connectorNote: "Ships J1772 by default; ChargePoint also sells a native-NACS version (hardwired and NEMA 14-50 plug). Choose the connector at purchase.",
    install: "Hardwired or NEMA 14-50 plug",
    smart: "Wi-Fi + ChargePoint app (scheduling, reminders, energy/cost tracking, Alexa), utility rebate program compatibility",
    outdoor: "UL listed for indoor and outdoor installation",
    warranty: "3 years",
    priceLow: 500,
    priceHigh: 600,
    specNotes: [
      "J1772 plug version ASIN B07WXZDHGV; hardwired J1772 ASIN B0C6YMS4KH. NACS versions are separate listings — confirm the connector on the listing before buying.",
      "Deal prices as low as ~$397 have appeared; typical street price is ~$500–$600.",
    ],
    query: "ChargePoint Home Flex",
    asin: "B07WXZDHGV",
    bestFor: "The premium smart-charger pick for drivers who also use ChargePoint's public network — one app for home and road.",
    pros: [
      "Fastest mainstream home charger: 50 A / 12 kW",
      "Plug-in or hardwired — your choice at purchase",
      "Same app as 274,000+ public ChargePoint stations",
      "Cold-resistant 23 ft cable",
    ],
    cons: [
      "Premium price over simpler 48–50 A options",
      "Wi-Fi setup can be fiddly, per owner reports",
      "Pick the NACS or J1772 variant carefully — they're separate listings",
    ],
    score: 9.0,
    scores: { power: 10, features: 9.5, value: 8, install: 9 },
    verdict:
      "The Home Flex is the most polished smart charger you can buy: the fastest output in its class, your choice of plug-in or hardwired install, and an app that also runs your public charging. It costs more than a Grizzl-E or Emporia, but if you road-trip on the ChargePoint network, the unified app is worth it.",
    sources: [
      "https://www.amazon.com/dp/B07WXZDHGV",
      "https://www.ofzenandcomputing.com/best-nema-14-50-ev-chargers/",
    ],
  },
  {
    id: "tesla-wall-connector-gen3",
    name: "Tesla Wall Connector (Gen 3)",
    shortName: "Wall Connector",
    brand: "Tesla",
    tier: "mid",
    releaseYear: 2020,
    maxAmps: 48,
    maxKw: 11.5,
    ampsRange: "12–48 A",
    cableFt: 24,
    connector: "nacs",
    connectorNote: "NACS only. Non-Tesla EVs need a separate NACS-to-J1772 adapter (or step up to the Universal Wall Connector).",
    install: "Hardwired",
    smart: "Wi-Fi (2.4 GHz), Tesla app (scheduling, remote access, charge stats), over-the-air updates, power-share with up to 6 units",
    outdoor: "Approved for indoor and outdoor installation (NEMA 3R-type enclosure)",
    warranty: "4 years",
    priceLow: 440,
    priceHigh: 475,
    query: "Tesla Wall Connector Gen 3",
    asin: "B0BWSK35WH",
    bestFor: "Tesla-only households that want the benchmark home charger at the lowest Tesla price.",
    pros: [
      "48 A / 11.5 kW — up to ~44 miles of range per hour",
      "Slim, light 24 ft cable that's easy to handle",
      "Power-sharing for two-Tesla garages",
      "4-year warranty, ENERGY STAR certified",
    ],
    cons: [
      "NACS only — J1772 cars need an aftermarket adapter",
      "Hardwired only, no plug-in version",
      "Non-Tesla app features are limited vs. ChargePoint/Emporia",
    ],
    score: 8.9,
    scores: { power: 9.5, features: 9, value: 9, install: 8 },
    verdict:
      "If every car in the driveway is a Tesla, this is the charger to buy: full 48-amp speed, the best app in the category, power-sharing, and a 4-year warranty for around $450. The moment a non-Tesla enters the picture, the Universal Wall Connector's integrated Magic Dock is worth the premium.",
    sources: [
      "https://www.amazon.com/dp/B0BWSK35WH",
      "https://insideevs.com/reviews/686375/tesla-universal-wall-connector-review/",
    ],
  },
  {
    id: "grizzl-e-ultimate-48a",
    name: "Grizzl-E Ultimate 48A",
    shortName: "Ultimate 48A",
    brand: "Grizzl-E",
    tier: "mid",
    releaseYear: 2023,
    maxAmps: 48,
    maxKw: 11.5,
    ampsRange: "16–48 A",
    cableFt: 25,
    connector: "j1772",
    connectorNote: "Ships in J1772 or native-NACS variants — choose the connector at purchase. (An 80 A / 19.2 kW Ultimate also exists; this review covers the 48 A.)",
    install: "Hardwired",
    smart: "Wi-Fi with Grizzl-E Connect app (scheduling, energy stats, remote control, diagnostics), load-balancing across multiple units, works with or without internet",
    outdoor: "NEMA 4X / IP67 cast-aluminum enclosure, UL tested",
    warranty: "3 years",
    priceLow: 480,
    priceHigh: 650,
    specNotes: [
      "No verified amazon.com ASIN for the 48 A version — the buy link is an Amazon search. (ASIN B0D2JGVW4B is the 80 A variant, not this model.)",
      "25 ft cable is among the longest in the class.",
    ],
    query: "Grizzl-E Ultimate 48A",
    bestFor: "Buyers who want Grizzl-E's tank-like build quality with full smart features and a native NACS option, for less than Tesla/ChargePoint.",
    pros: [
      "Tank-like cast-aluminum NEMA 4X enclosure",
      "Full app: scheduling, energy stats, load balancing",
      "J1772 or native NACS — your choice",
      "Undercuts Tesla/ChargePoint on price",
    ],
    cons: [
      "Hardwired only",
      "Cable is stiffer in cold weather than the Classic's",
      "Smaller support network than Tesla or ChargePoint",
    ],
    score: 8.7,
    scores: { power: 9.5, features: 8.5, value: 9, install: 7.5 },
    verdict:
      "The Ultimate 48A is the enthusiast's pick: Grizzl-E's famously rugged metal build, a real app with scheduling and load balancing, and your choice of J1772 or native NACS — all for less than the big-name equivalents. Hardwire-only install is the main trade-off.",
    sources: [
      "https://www.energysage.com/ev-charging/ev-charging-stations/grizzl-e-ev-charger-review/",
    ],
  },
  {
    id: "grizzl-e-classic",
    name: "Grizzl-E Classic",
    shortName: "Classic",
    brand: "Grizzl-E",
    tier: "budget",
    releaseYear: 2020,
    maxAmps: 40,
    maxKw: 9.6,
    ampsRange: "16–40 A (DIP switches)",
    cableFt: 24,
    connector: "j1772",
    connectorNote: "J1772 only — no NACS variant found. Tesla owners charge with the J1772 adapter that comes with their car.",
    install: "NEMA 14-50 plug",
    smart: "None on the base Classic (deliberately simple). A Wi-Fi 'Classic Connect' version with app + OCPP exists.",
    outdoor: "NEMA 4 cast-aluminum enclosure, IP67 — built for harsh weather",
    warranty: "3 years",
    priceLow: 300,
    priceHigh: 450,
    specNotes: [
      "No verified amazon.com ASIN surfaced — the buy link is an Amazon search. (ASIN B0843K8Z9K appeared only on amazon.ca.)",
      "DIP-switch amperage adjustment is intentional — it keeps the install code-compliant without an app.",
    ],
    query: "Grizzl-E Classic EV charger",
    bestFor: "Maximum durability at minimum price — the value champion for buyers who don't need an app.",
    pros: [
      "Best-built sub-$400 charger: UL listed, made in Canada",
      "Tank-like metal housing (survived an ATV on a frozen lake, per EnergySage)",
      "DIP-switch amperage adjustment — rare at this price",
      "Plug-in install, no electrician hardwire needed",
    ],
    cons: [
      "No Wi-Fi or app on the base model",
      "Cable can be stiff in extreme cold",
      "J1772 only — new-EV buyers need to plan for an adapter",
    ],
    score: 8.4,
    scores: { power: 7.5, features: 6, value: 10, install: 9.5 },
    verdict:
      "The Grizzl-E Classic is the charger you buy when you want the toughest box for the least money and couldn't care less about an app. It's UL listed, built like a tank in Canada, and the DIP switches let you match any circuit. Just know it's J1772-only and deliberately dumb.",
    sources: [
      "https://www.energysage.com/ev-charging/ev-charging-stations/grizzl-e-ev-charger-review/",
      "https://insideevs.com/news/426618/grizzl-e-ev-charger-review/",
    ],
  },
  {
    id: "grizzl-e-duo",
    name: "Grizzl-E Duo",
    shortName: "Duo",
    brand: "Grizzl-E",
    tier: "premium",
    releaseYear: 2021,
    maxAmps: 40,
    maxKw: 10,
    ampsRange: "16–40 A (shared pool)",
    cableFt: 24,
    connector: "j1772",
    connectorNote: "Dual J1772 handles — no NACS variant found. Tesla owners use their included J1772 adapter.",
    install: "NEMA 14-50 plug",
    smart: "None — intelligent power-sharing is automatic and hardware-based, no Wi-Fi or app",
    outdoor: "NEMA 4 cast-aluminum enclosure, IP67 — indoor/outdoor rated",
    warranty: "3 years",
    priceLow: 799,
    priceHigh: 999,
    specNotes: [
      "40 A is the total shared pool — up to ~10 kW to one car, split automatically when two cars charge.",
      "US pricing has fluctuated ($799–$999); verify live before publishing a figure.",
    ],
    query: "Grizzl-E Duo EV charger",
    asin: "B09GL3DLH7",
    bestFor: "Two-EV households on a single 50 A circuit — the cheapest way to charge two cars without panel work.",
    pros: [
      "Charges two EVs from one 50 A circuit with automatic load balancing",
      "Plug-in install — no hardwiring",
      "Roughly half the cost of two separate chargers + panel work",
      "Two 24 ft premium cables",
    ],
    cons: [
      "40 A total ceiling — no 48 A+ per car",
      "No smart features or app at all",
      "J1772 only",
    ],
    score: 8.2,
    scores: { power: 8, features: 7, value: 8.5, install: 9.5 },
    verdict:
      "The Duo solves a specific expensive problem: two EVs, one 50-amp circuit, no panel upgrade. Automatic power-sharing splits the 40 amps between the cars with zero configuration. If you only have one EV — or need 48 amps per car — buy two separate chargers instead.",
    sources: [
      "https://www.amazon.com/dp/B09GL3DLH7",
      "https://treehouse.pro/products/ev-charger/grizzl-e-duo",
    ],
  },
  {
    id: "emporia-pro",
    name: "Emporia Pro EV Charger",
    shortName: "Pro",
    brand: "Emporia",
    tier: "mid",
    releaseYear: 2025,
    maxAmps: 48,
    maxKw: 11.5,
    ampsRange: "12–48 A",
    cableFt: 25,
    connector: "j1772",
    connectorNote: "Ships in J1772 or NACS variants — choose the connector at purchase.",
    install: "Hardwired or NEMA 14-50 plug",
    smart: "Wi-Fi + Emporia app (scheduling, real-time energy tracking, solar-charging integration), PowerSmart dynamic load management with the Vue 3 home energy monitor",
    outdoor: "NEMA 4, indoor/outdoor rated",
    warranty: "3 years",
    priceLow: 599,
    priceHigh: 599,
    specNotes: [
      "48 A / 11.5 kW when hardwired; 40 A / 9.6 kW on the NEMA 14-50 plug.",
      "No verified amazon.com ASIN for the Pro surfaced — the buy link is an Amazon search. (ASIN B09BP1GM76 is the older Emporia Classic, not the Pro.)",
    ],
    query: "Emporia Pro EV Charger 48A",
    bestFor: "Homes with limited panel capacity — the included load management can deliver 48 A without a panel upgrade.",
    pros: [
      "PowerSmart load management avoids costly panel upgrades",
      "48 A hardwired or 40 A plug-in — your choice",
      "Solar-charging integration and peak-demand management",
      "UL listed, ENERGY STAR certified",
    ],
    cons: [
      "$599 isn't the cheapest 48 A smart charger",
      "No OCPP / utility-program support found",
      "Load-management bundle adds install complexity",
    ],
    score: 8.8,
    scores: { power: 9.5, features: 9.5, value: 8, install: 9 },
    verdict:
      "The Emporia Pro's headline feature is genuinely useful: with the Vue 3 monitor it can charge at a full 48 amps on a panel that otherwise couldn't support it, potentially saving thousands on a panel upgrade. Add solid app features and full certifications, and it's the smartest pick for older homes — just not the cheapest.",
    sources: [
      "https://electrek.co/2025/06/10/tested-emporia-pro-level-2-ev-charger-optimize-charge-speeds-home/",
      "https://shop.emporiaenergy.com/products/emporia-pro-ev-charger",
    ],
  },
  {
    id: "autel-maxicharger-ac-home",
    name: "Autel MaxiCharger AC Home",
    shortName: "MaxiCharger AC Home",
    brand: "Autel",
    tier: "mid",
    releaseYear: 2023,
    maxAmps: 50,
    maxKw: 12,
    ampsRange: "6–50 A",
    cableFt: 25,
    connector: "j1772",
    connectorNote: "J1772 standard; a NACS variant exists for the 50 A hardwired model. The budget AC Lite line also offers J1772 or NACS on its 50 A hardwired version.",
    install: "Hardwired or NEMA 14-50 plug",
    smart: "Wi-Fi + Bluetooth + Ethernet, Autel Charge app (scheduling, off-peak/TOU optimization, energy tracking, OTA updates), optional RFID, dynamic load balancing",
    outdoor: "NEMA 4, indoor/outdoor rated",
    warranty: "3 years",
    priceLow: 399,
    priceHigh: 599,
    specNotes: [
      "50 A / 12 kW hardwired (~$599); 40 A / 9.6 kW NEMA 14-50 plug-in. The AC Lite budget line runs ~$399 (40 A plug-in) to ~$569 (50 A hardwired).",
      "No verified amazon.com ASIN surfaced — the buy link is an Amazon search.",
    ],
    query: "Autel MaxiCharger AC Home",
    bestFor: "Feature-maximalists — the densest connectivity and smart-charging stack of any home charger here.",
    pros: [
      "Wi-Fi + Bluetooth + Ethernet — best connectivity in class",
      "Excellent app with TOU/off-peak optimization",
      "50 A / 12 kW max output",
      "Autel's automotive-diagnostics pedigree since 2004",
    ],
    cons: [
      "50 A model is hardwired only",
      "Near $600 at the top end",
      "No OCPP / utility-program support found on the Home line",
    ],
    score: 8.7,
    scores: { power: 10, features: 10, value: 8, install: 8 },
    verdict:
      "No home charger packs more tech than the MaxiCharger AC Home: triple connectivity, a genuinely good app, and 50-amp output. It's priced like the premium it is, and the 50-amp version needs a hardwired install — but if you want the most capable smart charger, this is it. Budget buyers should look at the AC Lite line instead.",
    sources: [
      "https://www.motortrend.com/news/best-tech-2025-autel-maxicharger-ac-lite-home-ev-charger",
      "https://www.uhs-hardware.com/products/autel-maxicharger-ac-home-50a-ev-charger-with-in-body-holster",
    ],
  },
  {
    id: "eviqo-gen2",
    name: "EVIQO Level 2 EV Charger (Gen 2)",
    shortName: "Gen 2",
    brand: "EVIQO",
    tier: "budget",
    releaseYear: 2024,
    maxAmps: 48,
    maxKw: 11.5,
    ampsRange: "6–48 A",
    cableFt: 25,
    connector: "j1772",
    connectorNote: "J1772 standard; a NACS variant exists per EnergySage and MotorTrend listings.",
    install: "Hardwired or NEMA 14-50 plug",
    smart: "Wi-Fi app (start/stop, scheduling, off-peak charging, energy/cost tracking, OTA firmware updates, reminders), enhanced Wi-Fi antenna",
    outdoor: "NEMA 4 / IP66 — the highest weather rating in this roundup",
    warranty: "3 years",
    priceLow: 379,
    priceHigh: 429,
    specNotes: [
      "48 A hardwired ASIN B0D1XLRC5D; 40 A NEMA 14-50 plug-in ASIN B0BZRTD9VS. Buy link defaults to the 48 A hardwired listing.",
      "Frequently discounted well below the $514 MSRP — buy at the street price, not list.",
      "Amperage adjusts in 1 A increments via the app, plus a hardware DIP switch.",
    ],
    query: "EVIQO Level 2 EV Charger 48A",
    asin: "B0D1XLRC5D",
    bestFor: "The sleeper value pick — full 48 A smart charging with top-tier weather sealing for well under $450 street.",
    pros: [
      "Full 48 A / 11.5 kW for ~$400 street",
      "NEMA 4 / IP66 — best weather rating here",
      "Standout owner ratings (4.8 stars, 1,500+ ratings on Amazon)",
      "UL, ETL, FCC, ENERGY STAR; US-based support",
    ],
    cons: [
      "App gets mixed reviews ('great hardware, not so great app' — MotorTrend)",
      "Smaller brand with a shorter track record",
      "MSRP pricing ($514) is not the real price — wait for the discount",
    ],
    score: 8.6,
    scores: { power: 9.5, features: 8, value: 10, install: 9 },
    verdict:
      "EVIQO's Gen 2 is the value play that doesn't feel like a compromise: full 48-amp output, the best weather sealing in this roundup, strong owner ratings, and street prices under $430. The app is the weak spot per MotorTrend, but at this price the hardware wins the argument.",
    sources: [
      "https://www.amazon.com/dp/B0D1XLRC5D",
      "https://www.motortrend.com/reviews/eviqo-evipower-home-ev-charger-review",
    ],
  },
  {
    id: "lectron-vbox-pro",
    name: "Lectron V-BOX Pro",
    shortName: "V-BOX Pro",
    brand: "Lectron",
    tier: "budget",
    releaseYear: 2024,
    maxAmps: 48,
    maxKw: 11.52,
    ampsRange: "16–48 A",
    cableFt: 16,
    connector: "j1772",
    connectorNote: "Separate J1772 and NACS variants — pick the connector at purchase, no adapter needed.",
    install: "Hardwired or NEMA 14-50 plug",
    smart: "Wi-Fi/Bluetooth + Lectron app (remote scheduling, real-time progress tracking, kWh charge caps)",
    outdoor: "IP65 enclosure (coupler IP54), indoor/outdoor rated",
    warranty: "1 year",
    priceLow: 350,
    priceHigh: 410,
    specNotes: [
      "48 A / 11.52 kW hardwired; 40 A / 9.6 kW on NEMA 14-50 plug.",
      "J1772 WiFi ASIN B0D2236JBD; NACS ASIN B0CS2SW7D9. Buy link defaults to the J1772 listing.",
      "16 ft cable is the shortest in this roundup — measure your parking distance.",
    ],
    query: "Lectron V-BOX Pro EV charger",
    asin: "B0D2236JBD",
    bestFor: "Design-conscious buyers who want full 48 A power at a budget price and park close to the charger.",
    pros: [
      "Full 48 A / 11.5 kW for ~$370–$400",
      "Distinctive V-shaped LED status design",
      "J1772 and NACS variants, no adapter needed",
      "UL/ETL, FCC, ENERGY STAR certified",
    ],
    cons: [
      "16 ft cable — shortest here; measure first",
      "Less mature smart ecosystem (no utility/OCPP integration)",
      "1-year warranty is short for the category",
    ],
    score: 8.4,
    scores: { power: 9.5, features: 7.5, value: 10, install: 8.5 },
    verdict:
      "Lectron's V-BOX Pro delivers the full 48-amp experience for little more than half the price of the big brands, in a genuinely good-looking package. The trade-offs are real but manageable: a short 16-foot cable, a basic app, and a 1-year warranty. If your parking spot is close to the install location, it's a lot of charger for the money.",
    sources: [
      "https://ev-lectron.com/products/lectron-home-level-2-j1772-v-box-pro-ev-charging-station-wifi-app-version-240v-48-amp-nema-14-50-hardwired",
      "https://www.amazon.com/dp/B0D2236JBD",
    ],
  },
  {
    id: "wallbox-pulsar-plus",
    name: "Wallbox Pulsar Plus 48A",
    shortName: "Pulsar Plus",
    brand: "Wallbox",
    tier: "premium",
    releaseYear: 2021,
    maxAmps: 48,
    maxKw: 11.5,
    ampsRange: "6–48 A",
    cableFt: 25,
    connector: "j1772",
    connectorNote: "J1772 standard; NACS option available. (A 40 A / 10 kW plug-in model also exists; this review covers the 48 A.)",
    install: "Hardwired",
    smart: "Wi-Fi + Bluetooth, myWallbox app (scheduling, energy monitoring, notifications, session history, remote lock), Alexa/Google voice, power sharing across up to 10 units, Power Boost load management",
    outdoor: "NEMA 4, indoor/outdoor rated",
    warranty: "3 years",
    priceLow: 650,
    priceHigh: 800,
    specNotes: [
      "The 48 A model is hardwired only; the 40 A model offers a NEMA 14-50 plug.",
      "No verified amazon.com ASIN surfaced — the buy link is an Amazon search.",
      "Remarkably compact: 7.8 x 7.9 x 3.9 in, 4.4 lb. Assembled in USA.",
    ],
    query: "Wallbox Pulsar Plus 48A",
    bestFor: "Homeowners who want a discreet, multi-EV-ready premium unit and will pay for power-sharing smarts.",
    pros: [
      "Tiny footprint — the smallest 48 A charger here",
      "Power sharing across up to 10 units + Power Boost load management",
      "Voice control (Alexa/Google), offline-capable intelligence",
      "Assembled in USA, UL listed",
    ],
    cons: [
      "Priciest pick in this roundup (~$650–$800)",
      "48 A model is hardwired only",
      "App had a rocky history (early-2024 firmware issues, since fixed via OTA)",
    ],
    score: 8.4,
    scores: { power: 9.5, features: 9.5, value: 7, install: 8 },
    verdict:
      "The Pulsar Plus is the compact-premium pick: a 48-amp charger the size of a sandwich, with multi-unit power sharing nobody else matches. You pay for it — it's the priciest unit here — and early app troubles (since fixed) dented its reputation. Best for design-conscious multi-EV homes, not for bargain hunters.",
    sources: [
      "https://www.abt.com/Wallbox-Pulsar-Plus-48A-25Ft-Electric-Vehicle-Smart-Charger-PUP1U16C002A/p/178285.html",
      "https://evpowerhq.com/products/wallbox-pulsar-plus-48a-level-2-ac-charger",
    ],
  },
];

export function getModel(id: string): ChargerModel {
  const m = MODELS.find((m) => m.id === id);
  if (!m) throw new Error(`Unknown model id: ${id}`);
  return m;
}

export function formatMoney(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export function formatPrice(m: ChargerModel): string {
  return m.priceLow === m.priceHigh
    ? formatMoney(m.priceLow)
    : `${formatMoney(m.priceLow)}–${formatMoney(m.priceHigh)}`;
}

/**
 * Price bands shown instead of dollar figures. Amazon Associates rules only
 * allow exact prices pulled live from Amazon's API, so pages show a band and
 * send readers to Amazon for today's price. Bands use the cheapest version.
 */
export const PRICE_TIERS = [
  { level: 1, sym: "$", label: "Budget", range: "under $350" },
  { level: 2, sym: "$$", label: "Mid-range", range: "$350–$550" },
  { level: 3, sym: "$$$", label: "Premium", range: "$550–$750" },
  { level: 4, sym: "$$$$", label: "Flagship", range: "over $750" },
] as const;
export type PriceTier = (typeof PRICE_TIERS)[number];

export function priceTierOf(price: number): PriceTier {
  return PRICE_TIERS[price < 350 ? 0 : price < 550 ? 1 : price < 750 ? 2 : 3];
}

export function priceTier(m: ChargerModel): PriceTier {
  return priceTierOf(m.priceLow);
}

export const CONNECTOR_LABEL: Record<ConnectorType, string> = {
  nacs: "NACS",
  j1772: "J1772",
  dual: "NACS + J1772",
};

/** Score category labels for the review pages. */
export const SCORE_LABELS: [keyof ChargerModel["scores"], string][] = [
  ["power", "Charging power"],
  ["features", "Smart features"],
  ["value", "Value"],
  ["install", "Install flexibility"],
];
