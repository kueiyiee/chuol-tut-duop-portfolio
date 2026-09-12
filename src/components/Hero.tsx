import React from 'react';
import { ArrowUpRight, Compass, FileText, Leaf, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const heroImageUrl = personalInfo.profileImage || '';

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden border-t border-slate-200 py-16 text-slate-800 dark:border-slate-800 dark:text-slate-100 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-14">
          <div className="max-w-3xl min-w-0 text-left">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-sky-400 sm:tracking-[0.32em]">
              <Leaf className="h-3.5 w-3.5" />
              <span>Natural Resources · Ethiopia</span>
            </div>

            <h1 className="hero-title mt-5 text-4xl font-bold tracking-[-0.06em] text-slate-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-[5rem]">
              CHUOL TUT DUOP
            </h1>

            <p className="mt-3 text-base font-medium text-slate-700 dark:text-slate-200 sm:text-xl">
              B.Sc. Candidate · Natural Resources &amp; Management
            </p>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Investigating watershed health, biodiversity resilience, and sustainable land stewardship through applied environmental research and field-based assessment.
            </p>

            <div className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              <p>Kebri Dahar University · Senior B.Sc. Candidate</p>
              <p>Kebri Dahar, Somali Region, Ethiopia</p>
            </div>

            <div className="hero-cta-group mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                VIEW PROJECTS
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenCV}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:text-sky-300"
              >
                <FileText className="h-4 w-4" />
                VIEW CV
              </button>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:tracking-[0.24em]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <Compass className="h-3 w-3" aria-hidden="true" />
              <span>Available for Opportunities</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="hero-profile" aria-label="Profile portrait">
              <div className="hero-profile-shell">
                <div className="hero-orbit hero-orbit--outer" aria-hidden="true" />
                <div className="hero-orbit hero-orbit--inner" aria-hidden="true" />
                <div className="hero-frame-line hero-frame-line--top" aria-hidden="true" />
                <div className="hero-frame-line hero-frame-line--bottom" aria-hidden="true" />

                <div className="hero-data-nodes" aria-hidden="true">
                  <span className="hero-data-node hero-data-node--one" />
                  <span className="hero-data-node hero-data-node--two" />
                  <span className="hero-data-node hero-data-node--three" />
                </div>

                <div className="hero-profile-card">
                  <img
                    src={heroImageUrl}
                    alt="Chuol Tut Duop"
                    className="hero-profile-image"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};