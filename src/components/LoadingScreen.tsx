import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, Database, Shield, Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 10;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white selection:bg-blue-500/30"
    >
      {/* Background Ambient Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
        {/* Brand Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 shadow-xl shadow-blue-500/20 mb-6"
        >
          <div className="w-full h-full bg-[#050816] rounded-[14px] flex items-center justify-center border border-white/10">
            <span className="font-display text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              MS
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="font-display text-lg font-semibold tracking-wide text-slate-200 mb-1"
        >
          MUHAMMAD SALAR SHAH
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-8 flex items-center gap-2"
        >
          <BarChart3 className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
          Data & FinTech Intelligence
        </motion.p>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80 mb-3 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: 'easeOut', duration: 0.2 }}
          />
        </div>

        {/* Loading text */}
        <div className="w-full flex justify-between items-center text-xs font-mono text-slate-500">
          <span>Initializing Portfolio...</span>
          <span className="text-blue-400 font-semibold">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
};
