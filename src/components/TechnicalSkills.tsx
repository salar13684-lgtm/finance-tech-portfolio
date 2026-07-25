import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileSpreadsheet,
  LayoutDashboard,
  Code2,
  Database,
  GitBranch,
  Cloud,
  Search,
  CheckCircle2,
  Sparkles,
  Terminal
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

const categoryIcons: Record<string, React.ElementType> = {
  "Data Analytics": FileSpreadsheet,
  "Business Intelligence": LayoutDashboard,
  "Programming": Code2,
  "Databases": Database,
  "Version Control": GitBranch,
  "Cloud & Security": Cloud,
};

export const TechnicalSkills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...TECHNICAL_SKILLS.map((c) => c.category)];

  const filteredCategories = TECHNICAL_SKILLS.filter((cat) => {
    if (selectedCategory !== "All" && cat.category !== selectedCategory) {
      return false;
    }
    if (!searchQuery) return true;
    
    return (
      cat.skills.some(
  (s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.badges.some((badge) =>
      badge.toLowerCase().includes(searchQuery.toLowerCase())
    )
)
    );
  });

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Technical Stack & Tooling
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-2"
          >
            Categorized technical capabilities spanning spreadsheet automation, BI modeling, Python scripting, and SQL databases.
          </motion.p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, DAX, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-900/80 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat, catIdx) => {
              const Icon = categoryIcons[cat.category] || Code2;

              // Filter skills inside category if search query present
              const visibleSkills = cat.skills.filter(
                (s) =>
                  !searchQuery ||
                  s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  s.badges.some((badge) =>
  badge.toLowerCase().includes(searchQuery.toLowerCase())
)
              );

              if (visibleSkills.length === 0) return null;

              return (
                <motion.div
                  key={cat.category}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                  className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          {cat.category}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Items */}
                    <div className="space-y-4 mt-6">
                      {visibleSkills.map((skill) => (
                        <div key={skill.name} className="group">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="font-display text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                                {skill.name}
                              </span>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700/60">
                                <div className="flex flex-wrap gap-2 mt-2">
  {skill.badges.map((badge) => (
    <span
      key={badge}
      className="px-2 py-1 rounded-full text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20"
    >
      {badge}
    </span>
  ))}
</div>
                              </span>
                            </div>
                            
                          </div>

                          {/* Progress bar */}
                          <div className="flex flex-wrap gap-2 mt-2">
  <div className="inline-flex items-center px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300">
    <CheckCircle2 className="w-3 h-3 mr-1" />
    Verified Skill
  </div>
</div>

                          <p className="text-[11px] text-slate-500 mt-1 font-normal">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
