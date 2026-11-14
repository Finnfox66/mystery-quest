# Changelog 0.9.4 → 0.9.5

## General logic (new section)

- A new **General logic** section states the system-wide conventions: tests compare
  with the logic of **"exceeds"** (not "meets or exceeds"), all halves are rounded
  up, and when an effect states that it lasts X turns or rounds of combat, the turn
  or round it was used in counts as the first of them.
- The ordinary test now passes when the result **exceeds** the Difficulty Class
  (`d20 + Stat value + Bonus stat value > DC`); 0.9.4 used "meets or exceeds".

## Stats and character creation

- The Social stat **Empathy** is renamed **Insight** (also in the NPC example).
- A new derived stat, **Base Evasion = 12 + Speed**, replaces the old To-Hit target
  value of a flat 1 + Speed (and modifiers). The flat 12 is a deliberate design
  choice, documented in a design note, because official 100% accuracies would
  otherwise make combat too straightforward.
- Stat values are now described through **Base Values** (with the base value /
  Progress Modifier / bonuses breakdown condensed); character creation steps are
  reworded to match.
- The **Modifiers** section is restructured into a taxonomy: Progress Modifiers,
  buffs/debuffs, Advantages/Disadvantages, and **other** modifiers (mechanic-tied,
  item and GM-given modifiers — replacing the old "passive and temporary
  Advantages" rules).
- **Half/Double Advantages and Disadvantages (+2/+8) are removed**: an Advantage
  is +4 and a Disadvantage is -4, stacking.

## Abilities (new system)

- 0.9.4 treated official Abilities as optional and unsupported, and left flight to
  the game master. 0.9.5 replaces this with a full **Abilities** section: every
  player character chooses **2 Abilities** from categorized lists:
  - *Universal & General:* Specialized, Resourceful, Secret Power (STAB bonus to
    one additional type).
  - *Anatomy & Mobility:* Flight, Aquatic, Burrower, Wall Climber, Tiny (Base
    Evasion +2, Max HP -4 to a minimum of 1), Large (Max HP +12, Base Evasion -2
    to a minimum of 0), Long Reach, Incorporeal, Mechanical.
  - *Defense & Resilience:* Substitute, Element Resistant, Status Resistant,
    Climate Adaptability.
  - *Tactical & Utility:* Technician, Prankster, Healer, Form Change, Weather
    Setter.
  - *Pokémon-specific:* Wonder Guard (Shedinja), which can't be combined with the
    Tiny or Large Abilities.
- The old **Flying** section is removed (flight is now the Flight Ability).

## Combat tests (reworked)

- **Reliability Tests are replaced by Percentage Tests.** 0.9.4 rolled
  `d20 + Chance Penalty ≥ 1`; 0.9.5 rolls `d20 + modifier > 10`, where the modifier
  is +10 reduced by 1 for each missing full 5% of the official chance (100% → +10,
  85% → +7, 50% → +0, 30% → -4, 10% → -8). The reproduced official chances are
  identical — only the presentation changed (e.g., Volt Tackle's 10% paralysis:
  d20 - 18 ≥ 1 becomes d20 - 8 > 10).
- The **To-Hit test** is restructured from the three-method system (To-Hit test /
  simplified To-Hit test / summary table) into a two-row table:
  - **Status Moves:** `d20 + Move's Accuracy` against 10.
  - **Damaging Moves:** `d20 + Move's Accuracy + (Sp.) Attack` against the target's
    **Base Evasion (12 + Speed)**, with Accuracy/Evasion modifiers on either side.
  - The Move stat is renamed from **Chance Penalty** to **Accuracy** (Basic attack
    is now "Accuracy +10").
- **Damaging AoE Moves now hit their targets even if the To-Hit test fails**, but
  the Attack Power is halved (rounded up) against those targets, and secondary
  effects are not applied to them. To-Hit tests and secondary-effect tests are
  made separately per target. In 0.9.4, a failed (simplified) To-Hit test simply
  missed.
- The **natural 20** on a damaging Move's Accuracy roll is now a **Critical Hit**
  (one set of Power Dice is added to the Move's Power) instead of a plain automatic
  success; Critical Hits resolve per attack and per target. The STAB bonus and
  Critical Hits rules moved from their own section into the Power section.
- **Chip Damage:** a Single-target Move whose Attack Power fails to exceed the
  target's Defense Power still deals 1 damage; multi-attack Moves can cause it only
  once; **AoE Moves can't cause Chip Damage**.
- The old rule granting an Accuracy Advantage against targets unable to move is
  removed — the Immobile restriction now sets Speed 0 / Base Evasion 12 instead.

## Moves

- The Move format list gains the **Charging** and **Recharging** additional
  keywords:
  - *Charging:* charged on the first use (PP paid then), resolved on the second
    use; the charged state is removed by using another Move or the Incapacitated
    restriction, and in the user's End Phase if the Move was not used during the
    round, unless the user pays 1 PP to maintain it. Converts the official
    charge-before Moves (Solar Beam, Fly).
  - *Recharging:* the user has the No Main Actions restriction during their next
    turn. Converts the official recharge-after Moves (Hyper Beam, Giga Impact).
  - *Counter:* using a Counter Move requires and expends PP and the user's Main
    Action normally (the old GM-discretion clause for out-of-Stance use is
    removed).
- The Move format's "Other effects & descriptions" block becomes the simpler
  **Secondary effects** and **Description** fields.
- A new general rule in the Power section: if a Move states that its Power is
  halved, doubled or otherwise modified under certain conditions (like "Solar
  Beam" and "Rollout"), the modification is applied to the Move's total Power
  after the Power Dice have been rolled and summed together with the Power Value.
- The "Incompatible Moves" section keeps its exclusion rules (agency-violating
  Moves like "Charm"; "Protect", replaced by the Protect Stance) but drops its
  sketch list of hard-case examples — the hard cases are now converted instead.
- **New section: Example Move conversions** — a full set of 25 worked conversions
  (8 Physical, 8 Special, 9 Status), including four marked indirect conversions
  (Seismic Toss, Fly, Trick Room, Stealth Rock), each with the official
  specification line followed by the converted entry.

## Rounds, turns and actions

- **Restrictions (new framework):** effects that restrict a character are defined
  once as named categories and referred to by name elsewhere: **Mute, Immobile,
  No Reactions, No Main Actions, Turn Skipped, Incapacitated**. Restrictions only
  remove capabilities (with the exception of Immobile, which also sets Speed 0 /
  Base Evasion 12), and they never remove the End Phase of a character's turn —
  end-of-turn effects and Status Condition removal tests always resolve, even on
  skipped turns.
- The character turn is now explicitly split into an **Action Phase** and an
  **End Phase** (decay, condition effects and removal attempts live in the End
  Phase).
- **Priority Moves** now grant a **Priority Turn**, played before normal turns in
  Initiative order: the Action Phase is resolved during the Priority Turn, the End
  Phase on the character's normal turn, and a character unable to use the required
  Priority Move skips the Priority Turn along with the Action Phase.
- **Out-of-battle timing:** a round lasts 6 seconds of in-game time, and when a
  battle has ended, effects with turn-based timing are resolved based on how many
  seconds have passed — turns and rounds are interchangeable outside combat (one
  turn = one round = 6 seconds).

## Stances

- The stance groups are renamed: **Basic Stances → Common Stances** and
  **Advanced Stances → Situational Stances**; Resist Stance moves into the Common
  group.
- Stance effects are written as flat modifiers ("+4 to Evasion", "+8 to Defense
  Power") instead of Advantage/Double Advantage terms; Observative Stance reveals
  a "Priority Turn" instead of a "Priority Move".

## Actions

- **Restrict (new Main Action):** both characters roll d20 + Attack; if the user's
  result is higher, the target has the No Main Actions and No Reactions
  restrictions until the end of their next turn.
- **Pin:** the pinning character and a Pinned Down character now have the
  **Immobile** restriction (replacing the ad-hoc "unable to move" wording, and the
  Accuracy Advantage against pinned characters is gone with it); a Pinned Down
  character's Shove succeeds if their result **exceeds all** opposing results.
- **Shielding An Ally (reworked):** the Move now targets both characters — the
  To-Hit test succeeds automatically against the shielding character and fails
  automatically against the protected ally (0.9.4: single-target Moves skipped
  the test against the shielder; AoE Moves hit both with the ally gaining +4
  Defense Power).
- **Cover:** +4 to Evasion against the Move, regardless of category (0.9.4 gave
  +4 to Defense Power against AoE Moves instead).
- **Restrained** conditions are now expressed through the restriction categories
  (Immobile / No Main Actions / Mute) instead of free-form GM judgment.

## Standard effects and Status Conditions

- Buff/debuff conversions now use **stages** ("one stage refers to the value of 2",
  maximum 6 stages / ±12; Accuracy and Evasion use stages of 4) instead of the old
  step/Half-Advantage framing.
- **Status Condition removal is reworked:** each condition now has a removal DC
  rolled as `d20 > DC` at the end of the affected character's turn (Burn 10,
  Freeze 15, Paralysis 10, Poison 15, Badly poisoned 15, Sleep 10, Flinch —),
  replacing the old d6-based removal whose difficulty dropped with each failed
  attempt. A condition's end-of-turn effects now always resolve **before** the
  removal test (0.9.4 skipped them if the removal succeeded), and a character
  can't be given a Status Condition they already have (0.9.4 removed and reset the
  old one).
- **Paralysis:** the turn-ending chance is now "d20 not exceeding 5" (was d6 1-2)
  and applies to any Move (the Basic attack exemption is removed); it ends the
  **Action Phase** rather than the whole turn.
- **Freeze and Sleep** now grant the **Incapacitated** restriction (was
  "considered Unconscious"); **Flinch** grants **Turn Skipped** and is always
  removed at the end of the affected character's turn (was: the end of a round);
  the parenthetical notes about unconscious characters' stats are removed
  (Immobile now carries the Speed 0 / Base Evasion 12 values).
- **Unconscious** (0 HP) characters have the Incapacitated restriction, replacing
  the inline stat list; **Surprised** characters are Incapacitated for their first
  round.

## Other

- Hazardous Terrain drops its "(new rule)" marker, and its "(6 seconds)"
  parentheticals are removed (the out-of-battle timing rule makes them redundant).
- The Eevee NPC example adds Base Evasion (12 + 8 = 20) to its derived values;
  "Legendary Actions" is adjusted to a subsection heading.
