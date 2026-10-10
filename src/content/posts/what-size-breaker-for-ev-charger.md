---
title: "What Size Breaker for an EV Charger? NEC Sizing Guide"
seoTitle: "What Size Breaker for an EV Charger? (2026 Guide)"
description: "What size breaker for an EV charger? The NEC 125% rule, breaker and wire sizes for 32–50A chargers, GFCI requirements, and options when your panel is full."
pubDate: 2026-10-10
updatedDate: 2026-10-10
category: guide
tag: "Electrical guide"
order: 28
picks:
  - id: emporia-pro
    label: "Best for tight panels (load management)"
  - id: grizzl-e-classic
    label: "Best adjustable without an app"
takeaways:
  - "The NEC 125% continuous-load rule sets breaker size: multiply the charger's max amps by 1.25. 40 A → 50 A breaker; 48 A → 60 A breaker."
  - "Wire gauge depends on wire type and run length: 48 A typically needs 6 AWG copper in conduit (4 AWG for Romex); 40 A needs 8 AWG in conduit (6 AWG Romex)."
  - "Adjustable-amperage chargers (DIP switches or app) let you match an existing circuit instead of rewiring for the max."
  - "If your panel can't fit the breaker, load management (Emporia PowerSmart) or a lower amperage setting beats a $2,000+ panel upgrade."
faq:
  - q: "What size breaker do I need for a Level 2 EV charger?"
    a: "Multiply the charger's maximum amperage by 1.25 (the NEC continuous-load rule) and round up to the next standard breaker: 32 A → 40 A, 40 A → 50 A, 48 A → 60 A, 50 A → 70 A (usually installed as the next standard size up)."
  - q: "Can I put a 60-amp breaker on a 100-amp panel for an EV charger?"
    a: "Sometimes, but often not — it depends on your existing load. If your major 240 V appliances already use 40–50 amps, a 60-amp EV circuit likely requires a panel upgrade or load management. Get a load calculation done before assuming."
  - q: "Do EV chargers need a GFCI breaker?"
    a: "NEMA 14-50 outlet installs require GFCI protection under current NEC. Hardwired installs generally don't need a separate GFCI breaker because modern chargers have internal GFCI — and stacking two GFCIs can cause nuisance tripping. Your electrician will know the local code."
  - q: "What wire size do I need for a 48 amp EV charger?"
    a: "6 AWG copper minimum in conduit (THHN), or 4 AWG copper for Romex/NM-B cable runs, with a 60-amp breaker. Long runs (100+ ft) may need one size larger. Always confirm with your electrician — lug sizes on some chargers can't accept wire thicker than 6 AWG."
  - q: "Can an electrician install a 48A charger on my existing 50A circuit?"
    a: "Yes — by configuring the charger to 40 amps. Most 48-amp chargers are adjustable (app or DIP switches), so the electrician sets the max to match the circuit. You get 40-amp charging now and can rewire for 48 later."
---

**What size breaker does an EV charger need?** The short answer: **take the charger's maximum amperage, multiply by 1.25, and that's your minimum circuit size.** A 40-amp charger needs a 50-amp breaker; a 48-amp charger needs a 60-amp breaker. The rest of this guide covers why, what wire goes with it, and what to do when your panel can't fit the answer.

> This is general guidance based on the National Electrical Code (NEC), not a substitute for a licensed electrician. Local amendments vary — your electrician's load calculation is the final word.

## The 125% rule (why chargers need oversized breakers)

EV charging is a **continuous load**: the car draws maximum current for 3 or more hours every night. Sustained current generates sustained heat in wires, terminals, and breakers. The NEC's answer is a 25% safety margin — size everything as if the load were 25% bigger:

**Charger amps × 1.25 = minimum circuit amps**

| Charger output | × 1.25 | Breaker you install |
|---|---|---|
| 16 A | 20 A | 20 A double-pole |
| 24 A | 30 A | 30 A double-pole |
| 32 A | 40 A | 40 A double-pole |
| 40 A | 50 A | 50 A double-pole |
| 48 A | 60 A | 60 A double-pole |
| 50 A | 62.5 A | 70 A double-pole |

Equivalently, a circuit supports **80% of its rating** as continuous load: a 50-amp circuit supports 40 amps of charging; a 60-amp circuit supports 48. This is also why **NEMA 14-50 outlets cap plug-in chargers at 40 amps** — the outlet is the 50-amp circuit's limit.

## Wire sizing: gauge, wire type, and run length

Breaker size is only half the circuit. Wire gauge must carry the current without overheating, and the required gauge depends on **wire type** and **run length**:

| Charger | Breaker | Conduit (THHN copper) | Romex / NM-B cable |
|---|---|---|---|
| 32 A | 40 A | 8 AWG | 8 AWG |
| 40 A | 50 A | 8 AWG | 6 AWG |
| 48 A | 60 A | 6 AWG | 4 AWG |

Why two columns? Romex cable assemblies are limited to the NEC's 60°C temperature rating, so they need thicker wire for the same current. THHN in conduit uses the 75°C column and can run one size smaller.

Two gotchas worth knowing:

1. **Long runs need upsizing.** Runs over ~100 feet should go one wire size larger to control voltage drop — a 48-amp charger on a long run may need 4 AWG even in conduit.
2. **Charger lug limits.** Some chargers physically can't accept wire thicker than 6 AWG, which makes Romex a poor choice for 48-amp installs. Check the charger's install manual before the electrician buys wire.

[[diagram:install]]

## GFCI: what the code actually requires

This trips up (pun intended) a lot of installs:

- **NEMA 14-50 outlet installs:** current NEC requires GFCI protection on the outlet. Outdoors, always.
- **Hardwired installs:** generally no separate GFCI breaker needed — modern chargers have internal GFCI protection. Stacking an external GFCI breaker on top often causes **nuisance tripping**, where the two GFCIs fight each other and the charger randomly stops.
- **Local amendments vary.** Some jurisdictions require GFCI on everything. Your electrician knows your local code — this is exactly the kind of detail you pay them for.

## When your panel can't fit the breaker

This is where most "what size breaker" searches actually end up. Before you price a $2,000–$4,000 panel upgrade, you have three cheaper outs:

1. **Turn the charger down.** Nearly every 48-amp charger is adjustable — via app (EVIQO, Emporia, ChargePoint, Tesla), DIP switches ([Grizzl-E Classic](amazon:grizzl-e-classic), no app needed), or installer settings. A 48-amp charger configured to 32 or 40 amps is perfectly code-compliant on a 40- or 50-amp circuit. You lose some speed; you keep your panel.
2. **Load management.** The [Emporia Pro](amazon:emporia-pro) with its Vue 3 home energy monitor watches your whole-house load and throttles charging when the house is busy — delivering up to 48 amps on a panel that couldn't otherwise support it. This is the legitimate alternative to a panel upgrade.
3. **Go plug-in at 40 amps.** A NEMA 14-50 outlet on a 50-amp breaker fits far more panels than a 60-amp hardwired circuit, installs for less, and still delivers ~25–30 miles of range per hour. See [hardwired vs plug-in](/posts/hardwired-vs-plug-in-ev-charger/).

Run the numbers before calling the electrician: [panel capacity checker](/tools/panel-capacity-checker/) · [installation costs and rebates](/posts/level-2-ev-charger-installation-cost-rebates/) · [40 amp vs 48 amp](/posts/40-amp-vs-48-amp-ev-charger/) · [how to choose a Level 2 charger](/posts/how-to-choose-a-level-2-ev-charger/).

## The electrician conversation: what to ask for

When you call for quotes, the breaker and wire questions are how you tell a good electrician from a sloppy one. Ask these five things, the same way, to every bidder:

1. **"Will you do a load calculation on my panel?"** — Anyone who quotes a 60-amp EV circuit without one is guessing. Walk away.
2. **"What wire type and gauge are you quoting?"** — You want to hear "6 AWG THHN in conduit" or "4 AWG Romex" for 48 amps, not "whatever fits."
3. **"Is the quote for a dedicated circuit?"** — EV chargers need their own circuit. Sharing with a dryer or RV outlet is a code violation and a fire risk.
4. **"How are you handling GFCI?"** — For hardwired installs, the answer should involve the charger's internal GFCI and local code, not an automatic GFCI breaker upcharge.
5. **"Does this include the permit?"** — Most jurisdictions require a permit ($100–$300). Unpermitted work can void your homeowner's insurance if something goes wrong.

Get three quotes. The spread is often 2× between the cheapest and most expensive for identical work.

## Future-proofing the wire run

If the walls are open or the trench is dug, consider running wire one size larger than today's charger needs — the labor is the expensive part, and copper is comparatively cheap. A 48-amp charger needs 6 AWG in conduit today; running 4 AWG costs marginally more in materials and leaves headroom for an 80-amp charger (or a second charger on power-sharing) later without reopening anything.

The same logic applies to conduit: if your electrician is running conduit anyway, ask for the next size up. Pulling thicker wire through existing oversized conduit in five years is a two-hour job; replacing undersized conduit is a two-day job.

Related reading: [EV charger installation cost and rebates](/posts/level-2-ev-charger-installation-cost-rebates/) — including the 30% federal tax credit that covers the electrical work, not just the charger.

## Common sizing mistakes to avoid

- **Sizing the breaker to the plug, not the charger.** A NEMA 14-50 outlet on a 50-amp breaker does not mean you can run a 48-amp charger on it. The charger's configured output is what matters — 48 amps needs a 60-amp circuit, period.
- **Forgetting the 125% rule on "just a little more."** A 40-amp charger on a 40-amp breaker will run — right up until the breaker trips on a hot summer night, or worse. The margin isn't optional; it's the code.
- **Aluminum wire without checking.** Aluminum is cheaper than copper and code-legal for these circuits, but it needs anti-oxidant compound, proper torque, and lugs rated for aluminum. Most residential electricians prefer copper for EV circuits — ask which they're quoting and why.
- **Ignoring the subpanel rating.** Adding a 60-amp breaker to a 100-amp subpanel fed by a 60-amp feeder doesn't work — the feeder is the real limit. The load calculation has to cover the whole chain, not just the panel the breaker sits in.

## Verdict

Size the breaker with the 125% rule, size the wire for its type and length, and let the electrician handle GFCI per local code. But treat the breaker size as a **starting bid, not a verdict** — adjustable amperage and load management mean the panel you have is very often the panel you need.
