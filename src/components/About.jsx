import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

// Updated timeline data - no structural changes needed
const timeline = [
    {
      id: 1,
      side: "right",
      category: "Work",
      icon: <Briefcase />,
      role: "IT Support - Student Assistant",
      org: "Texas Tech University Health Sciences Center",
      period: "Feb 2025 – Present",
      location: "Lubbock, TX",
      details: [
        "Resolved 20–30 technical issues per shift, reducing resolution time by 25% for 1,000+ users.",
        "Developed 7 Power BI dashboards enabling 10% faster issue triage.",
        "Automated workflows with PowerShell, cutting manual work by 40%."
      ],
    },
    {
      id: 2,
      side: "left",
      category: "Education",
      icon: <GraduationCap />,
      role: "M.S. Computer and Information Science",
      org: "Texas Tech University",
      period: "Aug 2024 – May 2026",
      location: "Texas, USA",
      details: [
        "Relevant Coursework: Advanced Software Engineering, Cloud Computing, Algorithms, Artificial Intelligence."
      ],
    },
    {
      id: 3,
      side: "right",
      category: "Work",
      icon: <Briefcase />,
      role: "Software Engineer Intern – Azure Core",
      org: "Microsoft",
      period: "May 2023 – Jul 2023",
      location: "Remote",
      details: [
        "Engineered high-performance gRPC microservices in C++, reducing inter-service latency by 40%.",
        "Built a real-time log monitoring web app using React & Go, processing over 10,000 entries per day.",
        "Delivered production-ready features via Agile sprints and CI/CD pipelines in Azure DevOps."
      ],
    },
    {
      id: 4,
      side: "right",
      category: "Work",
      icon: <Briefcase />,
      role: "Student Developer",
      org: "Koneru Lakshmaiah University",
      period: "Aug 2021 – Apr 2023",
      location: "India",
      details: [
        "Directed the development of a MERN-stack student performance tracking platform, adopted by 500+ users.",
        "Optimized backend queries and frontend rendering, which together reduced page load times by 30%.",
        "Implemented RBAC authentication for secure access to sensitive academic data."
      ],
    },
    {
      id: 5,
      side: "left",
      category: "Education",
      icon: <GraduationCap />,
      role: "B.Tech Computer Science (Minor in Data Science)",
      org: "KL University",
      period: "Aug 2020 – May 2024",
      location: "India",
      details: [
        "Graduated with a GPA of 9.37/10",
        "Relevant Coursework: Operating Systems, Database Management, Data Structures & Algorithms, Data Science."
      ],
    },
  ];

export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full py-24 px-6 md:px-12
                 bg-gradient-to-b from-indigo-100 via-white to-indigo-50
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
          My Journey
        </span>
      </motion.h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* The center timeline */}
        <div className="absolute left-1/2 top-2 h-full w-0.5 bg-slate-300 dark:bg-slate-700 -translate-x-1/2"></div>

        {/* Timeline items */}
        {timeline.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

const TimelineItem = ({ item }) => {
  const isLeft = item.side === "left";
  const cardVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="relative flex justify-center mb-12">
      {/* The timeline dot */}
      <div className={`absolute top-2 left-1/2 w-5 h-5 rounded-full z-10 -translate-x-1/2 border-4 border-white dark:border-slate-800
                       ${item.category === 'Work' ? 'bg-indigo-500' : 'bg-purple-500'}`}>
      </div>
      
      {/* The Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={cardVariants}
        className={`w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl
                    bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl
                    border border-white/30 dark:border-slate-700 shadow-2xl
                    ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className={`p-2 rounded-full bg-white/80 dark:bg-slate-700/60
                           ${item.category === 'Work' ? 'text-indigo-600 dark:text-indigo-400' : 'text-purple-600 dark:text-purple-400'}`}>
            {item.icon}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            {item.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          {item.role}
        </h3>
        <h4 className="text-md font-semibold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          @ {item.org}
        </h4>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          {item.period} &bull; {item.location}
        </p>

        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {item.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 flex-shrink-0"></span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};