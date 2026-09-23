import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import Reveal from "./ui/Reveal"
import { EASE } from "../lib/motion"
import { trackSpotlight } from "../lib/spotlight"
import RentFlowShot from "../assets/rentflow.png"

/*
 * RentFlow case study.
 * Every fact below comes from the RentFlow Handbook (linked on the page).
 * The band wears RentFlow's own magenta instead of the site's ember accent —
 * a case study takes on the product's brand, the rest of the site stays neutral.
 */

const rentflow = {
  title: "RentFlow",
  subtitle: "Rental Management Platform",
  tagline: "Run your rooms without chasing rent.",
  description:
    "A bilingual (Khmer / English) rental management system for landlords, managers and tenants in Cambodia. It automates the whole rent cycle — monthly bills, KHQR payment requests, Telegram reminders and one-tap payment confirmation — so landlords stop chasing rent and tenants always know exactly what they owe.",
  roles: ["Landlords", "Managers", "Tenants"],
  release: "September 2026 release",
  video: "/rentflow_demo.mp4",
  handbook: "https://claude.ai/artifact/2RTJZvsLYpNVXtoshN7Q6j",
  image: RentFlowShot,
  tags: ["Laravel", "Telegram Bot API", "KHQR / ABA", "Task Scheduler", "Khmer / English"],
}

const metrics = [
  { value: "1 form", label: "To rent out a room", note: "was 3 pages · 6 steps" },
  { value: "3 roles", label: "Landlord · Manager · Tenant" },
  { value: "< 30s", label: "To add a room" },
  { value: "KH / EN", label: "Fully bilingual" },
]

const modules = [
  {
    icon: "fa-solid fa-chart-line",
    title: "Attention dashboard",
    text: "A “Needs your attention” panel lists overdue bills, payments to confirm, rentals ending soon and open repairs — each one tap away. Income, occupancy and a 6-month chart below; deposits are never counted as income.",
  },
  {
    icon: "fa-solid fa-building",
    title: "Properties & rooms",
    text: "Buildings, floors and rooms with Google Maps link, access hours and contact phone. Up to 10 photos each, compressed on the phone with the hidden GPS location stripped for privacy.",
  },
  {
    icon: "fa-solid fa-user-plus",
    title: "One-step rentals",
    text: "Tenant, room, contract and first bill in a single form. Future move-ins are reserved and start on their own. Extend, end, and return deposits in full or in part — history is never deleted.",
  },
  {
    icon: "fa-solid fa-receipt",
    title: "Rent & payments",
    text: "Bills and payments on one page. Metered electricity and water, fixed internet and parking, part-payments, late fees, and the tenant’s payment screenshot attached as proof.",
  },
  {
    icon: "fa-brands fa-telegram",
    title: "Telegram bot",
    text: "Bills go out with the landlord’s pay QR the moment they are issued, with reminders 3 days before and on the due date. Landlords confirm payments in one tap without opening the app.",
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Tenant portal",
    text: "Tenants see what is due, why and by when, scan the landlord’s QR, find room details and receipts, and file repair requests — then follow the progress until it is fixed.",
  },
]

const paymentLoop = [
  { title: "Bill issued", text: "Automatically, each month" },
  { title: "Tenant gets the QR", text: "On Telegram, instantly" },
  { title: "Pays in bank app", text: "Scans the KHQR / ABA" },
  { title: "Sends screenshot", text: "To the same bot" },
  { title: "Landlord taps ✅", text: "Tenant gets a receipt" },
]

const automation = [
  { title: "End finished rentals", text: "The room becomes available again and billing stops." },
  { title: "Start reserved rentals", text: "Rentals whose move-in date is today begin on their own." },
  { title: "Issue new bills", text: "And sends them to Telegram with the QR." },
  { title: "Mark overdue bills", text: "Adds the late fee from the rental’s terms." },
  { title: "Send reminders", text: "3 days before, and on the due date." },
  { title: "Listen to Telegram", text: "Picks up screenshots and button taps within seconds." },
]

/* Browser-frame product shot with a subtle cursor tilt. */
function ProductShot({ onPlay }) {
  const reduce = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(rx, { stiffness: 140, damping: 18 })
  const rotateY = useSpring(ry, { stiffness: 140, damping: 18 })

  const onMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return
    const r = e.currentTarget.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 7)
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 7)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <div className="relative [perspective:1400px]" onPointerMove={onMove} onPointerLeave={reset}>
      {/* Glow under the frame */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-tr from-[#db2777]/35 via-[#7c3aed]/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        style={{ rotateX, rotateY }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#120c1f] shadow-[0_40px_120px_-40px_rgba(219,39,119,0.55)]"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="mx-auto flex min-w-0 max-w-[60%] items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3 py-1">
            <i className="fa-solid fa-lock text-[9px] text-white/40" />
            <span className="truncate font-mono text-[11px] text-white/50">rentflow</span>
          </div>
          <span className="w-[42px]" aria-hidden="true" />
        </div>

        <button
          onClick={onPlay}
          aria-label="Play the RentFlow demo video"
          className="relative block w-full overflow-hidden"
        >
          <img
            src={rentflow.image}
            alt="RentFlow landing page in Khmer, showing the dashboard preview with income, occupancy and a KHQR payment"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#0b0814]/70 via-transparent to-transparent" />

          {/* Play affordance */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#db2777] text-white shadow-[0_10px_40px_-8px_rgba(219,39,119,0.9)] transition-transform duration-500 ease-out group-hover:scale-110 sm:h-20 sm:w-20">
              <span className="absolute inset-0 rounded-full bg-[#db2777] animate-pulse-ring" aria-hidden="true" />
              <svg className="relative ml-1 h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>

          <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f472b6]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/90">Watch demo</span>
          </span>
        </button>
      </motion.div>

      {/* Floating capability chips — desktop only, they would crowd a phone */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
        className="absolute -left-6 top-[28%] hidden items-center gap-2.5 rounded-xl border border-white/10 bg-[#171026]/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl lg:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2a9ed8]/15 text-[#5cb8e8]">
          <i className="fa-brands fa-telegram" />
        </span>
        <span>
          <span className="block text-[12px] font-semibold text-white">Bill sent on Telegram</span>
          <span className="block font-mono text-[10px] text-white/45">with the pay QR</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
        className="absolute -right-5 bottom-[18%] hidden items-center gap-2.5 rounded-xl border border-white/10 bg-[#171026]/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl lg:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
          <i className="fa-solid fa-check" />
        </span>
        <span>
          <span className="block text-[12px] font-semibold text-white">Payment confirmed</span>
          <span className="block font-mono text-[10px] text-white/45">one tap · receipt issued</span>
        </span>
      </motion.div>
    </div>
  )
}

export default function RentFlowCaseStudy({ index = "02", onPlay }) {
  const play = () => onPlay(rentflow.video)

  return (
    <section
      className="relative overflow-hidden bg-[#0b0814] py-24 text-white sm:py-32"
      style={{ "--spot": "rgba(236, 72, 153, 0.12)" }}
      aria-labelledby="rentflow-title"
    >
      {/* Atmosphere: brand glows, faint grid, grain */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#db2777]/20 blur-[140px]" />
        <div className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-[#7c3aed]/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)",
            maskImage: "radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="shell relative">
        {/* ── Section rule ── */}
        <Reveal className="flex items-center gap-4 border-b border-white/10 pb-5">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#f472b6]">{index}</span>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/50">
            Case Study — Latest Project
          </span>
          <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
          <span className="hidden font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/50 sm:block">
            {rentflow.release}
          </span>
        </Reveal>

        {/* ── Intro + product shot ── */}
        <div className="mt-12 grid grid-cols-1 items-center gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ec4899] to-[#9333ea] shadow-lg shadow-[#db2777]/30">
                <i className="fa-solid fa-building text-white" />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold leading-none tracking-tight">
                  {rentflow.title}
                </span>
                <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                  {rentflow.subtitle}
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2
                id="rentflow-title"
                className="mt-8 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.035em]"
              >
                Run your rooms{" "}
                <span className="bg-gradient-to-r from-[#f472b6] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent">
                  without chasing rent.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 text-[15px] leading-relaxed text-white/65 text-pretty sm:text-base">
                {rentflow.description}
              </p>
            </Reveal>

            <Reveal delay={0.16} className="mt-6 flex flex-wrap gap-2">
              {rentflow.roles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-white/75"
                >
                  {r}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={play}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#db2777] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(219,39,119,0.9)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#ec4899]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch the demo
              </button>
              <a
                href={rentflow.handbook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.05]"
              >
                <i className="fa-solid fa-book-open text-[13px] text-[#f472b6]" />
                Read the handbook
                <svg
                  className="h-3.5 w-3.5 text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={28} className="lg:col-span-7">
            <ProductShot onPlay={play} />
          </Reveal>
        </div>

        {/* ── Metrics ── */}
        <div className="mt-20 grid grid-cols-2 border-y border-white/10 lg:mt-28 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.06}
              className={`px-4 py-8 sm:px-6 sm:py-10 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${
                i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <p className="font-display text-3xl font-semibold tracking-tighter sm:text-4xl">{m.value}</p>
              <p className="mt-2 text-[13px] text-white/70">{m.label}</p>
              {m.note && <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#f472b6]/80">{m.note}</p>}
            </Reveal>
          ))}
        </div>

        {/* ── Modules ── */}
        <div className="mt-20 lg:mt-28">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">What it does</h3>
            <p className="max-w-sm text-[14px] text-white/55">
              Six modules, one workflow — from adding a room to confirming the payment.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 0.07}>
                <article
                  onMouseMove={trackSpotlight}
                  className="spotlight group h-full rounded-xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-500 hover:border-[#ec4899]/35 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#f472b6] transition-colors duration-500 group-hover:border-[#ec4899]/40 group-hover:bg-[#db2777]/15">
                      <i className={m.icon} />
                    </span>
                    <span className="font-mono text-[11px] text-white/30">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="mt-6 font-display text-lg font-semibold tracking-tight">{m.title}</h4>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/60 text-pretty">{m.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Payment loop ── */}
        <div className="mt-20 lg:mt-28">
          <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">The payment loop</h3>
            <p className="max-w-sm text-[14px] text-white/55">
              From bill to receipt without a single chat message to chase rent.
            </p>
          </Reveal>

          <div className="relative mt-12">
            {/* Connecting rail — horizontal on desktop, vertical on mobile */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10 lg:left-[10%] lg:right-[10%] lg:top-[19px] lg:bottom-auto lg:h-px lg:w-auto" aria-hidden="true">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
                className="h-full w-full origin-top bg-gradient-to-b from-[#f472b6] to-[#a855f7] lg:origin-left lg:bg-gradient-to-r"
              />
            </div>

            <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
              {paymentLoop.map((s, i) => (
                <Reveal as="li" key={s.title} delay={0.15 + i * 0.12} className="flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ec4899]/50 bg-[#0b0814] font-mono text-[12px] font-semibold text-[#f9a8d4] shadow-[0_0_0_6px_#0b0814]">
                    {i + 1}
                  </span>
                  <div className="lg:mt-5">
                    <p className="font-semibold text-white">{s.title}</p>
                    <p className="mt-1 text-[13px] text-white/55">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* ── Automation + stack/handbook ── */}
        <div className="mt-20 grid grid-cols-1 gap-6 lg:mt-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">Runs by itself</h3>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">
                  Every day · Phnom Penh time
                </span>
              </div>
              <ol className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {automation.map((a, i) => (
                  <li key={a.title} className="flex gap-4 border-t border-white/10 py-4">
                    <span className="font-mono text-[11px] text-[#f472b6]">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-[14px] font-semibold text-white">{a.title}</span>
                      <span className="mt-0.5 block text-[13px] leading-relaxed text-white/55">{a.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Handbook — the project's documentation */}
            <Reveal delay={0.08} className="flex-1">
              <a
                href={rentflow.handbook}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={trackSpotlight}
                className="spotlight group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#ec4899]/25 bg-gradient-to-br from-[#db2777]/[0.12] to-[#7c3aed]/[0.06] p-6 transition-colors duration-500 hover:border-[#ec4899]/50 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-lg text-[#f9a8d4]">
                    <i className="fa-solid fa-book-open" />
                  </span>
                  <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/60">
                    Documentation
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">RentFlow Handbook</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/65 text-pretty">
                    The complete Khmer / English user guide for the product — setup in 4 steps,
                    the rent cycle, the Telegram bot, the tenant portal, a 10-minute demo script and FAQ.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Read the handbook
                    <svg
                      className="h-3.5 w-3.5 text-[#f472b6] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-xl border border-white/10 bg-white/[0.025] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">Built with</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {rentflow.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
