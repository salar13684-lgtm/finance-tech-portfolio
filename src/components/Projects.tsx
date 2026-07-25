import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FolderKanban,
  Workflow,
  BarChart3,
  PieChart,
  ArrowUpRight,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

const projectIcons: Record<string, React.ElementType> = {
  Workflow: Workflow,
  BarChart3: BarChart3,
  PieChart: PieChart
};

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Practical Analytics & Automation Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto"
          >
            Production-grade data pipelines, Excel financial suites, and interactive Power BI executive dashboards built to solve real business problems.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project, index) => {
            const Icon = projectIcons[project.iconName] || Workflow;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5"
              >
                {/* Gradient Top Accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-900/90 text-cyan-400 border border-slate-800 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-blue-950/60 text-cyan-300 border border-blue-800/60">
                      {project.type.toUpperCase()}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Key Outcome Highlight Box */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-6">
                    <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1 font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3 text-emerald-400" /> Key Outcome
                    </p>
                    <p className="text-xs text-slate-300 leading-snug">
                      {project.keyOutcome}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button to open modal */}
                  <button
                    onClick={() => setActiveProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-slate-900/90 hover:bg-blue-600/90 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group/btn"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Inspection Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
