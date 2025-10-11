import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects({ projects }) {
  // Animation variants for the container to orchestrate children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: "easeOut" },
    },
  };

  // Animation variants for each project card
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-6 md:px-12
                 bg-gradient-to-b from-indigo-50 via-white to-indigo-100
                 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
                 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-20 text-4xl md:text-5xl font-extrabold text-center"
      >
        <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </motion.h2>

      <motion.div
        className="w-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.id}
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group" // Added for group-hover effects
          >
            <article
              className="relative w-full h-full p-6 rounded-2xl flex flex-col
                         bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl
                         border border-white/30 dark:border-slate-700 shadow-xl
                         hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video w-full bg-slate-200/50 dark:bg-slate-700/50 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-slate-400 dark:text-slate-500 text-sm">Image Preview</span>
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 flex-1">{p.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-3 py-1 rounded-full shadow-sm
                                 bg-gradient-to-r from-indigo-100 to-purple-100 
                                 dark:from-indigo-700/40 dark:to-purple-700/40
                                 text-slate-800 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 flex justify-end items-center gap-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} GitHub Repository`}
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github size={22} />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} Live Demo`}
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink size={22} />
                  </a>
                )}
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}