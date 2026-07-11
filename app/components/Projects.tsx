"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo: string;
  rotateInit: number;
  gradient: string;
  preview: React.ReactNode;
  type: "company" | "personal";
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "ShaadiRoot",
      description: "A professional company project. An AI-powered wedding planning platform serving wedding planning and vendor management workflows, improving user experience through responsive React-based interfaces.",
      tags: ["Next.js", "React.js", "Geo-detection", "QR Entry"],
      demo: "https://shaadiroot.com/",
      rotateInit: -5,
      gradient: "from-pink-900/40 via-purple-900/20 to-transparent",
      preview: (
        <div className="w-full h-full flex flex-col gap-2 p-3 text-left">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] text-zinc-500 font-mono">SHAADIROOT PLANNER</span>
            <span className="text-[8px] px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 font-semibold uppercase tracking-wider">AI Wedding Assistant</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-1.5">
            <div className="flex justify-between text-[9px] text-zinc-400 font-mono">
              <span>Guests: 150 Invited</span>
              <span>Budget: 85% Used</span>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-5/6 h-full bg-pink-500 rounded-full" />
            </div>
          </div>
        </div>
      ),
      type: "company",
    },
    {
      title: "FotoRoot",
      description: "A professional company project. A premium photography workflow and portfolio sharing system that lets event photographers upload, manage, and share high-resolution galleries with clients.",
      tags: ["Next.js", "AI Face Match", "Sentry", "CDN Gallery"],
      demo: "https://www.fotoroot.com/",
      rotateInit: 3,
      gradient: "from-blue-900/40 via-cyan-900/20 to-transparent",
      preview: (
        <div className="w-full h-full flex flex-col justify-between p-3 text-left font-mono">
          <div className="flex justify-between items-center text-[10px] text-zinc-400">
            <span>FOTOROOT ENGINE</span>
            <span className="text-cyan-400 text-[8px] px-2 py-0.5 rounded-full bg-cyan-500/10 font-semibold uppercase">Active Gallery</span>
          </div>
          <div className="text-[9px] text-zinc-300 space-y-1">
            <div>Uploaded: 254 Photos (4.8 GB)</div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-cyan-500 rounded-full" />
            </div>
          </div>
        </div>
      ),
      type: "company",
    },
    {
      title: "Air-Asia flight Booking",
      description: "Flight booking system built with Spring Boot, including flight search, booking, price filtering, and secured with role-based access control.",
      tags: ["Spring Boot", "Hibernate JPA", "REST APIs", "SQL"],
      github: "https://github.com/farooquie",
      demo: "https://github.com/farooquie",
      rotateInit: -4,
      gradient: "from-amber-900/40 via-orange-900/20 to-transparent",
      preview: (
        <div className="w-full h-full flex flex-col justify-between p-3 text-left font-mono">
          <div className="flex justify-between items-center text-[10px] text-zinc-400">
            <span>FLIGHT AI-302</span>
            <span className="text-amber-500">Spring Boot REST API</span>
          </div>
          <div className="text-[9px] text-zinc-500 space-y-0.5">
            <div>GET /api/flights?dest=Delhi</div>
            <div className="text-zinc-300">Response: 200 OK (12ms)</div>
          </div>
        </div>
      ),
      type: "personal",
    },
    {
      title: "Medi-Shop",
      description: "Robust Online Medical Shop, allowing users to browse, search, and purchase medical products and reviews for various medicines and services.",
      tags: ["Advanced Java", "Hibernate JPA", "JDBC"],
      github: "https://github.com/farooquie",
      demo: "https://github.com/farooquie",
      rotateInit: 6,
      gradient: "from-emerald-900/40 via-teal-900/20 to-transparent",
      preview: (
        <div className="w-full h-full flex flex-col justify-between p-3 text-left font-mono">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[9px] text-zinc-400 font-mono">MEDI-SHOP STORAGE</span>
            <span className="text-[8px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold uppercase tracking-wider">Database Online</span>
          </div>
          <div className="flex flex-col gap-1 text-[10px] font-mono text-zinc-300">
            <div>Paracetamol: <span className="text-emerald-400">In Stock (500)</span></div>
            <div>Amoxicillin: <span className="text-yellow-400">Low Stock (12)</span></div>
          </div>
        </div>
      ),
      type: "personal",
    },
  ];

  const renderProjectCard = (project: Project) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 80, rotate: project.rotateInit, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-card hover:border-white/15 transition-colors duration-500 overflow-hidden min-h-[460px]"
    >
      {/* Radial gradient background behind card on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

      <div>
        {/* Header (Title & Tags) */}
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase bg-zinc-900 px-2.5 py-1 rounded-full border border-white/5 shrink-0">
            {project.tags[0]}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors duration-300">
          {project.description}
        </p>
      </div>

      {/* simulated graphic UI element */}
      <div className="w-full h-32 rounded-2xl border border-white/5 bg-black/60 backdrop-blur-md overflow-hidden relative shadow-inner mb-8 transition-transform duration-500 group-hover:scale-[1.03] group-hover:border-white/10 flex items-center justify-center">
        {project.preview}
      </div>

      {/* Card Footer Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="flex gap-2">
          {project.tags.slice(1).map((t) => (
            <span key={t} className="text-[9px] text-zinc-500 font-medium">
              • {t}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white flex items-center gap-1 transition-all duration-300"
            >
              Code <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {project.type === "company" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white flex items-center gap-1 transition-all duration-300"
            >
              Visit <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">Selected Work</span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white animate-pulse-slow">
            Built, not just imagined.
          </h2>
        </div>

        {/* Company Projects Subsection */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-white/5 pb-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase font-mono">Company Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.type === "company").map(renderProjectCard)}
          </div>
        </div>

        {/* Personal Projects Subsection */}
        <div className="flex flex-col gap-8">
          <div className="border-b border-white/5 pb-2">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase font-mono">Personal Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.type === "personal").map(renderProjectCard)}
          </div>
        </div>

      </div>
    </section>
  );
}
