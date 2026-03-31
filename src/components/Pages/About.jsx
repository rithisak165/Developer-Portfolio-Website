import { useState } from "react"
import Footer from "../Footer"
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

const certificates = [
  {
    id: 1,
    title: "Basic / Advance C / C++ / OOP & Algorithm",
    granted: "October 15, 2024",
    image: certCpp,
    color: "from-orange-500/10 to-amber-500/5 border-orange-500/20",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    icon: "⚙️",
  },
  {
    id: 2,
    title: "Basic / Advance Python / Flask & Project Courses",
    granted: "March 15, 2025",
    image: certPython,
    color: "from-blue-500/10 to-sky-500/5 border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "🐍",
  },
  {
    id: 3,
    title: "Basic / Advance Java / MySQL / iReport & Project Courses",
    granted: "June 15, 2025",
    image: certJava,
    color: "from-red-500/10 to-rose-500/5 border-red-500/20",
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: "☕",
  },
  {
    id: 4,
    title: "Basic / Advance PHP / MySQL / Laravel / API & Project Courses",
    granted: "October 15, 2025",
    image: certPhp,
    color: "from-purple-500/10 to-violet-500/5 border-purple-500/20",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "🐘",
  },
  {
    id: 5,
    title: "HTML, CSS, Bootstrap, JavaScript, ReactJS & Project Courses",
    granted: "November 15, 2025",
    image: certReactjs,
    color: "from-cyan-500/10 to-teal-500/5 border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    icon: "⚛️",
  },
]

const experiences = [
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

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ── Certificate Modal / Lightbox ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Certificate of Completion</p>
                <h3 className="text-white font-bold text-sm leading-snug max-w-xs">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="ml-4 flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors text-lg leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Certificate image */}
            <div className="bg-slate-950 p-4">
              <img
                src={selectedCert.image}
                alt={`Certificate – ${selectedCert.title}`}
                className="w-full rounded-lg object-contain max-h-[70vh]"
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-slate-500 text-xs">Granted: {selectedCert.granted}</span>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                ✓ Verified
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Background blobs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* ── Page Content ── */}
      <div className="relative z-10">

        {/* ── Hero / Profile ── */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mt-2 mb-10">Who I Am</h1>

            {/* Profile card */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800/60 border border-slate-700/60 rounded-3xl p-8 sm:p-10 mb-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Real photo */}
                <div className="relative flex-shrink-0">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-4 ring-cyan-500/20 shadow-2xl shadow-cyan-500/10">
                    <img
                      src={profilePhoto}
                      alt="Meng Rithisak"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Online badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Open to work
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                  <h2 className="text-3xl sm:text-4xl font-black text-white">Meng Rithisak</h2>
                  <p className="text-cyan-400 font-semibold mt-1 mb-4 text-lg">Full Stack Developer</p>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Passionate about creating elegant solutions to complex problems. Currently studying Software
                    Development at Norton University and honing my craft at Etec Center — building modern,
                    responsive applications that users love.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
                    {["Cambodia 🇰🇭", "Full Stack", "Open Source"].map((tag) => (
                      <span key={tag} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Skills ── */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">⚡</span>
                Skills &amp; Technologies
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700 hover:border-cyan-500/30 px-4 py-3 rounded-xl text-center text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Experience ── */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm">🗓</span>
                Experience &amp; Education
              </h2>
              <div className="space-y-5 relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-transparent hidden sm:block" />
                {experiences.map((exp, i) => (
                  <div key={i} className="sm:pl-10 relative">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center hidden sm:flex">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-white font-bold">{exp.role}</h3>
                        <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-0.5 rounded-full font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs text-blue-400 font-medium mb-2">{exp.type}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Certificates ── */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-sm">🏆</span>
                Certificates – Etec Center
              </h2>
              <p className="text-slate-500 text-sm mb-6 ml-11">Click "View Certificate" to see the official document</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className={`group relative bg-gradient-to-br ${cert.color} border rounded-xl p-5 flex flex-col gap-4 hover:-translate-y-0.5 transition-all duration-200`}
                  >
                    {/* Icon + title */}
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{cert.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-sm leading-snug">{cert.title}</p>
                        <p className="text-slate-500 text-xs mt-1">Granted: {cert.granted}</p>
                      </div>
                    </div>

                    {/* Footer: badge + button */}
                    <div className="flex items-center justify-between">
                      <span className={`text-xs border px-2.5 py-0.5 rounded-full font-medium ${cert.badge}`}>
                        Etec Center
                      </span>
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg transition-all duration-200"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Certificate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
