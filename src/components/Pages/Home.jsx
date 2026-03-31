import { Link } from "react-router-dom"
import Footer from "../Footer"

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Vue.js", icon: "💚" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "GitHub", icon: "🐙" },
  { name: "PHP", icon: "🐘" },
  { name: "Laravel", icon: "🔴" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Git", icon: "🌿" },
  { name: "Hosting", icon: "☁️" },
]

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-3xl"
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for freelance work
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              RITHISAK
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-400 mb-4 max-w-2xl mx-auto font-light">
            Full Stack Developer &amp; Designer
          </p>
          <p className="text-base sm:text-lg text-slate-500 mb-12 max-w-xl mx-auto">
            Crafting beautiful digital experiences with clean code and modern design that leaves a lasting impression.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 text-base"
            >
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
            >
              Contact Me
            </Link>
          </div>

          {/* Scroll cue */}
          <div className="mt-20 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
            <span className="text-xs">Scroll down</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">What I Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Services I Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "UI/UX Design",
                desc: "Creating beautiful and intuitive user interfaces with modern design principles and pixel-perfect attention to detail.",
                color: "from-pink-500/10 to-rose-500/5 border-pink-500/20",
                glow: "group-hover:shadow-pink-500/10",
              },
              {
                icon: "💻",
                title: "Development",
                desc: "Building responsive and performant web applications with cutting-edge technologies like React, Laravel, and more.",
                color: "from-cyan-500/10 to-blue-500/5 border-cyan-500/20",
                glow: "group-hover:shadow-cyan-500/10",
              },
              {
                icon: "🚀",
                title: "Optimization",
                desc: "Ensuring lightning-fast load times, SEO best practices, and smooth user experiences across all devices.",
                color: "from-purple-500/10 to-violet-500/5 border-purple-500/20",
                glow: "group-hover:shadow-purple-500/10",
              },
            ].map((s) => (
              <div
                key={s.title}
                className={`group relative bg-gradient-to-br ${s.color} border rounded-2xl p-8 hover:shadow-xl ${s.glow} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
        <div className="absolute inset-0 border-y border-slate-800/60" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">My Toolkit</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Technologies I Work With</h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
              Leveraging modern tools and frameworks to build scalable, maintainable applications
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 p-5 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 cursor-default"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-slate-300 group-hover:text-white text-xs font-semibold transition-colors duration-200">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/60 rounded-3xl p-12 text-center overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to work together?
              </h2>
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Let's collaborate and bring your ideas to life with clean code and beautiful design.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 text-base"
              >
                Start a Conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
