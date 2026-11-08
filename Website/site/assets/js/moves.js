// moves.js — Move browser: filters + free-text search over moves.json.
import { moveCardEl } from "./moves-lib.js";
import { loadCustomMoves, saveCustomMoves } from "./main.js";

async function init() {
  const grid = document.getElementById("moves-grid");
  const moves = await (await fetch("/assets/data/moves.json")).json(); // library Moves

  const types = [...new Set(moves.map((m) => m.type))].sort();
  // one Keyword filter with every keyword, incl. the Category / Targeting / Melee-Long Range groups
  const keywords = ["Single-target", "Area of Effect", "Physical", "Special", "Status", "Melee", "Long Range", "Priority", "Counter", "Charging", "Recharging", "Single-target (self)", "Pledge", "Trapping", "Condition"];
  const fill = (id, values) => {
    const sel = document.getElementById(id);
    for (const v of values) {
      const o = document.createElement("option");
      o.value = v; o.textContent = v;
      sel.appendChild(o);
    }
    // width fits this select's own longest option, so it never resizes when the selection changes
    const longest = Math.max(3, ...values.map((v) => v.length)); // 3 = "All"
    sel.style.minWidth = `${longest + 2}ch`;
  };
  fill("f-type", types);
  fill("f-keyword", keywords);

  const state = { type: "", keyword: "", conversion: "", q: "" };
  const apply = () => {
    grid.innerHTML = "";
    const q = state.q.toLowerCase();
    const customMoves = loadCustomMoves(); // re-read so deletes/edits show up
    const byName = (a, b) => (a.name || "").localeCompare(b.name || "");
    // custom Moves first, each group sorted alphabetically by name
    const allMoves = [...customMoves].sort(byName).concat([...moves].sort(byName));
    const shown = allMoves.filter((m) => {
      if (state.type && m.type !== state.type) return false;
      if (state.keyword && !m.keywords.includes(state.keyword)) return false;
      if (state.conversion && m.conversion !== state.conversion) return false;
      if (q && !(`${m.name} ${m.type} ${m.keywords.join(" ")} ${m.power} ${m.secondaryEffect} ${m.description} ${m.range}`.toLowerCase().includes(q))) return false;
      return true;
    });
    document.getElementById("moves-count").textContent = `${shown.length} of ${allMoves.length} Moves (${customMoves.length} custom)`;
    for (const m of shown) grid.appendChild(m.custom ? customMoveCard(m, apply) : moveCardEl(m));
  };

  const card = (m) => moveCardEl(m);

  // a custom Move card with Delete / Edit buttons in place of the conversion badge
  function customMoveCard(m, onChanged) {
    const card = moveCardEl(m);
    const actions = document.createElement("div");
    actions.className = "move-actions";
    const del = document.createElement("button");
    del.className = "btn small danger"; del.type = "button"; del.textContent = "Delete";
    del.addEventListener("click", () => {
      if (!confirm(`Delete custom Move ${m.name}?`)) return;
      saveCustomMoves(loadCustomMoves().filter((x) => x.id !== m.id));
      onChanged();
    });
    const edit = document.createElement("a");
    edit.className = "btn small"; edit.textContent = "Edit ›"; edit.href = `/moves/editor/?id=${encodeURIComponent(m.id)}`;
    actions.append(del, edit);
    card.appendChild(actions); // buttons inside the card
    return card;
  }

  for (const [id, key] of [["f-type", "type"], ["f-keyword", "keyword"], ["f-conversion", "conversion"], ["f-q", "q"]]) {
    document.getElementById(id).addEventListener("input", (e) => { state[key] = e.target.value; apply(); });
  }
  apply();
}

document.addEventListener("DOMContentLoaded", init);
