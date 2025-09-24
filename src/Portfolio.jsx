import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Generative AI-Powered Global Weather Platform",
      description:
        "AI-powered weather web app built with Django, integrating Google Generative AI for contextual summaries across 1,000+ cities. Optimized with async APIs for 35% faster responses.",
      tech: ["Django", "Google Generative AI", "OpenWeather API", "Google Image Search"],
      github: "https://github.com/nithinsai99/weather_app.git",
      demo: "https://github.com/nithinsai99/weather_app.git",

    },
    {
      id: 2,
      title: "Real-Time Criminal Face Detection Web App",
      description:
        "Python + OpenCV-based real-time facial detection system with optimized pipelines for high-throughput video streams, improving detection speed and accuracy.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      github: "https://github.com/nithinsai99/weather_app.git",
      demo: "https://github.com/nithinsai99/weather_app.git",
    },
    {
      id: 3,
      title: "Azure gRPC Microservices (Microsoft Internship)",
      description:
        "Engineered gRPC microservices in Azure Core reducing inter-service latency by 40%. Built a real-time log monitoring web app processing 10K+ entries/day.",
      tech: ["C#", "gRPC", "Azure", "CI/CD", "Microservices"],
      github: "https://github.com/nithinsai99/weather_app.git",
      demo: "https://github.com/nithinsai99/weather_app.git",
    },
    {
      id: 4,
      title: "MERN Student Performance Tracking Platform",
      description:
        "Directed development of a MERN-based analytics platform adopted by 500+ users. Implemented RBAC authentication and optimized queries for 30% faster load times.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/nithinsai99/weather_app.git",
      demo: "https://github.com/nithinsai99/weather_app.git",
    },
  ];

  const skills = [
    "C++", "Java Script", "Python", "Postgres / MySQL",
    "Docker / Kubernetes", "AWS / Azure", "Restful APIs", "Algorithm Design", "System Design"
  ];

  return (
    <div className="flex">
        <Header />
        <main className="flex-1 snap-y snap-mandatory overflow-y-auto">
            <section
            id="hero"
            className="h-screen snap-start flex items-center justify-center"
            >
            <Hero skills={skills} />
            </section>

            <section
            id="projects"
            className="min-h-screen snap-start flex items-center justify-center px-6 md:px-12 py-24"
            >
            <Projects projects={projects} />
            </section>

            <section
            id="about"
            className="min-h-screen snap-start flex items-center justify-center px-6 md:px-12 py-24"
            >
            <About />
            </section>

            <section
            id="contact"
            className="min-h-screen snap-start flex items-center justify-center px-6 md:px-12 py-24"
            >
            <Contact />
            </section>
            <Footer />
        </main>
        
    </div>

  );
}
