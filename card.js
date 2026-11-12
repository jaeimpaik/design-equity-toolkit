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

// ---------- Choose a pleasant voice (the device's default can sound robotic) ----------
// Names of friendly, natural-sounding voices on different devices, best first.
const PREFERRED = ["Samantha", "Ava", "Allison", "Susan", "Karen", "Moira", "Serena", "Daniel", "Google US English",
  "Microsoft Aria", "Microsoft Jenny", "Microsoft Zira", "Microsoft Guy", "Natural"];
// Novelty / robotic voices to avoid (mostly on Mac).
const AVOID = /albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|fred|good news|hysterical|junior|kathy|organ|ralph|trinoids|whisper|zarvox|superstar|wobble|jester|grandma|grandpa|rocko|shelley|flo|eddy|reed|sandy|espeak/i;
function pickVoice() {
  if (!synth) return null;
  const en = synth.getVoices().filter(v => /^en([-_]|$)/i.test(v.lang) && !AVOID.test(v.name));
  if (!en.length) return null;
  for (const name of PREFERRED) {
    const hit = en.find(v => v.name.includes(name) && /^en[-_]US/i.test(v.lang)) || en.find(v => v.name.includes(name));
    if (hit) return hit;
  }
  return en.find(v => /^en[-_]US/i.test(v.lang) && v.localService) || en.find(v => /^en[-_]US/i.test(v.lang)) || en[0];
}
if (synth && synth.onvoiceschanged !== undefined) synth.onvoiceschanged = () => {};  // some browsers load voices late

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
  const v = pickVoice(); if (v) { u.voice = v; u.lang = v.lang; }
  u.rate = 0.95;
  u.onend = u.onerror = stopAudio;
  synth.cancel(); synth.speak(u);
  audioBtn.setAttribute("aria-pressed", "true"); $("audioLabel").textContent = "stop";
});
window.addEventListener("pagehide", stopAudio);

render();
