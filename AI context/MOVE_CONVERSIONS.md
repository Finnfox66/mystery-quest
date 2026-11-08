# Move Conversions

How Moves of the official Pokémon games are converted into **Pokémon Mystery Quest**
mechanics, and how converted Move entries are formatted. Companion to
`RULES_ANALYSIS.md`; the ruleset document is the authority — this file summarizes
its conversion method (the current ruleset's "Moves" section) so conversions can be made
without re-deriving it, and records the house style for entry texts. The ruleset's
own "Example Move conversions" section holds the worked examples and is not
duplicated here.

**Source data:** Moves are converted from the latest official specifications of the
core series (Gen IX data), **not** from the Moves used in Mystery Dungeon.

## Conversion marking

- **Direct** — every official specification maps onto ruleset mechanics through the
  conversion tables without inventing new mechanics. Conditional clauses (e.g.,
  weather dependence) written into the Move's description field do not make a
  conversion indirect; the ruleset explicitly supports them for rule exceptions.
- **Indirect** — the official Move contains behavior with no mechanical equivalent in
  the ruleset (semi-invulnerable turns, level-based damage, entry hazards, initiative
  inversion), so the conversion makes a documented judgment call.

Display convention: indirect conversions are marked in the Move's heading
(e.g., "Trick Room - indirect conversion"); direct conversions carry no marking.

## The conversion process, field by field

1. **Type** — the Move's official elemental type.

2. **Main keywords**
   - **Single-target / Area of Effect (AoE)** — from the official target/range rule, via
     the AoE conversion table: All Adjacent → Blast (small), Projected; Your Party /
     Your Side → Blast (small), Projected; All Adjacent Foes → Cone (small), Flared;
     All Foes / Opposing Side → Blast (large), Ranged; All → Blast (large), Projected;
     Entire Field → Blast (all), Radial.
   - **Placement Types** (how the area is positioned): Projected — the blast is
     positioned anywhere as long as part of the user remains inside it; Radial — the
     blast is always centered on the user; Flared — a triangular cone expanding
     outward from the user (width at any point equals distance from the origin);
     Ranged — the center point is freely positioned within the Move's Range with line
     of sight (Range 10 m + (Sp.) Attack for Physical/Special, 15 m for Status).
     When multiple Placement Type options would fit, the used one is decided at
     conversion time, not at the table.
   - **Shape Size** — Blast (small): 2 m + ½ (Sp.) Attack for Physical/Special, 5 m for
     Status; Blast (large) and Cone (small): 4 m + (Sp.) Attack for Physical/Special,
     10 m for Status; Blast (all): 50 m (encounter-wide). Final results are rounded up.
   - **Physical / Special / Status** — the Move's official category.
   - **Melee / Long Range** — the official "Makes contact?" information: contact
     makes a Melee Move, no contact a Long Range Move.

3. **Additional keywords**
   - **Priority** — official positive priority (e.g., +1); grants a Priority Turn when
     announced at the beginning of a round.
   - **Counter** — triggered uses outside the user's turn (requires the Counter
     Stance); using a Counter Move requires and expends the Move's PP cost and the
     user's Main Action as normal (ruleset 0.9.5.1).
   - **Charging** — the official charge-before family (e.g., Solar Beam, Fly):
     charged on the first use (PP paid then), resolved on the second use; the
     charged state is removed by using another Move, and in the user's End Phase if
     the Move was not used during the round, unless the user pays 1 PP to maintain it
     (ruleset 0.9.5.0). Since 0.9.5.5 the Incapacitated restriction no longer removes
     the charge directly; like buffs and debuffs, it blocks paying PP to maintain it.
   - **Recharging** — the official recharge-after family (e.g., Hyper Beam, Giga
     Impact): the user has the No Main Actions restriction during their next turn.
   - **Pledge** — the official pledge family (e.g., Grass Pledge, Fire Pledge,
     Water Pledge): when a character uses a Pledge Move, another character within
     1 meter of them can immediately use a Pledge Move to double the original
     Move's Power; the second Move has no other effect, and its out-of-turn use
     still requires and expends the Move's PP cost and the user's Main Action as
     normal (ruleset 0.9.5.1).
   - **Trapping** — binding/trapping Moves (Bind, Fire Spin, Mean Look, …): on a hit the
     target can't voluntarily move more than 1 meter from where they were hit; the
     "trapped" condition ends when the Move is no longer in effect (removal conditions
     are stated in the Move's Description, e.g. "as long as the user remains within
     15 meters of the target") or if the target is forcibly moved (ruleset 0.9.5.7).
   - **Condition** — the Move's effect is resolved as a Status Condition with a removal
     DC of 10, so Resist Stance's on-receive roll and the End Phase removal tests apply
     (ruleset 0.9.5.8).

4. **PP cost** — the official PP conversion table: official PP 5 → 3, 10 → 2, 15 → 1,
   20+ → 0. The inverted-looking direction is correct (strong Moves have low official
   PP) and is deliberate.

5. **Range** — Single-target Melee: 1 m (including one free Movement Action when used
   on the user's own turn). Single-target Long Range: 20 m + 2x (Sp.) Attack for
   Physical/Special, 15 m for Status. AoE Moves: Ranged placements use the Range
   above; other placements carry "-" as the Range value (the placement rules position
   the area). Ranges are the Move's own values and are written into the entry.

6. **Accuracy** — the official Accuracy % converts to a Percentage Test modifier:
   +10 reduced by 1 for each missing full 5% of chance (100% → +10, 85% → +7,
   50% → +0, 30% → -4, 10% → -8). Moves with no official accuracy are written as
   "Hits automatically". Official accuracy conditionals (weather, type-based) are kept
   as Description clauses that swap the modifier under the condition.

7. **Power** — the official base Power converts to a **Power Value** (flat) plus
   **Power Dice**, by dividing by 10 and rounding up to the nearest dice-representable
   number (5-20 → 2 + d2, 25-40 → 4 + d4, 45-60 → 6 + d6, 65-80 → 8 + d8, 85-100 →
   10 + d10, 105-120 → 12 + d12, 125-140 → 14 + d10 + d4, 145-160 → 16 + d10 + d6,
   165-180 → 18 + d10 + d8, 185-200 → 20 + 2d10, 205-220 → 22 + d10 + d12,
   225-240 → 24 + 2d10 + d4, 245-260 → 26 + 2d10 + d6). Single-target Moves take the
   Power Value plus one set of Power Dice; AoE Moves take **two sets of Power Dice
   only** (no flat value). Power 40 single-target Moves are normally replaced by
   "Basic attack", but may still be converted for type coverage.
   - **Chip Damage roles:** Chip Damage (minimum 1 damage on a failed To-Damage test)
     applies only to Single-target Moves — it keeps them usable even against high
     Defense. AoE Moves never deal Chip Damage: their halved-damage-on-miss is the
     intended counter to weak high-speed targets, which take damage even when the
     Move does not properly hit them (author clarification, 2026-10-26; ruleset
     0.9.5.0: "AoE Moves can't cause Chip Damage.").
   - **STAB:** where the user's type matches the Move's type, one set of Power Dice is
     added at the moment of use — this is not part of the conversion and is never
     written into the entry.
   - **Power modifications:** conditionally halved, doubled or otherwise modified
     Power (e.g., weather clauses) is applied to the Move's total Power after the
     Power Dice have been rolled and summed together with the Power Value (global
     rule, ruleset 0.9.4.7) — the entry states the modification only, never the timing.

8. **Healing effects** — restoring 100% of Max HP converts to restoring all lost HP;
   75% → Health * 3; 50% → Health * 2; 25% → the flat Health value; draining attacks
   restore the user's HP equal to half of the final damage dealt (rounded up).

9. **Secondary effects**
   - Official percentage chances convert to **Percentage Tests** (d20 + modifier >
     10) using the same modifier conversion as Accuracy; the chance is stated with
     its modifier, e.g., "Has a 30% (-4) chance of applying the Paralysis
     condition to the target."
   - Official stat raises/lowers convert to buffs/debuffs: one stage equals 2, capped
     at 6 stages (+12 / -12); Accuracy and Evasion use stages of 4.
   - Official status conditions map to the ruleset's Status Conditions (Burn, Freeze,
     Paralysis, Poison, Badly poisoned, Sleep, Flinch); the type immunities come with
     the conditions and are not restated in the entry.
   - For AoE Moves, secondary-effect tests are made separately per target and only
     against targets the To-Hit test succeeded against — a global rule, not entry
     text.
   - Official effect patterns without a percentage basis may need custom tests or
     conditions; creative freedom is expected there, and any invented mechanic makes
     the conversion indirect.

10. **Durations and weather**
    - Durations: when an effect states it lasts X turns or rounds of combat, the turn
      or round it was used in counts as the first of them (global rule, ruleset
      0.9.4.6) — never spelled out per Move.
    - Weather conditions (Harsh Sunlight, Rain, Sandstorm, Snow, Fog) have no
      standalone mechanical effects — now stated by the ruleset's own Weather
      conditions section (0.9.5.1): converted Moves may reference weather only
      through conditionals in their description (e.g., accuracy swaps, Power
      halving, charge removal), and a game master may use weather to justify narrative
      Advantages/Disadvantages. Weather-setting effects last 1 hour and remove all
      previous weather conditions from the area.

## Incompatible Moves and judgment calls

- **Never convert:** Moves that violate player agency in degrading ways (e.g.,
  "Charm"), and "Protect" (replaced by the Protect Stance).
- **No mechanical equivalent** — make a documented judgment call and mark the
  conversion indirect. Judgment-call patterns that have worked:
  - *Semi-invulnerable turns* (Fly, Dig): the charge turn grants Advantage (+4) to
    Evasion instead of invulnerability, so the dodge feel is kept while any Move can
    still connect on a high enough roll.
  - *Level-based damage* (Seismic Toss, Night Shade): Power derived from the user's
    level through the ruleset's level formula, always with both bounds (e.g., half
    the level rounded up, to a maximum) so the Move tracks the normal Move curve and
    then stays at the top single-target tier.
  - *Entry hazards* (Stealth Rock, Spikes): a placed area lasting 5 rounds that deals
    flat True Damage (never a division of Max HP, never modified by type
    effectiveness) to characters that enter it or end their turn inside it, at most
    once per turn — deliberately mirroring D&D area-damage logic assumed familiar to
    players. True Damage has no type unless the effect explicitly gives it one
    (ruleset 0.9.5.5), so hazards stay untyped.
  - *Initiative inversion* (Trick Room): a Counter-triggered use at the start of a
    round, reversed turn order with Initiative modifiers ignored, Priority Turns
    still first but also reversed.
  - *Official priority values without an equivalent*: positive priority converts to
    the Priority keyword; negative priority (e.g., Trick Room's -7) is dropped when
    the timing structure already handles it.
- **Bounds and durations on judgment calls** are the preferred balance lever for
  indirect conversions (per-Move custom PP costs are rejected — official values are
  the point of the conversion kit).
- **Simplification conventions** (author instructions): use flat values instead of
  accurate divisions of Max HP or other stats, and do not apply type modifiers to
  True Damage in conversions.

## Formatting of converted Move entries

- **Field order:** Type, Keywords, PP cost, Range, Shape, Shape Size, Placement Type,
  Accuracy, Power, Secondary effect, Description. Fields with nothing to say are
  omitted entirely; empty value fields are written as "-". Entries list the Move's
  own converted values only.
- The official specification line may precede the entry when the conversion is being
  documented (the ruleset's example section does this with a bold "Official:" line).
- **Plain formatting:** no code quotes (e.g., no `d20 - 4 > 10`), no em-dashes or
  other complex line markings (parentheses and commas only).
- **Prose conventions:** prose values after a colon start with a capital letter
  ("**Description:** Is used as..."); custom sentence values that are not official
  wording start with a capital letter and end with a dot ("**Power:** Equal to the
  user’s level."). Curly apostrophes (’) match the author's document.
- **Effect sentences are full sentences with a verb and the beneficiary at the end:**
  "Applies an Attack buff of two stages (+4) to the user." The buff/debuff term is
  **stage** (the official Pokémon term; renamed from "step" in ruleset 0.9.4.7). The
  stat name is not repeated inside the parentheses.
- **Percentage chances are full sentences naming the target:** "Has a 30% (-4)
  chance of applying the Paralysis condition to the target." Stat debuffs keep the
  stage notation in the same sentence: "Has a 20% (-6) chance of applying a Defense
  debuff of one stage (-2 Defense) to the target." (The parenthetical lost the word
  "modifier" in ruleset 0.9.5.1.)
- **Self-effects are written as a Secondary effect** ("Secondary effect: Applies a
  Defense debuff of one stage (-2) ... to the user."), not as a separate field.
- **Exceptional timing leads the Description:** "When a round starts, this Move can
  be used to..." instead of trailing after the mechanics.
- **Move texts never repeat rules the ruleset states elsewhere** — a Move references
  rules, it does not restate them (per-target testing for AoE Moves, the free
  Movement Action of Melee Moves, duration counting, Power-modification timing,
  halved damage on missed AoE targets and the round-up convention are all global
  rules and stay out of entries).
- **Move texts never restate another Move's conditionals** — each Move carries only
  its own weather clauses and exceptions.
- **Simple vocabulary matching defined terms:** "Power" (not "Attack Power" or
  "Damage"), "area" (not "zone"), "character" (not "creature").
