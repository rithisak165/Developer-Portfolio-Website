import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import Footer from "../Footer"
import ScrollToNext from "../ScrollToNext"
import Reveal from "../ui/Reveal"
import { EASE } from "../../lib/motion"
import { Section, SectionHead, LiveDot } from "../ui/Section"
import profilePhoto from "../../assets/profile.png"
import certCpp from "../../assets/cert_cpp.jpg"
import certPython from "../../assets/cert_python.jpg"
import certJava from "../../assets/cert_java.jpg"
import certReactjs from "../../assets/cert_reactjs.jpg"
import certPhp from "../../assets/cert_php.jpg"

const skills = [
  "React", "JavaScript", "Tailwind CSS", "Bootstrap",
  "PHP", "Laravel", "Git", "PostgreSQL", "Hosting",
]

const quickFacts = [
  { icon: "fa-solid fa-location-dot", label: "Based in", value: "Phnom Penh, Cambodia" },
  { icon: "fa-solid fa-graduation-cap", label: "Studying", value: "Norton University" },
  { icon: "fa-solid fa-code", label: "Focus", value: "Full Stack Web Development" },
]

const certificates = [
  {
    id: 1,
    title: "Basic / Advance C / C++ / OOP & Algorithm",
    granted: "October 15, 2024",
    image: certCpp,
    icon: <i className="fa-solid fa-cogs"></i>,
  },
  {
    id: 2,
    title: "Basic / Advance Python / Flask & Project Courses",
    granted: "March 15, 2025",
    image: certPython,
    icon: <i className="fa-brands fa-python"></i>,
  },
  {
    id: 3,
    title: "Basic / Advance Java / MySQL / iReport & Project Courses",
    granted: "June 15, 2025",
    image: certJava,
    icon: <i className="fa-brands fa-java"></i>,
  },
  {
    id: 4,
    title: "Basic / Advance PHP / MySQL / Laravel / API & Project Courses",
    granted: "October 15, 2025",
    image: certPhp,
    icon: <i className="fa-brands fa-php"></i>,
  },
  {
    id: 5,
    title: "HTML, CSS, Bootstrap, JavaScript, ReactJS & Project Courses",
    granted: "November 15, 2025",
    image: certReactjs,
    icon: <i className="fa-brands fa-react"></i>,
  },
]

const experiences = [
  {
    role: "Full-stack Developer Intern — Inklusivity Technology",
    period: "2026 · 6 Months (Completed)",
    type: "Internship",
    desc: "Designed and built AFM, a full financial modelling platform (7-year P&L, balance sheet, cash flow, valuation & scenario projections), 100% solo from an empty repo to production — now live at fmodelling.e-workplace.net.",
  },
  {
    role: "Studying at Norton University",
    period: "2023 – Present",
    type: "Education",
    desc: "Studying Software Development, focusing on coding, technology, and creating innovative digital solutions.",
  },
  {
    role: "Etec Center",
    period: "2021 – Present",
    type: "Learning",
    desc: "After finishing my BacII in 2022, I started learning C, C++, Python, Flask, Java, SQL, web design, and PHP Laravel at Etec Center to strengthen my programming and web development skills.",
  },
]

const stats = [
  { value: `${certificates.length}`, label: "Certificates" },
  { value: "6", label: "Months Interning" },
  { value: `${skills.length}`, label: "Technologies" },
  { value: "5+", label: "Projects Shipped" },
]

/* ── Certificate lightbox ── */
function CertificateModal({ cert, onClose }) {
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
      aria-label={cert.title}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.985 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative z-10 flex max-h-[90svh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="label">Certificate of Completion</p>
            <h3 className="mt-1.5 font-display text-[15px] font-semibold leading-snug text-ink">
              {cert.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors duration-300 hover:border-accent hover:text-accent-ink"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center bg-surface-2 p-4 sm:p-6">
          <img
            src={cert.image}
            alt={`Certificate – ${cert.title}`}
            className="max-h-[62svh] w-auto max-w-full rounded-lg border border-line object-contain"
          />
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-4 sm:px-6">
          <span className="label">Granted: {cert.granted}</span>
          <span className="flex items-center gap-2 rounded-full border border-live/30 bg-live/10 px-3 py-1">
            <LiveDot />
            <span className="font-mono text-[11px] font-medium text-live">Verified</span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <main className="bg-paper text-ink">
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>

      {/* ═══ Header ═══ */}
      <section className="bg-noise relative overflow-hidden border-b border-line">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="shell relative pb-16 pt-28 sm:pt-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
            {/* Bio column */}
            <div className="lg:col-span-7">
              <Reveal className="flex items-center gap-4">
                <span className="label text-accent-ink">00</span>
                <span className="label">About Me</span>
                <span className="h-px w-16 bg-line" aria-hidden="true" />
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-6 font-display text-display font-semibold text-ink">
                  Who I Am<span className="text-accent">.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-7 max-w-xl border-l-2 border-accent/50 pl-5 text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
                  Passionate about creating elegant solutions to complex problems — building modern,
                  responsive applications that users love.
                </p>
              </Reveal>

              {/* Quick facts as a ruled definition list */}
              <Reveal delay={0.18}>
                <dl className="mt-10 border-t border-line">
                  {quickFacts.map((f) => (
                    <div
                      key={f.label}
                      className="group flex items-center gap-4 border-b border-line py-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-xs text-muted transition-colors duration-500 group-hover:border-accent group-hover:text-accent-ink">
                        <i className={f.icon} />
                      </span>
                      <dt className="label w-24 shrink-0 sm:w-28">{f.label}</dt>
                      <dd className="min-w-0 flex-1 text-[15px] font-medium text-ink">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/portfolio" className="btn-accent">
                  My Work
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Contact
                </Link>
              </Reveal>
            </div>

            {/* Portrait column */}
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="relative mx-auto max-w-[360px] lg:max-w-none">
                <div
                  className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-xl border border-accent/40"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-xl border border-line bg-surface-2">
                  <img
                    src={profilePhoto}
                    alt="Meng Rithisak"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 border-t border-line bg-paper/85 px-4 py-3.5 backdrop-blur-md">
                    <p className="font-display text-base font-semibold tracking-tight text-ink">
                      Meng Rithisak
                    </p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <span className="label">Full Stack Developer</span>
                      <span className="flex items-center gap-1.5">
                        <LiveDot />
                        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-live">
                          Open to work
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stat strip */}
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

      {/* ═══ Skills ═══ */}
      <Section>
        <SectionHead index="01" label="Toolbox" title="Skills" aside={`${skills.length} technologies`} />

        <div className="mt-12 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal
              key={skill}
              delay={Math.min(i, 6) * 0.05}
              className="group relative border-b border-r border-line"
            >
              <div className="flex items-baseline gap-3 px-5 py-6 transition-colors duration-500 group-hover:bg-surface sm:px-6 sm:py-7">
                <span className="font-mono text-[10px] text-muted transition-colors duration-300 group-hover:text-accent-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-medium tracking-tight text-ink transition-transform duration-500 ease-out group-hover:translate-x-1 sm:text-xl">
                  {skill}
                </span>
              </div>
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══ Experience & Education ═══ */}
      <Section className="border-t border-line bg-surface-2/40">
        <SectionHead index="02" label="Timeline" title="Experience & Education" />

        <div className="mt-12">
          {experiences.map((exp, i) => {
            const isIntern = exp.type === "Internship"
            return (
              <Reveal key={exp.role} delay={i * 0.08}>
                <article className="group relative grid grid-cols-1 gap-4 border-t border-line py-8 last:border-b sm:grid-cols-12 sm:gap-8 sm:py-10">
                  {/* Period rail */}
                  <div className="sm:col-span-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                          isIntern ? "bg-accent" : "bg-line-strong"
                        }`}
                      />
                      <p className="label">{exp.period}</p>
                    </div>
                    <p
                      className={`mt-2 pl-[15px] font-mono text-[11px] uppercase tracking-[0.14em] ${
                        isIntern ? "text-accent-ink" : "text-muted"
                      }`}
                    >
                      {exp.type}
                    </p>
                  </div>

                  <div className="sm:col-span-9">
                    <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink transition-transform duration-500 ease-out sm:text-2xl sm:group-hover:translate-x-1">
                      {exp.role}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft text-pretty">
                      {exp.desc}
                    </p>
                  </div>

                  <span
                    className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* ═══ Certificates ═══ */}
      <Section className="border-t border-line">
        <SectionHead
          index="03"
          label="Credentials"
          title="Certificates – Etec Center"
          description="Click any certificate to see the official document"
          aside={`${certificates.length} awarded`}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={Math.min(i, 5) * 0.07}>
              <button
                onClick={() => setSelectedCert(cert)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-surface text-left transition-all duration-500 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-xl hover:shadow-black/5"
              >
                {/* Preview */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                  <img
                    src={cert.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/40 text-sm text-white backdrop-blur-md">
                    {cert.icon}
                  </span>

                  <span className="absolute bottom-3 right-3 flex translate-y-1 items-center gap-1.5 rounded-full border border-white/25 bg-black/50 px-3 py-1.5 opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white">View</span>
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-1 flex-col p-5">
                  <span className="label">Etec Center</span>
                  <h3 className="mt-2.5 flex-1 font-display text-[15px] font-semibold leading-snug text-ink">
                    {cert.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3.5">
                    <span className="font-mono text-[11px] text-muted">Granted: {cert.granted}</span>
                    <span className="text-muted transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:text-accent-ink">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <ScrollToNext to="/portfolio" label="My Projects" />
      <Footer />
    </main>
  )
}
