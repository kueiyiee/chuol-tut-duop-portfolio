import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FocusAreas } from './components/FocusAreas';
import { EducationTimeline } from './components/EducationTimeline';
import { Projects } from './components/Projects';
import { FieldExperience } from './components/FieldExperience';
import { OpportunitySection } from './components/OpportunitySection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { FadeInSection } from './components/FadeInSection';
import { ScrollProgress } from './components/ScrollProgress';

function PortfolioApp() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Support deep-linking directly to open CV from shared links
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('modal') === 'cv' || window.location.hash === '#cv') {
      setCvModalOpen(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] dark:bg-[#030712] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white relative overflow-x-hidden font-sans transition-colors duration-300">
      {/* Subtle, Fixed-Position Glassmorphic Scroll Progress HUD */}
      <ScrollProgress />

      {/* Dynamic tsParticles Background */}
      <ParticleBackground />

      {/* Radiant ambient background glass-refraction light orbs - AletCloud Cyber Blue Aesthetic */}
      <div className="fixed top-[-100px] right-[-80px] w-[580px] h-[580px] bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-transparent dark:from-blue-600/25 dark:via-cyan-500/20 dark:to-transparent rounded-full blur-[130px] pointer-events-none animate-float-slow" aria-hidden="true" />
      <div className="fixed top-[30%] left-[-120px] w-[520px] h-[520px] bg-gradient-to-tr from-indigo-500/15 via-blue-600/10 to-transparent dark:from-sky-500/15 dark:via-indigo-950/50 dark:to-transparent rounded-full blur-[140px] pointer-events-none animate-float-alt" aria-hidden="true" />
      <div className="fixed bottom-[10%] right-[-100px] w-[600px] h-[600px] bg-gradient-to-tl from-blue-600/20 via-sky-700/10 to-transparent dark:from-blue-700/20 dark:via-cyan-900/25 dark:to-transparent rounded-full blur-[150px] pointer-events-none animate-float-slow" aria-hidden="true" />
      <div className="fixed top-[65%] left-[25%] w-[420px] h-[420px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-500/15 dark:to-cyan-400/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* Top Sticky Navigation */}
      <Navbar onOpenCV={() => setCvModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main id="main-content" className="flex-grow relative z-10">
        {/* Hero Section */}
        <FadeInSection delay={0.05}>
          <Hero onOpenCV={() => setCvModalOpen(true)} />
        </FadeInSection>

        {/* About Section */}
        <FadeInSection>
          <About />
        </FadeInSection>

        {/* 10 Focus Areas */}
        <FadeInSection>
          <FocusAreas />
        </FadeInSection>

        {/* Education Timeline */}
        <FadeInSection>
          <EducationTimeline />
        </FadeInSection>

        {/* 4 Core Projects & Environmental System Suites */}
        <FadeInSection>
          <Projects />
        </FadeInSection>

        {/* Field & Environmental Perspective Gallery */}
        <FadeInSection>
          <FieldExperience />
        </FadeInSection>

        {/* Open to Opportunities & Target Organizations */}
        <FadeInSection>
          <OpportunitySection onOpenCV={() => setCvModalOpen(true)} />
        </FadeInSection>

        {/* Contact Section & Form */}
        <FadeInSection>
          <Contact onOpenCV={() => setCvModalOpen(true)} />
        </FadeInSection>
      </main>

      {/* Footer */}
      <FadeInSection delay={0.1}>
        <Footer onOpenCV={() => setCvModalOpen(true)} />
      </FadeInSection>

      {/* Academic Curriculum Vitae Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ParticlesProvider init={async (engine) => { await loadSlim(engine); }}>
        <PortfolioApp />
      </ParticlesProvider>
    </ThemeProvider>
  );
}
