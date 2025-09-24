import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="relative min-h-screen snap-start flex flex-col justify-center bg-transparent"
    >
      {/* Light background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="w-full max-w-6xl px-6 py-20 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"
        >
          🚀 Projects
        </motion.h2>

        <motion.div
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg shadow-xl border border-white/40 hover:shadow-2xl transition flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 flex-1">{p.description}</p>

              <div className="mt-4 flex gap-4">
                {/* GitHub Link */}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} GitHub Repository`}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}

                {/* Live Demo Link */}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} Live Demo`}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
