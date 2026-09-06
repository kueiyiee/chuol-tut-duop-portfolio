import React, { useState, useEffect } from 'react';

interface Section {
  id: string;
  name: string;
  shortName: string;
  number: string;
}

const SECTIONS: Section[] = [
  { id: 'home', name: 'Introduction', shortName: 'Intro', number: '00' },
  { id: 'about', name: 'About Chuol', shortName: 'About', number: '01' },
  { id: 'focus-areas', name: 'Focus & Skills', shortName: 'Focus', number: '02' },
  { id: 'education', name: 'Academic Timeline', shortName: 'Timeline', number: '03' },
  { id: 'projects', name: 'Projects & GIS Suites', shortName: 'Projects', number: '04' },
  { id: 'fieldwork', name: 'Field Perspective', shortName: 'Fieldwork', number: '05' },
  { id: 'opportunities', name: 'Open Opportunities', shortName: 'Opportunities', number: '06' },
  { id: 'contact', name: 'Contact & Inquiries', shortName: 'Contact', number: '07' },
];

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSectionId, setActiveSectionId] = useState<string>('home');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate smooth percentage
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // Show indicator when scrolled past 50px
      setIsVisible(scrollY > 50);

      // Detect active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSectionId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 75;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: 'smooth'
      });
    }
  };

  const activeSection = SECTIONS.find((s) => s.id === activeSectionId) || SECTIONS[0];
  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSectionId);

  return (
    <>
      {/* Fixed-Position Glassmorphic Top Progress Bar Track */}
      <div 
        id="scroll-progress-bar-track"
        className="fixed top-0 left-0 right-0 h-[3.5px] z-50 bg-black/10 dark:bg-white/5 backdrop-blur-md overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div 
          id="scroll-progress-bar-fill"
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 dark:from-blue-500 dark:via-cyan-400 dark:to-sky-300 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(56,189,248,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Glassmorphic Section Progress HUD Pill */}
      <aside 
        id="scroll-progress-hud"
        aria-label="Portfolio scroll progress and section tracker"
        className={`fixed top-16 sm:top-[70px] left-1/2 -translate-x-1/2 z-30 transition-all duration-300 pointer-events-none ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="pointer-events-auto flex items-center p-1 sm:p-1.5 rounded-full bg-white/85 dark:bg-[#060b18]/85 backdrop-blur-xl border border-blue-200/60 dark:border-blue-500/25 shadow-[0_8px_32px_0_rgba(37,99,235,0.12)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.7)] transition-all">
          
          {/* Active Section Info Pill */}
          <div className="flex items-center space-x-2 pl-2.5 pr-2 py-0.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold hidden sm:inline">
              {activeSection.number}
            </span>
            <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 tracking-tight max-w-[120px] sm:max-w-none truncate">
              {activeSection.name}
            </span>
          </div>

          <div className="h-3 w-px bg-slate-200 dark:bg-white/15 mx-1" />

          {/* Progress Percentage Badge */}
          <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-sky-300 px-1.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10">
            {Math.round(scrollProgress)}%
          </span>

          {/* Section Milestone Dots (Desktop only) */}
          <div className="hidden md:flex items-center space-x-1 pl-2 pr-1" role="tablist" aria-label="Sections">
            {SECTIONS.map((section, idx) => {
              const isPassed = idx <= activeIndex;
              const isCurrent = idx === activeIndex;

              return (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  onClick={() => scrollToSection(section.id)}
                  title={`${section.number} · ${section.name}`}
                  className="relative p-1 group transition-all cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isCurrent
                        ? 'w-4 h-2 bg-blue-600 dark:bg-sky-400 ring-2 ring-blue-500/40'
                        : isPassed
                        ? 'w-2 h-2 bg-blue-600/70 dark:bg-blue-400/60 group-hover:scale-125'
                        : 'w-2 h-2 bg-slate-300 dark:bg-white/20 group-hover:bg-slate-400'
                    }`}
                  />
                  {/* Tooltip on Hover */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 rounded bg-slate-900 text-white text-[9px] font-mono whitespace-nowrap shadow-md pointer-events-none z-50">
                    {section.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
