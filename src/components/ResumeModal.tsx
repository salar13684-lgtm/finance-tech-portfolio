import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Sparkles
} from 'lucide-react';
import {
  PERSONAL_INFO,
  CORE_COMPETENCIES,
  TECHNICAL_SKILLS,
  PROJECTS,
  EXPERIENCE,
  CERTIFICATIONS,
  EDUCATION,
  CONTACT_INFO
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.headline}
Email: ${CONTACT_INFO.email} | Location: ${CONTACT_INFO.location}
GitHub: ${CONTACT_INFO.github} | LinkedIn: ${CONTACT_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.summary}

CORE COMPETENCIES:
${CORE_COMPETENCIES.join(', ')}

BUSINESS EXPERIENCE:
${EXPERIENCE.map(e => `${e.role} - ${e.company} (${e.period})\n${e.responsibilities.join('\n')}`).join('\n\n')}

PROJECTS:
${PROJECTS.map(p => `${p.title}\nTech: ${p.techStack.join(', ')}\nKey Outcome: ${p.keyOutcome}`).join('\n\n')}

EDUCATION:
${EDUCATION.degree} - ${EDUCATION.institution} (${EDUCATION.expectedGraduation})

CERTIFICATIONS:
${CERTIFICATIONS.map(c => `- ${c.title} (${c.issuer})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl glass-card rounded-2xl border border-slate-700 shadow-2xl overflow-hidden my-6 bg-[#050816]"
        >
          {/* Top Control Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="font-display font-bold text-sm text-white">Executive Resume — Muhammad Salar Shah</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div id="resume-printable-content" className="p-8 space-y-6 text-slate-200 max-h-[80vh] overflow-y-auto font-sans text-xs sm:text-sm">
            
            {/* Resume Header */}
            <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-cyan-400 font-mono font-semibold text-xs sm:text-sm mb-3">
                {PERSONAL_INFO.headline}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-blue-400" /> {CONTACT_INFO.email}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {CONTACT_INFO.location}</span>
                <span className="flex items-center gap-1"><Github className="w-3.5 h-3.5 text-slate-300" /> GitHub</span>
                <span className="flex items-center gap-1"><Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h2 className="font-display text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Professional Summary
              </h2>
              <p className="text-slate-300 leading-relaxed font-normal text-xs">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Core Competencies */}
            <div className="space-y-2">
              <h2 className="font-display text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Core Competencies
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {CORE_COMPETENCIES.map((comp) => (
                  <span key={comp} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-200">
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="font-display text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Business Experience
              </h2>
              {EXPERIENCE.map((exp) => (
                <div key={exp.role} className="space-y-1">
                  <div className="flex justify-between items-baseline font-semibold text-white">
                    <span>{exp.role} — <span className="text-cyan-300">{exp.company}</span></span>
                    <span className="font-mono text-[11px] text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs pl-1">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="font-display text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Key Analytical Projects
              </h2>
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-semibold text-white">
                    <span>{proj.title}</span>
                    <span className="font-mono text-[10px] text-slate-400">{proj.techStack.join(', ')}</span>
                  </div>
                  <p className="text-slate-300 text-xs">{proj.description}</p>
                  <p className="text-emerald-400 text-[11px] font-mono">Outcome: {proj.keyOutcome}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-1">
              <h2 className="font-display text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Education
              </h2>
              <div className="flex justify-between items-baseline font-semibold text-white">
                <span>{EDUCATION.degree} — <span className="text-slate-300">{EDUCATION.institution}</span></span>
                <span className="font-mono text-[11px] text-slate-400">Expected {EDUCATION.expectedGraduation}</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h2 className="font-display text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1">
                Certifications
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.title} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="font-medium text-white">{cert.title}</span>
                    <span className="text-slate-500">({cert.issuer})</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
