import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, Layers } from 'lucide-react';
import { CORE_COMPETENCIES } from '../data/portfolioData';

export const CoreCompetencies: React.FC = () => {
  const [activeCompetency, setActiveCompetency] = useState<string | null>(null);

  return (
    <section id="competencies" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Specialized Analytical Skillset
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-2"
          >
            Key operational capabilities for end-to-end data processing, financial analysis, and business intelligence.
          </motion.p>
        </div>

        {/* Animated Skill Pills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {CORE_COMPETENCIES.map((competency, index) => {
            const isSelected = activeCompetency === competency;
            return (
              <motion.button
                key={competency}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                onClick={() => setActiveCompetency(isSelected ? null : competency)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 text-white shadow-xl shadow-blue-500/25 border border-white/20'
                    : 'glass-pill text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-slate-800/80 shadow-md'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isSelected ? 'bg-white animate-ping' : 'bg-blue-400 group-hover:bg-cyan-300'
                  }`}
                />
                <span className="font-display tracking-wide">{competency}</span>

                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-white ml-0.5" />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Interactive Helper Text */}
        <div className="mt-8 text-center text-xs text-slate-500 font-mono">
          Click any competency pill to highlight analytical focus
        </div>

      </div>
    </section>
  );
};
