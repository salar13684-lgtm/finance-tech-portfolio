import React from 'react';
import { motion } from 'motion/react';
import { BarChart2, Cpu, Lightbulb, Target, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: BarChart2,
      title: "Data Analytics",
      description: "Extracting clear signal from chaotic noise through rigorous cleaning, exploratory analysis, and statistical modeling.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Designing intuitive executive dashboards that translate key performance metrics into confident strategic decisions.",
      color: "from-cyan-500 to-emerald-500"
    },
    {
      icon: Cpu,
      title: "Financial Technology",
      description: "Applying modern computational workflows to financial data modeling, automated ledgers, and transaction analysis.",
      color: "from-emerald-500 to-blue-500"
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Turning Raw Data Into Actionable Insights
          </motion.h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800/80 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                {PERSONAL_INFO.about.title}
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {PERSONAL_INFO.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Value Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Problem-Solving Mindset</p>
                  <p className="text-[11px] text-slate-400">Structured analytical approach to complex datasets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Continuous Growth</p>
                  <p className="text-[11px] text-slate-400">Rapidly acquiring modern analytics & cloud skills</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Analytical Strengths Pillar Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/80 flex items-start gap-4"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.color} text-white shadow-lg shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
