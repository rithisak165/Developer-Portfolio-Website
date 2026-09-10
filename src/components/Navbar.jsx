"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { EASE } from "../lib/motion"

const links = [
  { to: "/", label: "Home", index: "01" },
  { to: "/about", label: "About", index: "02" },
  { to: "/portfolio", label: "Projects", index: "03" },
  { to: "/contact", label: "Contact", index: "04" },
]

const socials = [
  { href: "https://www.facebook.com/share/1BY6erLjjv/?mibextid=wwXIfr", label: "Facebook" },
  { href: "https://t.me/rithysak_meng", label: "Telegram" },
  { href: "mailto:m.mengrithysak24@cam-ed.com", label: "Email" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")
  const location = useLocation()

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 240, damping: 40, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  /* Lock the page behind the full-screen menu */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => setIsOpen(false), [location.pathname])

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"))
  const isActive = (path) => location.pathname === path

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 transition-colors duration-500 ${
          /* Stay above the full-screen menu so the close button is reachable */
          isOpen ? "z-[60]" : "z-50"
        } ${
          scrolled && !isOpen
            ? "bg-paper/80 backdrop-blur-xl border-b border-line"
            : "border-b border-transparent"
        }`}
      >
        <div className="shell">
          <div className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
            {/* Wordmark */}
            <Link to="/" className="group flex items-center gap-2.5" aria-label="Rithisak — home">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent opacity-60 blur-[3px] transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.22em] text-ink">
                Rithisak
              </span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {links.map(({ to, label, index }) => (
                <Link
                  key={to}
                  to={to}
                  aria-current={isActive(to) ? "page" : undefined}
                  className="group relative flex items-baseline gap-1.5 px-3 py-2"
                >
                  <span
                    className={`font-mono text-[9px] tracking-[0.1em] transition-colors duration-300 ${
                      isActive(to) ? "text-accent-ink" : "text-muted/70 group-hover:text-accent-ink"
                    }`}
                  >
                    {index}
                  </span>
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive(to) ? "text-ink" : "text-ink-soft group-hover:text-ink"
                    }`}
                  >
                    {label}
                  </span>
                  <span
                    className={`absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform duration-500 ease-out ${
                      isActive(to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Theme */}
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 hover:border-line-strong hover:text-ink"
              >
                <i className={`text-[13px] ${theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"}`} />
              </button>

              <Link
                to="/contact"
                className="hidden rounded-full border border-ink/85 bg-ink px-5 py-2.5 text-[13px] font-semibold text-paper transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white md:inline-flex"
              >
                Hire Me
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="relative z-[60] flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-line transition-colors duration-300 hover:border-line-strong md:hidden"
              >
                <span
                  className={`block h-px w-4 bg-ink transition-transform duration-300 ease-out ${
                    isOpen ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-4 bg-ink transition-transform duration-300 ease-out ${
                    isOpen ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Reading progress hairline */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-accent"
          aria-hidden="true"
        />
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[55] bg-paper md:hidden"
          >
            <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between px-5 pb-10 pt-24">
              <nav className="flex flex-col" aria-label="Mobile">
                {links.map(({ to, label, index }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.06 }}
                  >
                    <Link to={to} className="group flex items-baseline gap-4 border-b border-line py-5">
                      <span className="label text-accent-ink">{index}</span>
                      <span
                        className={`font-display text-4xl font-semibold tracking-tight transition-colors duration-300 ${
                          isActive(to) ? "text-accent-ink" : "text-ink"
                        }`}
                      >
                        {label}
                      </span>
                      {isActive(to) && (
                        <span className="ml-auto h-1.5 w-1.5 self-center rounded-full bg-accent" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="label link-underline text-ink-soft"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
                <Link to="/contact" className="btn-accent w-full">
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
