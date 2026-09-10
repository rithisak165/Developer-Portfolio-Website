import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Img1 from "../../assets/img1.jpg"
import Img2 from "../../assets/img2.jpg"
import Img4 from "../../assets/img4.jpg"
import Img5 from "../../assets/image5.png"
import FModelling from "../../assets/fmodelling.png"
import Footer from "../Footer"
import ScrollToNext from "../ScrollToNext"
import Reveal from "../ui/Reveal"
import { EASE } from "../../lib/motion"
import { Section, SectionHead, LiveDot } from "../ui/Section"

/* ── Featured internship project ── */
const featured = {
  title: "AFM — Financial Modelling Platform",
  company: "Inklusivity Technology",
  role: "Software Developer Internship · 3 Months · Completed",
  link: "https://fmodelling.e-workplace.net/",
  image: FModelling,
  description:
    "A full financial modelling & projection platform that I designed, built and shipped 100% alone — from an empty repository to a live production system — during my 3-month internship. It generates real-time 7-year financial projections with live dashboards, charts and Excel export.",
  highlights: [
    "7-Year P&L, Balance Sheet & Cash Flow projections",
    "Scenario analysis — Business As Usual vs Project",
    "Depreciation, debt schedule & company valuation",
    "Interactive dashboards, Excel export & EN/KH languages",
  ],
  tags: ["React", "Tailwind CSS", "Laravel API", "PostgreSQL", "Chart.js", "i18n EN/KH"],
  credentials: [{ role: "User", email: "bitthork165@gmail.com", password: "Msksak1651" }],
}

/* ── Other projects ── */
const projects = [
  {
    id: 1,
    title: "Student Management System",
    description:
      "3-role system (Admin, Teacher, Student) with different permission levels to access features Real world project.",
    tags: ["React", "Tailwind", "Laravel", "PostgreSQL"],
    image: Img4,
    link: "#",
    video: "/student_management_demo.mp4",
    status: "live",
  },
  {
    id: 2,
    title: "Drink Store System",
    description:
      "2-role system (Admin, Customer) with different permission levels to access features real payment access QR pop up.",
    tags: ["React", "Tailwind", "Laravel", "PostgreSQL"],
    image: Img5,
    link: "#",
    video: "/drink_store_demo.mp4",
    status: "live",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio built with React + Tailwind CSS as my final project at Etec Center.",
    tags: ["React", "Tailwind"],
    image: Img2,
    link: "#",
    status: "live",
  },
  {
    id: 4,
    title: "License Key Website",
    description:
      "A game hacking & selling platform with cart, checkout, payment integration, and automatic key generation.",
    tags: ["React", "Laravel", "PostgreSQL", "Tailwind"],
    image: Img1,
    link: "https://laravel-project-hosting.onrender.com/",
    status: "live",
  },
]

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "3", label: "Months Internship" },
  { value: "1", label: "Live Production App" },
  { value: "100%", label: "Self-Built From 0" },
]

/* ── Copy-to-clipboard chip ── */
function CopyChip({ value }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <button
      onClick={copy}
      title="Copy to clipboard"
      className={`group/chip inline-flex max-w-full items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors duration-300 sm:text-xs ${
        copied
          ? "border-live/40 bg-live/10 text-live"
          : "border-line bg-surface text-ink-soft hover:border-accent/50 hover:text-ink"
      }`}
    >
      <span className="truncate">{value}</span>
      {copied ? (
        <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg
          className="h-3.5 w-3.5 shrink-0 opacity-45 transition-opacity duration-300 group-hover/chip:opacity-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  )
}

/* ── Video lightbox ── */
function VideoModal({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project demo video"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.985 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-colors duration-300 hover:border-accent hover:bg-accent"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <video src={src} controls autoPlay className="max-h-[82svh] w-full bg-black" />
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <main className="bg-paper text-ink">
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal src={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </AnimatePresence>

      {/* ═══ Header ═══ */}
      <section className="bg-noise relative overflow-hidden border-b border-line">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[440px] w-[440px] rounded-full bg-accent/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="shell relative pb-14 pt-28 sm:pt-36">
          <Reveal className="flex items-center gap-4">
            <span className="label text-accent-ink">00</span>
            <span className="label">My Work</span>
            <span className="h-px w-16 bg-line" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-4xl font-display text-display font-semibold text-ink">
              Projects that <span className="text-accent">ship</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-ink-soft text-pretty sm:text-base">
              A curated selection of what I&apos;ve built — from full-stack web apps to a real
              production platform delivered during my internship.
            </p>
          </Reveal>
        </div>

        <div className="shell">
          <div className="grid grid-cols-2 divide-x divide-y divide-line border-x border-t border-line sm:divide-y-0 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="px-4 py-8 text-center sm:px-6 sm:py-10">
                <p className="font-display text-3xl font-semibold tracking-tighter text-ink sm:text-4xl">
                  {s.value}
                </p>
                <p className="label mt-2">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Featured ═══ */}
      <Section>
        <SectionHead
          index="01"
          label="Featured — Internship Project"
          title={featured.title}
          description={featured.description}
          aside="Live in production"
        />

        <Reveal delay={0.1} className="mt-12">
          <article className="group overflow-hidden rounded-2xl border border-line bg-surface">
            {/* Screenshot */}
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[16/10] overflow-hidden bg-surface-2 sm:aspect-[16/8]"
            >
              <img
                src={featured.image}
                alt={`${featured.title} — dashboard screenshot`}
                className="h-full w-full object-cover object-left-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                  <LiveDot />
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                    Live in Production
                  </span>
                </span>
                <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-md">
                  Built solo · from 0 → production
                </span>
              </div>

              <span className="absolute bottom-4 right-4 flex translate-y-1 items-center gap-2 rounded-full border border-white/20 bg-black/55 px-3.5 py-2 opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-6 sm:right-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white">
                  Open live site
                </span>
                <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>

            {/* Body */}
            <div className="grid grid-cols-1 gap-8 border-t border-line p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
              <div className="lg:col-span-7">
                <p className="label text-accent-ink">
                  {featured.company} · {featured.role}
                </p>

                <ul className="mt-6 border-t border-line">
                  {featured.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 border-b border-line py-3.5 text-[15px] text-ink-soft"
                    >
                      <svg
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-pretty">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demo credentials + CTA */}
              <div className="lg:col-span-5">
                <div className="rounded-xl border border-line bg-surface-2 p-5">
                  <p className="label flex items-center gap-2">
                    <i className="fa-solid fa-key text-accent-ink" />
                    Demo Login — try it yourself
                  </p>

                  <div className="mt-4 space-y-3">
                    {featured.credentials.map((c) => (
                      <div key={c.role} className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-accent-ink">
                          {c.role}
                        </span>
                        <CopyChip value={c.email} />
                        <CopyChip value={c.password} />
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 font-mono text-[11px] text-muted">Click any value to copy it.</p>
                </div>

                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent mt-5 w-full"
                >
                  Visit Live Site
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      {/* ═══ More projects ═══ */}
      <Section className="border-t border-line bg-surface-2/40">
        <SectionHead index="02" label="Selected Work" title="More Projects" aside={`${projects.length} projects`} />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-500 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-xl hover:shadow-black/5">
                {/* Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                  <span className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/85">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 backdrop-blur-md">
                    <LiveDot />
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white">Live</span>
                  </span>

                  {project.video && (
                    <button
                      onClick={() => setSelectedVideo(project.video)}
                      aria-label={`Play demo video for ${project.title}`}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="flex h-14 w-14 scale-90 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
                        <svg className="ml-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-ink sm:text-[22px]">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft text-pretty">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-line pt-5">
                    {project.video ? (
                      <button
                        onClick={() => setSelectedVideo(project.video)}
                        className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-ink"
                      >
                        <span className="link-underline">View Demo Video</span>
                        <span className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1 text-accent-ink">
                          →
                        </span>
                      </button>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-ink"
                      >
                        <span className="link-underline">View Project</span>
                        <span className="transition-transform duration-300 ease-out group-hover/cta:translate-x-1 text-accent-ink">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <ScrollToNext to="/contact" label="Contact Me" />
      <Footer />
    </main>
  )
}
