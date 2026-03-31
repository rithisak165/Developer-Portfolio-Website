import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-cyan-500/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              RITHISAK
            </span>
            <p className="text-slate-400 mt-3 text-sm leading-relaxed">
              Full Stack Developer crafting beautiful and scalable digital
              experiences from Cambodia 🇰🇭
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Projects", to: "/portfolio" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.facebook.com/share/1BY6erLjjv/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-cyan-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://t.me/rithysak_meng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-cyan-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a
                href="mailto:m.mengrithysak24@cam-ed.com"
                aria-label="Email"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-cyan-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <p className="text-slate-400 text-sm">m.mengrithysak24@cam-ed.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Rithisak. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-cyan-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  )
}
