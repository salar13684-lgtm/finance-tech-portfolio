import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, ShieldAlert, Lock, Cloud, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

const certIcons: Record<string, React.ElementType> = {
  Award: Award,
  ShieldCheck: ShieldCheck,
  ShieldAlert: ShieldAlert,
  Lock: Lock,
  Cloud: Cloud
};

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS & CREDENTIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Industry-Recognized Credentials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-2"
          >
            Verified qualifications across Data Analytics, Python Modeling, AWS Cloud, and Information Security.
          </motion.p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = certIcons[cert.icon] || Award;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
                      <CheckCircle className="w-2.5 h-2.5" /> Verified
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mb-4">
                    Issued by: <span className="text-slate-200">{cert.issuer}</span>
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Skills Validated</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
