// Single card page (the page an NFC tap opens): card.html?id=complex-systems-mapping

const ORDERED = PHASES.flatMap(p => CARDS.filter(c => c.phase === p.key));
const params = new URLSearchParams(location.search);
let index = Math.max(0, ORDERED.findIndex(c => c.id === params.get("id")));

const $ = id => document.getElementById(id);
const synth = window.speechSynthesis;

function add(parent, tag, text, cls) {
  const n = document.createElement(tag);
  if (text) n.textContent = text;
  if (cls) n.className = cls;
  parent.append(n); return n;
}

function render() {
  const c = ORDERED[index];
  const ph = PHASES.find(p => p.key === c.phase);
  stopAudio();
  document.title = c.title + " | Design for Equity Toolkit";

  const phase = $("phase");
  phase.textContent = ph.name; phase.style.background = ph.bg; phase.style.color = ph.ink;

  const sheet = $("sheet"); sheet.replaceChildren();
  add(sheet, "h1", c.title);
  add(sheet, "p", c.question);
  const img = add(sheet, "img"); img.src = "assets/illustrations/" + c.image; img.alt = c.imageAlt;
  add(sheet, "hr");
  const ol = add(sheet, "ol", null, "steps"); buildSteps(ol, c.steps);
  if (c.citations.length) {
    const box = add(sheet, "div", null, "cites");
    add(box, "strong", "Sources"); c.citations.forEach(t => add(box, "p", t));
  }

  $("prev").disabled = index === 0;
  $("next").disabled = index === ORDERED.length - 1;
  history.replaceState(null, "", "?id=" + c.id);   // URL always matches the card shown
  window.scrollTo(0, 0);
}

$("prev").addEventListener("click", () => { if (index > 0) { index--; render(); } });
$("next").addEventListener("click", () => { if (index < ORDERED.length - 1) { index++; render(); } });
document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") $("prev").click();
  if (e.key === "ArrowRight") $("next").click();
});

// ---------- Audio: reads title, question, steps (not citations) ----------
const audioBtn = $("audio");
function stopAudio() {
  if (synth) synth.cancel();
  audioBtn.setAttribute("aria-pressed", "false"); $("audioLabel").textContent = "audio";
}
if (!synth) { audioBtn.hidden = true; }
audioBtn.addEventListener("click", () => {
  if (audioBtn.getAttribute("aria-pressed") === "true") { stopAudio(); return; }
  const c = ORDERED[index];
  const text = [c.title + ".", c.question]
    .concat([stepsForAudio(c.steps)]).join(" ");
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.onend = u.onerror = stopAudio;
  synth.cancel(); synth.speak(u);
  audioBtn.setAttribute("aria-pressed", "true"); $("audioLabel").textContent = "stop";
});
window.addEventListener("pagehide", stopAudio);

render();
