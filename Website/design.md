# design.md — visual design reference for the Pokémon Mystery Quest website

Design practices extracted from the screen examples in `Website/design-reference/`
(Home, Rules, "Character creator – characters list"; PNG + SVG). **The examples display
primarily placeholder content and are basic style examples only — they are not final
versions and should not be interpreted exactly.** Where the examples and the plans
disagree, `CONTENT_PLAN.md` / `TECHNICAL_PLAN.md` win on content and behavior.

## Palette (extracted from the SVG fills/stops and PNG pixels)

| Color | Use |
| :--- | :--- |
| `#272727` | Dark header band (full width, top of every page); primary text |
| `#FFFFFF` / `#EEEEEE` | Content card surfaces |
| `#CCCCCC` | Page background (light gray) around the cards |
| `#AAAAAA` | Card borders / hairlines, secondary text |
| `#838383` | Darker secondary gray |
| `#33517C` → `#C84545` | **Horizontal linear gradient from `#33517C` (blue) to `#C84545` (red)**, used for the **Home page content logo** (and CTA banner); the top-bar logo is **white**; `#33517C` also appears as a flat accent (e.g. Rules page highlights/links) |

Light theme only; no dark mode (consistent with TECHNICAL_PLAN §4).

## Typography

- Default text font: **Inter** (Google Font).
- **Logo and rules-page headings: "IM Fell Great Primer"** (Google Font). It has **no Bold
  style** — never use bold for the logo or rules headings; hierarchy comes from size and
  color.

## Refinements after the examples (decided later, implemented)

- Top-bar **logo is white** (the gradient is used only for the Home page content logo and
  the CTA banner); the top bar is thin.
- Nav tabs mark the current page with a **bottom border line** (not button styling).
- **Buttons** are dark like the top bar (`#272727`) with white text (gradient for the
  primary CTA; light red text for danger).
- **Links** use the gradient blue `#33517C`; **visited links** use the red `#C84545`.
- Page-level cards are `#EEEEEE` with white inner surfaces (inputs, Move cards, list rows);
  Home and Rules cards stay `#FFFFFF` (no white clickable content inside).
- Page headings (Moves, Character creator, …) are 24px Inter; rules section headings stay
  IM Fell Great Primer; the Home logo is 64px IM Fell with the gradient.
- The grey palette carries a subtle warm (paper-like) tint: --ink #2B2926, --page-bg #D2CEC6, --card #FFFEFB, --card-alt #F1EEE8, --line #B1ACA4, --muted #87837C (plus the matching hardcoded greys).
- "Add/Set" actions open a **modal** (× top-right, Cancel bottom-right, backdrop/Esc
  close); added items are cards with a Remove button (right side, or below when narrow).
- Scrollbars are always reserved (`overflow-y: scroll` on the page and the rules columns),
  so content never shifts when a scrollbar appears.

## Layout practices

- **Global chrome**: thin full-width dark header (`#272727`) with a **white** logo and
  navigation (tabs mark the current page with a bottom line); below it a light-gray
  (`#CCCCCC`) page background with centered content.
- **Cards, not floating surfaces**: content sits in cards with `#AAAAAA` hairline borders
  and small corner radii (~3.5–4 px — rounded, not pill); **no drop shadows** on ordinary
  content (matches TECHNICAL_PLAN §4).
- **Home**: one centered card; the top of the card is the **hero image**
  (`Website/site/assets/images/Hero image.jpg`), with text and the gradient logo/CTA
  banner below it.
- **Rules**: two-column layout on the gray background — left outline/contents column,
  main rules column in a card; blue `#33517C` used for accents (active outline item /
  links).
- **Character creator (characters list)**: white card containing the list rows, separated
  by `#AAAAAA` hairlines.
- Spacing is airy on general pages (Home), compact on tool pages (creator) — consistent
  with TECHNICAL_PLAN §4/§4.1.
