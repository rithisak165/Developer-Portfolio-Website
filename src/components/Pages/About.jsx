
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">About Me</h1>

        <div className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-6xl font-bold">
              S
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">RITHISAK</h2>
              <p className="text-xl text-cyan-400 mb-4">Full Stack Developer</p>
              <p className="text-slate-300 leading-relaxed">
                Passionate about creating elegant solutions to complex problems. With over 5 years of experience in web
                development, I specialize in building modern, responsive applications.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["React", "JavaScript", "Tailwind CSS", "Boostrap", "PhP", "Laravel", "Git", "PostgreSql", "Hosting"].map((skill) => (
              <div key={skill} className="bg-slate-700 px-4 py-3 rounded-lg text-center font-medium text-slate-200">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-bold text-white">Studying at Norton</h3>
              <p className="text-cyan-400 mb-2">Learning • 2023 - Present</p>
              <p className="text-slate-300">I am studying Software Development at Norton University, focusing on coding, technology, and creating innovative digital solutions.</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-bold text-white">Etec Center</h3>
              <p className="text-cyan-400 mb-2">Learn from • 2021 - Present</p>
              <p className="text-slate-300">After finishing my BacII in 2022, I started learning C, C++, Python, Flash, Java, SQL, web design, and PHP Laravel at Etec Center to strengthen my programming and web development skills.</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Certificate From Etec Center </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Basic/Advance C/C++/ OOP & Algorithm", "Basic/Advance Python / Flask & Project Courses", "Basic/Advance Java/MySQL/iReport & Project Courses", "Basic/Advance PhP/MySQL/Laravel/API & Project Courses"].map((skill) => (
                  <div key={skill} className="bg-slate-700 px-4 py-3 rounded-lg text-center font-medium text-slate-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
      </div>
        <section>
        <footer className="bg-slate-900 border-t border-slate-700 py-10 px-4 ">
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
