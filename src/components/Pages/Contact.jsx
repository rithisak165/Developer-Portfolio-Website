"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import Footer from "../Footer"

const contactInfo = [
  {
    icon: faEnvelope,
    label: "Email",
    value: "m.mengrithysak24@cam-ed.com",
    href: "mailto:m.mengrithysak24@cam-ed.com",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "+855 964 221 831",
    href: "tel:+855964221831",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: faMapMarkerAlt,
    label: "Location",
    value: "Cambodia 🇰🇭",
    href: null,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
]

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
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ── Header ── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />
          <div className="absolute top-32 left-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-2">Contact Me</h1>
          <p className="text-slate-400 mt-4 max-w-xl">
            Have a project in mind? I'd love to hear about it. Let's make something great together.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ── Left: info ── */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact info cards */}
            {contactInfo.map((info) =>
              info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  className={`flex items-center gap-4 bg-slate-900/60 border ${info.bg} rounded-2xl p-5 hover:bg-slate-800/60 transition-all duration-200 group`}
                >
                  <div className={`w-12 h-12 rounded-xl ${info.bg} border flex items-center justify-center ${info.color} flex-shrink-0`}>
                    <FontAwesomeIcon icon={info.icon} className="text-lg" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium mb-0.5">{info.label}</p>
                    <p className="text-white text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  key={info.label}
                  className={`flex items-center gap-4 bg-slate-900/60 border ${info.bg} rounded-2xl p-5`}
                >
                  <div className={`w-12 h-12 rounded-xl ${info.bg} border flex items-center justify-center ${info.color} flex-shrink-0`}>
                    <FontAwesomeIcon icon={info.icon} className="text-lg" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-medium mb-0.5">{info.label}</p>
                    <p className="text-white text-sm font-semibold">{info.value}</p>
                  </div>
                </div>
              )
            )}

            {/* Social */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 text-sm">Follow Me</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/1BY6erLjjv/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/20 hover:border-blue-500/40 text-blue-400 rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  Facebook
                </a>
                <a
                  href="https://t.me/rithysak_meng"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-cyan-600/10 hover:bg-cyan-600/20 border border-cyan-600/20 hover:border-cyan-500/40 text-cyan-400 rounded-xl transition-all duration-200 text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faTelegram} />
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="lg:col-span-3">
            <div className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10 overflow-hidden">
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

              <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-3xl mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
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
                        className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 hover:border-slate-600 focus:border-cyan-500 text-white text-sm rounded-xl outline-none transition-all duration-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
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
                        className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 hover:border-slate-600 focus:border-cyan-500 text-white text-sm rounded-xl outline-none transition-all duration-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
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
                      className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 hover:border-slate-600 focus:border-cyan-500 text-white text-sm rounded-xl outline-none transition-all duration-200 placeholder-slate-600 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
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
                      className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 hover:border-slate-600 focus:border-cyan-500 text-white text-sm rounded-xl outline-none transition-all duration-200 placeholder-slate-600 resize-none focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 text-sm"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
