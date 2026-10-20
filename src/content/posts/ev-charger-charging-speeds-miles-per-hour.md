---
title: "Level 2 EV Charger Speeds: How Many Miles of Range Per Hour?"
seoTitle: "Level 2 EV Charger Speeds: Miles Per Hour Guide"
description: "How many miles of range per hour does a Level 2 charger add? Real math by amperage, why your car may charge slower than the charger allows, and overnight math."
pubDate: 2026-10-20
category: explainer
tag: "Charging speeds"
order: 30
heroKeywords:
  - "how many miles of range per hour of level 2 charging"
  - "level 2 ev charger miles per hour"
  - "48 amp ev charger miles per hour"
  - "ev charger charging speed by amperage"
picks:
  - id: chargepoint-home-flex
    label: "Up to 50 A"
  - id: emporia-pro
    label: "48 A with load management"
takeaways:
  - "A Level 2 charger's speed in kW is simply amps × volts ÷ 1,000 — so a 48-amp charger on 240 V delivers about 11.5 kW."
  - "Miles per hour depends on your EV's efficiency too: a 48-amp charger adds roughly 35–40 mi/hr to an efficient sedan but only ~22 mi/hr to a big electric truck."
  - "Your car's onboard charger caps the speed — a 48-amp charger won't help a car whose onboard charger maxes out at 32 amps."
  - "For typical overnight charging, even 32 amps (~23 mi/hr) covers a week of average driving while you sleep; 48 amps matters most for two-EV households and big batteries."
faq:
  - q: "How many miles per hour does a 48-amp Level 2 charger add?"
    a: "Roughly 30–40 miles of range per hour, depending on the EV's efficiency. An efficient sedan (~4 mi/kWh) gains about 40 mi/hr from 11.5 kW; a typical crossover (~3.3 mi/kWh) gains about 34 mi/hr; a large electric truck (~2.1 mi/kWh) gains about 22 mi/hr. Charging losses of ~10% are already factored into these estimates."
  - q: "Is a 48-amp charger worth it over a 40-amp charger?"
    a: "The 48-amp charger adds about 20% more speed — roughly 5–8 extra miles of range per hour. That's meaningful for two-EV households sharing a circuit or for large-battery trucks, but for a single car charging overnight, the difference rarely matters. Our [40 vs 48 amp guide](/posts/40-amp-vs-48-amp-ev-charger/) goes deeper."
  - q: "Why is my EV charging slower than my charger's rating?"
    a: "The three usual causes: your car's onboard charger has a lower limit (many EVs cap AC charging at 32 or 48 amps regardless of the charger), the charger was installed at a lower current setting, or the battery is very cold or nearly full. Check your owner's manual for the onboard charger's rating first."
  - q: "How fast does a NEMA 14-50 outlet charge an EV?"
    a: "A NEMA 14-50 on a 50-amp circuit allows a 40-amp continuous load, which is 9.6 kW — roughly 28–35 miles of range per hour depending on your EV's efficiency. That's enough to add ~230 miles over an 8-hour night."
  - q: "Do I need an 80-amp charger for the fastest home charging?"
    a: "Only if your EV can accept it. Very few EVs do — mainly trucks like the Ford F-150 Lightning (extended-range battery) and Silverado EV, whose optional dual onboard chargers can take 19.2 kW. For everything else, 80 amps is overkill, and most homes can't spare the circuit."
---

"How fast is it?" is the first question everyone asks about a home EV charger, and the honest answer has two parts: how much power the charger can deliver, and how much of that your car can actually accept. This guide gives you the real math — no lab tests, no marketing — so you can size your charger to your driving instead of guessing.

## The formula: amps × volts ÷ 1,000

A charger's power in kilowatts is just:

**kW = amps × volts ÷ 1,000**

On a standard US 240-volt circuit (nominal; real homes measure 235–248 V), the common settings work out to:

| Charger setting | Power at 240 V | Typical circuit |
|---|---|---|
| 16 A | ~3.8 kW | 20 A |
| 24 A | ~5.8 kW | 30 A |
| 32 A | ~7.7 kW | 40 A |
| 40 A | ~9.6 kW | 50 A |
| 48 A | ~11.5 kW | 60 A |
| 50 A | ~12.0 kW | 60 A |
| 80 A | ~19.2 kW | 100 A |

Each step also needs the matching circuit per the NEC 80% rule for continuous loads — a 48-amp charger needs a dedicated 60-amp circuit, not a 50. Our [breaker-size guide](/posts/what-size-breaker-for-ev-charger/) covers that math in detail.

## From kilowatts to miles per hour

Kilowatts don't mean much by themselves; what you feel is miles of range per hour of charging. Converting requires your EV's efficiency — how many miles it travels per kilowatt-hour. Real-world ballparks (EPA combined ratings, rounded):

- **Efficient sedan (~4.0 mi/kWh, e.g. Tesla Model 3):** EPA consumption around 25 kWh per 100 miles.
- **Typical crossover (~3.3 mi/kWh, e.g. Tesla Model Y, Hyundai Ioniq 5):** around 28–32 kWh per 100 miles.
- **Large electric truck (~2.1 mi/kWh, e.g. Ford F-150 Lightning):** around 48 kWh per 100 miles.

Charging also loses roughly 10% of the energy as heat in the car's onboard charger, so effective miles per hour = kW × efficiency × ~0.9. That gives you:

| | Efficient sedan (~4.0 mi/kWh) | Crossover (~3.3 mi/kWh) | Large truck (~2.1 mi/kWh) |
|---|---|---|---|
| 16 A (3.8 kW) | ~14 mi/hr | ~11 mi/hr | ~7 mi/hr |
| 32 A (7.7 kW) | ~28 mi/hr | ~23 mi/hr | ~15 mi/hr |
| 40 A (9.6 kW) | ~35 mi/hr | ~29 mi/hr | ~18 mi/hr |
| 48 A (11.5 kW) | ~41 mi/hr | ~34 mi/hr | ~22 mi/hr |
| 50 A (12 kW) | ~43 mi/hr | ~36 mi/hr | ~23 mi/hr |

So the much-advertised "37 miles per hour" of a 50-amp charger is true for a typical crossover — and pessimistic for a sedan, optimistic for a truck. Cold weather trims these numbers further, since battery heating and lower efficiency eat into range in winter.

## The part nobody advertises: your car is the bottleneck

Here's the catch: **the charger can only deliver what your car's onboard charger accepts.** The onboard charger — the AC-to-DC converter built into every EV — has its own maximum, and many EVs cap out well below 48 amps:

- Many EVs (and most older ones) max out at **32 A / 7.7 kW** on AC charging, no matter what charger you hang on the wall.
- Most current mainstream models accept **48 A / 11.5 kW** (Tesla Model 3/Y, Mustang Mach-E, Ioniq 5, EV9, and many others).
- A handful of large trucks with dual onboard chargers accept **80 A / 19.2 kW** (F-150 Lightning with the extended-range battery, Silverado EV).

This is why checking your owner's manual matters more than reading charger marketing. If your car caps at 32 amps, buying a 48-amp charger buys you nothing today — though it does future-proof the install if your next EV accepts more. Read our [guide to choosing a Level 2 charger](/posts/how-to-choose-a-level-2-ev-charger/) for how to weigh that trade-off.

## The overnight math: what speed do you actually need?

The average American drives about 37 miles per day. Run the numbers for an 8-hour overnight charge:

- **16 A (~11 mi/hr for a crossover):** ~88 miles overnight — already more than double average daily driving.
- **32 A (~23 mi/hr):** ~184 miles overnight.
- **40 A (~29 mi/hr):** ~232 miles overnight.
- **48 A (~34 mi/hr):** ~272 miles overnight.

Read that twice: even a modest 32-amp charger on a 40-amp circuit covers several days of typical driving in one night. The jump from 40 to 48 amps — about 5–8 extra miles per hour — only matters in specific situations:

1. **Two EVs sharing one charger or one circuit.** When power splits, the faster charger keeps both cars full. See our [two-EV charging guide](/posts/best-ev-charger-for-two-evs/).
2. **Big-battery trucks and SUVs.** A 130+ kWh pack takes meaningfully longer to fill; the extra amperage keeps an overnight top-up feasible.
3. **Short charging windows.** If your utility's cheap overnight rate only runs 6 hours, higher amperage squeezes more miles into the window.
4. **Tight panels with load management.** Chargers like the [Emporia Pro](/chargers/emporia-pro/) can dynamically use whatever headroom your panel has — sometimes 48 amps at 2 AM, less at 6 PM — which beats a fixed lower setting.

For everyone else, 40 amps is the sweet spot: full plug-in compatibility (NEMA 14-50), simpler wiring, and plenty of overnight speed. That's why our [budget 48-amp roundup](/posts/best-budget-48-amp-ev-charger/) exists for the speed-hungry and our general picks favor 40-amp value.

## Speed traps: three things that slow real charging

**1. Cold batteries.** In winter, the car may spend the first part of a charge session warming the battery instead of adding range, and efficiency drops. A garage — even an unheated one — helps more than extra amperage does.

**2. The taper near full.** EVs charge fastest in the middle of the battery's range and slow down above ~80–90% to protect the pack. The last 10% always takes disproportionately long; for daily driving, charging to 80% (or your manual's recommended limit) is faster *and* healthier.

**3. Shared circuits and derating.** A charger set below its maximum — because of a tight panel, a long wire run, or a conservative installer — charges at the setting, not the box's rating. If your charger seems slow, the current setting is the first thing to check, and our [40 vs 48 amp guide](/posts/40-amp-vs-48-amp-ev-charger/) explains what each setting costs you.

**4. Voltage sag on long wire runs.** Real-world voltage often reads 235–240 V rather than a nominal 240 V, especially at the end of a long garage run — and every volt counts in the amps × volts math. A 48-amp charger on a 235-V circuit delivers about 11.3 kW instead of 11.5. It's a small effect, but it's why two identical chargers can report slightly different speeds in different homes.

## Bottom line

For a typical crossover, expect ~29 miles per hour from a 40-amp charger and ~34 from a 48-amp charger; sedans do better, trucks do worse. Check your car's onboard charger limit before paying for amperage you can't use, and remember that overnight math favors sleeping through it — even 32 amps covers most driving weeks.

When you're ready to shop, the [best Level 2 chargers of 2026](/posts/best-level-2-ev-chargers-2026/) roundup pairs each speed tier with real models, and the [Emporia Pro](/chargers/emporia-pro/) and [ChargePoint Home Flex](/chargers/chargepoint-home-flex/) are the smart-charger picks if you want load management or the best app. [Check current prices](amazon:chargepoint-home-flex) and match the amperage to your panel, not to the biggest number on the box.
