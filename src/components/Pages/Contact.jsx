"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import Footer from "../Footer"
import Reveal from "../ui/Reveal"
import { EASE } from "../../lib/motion"
import { LiveDot } from "../ui/Section"

const contactInfo = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "m.mengrithysak24@cam-ed.com",
    href: "mailto:m.mengrithysak24@cam-ed.com",
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "+855 964 221 831",
    href: "tel:+855964221831",
  },
  {
    icon: faMapMarkerAlt,
    label: "Location",
    value: "Cambodia 🇰🇭",
    href: null,
  },
]

const socials = [
  {
    icon: faFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1BY6erLjjv/?mibextid=wwXIfr",
  },
  {
    icon: faTelegram,
    label: "Telegram",
    href: "https://t.me/rithysak_meng",
  },
]

const field =
  "w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 outline-none transition-colors duration-300 hover:border-line-strong focus:border-accent focus:bg-surface"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <main className="bg-paper text-ink">
      {/* ═══ Header ═══ */}
      <section className="bg-noise relative overflow-hidden">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-28 top-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
          aria-hidden="true"
        />

        <div className="shell relative pb-12 pt-28 sm:pt-36">
          <Reveal className="flex items-center gap-4">
            <span className="label text-accent-ink">00</span>
            <span className="label">Get In Touch</span>
            <span className="h-px w-16 bg-line" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-display font-semibold text-ink">
              Let&apos;s <span className="text-accent">Connect</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-ink-soft text-pretty sm:text-base">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s make something great
              together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Body ═══ */}
      <section className="pb-24 sm:pb-32">
        <div className="shell">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* ── Details ── */}
            <div className="lg:col-span-5">
              <Reveal>
                <dl className="border-t border-line">
                  {contactInfo.map((info) => {
                    const Row = (
                      <>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors duration-500 group-hover:border-accent group-hover:text-accent-ink">
                          <FontAwesomeIcon icon={info.icon} className="text-[13px]" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <dt className="label">{info.label}</dt>
                          <dd className="mt-1 truncate text-[15px] font-medium text-ink">
                            {info.value}
                          </dd>
                        </div>
                        {info.href && (
                          <span className="text-muted transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:text-accent-ink">
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M21 12H3" />
                            </svg>
                          </span>
                        )}
                      </>
                    )

                    return info.href ? (
                      <a
                        key={info.label}
                        href={info.href}
                        className="group flex items-center gap-4 border-b border-line py-5"
                      >
                        {Row}
                      </a>
                    ) : (
                      <div key={info.label} className="group flex items-center gap-4 border-b border-line py-5">
                        {Row}
                      </div>
                    )
                  })}
                </dl>
              </Reveal>

              {/* Follow */}
              <Reveal delay={0.1} className="mt-10">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-display text-lg font-semibold tracking-tight text-ink">
                    Follow Me
                  </h2>
                  <span className="flex items-center gap-2">
                    <LiveDot />
                    <span className="label">I usually reply within 24 hours</span>
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3.5 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-accent/50"
                    >
                      <span className="flex items-center gap-2.5 text-sm font-medium text-ink">
                        <FontAwesomeIcon
                          icon={s.icon}
                          className="text-[15px] text-ink-soft transition-colors duration-300 group-hover:text-accent-ink"
                        />
                        {s.label}
                      </span>
                      <span className="text-muted transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:text-accent-ink">
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ── Form ── */}
            <Reveal delay={0.08} className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-9">
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                  aria-hidden="true"
                />

                <div className="flex items-center gap-4 border-b border-line pb-5">
                  <span className="label text-accent-ink">01</span>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                    Send a Message
                  </h2>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="flex flex-col items-center justify-center py-20 text-center"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-live/30 bg-live/10 text-live">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-[15px] text-ink-soft">
                        Thanks for reaching out. I&apos;ll get back to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      className="mt-7 space-y-5"
                    >
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="label mb-2 block">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className={field}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="label mb-2 block">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className={field}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="label mb-2 block">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Project inquiry, collaboration..."
                          className={field}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="label mb-2 block">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tell me about your project..."
                          className={`${field} resize-none`}
                        />
                      </div>

                      <button type="submit" className="btn-accent group w-full">
                        Send Message
                        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
