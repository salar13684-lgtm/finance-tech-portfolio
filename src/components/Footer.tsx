import React from 'react';
import { ArrowUp, Heart, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#050816] py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="font-display font-bold text-white text-base tracking-wide">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs font-mono text-slate-500">
              Data Analyst • Business Intelligence • FinTech
            </p>
            <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3 text-cyan-400" />
              {CONTACT_INFO.location}
            </p>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Muhammad Salar Shah. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with Precision & Analytical Rigor
          </p>
        </div>
      </div>
    </footer>
  );
};
