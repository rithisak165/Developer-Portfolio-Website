import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
]

const socials = [
  {
    icon: faFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1BY6erLjjv/?mibextid=wwXIfr",
    external: true,
  },
  { icon: faTelegram, label: "Telegram", href: "https://t.me/rithysak_meng", external: true },
  { icon: faEnvelope, label: "Email", href: "mailto:m.mengrithysak24@cam-ed.com", external: false },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="bg-noise relative overflow-hidden border-t border-line bg-surface-2/50">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[680px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="shell relative pb-10 pt-16 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="group inline-flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-display text-2xl font-semibold tracking-tight text-ink">
                RITHISAK
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-soft text-pretty">
              Full Stack Developer crafting beautiful and scalable digital experiences from Cambodia 🇰🇭
            </p>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-3" aria-label="Footer">
            <h2 className="label">Navigation</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-underline inline-block text-[15px] text-ink-soft hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="lg:col-span-4">
            <h2 className="label">Connect</h2>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
                >
                  <FontAwesomeIcon icon={s.icon} className="text-sm" />
                </a>
              ))}
            </div>
            <a
              href="mailto:m.mengrithysak24@cam-ed.com"
              className="link-underline mt-5 inline-block font-mono text-[13px] text-ink-soft hover:text-ink"
            >
              m.mengrithysak24@cam-ed.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="label normal-case tracking-normal">
            © {new Date().getFullYear()} Rithisak. All rights reserved.
          </p>

          <p className="label flex items-center gap-1.5 normal-case tracking-normal">
            Built with
            <i className="fa-brands fa-react text-accent-ink" /> React &amp;
            <i className="fa-solid fa-wind text-accent-ink" /> Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  )
}
