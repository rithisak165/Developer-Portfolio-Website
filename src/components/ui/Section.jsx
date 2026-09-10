import Reveal from "./Reveal"

/**
 * Ruled, numbered section header — the spine of the layout system.
 * Every section on the site opens with one of these so the rhythm is identical.
 */
export function SectionHead({ index, label, title, description, aside, className = "" }) {
  return (
    <header className={`relative ${className}`}>
      {/* Hairline rule + index, the "spec sheet" motif */}
      <Reveal className="flex items-center gap-4 pb-5 border-b border-line">
        <span className="label text-accent-ink">{index}</span>
        <span className="label">{label}</span>
        <span className="flex-1 h-px bg-line" aria-hidden="true" />
        {aside && <span className="label hidden sm:block">{aside}</span>}
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end">
        <Reveal delay={0.06} className="lg:col-span-7">
          <h2 className="font-display text-display-sm font-semibold text-ink">{title}</h2>
        </Reveal>
        {description && (
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="text-ink-soft text-[15px] leading-relaxed text-pretty lg:pb-2">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  )
}

/** Consistent vertical rhythm for every band on the page. */
export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`py-20 sm:py-28 lg:py-32 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  )
}

/** Small live-status dot with a soft expanding ring. */
export function LiveDot({ className = "" }) {
  return (
    <span className={`relative inline-flex h-1.5 w-1.5 shrink-0 ${className}`} aria-hidden="true">
      <span className="absolute inset-0 rounded-full bg-live animate-pulse-ring" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
    </span>
  )
}
