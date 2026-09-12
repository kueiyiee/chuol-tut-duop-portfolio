import React, { lazy, Suspense, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
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

const ParticleSystem = lazy(() => import('./components/ParticleSystem').then(({ ParticleSystem }) => ({ default: ParticleSystem })));

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
    <div className="min-h-screen flex flex-col bg-transparent text-slate-900 dark:text-slate-100 selection:bg-[#155E75] selection:text-white relative overflow-x-hidden font-sans transition-colors duration-300">
      {/* Subtle, Fixed-Position Glassmorphic Scroll Progress HUD */}
      <ScrollProgress />

      {/* Dynamic tsParticles Background */}
      <Suspense fallback={null}>
        <ParticleSystem />
      </Suspense>

      {/* Soft ambient lighting for a more polished editorial feel */}
      <div className="fixed inset-x-0 top-0 h-80 bg-gradient-to-b from-[#155E75]/8 via-[#28745A]/5 to-transparent dark:from-[#55B7C8]/10 dark:via-[#6EA8FE]/5 dark:to-transparent pointer-events-none" aria-hidden="true" />
      <div className="fixed top-[-120px] right-[-100px] w-[440px] h-[440px] bg-gradient-to-br from-[#1D4ED8]/10 via-[#28745A]/6 to-transparent rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="fixed bottom-[-80px] left-[-60px] w-[420px] h-[420px] bg-gradient-to-tr from-[#155E75]/8 via-[#28745A]/5 to-transparent rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

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

        {/* Selected Projects */}
        <FadeInSection>
          <Projects />
        </FadeInSection>

        {/* Field Journal */}
        <FadeInSection>
          <FieldExperience />
        </FadeInSection>

        {/* Education Timeline */}
        <FadeInSection>
          <EducationTimeline />
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
      <PortfolioApp />
    </ThemeProvider>
  );
}
