import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  FolderKanban,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  ArrowDown,
  TrendingUp,
  Database,
  BarChart3,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, CONTACT_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PERSONAL_INFO.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentRole.substring(0, prev.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText((prev) => currentRole.substring(0, prev.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Floating Ambient Mesh Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-mesh-1" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none animate-mesh-2" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-cyan-900/20 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-blue-500/30 text-xs font-medium text-slate-300 shadow-xl mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-slate-200">Open for Analytics & FinTech Roles</span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center gap-1 text-slate-400">
            <MapPin className="w-3 h-3 text-cyan-400" />
            {PERSONAL_INFO.location}
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          MUHAMMAD SALAR SHAH
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 sm:h-16 flex items-center justify-center mb-6"
        >
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
            <span>{displayText}</span>
            <span className="animate-pulse text-cyan-400 ml-1">|</span>
          </h2>
        </motion.div>

        {/* Professional Summary Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed mb-10 text-center"
        >
          {PERSONAL_INFO.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16"
        >
          {/* Download Resume Button */}
          <button
            onClick={onOpenResume}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-xl transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
            <span>Download Resume</span>
          </button>

          {/* View Projects Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            <FolderKanban className="w-4 h-4 text-cyan-400" />
            <span>View Projects</span>
          </a>

          {/* GitHub Link */}
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-300 hover:text-white"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-300 hover:text-blue-400"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </motion.div>

        {/* Key Analytical Metric Showcase Card in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-4xl glass-card rounded-2xl p-4 sm:p-6 border border-slate-800/80 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Datasets Processed</span>
                <Database className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-white">50,000+</p>
              <p className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-2.5 h-2.5" /> Cleaned & Modeled
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Workflows Automated</span>
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-white">100%</p>
              <p className="text-[10px] text-cyan-400 flex items-center gap-1 mt-0.5">
                <TrendingUp className="w-2.5 h-2.5" /> Python & Power Query
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Dashboards Built</span>
                <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold text-white">Power BI</p>
              <p className="text-[10px] text-slate-300 flex items-center gap-1 mt-0.5">
                Interactive Executive Views
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Degree Focus</span>
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <p className="font-display text-base sm:text-lg font-bold text-white truncate">BS FinTech</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Air University Kamra</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 inline-flex flex-col items-center text-slate-500 hover:text-blue-400 transition-colors text-xs font-mono group"
        >
          <span className="mb-2 tracking-widest uppercase text-[10px]">Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-blue-400" />
        </motion.a>

      </div>
    </section>
  );
};
