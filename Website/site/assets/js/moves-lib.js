// moves-lib.js — shared Move card rendering + per-character resolution of formula fields.

// STAB: one additional set of the Move's Power Dice. Single-target Moves carry one set,
// which is doubled (d10 -> 2d10); AoE Moves already carry two sets (written as e.g. 2d10),
// so one more set is written + half (2d10 -> 3d10, not 4d10).
function addStabDice(expr, isAoe) {
  return expr.replace(/(\d*)d(\d+)/g, (m, n, f) => {
    const c = n ? +n : 1;
    return `${isAoe ? c + c / 2 : c * 2}d${f}`;
  });
}

// Resolve formula fields (Range, Shape Size, Attack Power) against a character's final stats.
// m: move object from moves.json; finalStat: (statKey) => number; level: character level;
// types: the character's types (for STAB).
// Returns { range, shapeSize, attackPower } — formulas replaced by final calculations where applicable.
export function computeMoveFields(m, finalStat, level, types) {
  const isStatus = m.keywords.some((k) => k.toLowerCase() === "status");
  const atkKey = m.keywords.some((k) => k.toLowerCase() === "special") ? "specialAttack" : "attack";
  const atk = finalStat(atkKey);

  let range = m.range || "-";
  if (!isStatus) {
    if (/20 m \+ 2x/.test(range)) range = `${20 + 2 * atk} m`;
    else if (/10 m \+/.test(range)) range = `${10 + atk} m`;
  }
  // Status ranges (15 m), Melee (1 m), Self stay as written.

  let shapeSize = m.shapeSize || "";
  if (shapeSize && !isStatus) {
    if (/2 m \+ half/.test(shapeSize)) shapeSize = `${2 + Math.ceil(atk / 2)} m`;
    else if (/4 m \+ the/.test(shapeSize)) shapeSize = `${4 + atk} m`;
  }
  // Status sizes (5 m / 10 m / 50 m) stay as written.

  // Attack Power when using the Move: the Move's Power + the relevant (Sp.) Attack
  // (plus one more set of its Power Dice — STAB — when the Move's type is one of the user's types).
  // Only for standard dice-based Power values; custom/non-standard Power gets no calculation.
  const stab = Array.isArray(types) && types.includes(m.type);
  const isAoe = m.keywords.some((k) => k.toLowerCase().includes("area of effect"));
  const standardPower = /^[0-9d+\s]+$/.test(m.power || "") && /d\d/.test(m.power || "");
  let attackPower = "";
  if (!isStatus && standardPower) {
    const expr = stab ? addStabDice(m.power, isAoe) : m.power;
    const cm = expr.match(/^(\d+)\s*\+\s*(.*)$/);
    attackPower = cm ? `${+cm[1] + atk} + ${cm[2]}` : `${atk} + ${expr}`;
  }
  return { range, shapeSize, attackPower };
}

// Full Move card, same as on the Moves page. The rows present the actual rules text;
// `resolved` (optional) adds a bottom section with per-character calculated values.
export function moveCardEl(m, resolved) {
  const el = document.createElement("div");
  el.className = "move-card";
  const badge = m.conversion === "indirect" ? '<span class="badge indirect">indirect conversion</span>' : "";
  const shape = m.shape ? `${m.shape}${m.shapeSize ? `, ${m.shapeSize}` : ""}${m.placementType ? `, ${m.placementType}` : ""}` : "-";
  const rows = [
    ["Type", m.type],
    ["Keywords", m.keywords.join(", ")],
    ["PP cost", m.ppCost ?? "-"],
    ["Range", m.range || "-"],
    ["Shape", shape],
    ["Accuracy", m.accuracy || "-"],
    ["Power", m.power || "-"],
    ["Secondary effect", m.secondaryEffect || "-"],
    ["Description", m.description || "-"],
  ];
  el.innerHTML = `<h3>${m.name}${badge}</h3><dl>${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>`;
  // bottom section: values calculated for this character (only when resolved is given, i.e. in the sheet preview)
  if (resolved) {
    const isStatus = m.keywords.some((k) => k.toLowerCase() === "status");
    const calc = [];
    if (!isStatus && m.range && m.range !== "-") calc.push(["Range", resolved.range]);
    if (resolved.shapeSize && resolved.shapeSize !== (m.shapeSize || "")) calc.push(["Shape size", resolved.shapeSize]);
    if (resolved.attackPower) calc.push(["Attack Power", resolved.attackPower]);
    if (calc.length) {
      const div = document.createElement("div");
      div.className = "move-calc";
      div.innerHTML = `<div class="calc-title">Calculated</div><dl>${calc.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>`;
      el.appendChild(div);
    }
  }
  return el;
}
