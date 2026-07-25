import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Database, LayoutDashboard, Terminal, Zap, Trophy, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const statIcons: Record<string, React.ElementType> = {
  CheckCircle2: CheckCircle2,
  Database: Database,
  LayoutDashboard: LayoutDashboard,
  Terminal: Terminal,
  Zap: Zap
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>METRICS & ACHIEVEMENTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Quantifiable Impact & Benchmarks
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-2"
          >
            Tangible benchmarks achieved through project delivery, dataset modeling, and continuous skill acquisition.
          </motion.p>
        </div>

        {/* Statistic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ACHIEVEMENTS.map((stat, idx) => {
            const Icon = statIcons[stat.icon] || Trophy;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 text-center sm:text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-blue-950 text-cyan-300 border border-blue-800">
                      {stat.badge}
                    </span>
                  </div>

                  <p className="font-display text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 mb-1">
                    {stat.value}
                  </p>

                  <h3 className="font-display text-xs font-bold text-slate-200 mb-1">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-[11px] text-slate-400 mt-2 font-normal leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
