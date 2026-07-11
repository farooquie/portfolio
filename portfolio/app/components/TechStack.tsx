"use client";

import { motion } from "framer-motion";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Design" | "AI / ML" | "Blockchain" | "Hardware";
  icon: React.ReactNode;
}

export default function TechStack() {
  const techs: TechItem[] = [
    {
      name: "Java",
      category: "Backend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M6 15c0 0-2-1-2-3s3-3 8-3 8 1 8 3-2 3-2 3M12 9V3M10 6h4" />
          <path d="M5 18c4 1 10 1 14 0" />
        </svg>
      ),
    },
    {
      name: "Spring Boot",
      category: "Backend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M6 12a6 6 0 0 1 12 0" />
          <path d="M12 8v8" />
        </svg>
      ),
    },
    {
      name: "React.js",
      category: "Frontend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 h-12">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M16 8v5a2 2 0 0 1-2 2h-1M9 15c0-1.5 1-2.5 2.5-2.5" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      category: "Database",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M12 2c0 0-4 4.5-4 9.5C8 15 10 17 12 22c2-5 4-7 4-10.5C16 6.5 12 2 12 2z" />
          <path d="M12 6v10" />
        </svg>
      ),
    },
    {
      name: "Firebase",
      category: "Database",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M3.89 15.55L12 2.5l8.11 13.05M3.89 15.55l8.11-6.19 8.11 6.19M3.89 15.55l8.11 5.95 8.11-5.95" />
        </svg>
      ),
    },
    {
      name: "Google Cloud",
      category: "Tools",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "Git / GitHub",
      category: "Tools",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6M9 15l6-6" />
        </svg>
      ),
    },
    {
      name: "VS Code",
      category: "Tools",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M4 6l16 12M20 6L4 18M4 6h16v12H4V6z" />
        </svg>
      ),
    },
    {
      name: "Python",
      category: "Backend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M12 2c-4 0-5 2-5 4v2h10V6c0-2-1-4-5-4zM7 14v4c0 2 1 4 5 4s5-2 5-4v-2H7z" />
          <circle cx="9.5" cy="5.5" r="0.75" fill="currentColor" />
          <circle cx="14.5" cy="18.5" r="0.75" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <circle cx="12" cy="12" r="10" />
          <path d="M7 17V7l10 10V7" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
    {
      name: "TailwindCSS",
      category: "Frontend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M12 6c-3 0-4.5 1.5-4.5 4.5s1.5 4.5 4.5 4.5 4.5-1.5 4.5-4.5S15 6 12 6z" />
          <path d="M6 12c0-3 1.5-4.5 4.5-4.5S15 9 15 12s-1.5 4.5-4.5 4.5S6 15 6 12z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
          <path d="M12 6v12M8 9h8" />
        </svg>
      ),
    },
    {
      name: "OpenAI API",
      category: "Tools",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" />
        </svg>
      ),
    },
    {
      name: "Photoshop & Canva",
      category: "Design",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M9 7v10M9 7h4a3 3 0 0 1 0 6H9" />
        </svg>
      ),
    },
    {
      name: "MS Office & Basics",
      category: "Tools",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6M9 13h6" />
        </svg>
      ),
    },
    {
      name: "Hibernate",
      category: "Backend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M8 14V10h8v4M8 12h8" />
        </svg>
      ),
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 7h4a2.5 2.5 0 0 1 0 5H9m0-5v10m0-5h4.5a2.5 2.5 0 0 1 0 5H9" />
        </svg>
      ),
    },
    {
      name: "REST APIs",
      category: "Backend",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 md:w-12 h-12">
          <path d="M16 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM20 13H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 7h4v6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[100px]" />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">Expertise</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Technical Stack
          </h2>
          <p className="max-w-md text-sm text-zinc-400">
            A curated list of languages, frameworks, and design tools I work with daily.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {techs.map((tech) => (
            <motion.article
              key={tech.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group w-28 h-28 md:w-36 md:h-36 flex items-center justify-center cursor-default shrink-0"
            >
              {/* Top category tag sliding in/fading in on hover */}
              <div className="absolute -top-3 z-30 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none">
                <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase bg-[#0c0c0c] border border-white/10 px-2.5 py-1 rounded-full shadow-xl">
                  {tech.category}
                </span>
              </div>

              {/* Glassmorphic Rounded Square Card Body */}
              <div className="absolute inset-0 z-10 rounded-[2.2rem] bg-white/[0.01] border border-white/[0.04] backdrop-blur-md transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.03] overflow-hidden">
                {/* Visual hover flare overlay */}
                <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, transparent 80%)" }} />
              </div>

              {/* Icon Container with scale and color transition */}
              <div className="relative z-20 text-zinc-600 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {tech.icon}
              </div>

              {/* Bottom technology name sliding in/fading in on hover */}
              <div className="absolute -bottom-3 z-30 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none">
                <span className="text-[9px] font-bold tracking-widest text-white uppercase bg-black border border-white/10 px-2.5 py-1 rounded-full shadow-xl">
                  {tech.name}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
