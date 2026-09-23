/**
 * Cursor-following spotlight for `.spotlight` cards.
 * Writes the pointer position into CSS vars; the glow itself is pure CSS.
 */
export function trackSpotlight(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty("--mx", `${e.clientX - r.left}px`)
  el.style.setProperty("--my", `${e.clientY - r.top}px`)
}
