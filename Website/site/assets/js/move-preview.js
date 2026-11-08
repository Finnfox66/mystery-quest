// move-preview.js — preview page for a custom Move: just the Move card.

import { loadCustomMoves } from "./main.js";
import { moveCardEl } from "./moves-lib.js";

const id = new URLSearchParams(location.search).get("id");
const move = loadCustomMoves().find((m) => m.id === id);

const wrap = document.getElementById("move-preview");

const toolbar = document.createElement("div");
toolbar.className = "sheet-toolbar";
toolbar.innerHTML = `<a class="btn small" href="/moves/">‹ Moves</a>
  <strong id="mv-title"></strong>
  <span style="flex:1"></span>
  <a class="btn small" id="mv-edit" href="/moves/editor/?id=${encodeURIComponent(id || "")}">Edit</a>`;
wrap.appendChild(toolbar);

if (move) {
  toolbar.querySelector("#mv-title").textContent = move.name;
  wrap.appendChild(moveCardEl(move));
} else {
  toolbar.querySelector("#mv-title").textContent = "Move not found";
  const p = document.createElement("p");
  p.className = "snippet";
  p.textContent = "No custom Move with this id. Create one from the Moves page.";
  wrap.appendChild(p);
}
