import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Higher Education
          </motion.h2>
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-cyan-300 border border-blue-800 text-xs font-mono mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{EDUCATION.status}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                {EDUCATION.degree}
              </h3>

              <p className="text-sm font-semibold text-cyan-400">
                {EDUCATION.institution}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs font-mono text-slate-400 md:text-right">
              <div className="flex items-center md:justify-end gap-1.5 text-slate-300">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Expected Graduation: <strong className="text-white">{EDUCATION.expectedGraduation}</strong></span>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{EDUCATION.campus}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="pt-6">
            <h4 className="font-display text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Program Focus & Competency Training
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {EDUCATION.highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
