// Helpers shared by the landing page and the single-card page.
//
// In cards-data.js a step can be:
//   - plain text:                 "Do this thing."
//   - text with a link:           "Read [this link](https://example.com) first."
//   - text with sub-steps:        { text: "Main step", sub: ["a first point", "a second point"] }

// Writes text into `parent`, turning [label](url) into a real link.
function richText(parent, text) {
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    parent.append(document.createTextNode(text.slice(last, m.index)));
    const a = document.createElement("a");
    a.href = m[2]; a.textContent = m[1];
    a.target = "_blank"; a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", m[1] + " (opens in a new tab)");
    parent.append(a);
    last = m.index + m[0].length;
  }
  parent.append(document.createTextNode(text.slice(last)));
}

// Same text without the link markup (used for audio).
function plainText(text) { return text.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, "$1"); }

// Fills an <ol> with the steps (numbers are automatic; sub-steps get letters).
function buildSteps(ol, steps) {
  steps.forEach(s => {
    const li = document.createElement("li");
    richText(li, typeof s === "string" ? s : s.text);
    if (s.sub && s.sub.length) {
      const sub = document.createElement("ol"); sub.type = "a"; sub.className = "substeps";
      s.sub.forEach(t => { const x = document.createElement("li"); richText(x, t); sub.append(x); });
      li.append(sub);
    }
    ol.append(li);
  });
}

// Steps as one string for read-aloud.
function stepsForAudio(steps) {
  return steps.map((s, i) => {
    const main = plainText(typeof s === "string" ? s : s.text);
    const subs = (s.sub || []).map((t, j) => "Part " + String.fromCharCode(97 + j) + ". " + plainText(t)).join(" ");
    return "Step " + (i + 1) + ". " + main + (subs ? " " + subs : "");
  }).join(" ");
}
