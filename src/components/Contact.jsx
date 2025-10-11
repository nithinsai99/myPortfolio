import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Contact() {
  const quickLinks = [
    {
      icon: <FileText size={20} />,
      text: "View My Resume",
      href: "#resume", // Replace with your resume link
    },
    {
      icon: <Github size={20} />,
      text: "GitHub Profile",
      href: "https://github.com/nithinsai99", // Replace with your GitHub link
    },
    {
      icon: <Linkedin size={20} />,
      text: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/nithinsai-m", // Replace with your LinkedIn link
    },
    {
      icon: <Mail size={20} />,
      text: "mikkilineninithinsai9@gmail.com",
      href: "mailto:mikkilineninithinsai9@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-center py-24
                 bg-gradient-to-b from-indigo-50 via-white to-indigo-100
                 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
                 overflow-hidden px-6 md:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-4xl md:text-5xl font-extrabold text-center"
      >
        <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          Let's Connect
        </span>
      </motion.h2>

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column: Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the form or connect with me through my channels.
          </p>
          <div className="space-y-4 pt-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl group
                           bg-white/60 dark:bg-slate-800/60 backdrop-blur-md
                           border border-white/30 dark:border-slate-700 shadow-lg
                           hover:bg-white/90 dark:hover:bg-slate-800/90
                           hover:shadow-xl transition-all duration-300"
              >
                <div className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onSubmit={(e) => e.preventDefault()}
          className="p-8 rounded-2xl
                     bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl
                     border border-white/30 dark:border-slate-700 shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2.5 rounded-lg border-2
                           bg-slate-100/50 dark:bg-slate-800/50
                           border-slate-200 dark:border-slate-700
                           focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500
                           outline-none transition text-slate-900 dark:text-slate-100"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2.5 rounded-lg border-2
                           bg-slate-100/50 dark:bg-slate-800/50
                           border-slate-200 dark:border-slate-700
                           focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500
                           outline-none transition text-slate-900 dark:text-slate-100"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2.5 rounded-lg border-2
                           bg-slate-100/50 dark:bg-slate-800/50
                           border-slate-200 dark:border-slate-700
                           focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500
                           outline-none transition text-slate-900 dark:text-slate-100 resize-none"
                placeholder="Your message..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 w-full px-6 py-3 rounded-xl text-black font-semibold shadow-lg
                       bg-gradient-to-r from-blue-100 to-cyan-200
                       hover:scale-105 hover:from-blue-200 hover:to-cyan-300 transition-transform
                       dark:bg-gradient-to-r dark:from-indigo-700 dark:to-purple-700 dark:text-white"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}