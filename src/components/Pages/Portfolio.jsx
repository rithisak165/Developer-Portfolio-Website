import Img1 from "../../assets/img1.jpg"
import Img2 from "../../assets/img2.jpg"
import Img3 from "../../assets/img3.jpg"
import Img4 from "../../assets/img4.jpg"
import Footer from "../Footer"

const projects = [
  {
    id: 1,
    title: "License Key Website",
    description:
      "A game hacking & selling platform with cart, checkout, payment integration, and automatic key generation.",
    tags: ["React", "Laravel", "PostgreSQL", "Tailwind"],
    image: Img1,
    link: "https://laravel-project-hosting.onrender.com/",
    status: "live",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio built with React + Tailwind CSS as my final project at Etec Center.",
    tags: ["React", "Tailwind"],
    image: Img2,
    link: "#",
    status: "live",
  },
  {
    id: 3,
    title: "Student Management System",
    description:
      "3-role system (Admin, Teacher, Student) with different permission levels to access features.",
    tags: ["React", "Tailwind", "Laravel", "PostgreSQL"],
    image: Img4,
    link: "#",
    status: "live",
  },
  {
    id: 4,
    title: "Coming Soon",
    description:
      "A React + Laravel marketplace handling product listings, shopping cart flows, secure payment processing, and programmatic license-keys.",
    tags: ["React", "API Integration", "CSS"],
    image: Img3,
    link: "#",
    status: "soon",
  },
  {
    id: 5,
    title: "Coming Soon",
    description:
      "A React + Laravel marketplace handling product listings, shopping cart flows, secure payment processing, and programmatic license-keys.",
    tags: ["React", "Express", "PostgreSQL"],
    image: Img3,
    link: "#",
    status: "soon",
  },
  {
    id: 6,
    title: "Coming Soon",
    description:
      "A React + Laravel marketplace handling product listings, shopping cart flows, secure payment processing, and programmatic license-keys.",
    tags: ["React", "Next.js", "MDX"],
    image: Img3,
    link: "#",
    status: "soon",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ── Header ── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 right-1/3 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
          <div className="absolute top-32 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">My Work</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-2">Projects</h1>
          <p className="text-slate-400 mt-4 max-w-xl">
            A curated selection of projects I've built — from full-stack web apps to landing pages.
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  {project.status === "live" ? (
                    <span className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  ) : (
                    <span className="bg-slate-700/80 text-slate-400 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.status === "live" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md shadow-cyan-500/20"
                  >
                    View Project
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center justify-center gap-2 bg-slate-800 text-slate-500 text-sm font-semibold px-5 py-2.5 rounded-lg cursor-not-allowed"
                  >
                    In Progress...
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
