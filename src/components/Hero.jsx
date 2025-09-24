    import { motion } from "framer-motion";
    import { Mail, Github, Linkedin, Code2, Cloud, Terminal } from "lucide-react";
    import { useState, useEffect } from "react";

    export default function Hero({ skills }) {
    const titles = ["Nithin Sai", "Software Developer", "Cloud Engineer", "Full Stack Developer"];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const current = titles[index];
        let typingSpeed = 120;

        if (displayText.length < current.length) {
        const timeout = setTimeout(() => {
            setDisplayText(current.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
        } else {
        const pause = setTimeout(() => {
            // 🔹 Instead of backspacing, just clear instantly
            setDisplayText("");
            setIndex((prev) => (prev + 1) % titles.length);
        }, 1800); // how long to keep text before erasing
        return () => clearTimeout(pause);
        }
    }, [displayText, index, titles]);

    return (
        <section
        id="hero"
        className="flex items-center justify-center from-indigo-50 via-white to-indigo-100"
        >
        {/* Background graphics */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl">
            {/* Left Column */}
            <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                {displayText}
                <span className="animate-blink">|</span>
                </span>
            </h1>

            <p className="mt-4 text-lg text-slate-700 max-w-xl">
                Backend Engineer passionate about{" "}
                <span className="font-semibold">scalable systems</span>,{" "}
                <span className="font-semibold">cloud-native platforms</span>, and
                developer-first tools. Focused on observability, reliability, and
                elegant code.
            </p>

            <div className="mt-8 flex gap-6 ml-[20%]">
                <a
    href="#projects"
    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-200 text-black font-semibold shadow-lg hover:scale-105 hover:from-blue-200 hover:to-cyan-300 transition-transform"
    >
    🚀 View Projects
    </a>


    <a
    href="#contact"
    className="px-6 py-2.5 rounded-xl border border-blue-500 text-blue-600 hover:bg-blue-50 shadow font-semibold"
    >
    ✉️ Get in Touch
    </a>

            </div>

            <div className="mt-8 flex items-center gap-5 text-slate-600 ml-[40%]">
                <a href="#" aria-label="GitHub" className="hover:text-slate-900">
                <Github size={24} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-slate-900">
                <Linkedin size={24} />
                </a>
                <a href="#contact" aria-label="Email" className="hover:text-slate-900">
                <Mail size={24} />
                </a>
            </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
            className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            >
            <div className="grid grid-cols-2 gap-6">
                <Stat icon={<Code2 className="text-indigo-600" />} label="Experience" value="2+ yrs" />
                <Stat icon={<Terminal className="text-purple-600" />} label="Primary" value="C++" />
                <Stat icon={<Cloud className="text-blue-500" />} label="Cloud" value="AWS" />
                <Stat icon={<Github className="text-slate-800" />} label="Open Source" value="Contributor" />
            </div>

            <div className="mt-8">
                <h3 className="text-sm text-slate-500">⚡ Top Skills</h3>
                <div className="mt-3 flex flex-wrap gap-3">
                {skills.slice(0, 6).map((s) => (
                    <motion.span
                    key={s}
                    whileHover={{ scale: 1.1 }}
                    className="text-sm px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full shadow-sm"
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

    function Stat({ icon, label, value }) {
    return (
        <div className="p-4 rounded-xl bg-white/70 backdrop-blur-md border shadow hover:shadow-lg transition">
        <div className="flex items-center gap-2 text-slate-600 text-sm">
            {icon} {label}
        </div>
        <div className="text-2xl font-bold mt-1">{value}</div>
        </div>
    );
    }

    /* Add this to your CSS (e.g., globals.css or tailwind.config layer) */
    <style jsx global>{`
    .animate-blink {
        animation: blink 1s step-end infinite;
    }
    @keyframes blink {
        50% {
        opacity: 0;
        }
    }
    `}</style>
