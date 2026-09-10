import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import Footer from "../Footer"
import ScrollToNext from "../ScrollToNext"
import Reveal from "../ui/Reveal"
import { EASE } from "../../lib/motion"
import { Section, SectionHead, LiveDot } from "../ui/Section"
import profilePhoto from "../../assets/profile.png"

const techStack = [
  { name: "React", icon: <i className="fa-brands fa-react text-[#61DAFB]"></i> },
  { name: "JavaScript", icon: <i className="fa-brands fa-js text-[#F7DF1E]"></i> },
  { name: "Bootstrap", icon: <i className="fa-brands fa-bootstrap text-[#7952B3]"></i> },
  { name: "Vue.js", icon: <i className="fa-brands fa-vuejs text-[#4FC08D]"></i> },
  { name: "Tailwind CSS", icon: <i className="fa-solid fa-wind text-[#06B6D4]"></i> },
  { name: "GitHub", icon: <i className="fa-brands fa-github text-ink"></i> },
  { name: "PHP", icon: <i className="fa-brands fa-php text-[#777BB4]"></i> },
  { name: "Laravel", icon: <i className="fa-brands fa-laravel text-[#FF2D20]"></i> },
  { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-[1em] h-[1em] mx-auto" /> },
  { name: "MySQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-[1em] h-[1em] mx-auto" /> },
  { name: "Git", icon: <i className="fa-brands fa-git-alt text-[#F05032]"></i> },
  { name: "Hosting", icon: <i className="fa-solid fa-server text-ink-soft"></i> },
]

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
]

const services = [
  {
    icon: <i className="fa-solid fa-palette"></i>,
    title: "UI/UX Design",
    desc: "Creating beautiful and intuitive user interfaces with modern design principles and pixel-perfect attention to detail.",
  },
  {
    icon: <i className="fa-solid fa-laptop-code"></i>,
    title: "Development",
    desc: "Building responsive and performant web applications with cutting-edge technologies like React, Laravel, and more.",
  },
  {
    icon: <i className="fa-solid fa-rocket"></i>,
    title: "Optimization",
    desc: "Ensuring lightning-fast load times, SEO best practices, and smooth user experiences across all devices.",
  },
]

const socials = [
  { href: "https://www.facebook.com/share/1BY6erLjjv/?mibextid=wwXIfr", icon: "fa-brands fa-facebook", label: "Facebook" },
  { href: "https://t.me/rithysak_meng", icon: "fa-brands fa-telegram", label: "Telegram" },
  { href: "mailto:m.mengrithysak24@cam-ed.com", icon: "fa-solid fa-envelope", label: "Email" },
]

/* Hero entrance — one shared timeline so the whole first screen lands together */
const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}
const heroGroup = {
  hidden: {},
  show: { transition: { delayChildren: 0.1, staggerChildren: 0.09 } },
}

export default function Home() {
  const heroRef = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"])
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.25])

  return (
    <main className="bg-paper text-ink">
      {/* ═══ Hero ═══ */}
      <section ref={heroRef} className="bg-noise relative overflow-hidden">
        {/* Blueprint grid, faded out toward the bottom */}
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        {/* Single warm bloom — the only glow on the page */}
        <div
          className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="shell relative">
          <motion.div
            variants={heroGroup}
            initial="hidden"
            animate="show"
            style={{ opacity: heroFade }}
            className="grid min-h-[92svh] grid-cols-1 items-center gap-12 pb-16 pt-28 sm:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-24"
          >
            {/* ── Left: statement ── */}
            <div className="lg:col-span-7">
              <motion.div variants={heroItem} className="flex items-center gap-3">
                <LiveDot />
                <span className="label text-ink-soft">Available for full time work</span>
              </motion.div>

              <motion.h1
                variants={heroItem}
                className="mt-7 font-display font-semibold leading-[0.9] text-ink"
              >
                <span className="block text-[clamp(1.5rem,4vw,2.25rem)] font-normal tracking-tight text-muted">
                  Hi, I&apos;m
                </span>
                <span className="mt-1 block text-display-lg">
                  RITHISAK
                  <span className="text-accent">.</span>
                </span>
              </motion.h1>

              {/* Role, set as a ruled caption line */}
              <motion.div
                variants={heroItem}
                className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5"
              >
                <span className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl">
                  Full Stack Developer &amp; Designer
                </span>
                <span className="hidden h-px flex-1 bg-line sm:block" aria-hidden="true" />
              </motion.div>

              <motion.p
                variants={heroItem}
                className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft text-pretty sm:text-base"
              >
                Crafting beautiful digital experiences with clean code and modern design that leaves a
                lasting impression.
              </motion.p>

              <motion.div variants={heroItem} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/portfolio" className="btn-accent group">
                  View My Work
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Contact Me
                </Link>
              </motion.div>

              {/* Socials */}
              <motion.div variants={heroItem} className="mt-10 flex items-center gap-4">
                <span className="label">Find me on</span>
                <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                <div className="flex gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
                    >
                      <i className={`${s.icon} text-sm`} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── Right: portrait ── */}
            <motion.div variants={heroItem} className="lg:col-span-5">
              <motion.div style={{ y: portraitY }} className="relative mx-auto max-w-[380px] lg:max-w-none">
                {/* Offset hairline frame */}
                <div
                  className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full rounded-xl border border-accent/40"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-xl border border-line bg-surface-2">
                  <img
                    src={profilePhoto}
                    alt="Meng Rithisak"
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
                  />
                  {/* Caption strip over the image */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-line bg-paper/85 px-4 py-3 backdrop-blur-md">
                    <span className="font-mono text-[11px] font-medium tracking-tight text-ink">
                      Meng Rithisak
                    </span>
                    <span className="flex items-center gap-2">
                      <LiveDot />
                      <span className="label">Full Stack Dev</span>
                    </span>
                  </div>
                </div>

                {/* Floating framework markers */}
                <motion.span
                  animate={reduce ? {} : { y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-3 top-10 flex items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1.5 shadow-sm backdrop-blur-md sm:-left-6"
                >
                  <i className="fa-brands fa-react text-[#61DAFB] text-sm" />
                  <span className="font-mono text-[11px] text-ink">React</span>
                </motion.span>
                <motion.span
                  animate={reduce ? {} : { y: [0, 8, 0] }}
                  transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute -right-3 top-1/2 flex items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1.5 shadow-sm backdrop-blur-md sm:-right-6"
                >
                  <i className="fa-brands fa-laravel text-[#FF2D20] text-sm" />
                  <span className="font-mono text-[11px] text-ink">Laravel</span>
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="shell relative hidden pb-8 lg:block"
        >
          <div className="flex items-center gap-3">
            <span className="label">Scroll down</span>
            <motion.span
              animate={reduce ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-muted"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.span>
          </div>
        </motion.div>
      </section>

      {/* ═══ Tech marquee — transition band ═══ */}
      <div className="relative overflow-hidden border-y border-line bg-surface-2/60 py-5">
        <div className="mask-fade-x flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-ink-soft"
              aria-hidden={i >= techStack.length}
            >
              <span className="text-base leading-none">{tech.icon}</span>
              <span className="font-mono text-xs uppercase tracking-[0.14em]">{tech.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ Services ═══ */}
      <Section>
        <SectionHead
          index="01"
          label="What I Do"
          title="Services I Offer"
          aside={`${services.length} services`}
        />

        <div className="mt-12 border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group relative grid grid-cols-1 items-start gap-4 border-b border-line py-8 transition-colors duration-500 sm:grid-cols-12 sm:gap-8 sm:py-10">
                {/* Ember sweep on hover */}
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-4 sm:col-span-4 sm:items-baseline">
                  <span className="label text-accent-ink">{`0${i + 1}`}</span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink transition-transform duration-500 ease-out sm:text-[28px] sm:group-hover:translate-x-1">
                    {s.title}
                  </h3>
                </div>

                <p className="text-[15px] leading-relaxed text-ink-soft text-pretty sm:col-span-7">
                  {s.desc}
                </p>

                <div className="hidden justify-end sm:col-span-1 sm:flex">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors duration-500 group-hover:border-accent group-hover:text-accent-ink">
                    {s.icon}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══ Stats ═══ */}
      <section className="border-y border-line bg-surface-2/50">
        <div className="shell">
          <div className="grid grid-cols-2 divide-x divide-y divide-line border-x border-line sm:divide-y-0 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.07}
                className="px-5 py-10 text-center sm:px-6 sm:py-14"
              >
                <p className="font-display text-4xl font-semibold tracking-tighter text-ink sm:text-5xl">
                  {s.value}
                </p>
                <p className="label mt-3">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Toolkit ═══ */}
      <Section>
        <SectionHead
          index="02"
          label="My Toolkit"
          title="Technologies I Work With"
          description="Leveraging modern tools and frameworks to build scalable, maintainable applications"
          aside={`${techStack.length} tools`}
        />

        <div className="mt-12 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-4">
          {techStack.map((tech, i) => (
            <Reveal
              key={tech.name}
              delay={Math.min(i, 8) * 0.04}
              className="group relative border-b border-r border-line"
            >
              <div className="flex items-center gap-3 px-5 py-6 transition-colors duration-500 group-hover:bg-surface">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center text-lg transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                  {tech.icon}
                </span>
                <span className="text-sm font-medium leading-tight text-ink-soft transition-colors duration-300 group-hover:text-ink">
                  {tech.name}
                </span>
              </div>
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ═══ CTA — inverted block ═══ */}
      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <Reveal>
            <div className="bg-noise relative overflow-hidden rounded-2xl bg-ink px-6 py-16 text-paper sm:px-12 sm:py-20 lg:px-16 lg:py-24">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/25 blur-[110px]"
                aria-hidden="true"
              />
              <div className="relative max-w-3xl">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-paper/20 px-3.5 py-1.5">
                  <LiveDot />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/70">
                    Available for full time work
                  </span>
                </span>

                <h2 className="mt-8 font-display text-display font-semibold leading-[0.95]">
                  Ready to work{" "}
                  <span className="text-accent">together?</span>
                </h2>

                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-paper/65 text-pretty sm:text-base">
                  Let&apos;s collaborate and bring your ideas to life with clean code and beautiful
                  design.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className="btn-accent">
                    Start a Conversation →
                  </Link>
                  <Link
                    to="/portfolio"
                    className="btn-ghost border-paper/25 text-paper hover:border-paper/60 hover:bg-paper/10"
                  >
                    See My Projects
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ScrollToNext to="/about" label="About Me" />
      <Footer />
    </main>
  )
}
