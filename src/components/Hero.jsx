import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Code2, Cloud, Terminal } from "lucide-react";

export default function Hero({ skills }) {
  // The titles array is now a constant outside the component to prevent re-creation on renders.
  const titles = ["Nithin Sai", "Software Developer", "Cloud Engineer", "Full Stack Developer"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const current = titles[index];
    const typingSpeed = 120;

    if (displayText.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayText("");
        setIndex((prev) => (prev + 1) % titles.length);
      }, 1800);
      return () => clearTimeout(pause);
    }
    // Corrected dependency array for the useEffect hook.
  }, [displayText, index]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center
                bg-gradient-to-b from-indigo-50 via-white to-indigo-100
                dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
                overflow-hidden py-20" // Added padding-y for better spacing on all screens
    >
      {/* Background graphics */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full 
                        mix-blend-multiply filter blur-3xl opacity-30 animate-pulse 
                        dark:bg-indigo-700/30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full 
                        mix-blend-multiply filter blur-3xl opacity-30 animate-pulse 
                        dark:bg-pink-600/30"></div>
      </div>

      {/* Main content grid */}
      <div className="w-full max-w-screen-xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 items-center">

        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center md:items-start" // Center content on mobile, align start on desktop
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline: Adjusted text size and alignment for mobile */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-slate-100 text-center md:text-left">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </h1>

          {/* Subheading: Adjusted alignment for mobile */}
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-xl text-center md:text-left">
            Software Engineer passionate about{" "}
            <span className="font-semibold">scalable systems</span>,{" "}
            <span className="font-semibold">cloud-native platforms</span>, and
            developer-first tools. Focused on observability, reliability, and
            elegant code.
          </p>

          {/* Buttons: Centered on mobile, stack on xs screens, align start on desktop */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-2.5 w-full sm:w-auto text-center rounded-xl bg-gradient-to-r from-blue-100 to-cyan-200 text-black font-semibold shadow-lg hover:scale-105 hover:from-blue-200 hover:to-cyan-300 transition-transform dark:bg-gradient-to-r dark:from-indigo-700 dark:to-purple-700 dark:text-white"
            >
              🚀 View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 w-full sm:w-auto text-center rounded-xl border border-blue-500 text-blue-600 hover:bg-blue-50 shadow font-semibold dark:border-indigo-400 dark:text-indigo-300 dark:hover:bg-indigo-800/40"
            >
              ✉️ Get in Touch
            </a>
          </div>

          {/* Social Icons: Centered on mobile, align start on desktop */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-5 text-slate-600 dark:text-slate-300">
            <a href="https://github.com/nithinsai99/" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nithinsai-m/" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mikkilineninithinsai9@gmail.com" aria-label="Email" className="hover:text-slate-900 dark:hover:text-white">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Stats & Skills Card */}
        <motion.div
          className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/30 dark:border-slate-700"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Stat icon={<Code2 className="text-indigo-600 dark:text-indigo-400" />} label="Experience" value="2+ yrs" />
            <Stat icon={<Terminal className="text-purple-600 dark:text-purple-400" />} label="Primary" value="C++" />
            <Stat icon={<Cloud className="text-blue-500 dark:text-blue-400" />} label="Cloud" value="AWS" />
            <Stat icon={<Github className="text-slate-800 dark:text-slate-200" />} label="Open Source" value="Contributor" />
          </div>

          <div className="mt-8">
            <h3 className="text-sm text-slate-500 dark:text-slate-400">⚡ Top Skills</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {skills.slice(0, 6).map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ scale: 1.1 }}
                  className="text-sm px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-700/40 dark:to-purple-700/40 rounded-full shadow-sm"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Sub-component for displaying individual stats
function Stat({ icon, label, value }) {
  return (
    <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-700/60 backdrop-blur-md border shadow hover:shadow-lg transition">
      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
        {icon} {label}
      </div>
      <div className="text-xl sm:text-2xl font-bold mt-1 text-slate-900 dark:text-slate-100">{value}</div>
    </div>
  );
}