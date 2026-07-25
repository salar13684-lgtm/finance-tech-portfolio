import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>BUSINESS EXPERIENCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Professional Analytics Delivery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-2"
          >
            Hands-on freelance data consulting, delivering custom business reporting solutions and spreadsheet automation.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent opacity-30 -translate-x-1/2" />

          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-xl shadow-blue-500/30 z-10">
                <div className="w-full h-full bg-[#050816] rounded-full flex items-center justify-center border border-white/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                </div>
              </div>

              {/* Content Card */}
              <div className="pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 items-center">
                
                {/* Left Side: Period & Details badge */}
                <div className="sm:text-right mb-4 sm:mb-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center sm:justify-end gap-1 mt-2 font-mono">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {exp.location}
                  </p>
                </div>

                {/* Right Side: Detailed Responsibilities Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-slate-700 transition-all shadow-xl">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-blue-950 text-cyan-300 border border-blue-800 mb-2 inline-block">
                    {exp.type}
                  </span>

                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {exp.company}
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlights */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {exp.highlights.map((item, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
