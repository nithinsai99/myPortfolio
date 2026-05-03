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
    role: "Software Engineer (Graduate Assistant)",
    org: "Texas Tech University",
    period: "Mar 2025 – Present",
    location: "Lubbock, TX",
    details: [
      "Developed Forecast AI, a predictive analytics system using C# and Random Forest models to forecast energy usage for solar plants and support distribution planning.",
      "Architected multi-cloud infrastructure across AWS and Azure to handle larger data loads and real-time model inference, improving system scalability.",
      "Engineered internal automation scripts using Python and PowerShell, reducing manual workflows by 40% and increasing operational efficiency.",
      "Maintained server infrastructure and optimized diagnostic workflows, ensuring high availability for 1,000+ active users."
    ],
  },
  {
    id: 2,
    side: "right",
    category: "Work",
    icon: <Briefcase />,
    role: "IT Support Specialist (Student Assistant)",
    org: "Texas Tech University",
    period: "Aug 2024 – Mar 2025",
    location: "Lubbock, TX",
    details: [
      "Resolved high-volume technical support tickets via ServiceNow and CXone, reducing downtime for faculty and staff across Windows and macOS.",
      "Guided users through multi-factor authentication (MFA) and account recovery protocols to ensure secure access to sensitive systems.",
      "Provided remote technical guidance to non-technical users, decreasing ticket escalation rates through effective first-line troubleshooting.",
    ],
  },
  {
    id: 3,
    side: "left",
    category: "Education",
    icon: <GraduationCap />,
    role: "M.S. Computer and Information Science",
    org: "Texas Tech University",
    period: "Aug 2024 – May 2026",
    location: "Lubbock, TX",
    details: [
      "Coursework: Software Foundations, Computer Architecture, Algorithms, Artificial Intelligence, Analysis of Algorithms, Computational Theory."
    ],
  },
  {
    id: 4,
    side: "right",
    category: "Work",
    icon: <Briefcase />,
    role: "Software Engineer Intern",
    org: "Microsoft",
    period: "May 2023 – Jul 2023",
    location: "Remote",
    details: [
      "Engineered gRPC-based microservices and network optimizations, reducing inter-service latency by 40% for systems serving millions of daily requests.",
      "Built an automated diagnostic feature to trigger real-time network analysis via CLI, integrating telemetry systems to replace manual workflows.",
      "Delivered production-ready features through Azure DevOps CI/CD pipelines, improving deployment reliability and service stability.",
      "Refactored core networking components and expanded automated test coverage to improve scalability and maintainability."
    ],
  },
  {
    id: 5,
    side: "right",
    category: "Work",
    icon: <Briefcase />,
    role: "Student Software Engineer (Peer Mentor)",
    org: "Koneru Lakshmaiah University",
    period: "Aug 2021 – Apr 2023",
    location: "",
    details: [
      "Designed a scalable ASP.NET Core platform to collect, analyze, and visualize academic data, serving 500+ daily users.",
      "Optimized Entity Framework queries and SQL stored procedures, reducing page load times by 30% for data-heavy dashboards.",
      "Implemented RBAC using .NET Identity to ensure secure data handling and compliance.",
      "Automated administrative workflows by integrating ServiceNow APIs with C# background services, cutting manual processing by 25%.",
      "Directed the student developer team to improve database efficiency and UI performance, boosting responsiveness by 25%."
    ],
  },
  {
    id: 6,
    side: "left",
    category: "Education",
    icon: <GraduationCap />,
    role: "B.Tech Computer Science and Engineering",
    org: "KL University",
    period: "Aug 2020 – May 2024",
    location: "",
    details: [
      "GPA: 9.37/10",
      "Coursework: Operating Systems, Databases, Algorithms, Programming Languages, Computer Architecture, Engineering Entrepreneurship, Intro to Data Science."
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