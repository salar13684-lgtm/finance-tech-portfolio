import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Let’s Connect & Collaborate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto"
          >
            Open for Data Analytics, Business Intelligence, and FinTech roles, project consultations, or technical inquiries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Cards & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-blue-500/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>

              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Direct Email</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-display text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors break-all"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* Social Buttons Row */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* GitHub */}
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col items-start gap-2 group"
              >
                <div className="p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 group-hover:bg-slate-800 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">GitHub</p>
                  <p className="text-[11px] font-mono text-slate-400">@salar13684-lgtm</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-blue-500/40 transition-all flex flex-col items-start gap-2 group"
              >
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white group-hover:text-blue-400 transition-colors">LinkedIn</p>
                  <p className="text-[11px] font-mono text-slate-400">salar-shah</p>
                </div>
              </a>

            </div>

            {/* Location Tag */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase">Location Base</p>
                <p className="font-display text-xs sm:text-sm font-bold text-slate-200">{CONTACT_INFO.location}</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 relative"
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <h3 className="font-display text-lg font-bold text-white">Send Direct Inquiry</h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center rounded-xl bg-blue-950/40 border border-blue-500/30 space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">Message Transmitted!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Muhammad Salar Shah will respond to your email promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl text-xs font-mono bg-slate-900 text-slate-300 hover:text-white border border-slate-800 mt-2 cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Data Analyst Role Inquiry / Consultation"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Detail your inquiry or project scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900/90 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-98 cursor-pointer disabled:opacity-50"
                >
                  <Send className={`w-3.5 h-3.5 ${submitting ? 'animate-spin' : ''}`} />
                  <span>{submitting ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};
