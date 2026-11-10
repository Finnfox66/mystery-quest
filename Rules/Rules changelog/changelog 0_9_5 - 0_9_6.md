# Changelog 0.9.5 → 0.9.6

Exact delta between the exports `Mystery Quest ruleset 0_9_5_0.md` and
`Mystery Quest ruleset 0_9_6_0.md` (includes the 0.9.5.1–0.9.5.9 patches and 0.9.6.0).

## Document head and general

- Title/subtitle reworded ("TTRPG ruleset for Mystery Dungeon…"); byline version 0.9.6.
- The document's own ToC page numbers updated; the visual-bare-bones NOTICE removed.

## Derived combat values and modifiers

- New derived value **Initiative modifier = Speed**.
- New **Unmodified values** section: initiatives and their rolls, Move Ranges and Shape
  Sizes, and maximum/current PP never take modifiers.

## Abilities

- **Healer:** the Heal Move is used as a Main Action and costs 3 PP (wording clarified).
- **Form Change:** both forms have the "Form Change" Ability; currently lost HP carries
  over (wording clarified).
- **Weather Setter:** the weather list now uses **Snow** instead of Hail.
- **Wonder Guard:** immune to all damage not caused by Status Conditions, except from
  elemental types the character is Weak against.

## Combat tests

- To-Hit: a natural 20 on the Accuracy roll of a damaging Move **always hits and is a
  Critical Hit** (previously only a Critical Hit).
- True Damage: by default typeless even when caused by a typed Move; only explicitly
  typed True Damage is modified by Resistances/Weaknesses.
- Chip Damage wording clarified (multi-attack Moves can cause it only once).

## Moves

- Move entries restructured: **Effects** group with **Secondary effects** (buffs, debuffs,
  Status Conditions) and **Other effects** (other effects and interactions); the
  **Description** field is now lore text only ("how the Move appears in the game world",
  no rules text).
- Additional keywords table restructured; new keywords **Condition** (resolved as a Status
  Condition with removal DC 10), **Trapping** and **Pledge**; Recharging now lasts "until
  their next End Phase"; Charging wording clarified.
- "Damage" renamed to **Power** in the Basic attack text.
- Example Move conversions updated to the new structure; Stealth Rock's converted AoE
  placement changed to Ranged, 5 m size, 15 m Range.

## Rounds, turns and actions

- "Standard effects" section renamed **Secondary effects**.
- End Phase wording standardized; Resist Stance now reduces new debuffs by one stage
  (previously halved) and rolls Status Condition removal in the End Phase.
- Stances: the Stance's Effect is applied to the user as long as the Stance remains.
- Shove/Pin/Restrict now cause **forced movement**; new **Forced movement** section
  (straight line, interrupted by obstacles, not by other characters unless caught,
  overlap repositioning, GM rules on sliding/detaching) and new **Catch (Reaction)** that
  can stop an ally's forced movement.
- Falling now uses forced movement ("forcibly moved towards the ground").

## Secondary effects

- Turn-End Decay happens in the End Phase and reduces by one stage (normally 2, but 4 for
  Accuracy and Evasion); skipped on the turn a buff/debuff is initially applied.
- Status Condition damage is inflicted at the start of the End Phase; Burn reduces the
  Power of Physical Moves by 4 for as long as the condition remains; removal tests roll
  d20 > DC per condition in the End Phase.

## Weather

- Weather condition list uses **Snow** instead of Hail.
