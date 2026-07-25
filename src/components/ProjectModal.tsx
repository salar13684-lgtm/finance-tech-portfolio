import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Terminal, BarChart2, Zap, ArrowRight, ExternalLink, Cpu } from 'lucide-react';
import { Project } from '../types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl glass-card rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden my-8"
        >
          {/* Top Gradient Border */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors z-10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-mono text-cyan-400 mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span className="uppercase">{project.type} CASE STUDY</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-slate-300 font-medium">
                {project.subtitle}
              </p>
            </div>

            {/* Key Outcome Highlight Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-blue-500/30 flex items-start gap-3.5">
              <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1 font-semibold">Key Analytical Outcome</p>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {project.keyOutcome}
                </p>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                  <p className="font-display text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {metric.value}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Data Visualization Chart inside Modal */}
            {project.sampleData && (
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-cyan-400" />
                    <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                      Analytical Metrics Visualizer
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Live Project Dataset Sample</span>
                </div>

                <div className="h-56 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={project.sampleData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis dataKey={project.type === 'automation' ? 'month' : project.type === 'dashboard' ? 'region' : 'quarter'} stroke="#64748b" fontSize={11} />
                      <YAxis stroke="#64748b" fontSize={11} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                        itemStyle={{ color: '#38bdf8' }}
                      />
                      {project.type === 'dashboard' ? (
                        <>
                          <Bar dataKey="sales" fill="#3b82f6" name="Sales ($)" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="target" fill="#06b6d4" name="Target ($)" radius={[4, 4, 0, 0]} />
                        </>
                      ) : project.type === 'bi' ? (
                        <>
                          <Bar dataKey="revenue" fill="#3b82f6" name="Revenue ($M)" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="target" fill="#10b981" name="Target ($M)" radius={[4, 4, 0, 0]} />
                        </>
                      ) : (
                        <Bar dataKey="rawLatency" fill="#ef4444" name="Manual Processing" radius={[4, 4, 0, 0]} />
                      )}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Detailed Architectural Overview */}
            <div className="space-y-3">
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                System Implementation & Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {project.longDescription}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="font-display text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Technologies & Tools Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-950/60 text-cyan-300 border border-blue-800/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <a
                href="#sandbox"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                <span>Try Live Analytics Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 cursor-pointer"
              >
                Close View
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
