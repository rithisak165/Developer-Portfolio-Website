import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import Img4 from "../../assets/img4.jpg";
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "License Key Website",
      description: "I made a project of game hacking and selling license keys platform with cart, checkout, and payment integration,automatic generate key.",
      tags: ["React", "Laravel", "PostgreSql","Tailwind"],
      image: Img1,
      link: "https://laravel-project-hosting.onrender.com/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A complete portforio that talk about me. Full respownsive website build with React + Tailwind css Learning at Etec Center and it my final project",
      tags: ["React", "Tailwind"],
      image: Img2,
      link: "https://example.com/portfolio",
    },
    {
      id: 3,
      title: "Student Management System(SYS)",
      description: "There are 3 role in this system Admin, Teacher, Student. Each role have different permission to access the system features.",
      tags: ["React", "Tailwind", "Laravel","PostgreSQL"],
      image: Img4,
      link: "https://example.com/portfolio",
    },
    {
      id: 4,
      title: "Not yet available",
      description: "Implemented a React + Laravel marketplace that handles product listings, shopping cart flows, secure payment processing, and programmatic license-key.",
      tags: ["React", "API Integration", "CSS"],
      image: Img3,
      link: "https://example.com/portfolio",
    },
    {
      id: 5,
      title: "Not yet available",
      description: "Implemented a React + Laravel marketplace that handles product listings, shopping cart flows, secure payment processing, and programmatic license-key.",
      tags: ["React", "Express", "PostgreSQL"],
      image: Img3,
      link: "https://example.com/portfolio",
    },
    {
      id: 6,
      title: "Not yet available",
      description: "Implemented a React + Laravel marketplace that handles product listings, shopping cart flows, secure payment processing, and programmatic license-key.",
      tags: ["React", "Next.js", "MDX"],
      image: Img3,
      link: "https://example.com/portfolio",
    },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">My Projects</h1>
        <p className="text-xl text-slate-300 mb-12">Here are some of my recent projects and work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="m-4 flex justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 w-[150px] bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 transition duration-300 text-center"
                >
                  View Website
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
      <section>
        <footer className="bg-slate-900 border-t border-slate-700 py-10 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-2">My Portfolio</h3>
            <p className="text-slate-400 mb-6">
              Crafting beautiful and functional digital experiences.
            </p>

            <div className="flex justify-center gap-6 mb-6">
              <a href="https://facebook.com" className="text-slate-300 hover:text-cyan-400 transition">Facebook</a>
              <a href="https://github.com" className="text-slate-300 hover:text-cyan-400 transition">GitHub</a>
              <a href="https://instagram.com" className="text-slate-300 hover:text-cyan-400 transition">Instagram</a>
            </div>

            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </div>
  )
}
