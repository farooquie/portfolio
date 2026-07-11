"use client";


import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";

export default function Home() {
  const emailAddress = "iamfarooquie@gmail.com";

  return (
    <div className="flex flex-col w-full bg-[#050505] text-[#fafafa]">

      {/* Sections */}
      <Hero />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <Projects />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <Experience />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <TechStack />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-black relative">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-12">

          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">Get In Touch</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Let&apos;s build something amazing together.
            </h2>
            <p className="max-w-md text-sm text-zinc-400 mt-2">
              Have an idea, project, or opportunity you&apos;d like to discuss? Drop me a message or connect via socials.
            </p>
          </div>

          {/* Contact Details Container */}
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
            {/* Email mailto Link */}
            <motion.a
              href={`mailto:${emailAddress}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-2 p-3 pl-5 pr-5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-xl w-full max-w-md hover:border-white/10 hover:bg-white/[0.04] transition-all group shrink-0"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <Mail size={16} className="text-zinc-500 shrink-0 group-hover:text-red-400 transition-colors" />
                <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">{emailAddress}</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover:text-white transition-colors">Email</span>
            </motion.a>

            {/* Phone Click-to-Call Link */}
            <motion.a
              href="tel:+917004640856"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between gap-2 p-3 pl-5 pr-5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-xl w-full max-w-md hover:border-white/10 hover:bg-white/[0.04] transition-all group shrink-0"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <Phone size={16} className="text-zinc-500 shrink-0 group-hover:text-red-400 transition-colors" />
                <span className="text-xs sm:text-sm font-mono text-zinc-300 truncate">+91 7004640856</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover:text-white transition-colors">Call</span>
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://github.com/farooquie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full border border-white/5 bg-white/[0.01] hover:border-white/10"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/amanali00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full border border-white/5 bg-white/[0.01] hover:border-white/10"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Footer Copyright */}
          <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono mt-12 border-t border-white/5 pt-8 w-full">
            © {new Date().getFullYear()} AMAN ALI. ALL RIGHTS RESERVED.
          </div>

        </div>
      </section>

    </div>
  );
}
