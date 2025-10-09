import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="relative min-h-screen snap-start flex flex-col justify-center bg-transparent py-20"
    >
      {/* Light background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse dark:bg-indigo-700/30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse dark:bg-pink-600/30"></div>
      </div>

      <div className="w-full max-w-6xl px-6 mx-auto">
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
              // Add hover and tap animations
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              
              className="relative p-6 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-lg shadow-xl border border-white/40 dark:border-slate-700 hover:shadow-2xl flex flex-col cursor-pointer"
              
              // Animation variants for staggering effect
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* --- New Hover Glow Effect --- */}
              <div className="absolute -inset-2 bg-indigo-400/30 dark:bg-purple-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{p.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300 flex-1">{p.description}</p>

                <div className="mt-6 flex justify-between items-center">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tech.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-slate-200/50 dark:bg-slate-700/50 rounded-full text-slate-600 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} GitHub Repository`}
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} Live Demo`}
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}