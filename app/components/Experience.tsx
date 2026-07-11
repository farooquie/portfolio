"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
  logoText: string;
  logoBg: string;
  technologies: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Software Developer",
      company: "Eluntrix Digital",
      location: "Remote / Office",
      period: "2025 - Present",
      description: "JavaScript Full-Stack Web Development focused on building modern web applications, AI integrations, and responsive client interfaces.",
      logoText: "E",
      logoBg: "from-indigo-600 to-purple-600",
      bullets: [
        "Developed and maintained ShaadiRoot, an AI-powered wedding planning platform using Next.js & React.",
        "Integrated IP-based Geo-location APIs for dynamic city detection and QR code generation for guest entry check-ins.",
        "Assisted in the design and optimization of FotoRoot's AI-powered Face Matching photo delivery engine.",
        "Configured Sentry monitoring for real-time error telemetry, exception logging, and production performance diagnostics.",
        "Collaborated on UI/UX typography improvements using custom fonts (Google Sans, Cinzel, Montserrat) and Lucide integrations."
      ],
      technologies: ["Next.js", "React.js", "AI Face Match", "Sentry", "Geo-location", "QR Entry", "REST APIs", "Git"]
    },
    {
      role: "Java Full-Stack Trainee",
      company: "JSpiders: Java Training Institute",
      location: "India",
      period: "2023 - 2024",
      description: "Comprehensive training and project work focused on Java Full-Stack Web Development, backend services, and database integration.",
      logoText: "J",
      logoBg: "from-amber-500 to-red-500",
      bullets: [
        "Developed Medi-Shop, a robust Online Medical Shop using Advanced Java, Hibernate JPA, and JDBC.",
        "Implemented user log-in, review submissions, rating systems, and sorting/filtering queries.",
        "Designed and implemented the Air-Asia Flight Booking system with Spring Boot.",
        "Created role-based access control and developed secure RESTful APIs.",
        "Utilized JPA and Hibernate for database operations and schema optimization."
      ],
      technologies: ["Java", "Spring Boot", "Hibernate JPA", "JDBC", "HTML & CSS", "MySQL", "Postman"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 -z-10 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-red-500/[0.02] blur-[120px]" />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">Journey</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
          <p className="max-w-md text-sm text-zinc-400">
            A timeline of my professional experience, key responsibilities, and training achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 md:border-l-0 md:flex md:flex-col md:items-center">
          
          {/* Vertical Center Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[1px] bg-zinc-800 h-full top-0" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={exp.company} 
                className="relative mb-12 md:mb-16 w-full flex flex-col md:flex-row md:justify-between items-start md:items-center"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 border-red-500 bg-[#050505] shadow-[0_0_10px_rgba(239,68,68,0.5)] z-20" />

                {/* Left Side Content Container */}
                <div className={`w-full md:w-[45%] pl-6 md:pl-0 ${isLeft ? "md:text-right" : "md:order-2"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="p-6 rounded-[2rem] glass-card border border-white/5 hover:border-white/10 transition-all duration-300 text-left"
                  >
                    {/* Header (Role, Company logo, period) */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-zinc-400 mt-1">
                          {exp.company}
                        </p>
                      </div>
                      
                      {/* Styled Company Logo Letter */}
                      <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center bg-gradient-to-br ${exp.logoBg} text-white font-bold text-lg shadow-lg`}>
                        {exp.logoText}
                      </div>
                    </div>

                    {/* Date Period Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-xs text-zinc-400 font-mono mb-4">
                      <Calendar size={12} className="text-zinc-500" />
                      {exp.period}
                    </div>

                    {/* Brief description */}
                    <p className="text-xs sm:text-sm text-zinc-400 italic mb-4 leading-relaxed">
                      &ldquo;{exp.description}&rdquo;
                    </p>

                    {/* Bullet list of achievements */}
                    <ul className="space-y-2 mt-4 border-t border-white/5 pt-4">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                          <CheckCircle2 size={14} className="text-red-500/70 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies used tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-[9px] font-mono tracking-wider bg-zinc-900/90 text-zinc-400 px-2.5 py-0.5 rounded border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                </div>

                {/* Right Side Spacer/Placeholder for layout symmetry */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
