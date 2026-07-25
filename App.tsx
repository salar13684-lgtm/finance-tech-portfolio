import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { CursorSpotlight } from './components/CursorSpotlight';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreCompetencies } from './components/CoreCompetencies';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Projects } from './components/Projects';
import { InteractiveAnalyticsSandbox } from './components/InteractiveAnalyticsSandbox';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Loading Splash Animation */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Ambient Mouse Cursor Spotlight */}
      <CursorSpotlight />

      {/* Top Floating Glass Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <CoreCompetencies />
        <TechnicalSkills />
        <Projects />
        <InteractiveAnalyticsSandbox />
        <Experience />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / PDF Export Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
