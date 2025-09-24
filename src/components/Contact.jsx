import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen w-full flex flex-col justify-center px-8 py-16 "
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"
      >
        📬 Get in Touch
      </motion.h2>

      <div className="flex justify-start w-full px-6 gap-40">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="bg-white p-10 rounded-2xl shadow-lg flex flex-col justify-between w-full min-h-[400px] max-w-xl mx-auto"
        >
          <div>
            <label className="block text-sm text-slate-600">Name</label>
            <input
              className="mt-2 w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Your name"
            />

            <label className="block text-sm text-slate-600 mt-4">Email</label>
            <input
              className="mt-2 w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="you@domain.com"
            />

            <label className="block text-sm text-slate-600 mt-4">Message</label>
            <textarea
              className="mt-2 w-full rounded-md border px-4 py-2 h-32 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="What would you like to build?"
            />
          </div>

          <div className="mt-6">
            <button
                type="submit"
                className="px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
                >
                Send message
            </button>
          </div>
        </motion.form>

        {/* Quick Links / Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-2xl shadow-lg flex-col justify-between w-full min-h-[400px] max-w-xl mx-auto"
        >
          <div>
            <h3 className="text-sm text-slate-500">Quick links</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 hover:underline text-slate-700"
                >
                  <FileText size={18} /> Download Resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nithinsai99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline text-slate-700"
                >
                  <Github size={18} /> GitHub Projects
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nithinsai-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline text-slate-700"
                >
                  <Linkedin size={18} /> LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href="mailto:mikkilineninithinsai9@gmail.com"
                  className="inline-flex items-center gap-2 hover:underline text-slate-700"
                >
                  <Mail size={18} /> Email Me
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
