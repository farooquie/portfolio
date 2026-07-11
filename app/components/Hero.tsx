"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, FileText } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-16 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-x-0 top-1/4 -z-10 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-4xl flex flex-col items-start gap-8 z-10">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md text-xs font-semibold text-zinc-300 shadow-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <MapPin size={12} className="text-zinc-500" />
          New Delhi, India
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]"
          >
            Hi, I'm Aman Ali <br />
            <span className="text-zinc-500 font-light">Full Stack Developer.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed mt-2"
          >
            Full-stack developer specializing in building responsive web applications, robust REST APIs, and database-driven systems with Java, Spring Boot, and React.js.
          </motion.p>
        </div>

        {/* Call to Actions (CTA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="https://github.com/farooquie"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 pl-3 pr-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm shadow-2xl hover:bg-zinc-100 transition-all duration-300 overflow-hidden"
          >
            {/* Avatar inside CTA */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-black/10 shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&q=80"
                alt="Profile Avatar"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>

            {/* Default Text */}
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              See My GitHub
            </span>

            {/* Expandable GitHub Icon Sliding in from right */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white absolute right-2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <GithubIcon className="w-4 h-4" />
            </div>

            {/* Spacer for sliding effect */}
            <div className="w-0 group-hover:w-6 transition-all duration-300" />
          </a>

          {/* Download Resume CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] text-sm font-semibold text-white tracking-wide transition-all duration-300 shadow-xl"
          >
            <FileText size={16} className="text-zinc-400" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
