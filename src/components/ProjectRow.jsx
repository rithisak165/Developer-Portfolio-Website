import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import Reveal from "./ui/Reveal"
import { LiveDot } from "./ui/Section"

/* Browser-frame screenshot with a gentle cursor tilt. Same frame for every project. */
function ProjectMedia({ project, onPlay }) {
  const reduce = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(rx, { stiffness: 140, damping: 18 })
  const rotateY = useSpring(ry, { stiffness: 140, damping: 18 })

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 5)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 5)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  const screenshot = (
    <>
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
    </>
  )

  return (
    <div className="relative [perspective:1400px]" onPointerMove={onMove} onPointerLeave={reset}>
      {/* Soft accent glow behind the frame */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-[32px] bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover/row:opacity-100"
        aria-hidden="true"
      />

      <motion.div
        style={{ rotateX, rotateY }}
        className="group relative overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] transition-colors duration-500 group-hover/row:border-line-strong"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </div>
          <span className="mx-auto truncate font-mono text-[11px] text-muted">{project.title}</span>
          <span className="w-[42px]" aria-hidden="true" />
        </div>

        {project.video ? (
          <button
            onClick={() => onPlay(project.video)}
            aria-label={`Play demo video for ${project.title}`}
            className="relative block w-full overflow-hidden"
          >
            {screenshot}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_30px_-8px_hsl(var(--accent)/0.8)] transition-transform duration-500 ease-out group-hover:scale-110 sm:h-16 sm:w-16">
                <svg className="ml-0.5 h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        ) : (
          <div className="relative overflow-hidden">{screenshot}</div>
        )}
      </motion.div>
    </div>
  )
}

const arrow = (
  <svg
    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
  </svg>
)

/**
 * One project in the showcase: screenshot on one side, story on the other,
 * alternating sides down the page. Every project gets the same weight.
 */
export default function ProjectRow({ project, index, total, reverse, onPlay }) {
  return (
    <article className="group/row grid grid-cols-1 items-center gap-10 border-t border-line py-16 first:border-t-0 first:pt-0 sm:py-20 lg:grid-cols-12 lg:gap-14">
      <Reveal y={24} className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <ProjectMedia project={project} onPlay={onPlay} />
      </Reveal>

      <div className="lg:col-span-5">
        <Reveal className="flex flex-wrap items-center gap-3">
          <span className="label text-accent-ink">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="h-px w-8 bg-line" aria-hidden="true" />
          {project.badge ? (
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-ink">
              {project.badge}
            </span>
          ) : (
            project.status === "live" && (
              <span className="flex items-center gap-2">
                <LiveDot />
                <span className="label">Live</span>
              </span>
            )
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {project.title}
          </h3>
          {project.subtitle && <p className="mt-2 text-[15px] font-medium text-ink-soft">{project.subtitle}</p>}
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft text-pretty">{project.description}</p>
        </Reveal>

        {project.features && (
          <Reveal delay={0.12}>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink-soft">
                  <svg className="mt-[5px] h-3 w-3 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.6} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {project.roles && (
          <Reveal delay={0.14} className="mt-6 flex flex-wrap items-center gap-2">
            <span className="label mr-1">Roles</span>
            {project.roles.map((r) => (
              <span key={r} className="rounded-full border border-line bg-surface px-3 py-1 text-[12px] font-medium text-ink-soft">
                {r}
              </span>
            ))}
          </Reveal>
        )}

        <Reveal delay={0.16} className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
          {project.video && (
            <button onClick={() => onPlay(project.video)} className="btn-accent !px-5 !py-3">
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch demo
            </button>
          )}

          {project.docs && (
            <a href={project.docs.href} target="_blank" rel="noopener noreferrer" className="btn-ghost group !px-5 !py-3">
              <i className="fa-solid fa-book-open text-[12px] text-accent-ink" />
              {project.docs.label}
              {arrow}
            </a>
          )}

          {project.link && project.link !== "#" && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-ghost group !px-5 !py-3">
              View Project
              {arrow}
            </a>
          )}

          {project.here && (
            <span className="inline-flex items-center gap-2 font-mono text-[12px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              You&apos;re viewing it right now
            </span>
          )}
        </Reveal>
      </div>
    </article>
  )
}
