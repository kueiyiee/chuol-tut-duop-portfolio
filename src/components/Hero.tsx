import React from 'react';
import { ArrowUpRight, Compass, FileText, Leaf, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const heroImageUrl = personalInfo.profileImage || '';

  const coreAreas = ['Field Methods', 'Ecosystem Stewardship', 'Collaboration', 'Impact Awareness'];

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden border-t border-slate-200 py-16 text-slate-800 dark:border-slate-800 dark:text-slate-100 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:gap-12 xl:gap-16">
          <div className="max-w-3xl min-w-0 text-left">
            <div className="hero-badge flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-sky-400 sm:tracking-[0.32em]">
              <Leaf className="h-3.5 w-3.5" />
              <span>NATURAL RESOURCES · ETHIOPIA</span>
            </div>

            <h1 className="hero-title mt-5 whitespace-nowrap text-[clamp(2.2rem,6vw,5.25rem)] font-bold tracking-[-0.06em] text-slate-900 dark:text-white">
              CHUOL TUT DUOP
            </h1>

            <p className="hero-subtitle mt-3 text-base font-medium text-slate-700 dark:text-slate-200 sm:text-xl">
              B.Sc. in Natural Resources and Management · University of Kebri Dahar
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Investigating watershed health, biodiversity resilience, and sustainable land stewardship through applied environmental research and field-based assessment.
            </p>

            <div className="mt-7 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
              <div className="hero-metric rounded-2xl border border-slate-200 bg-white/70 px-3 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.04)] backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/60">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Focus</div>
                <div className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-white">Watersheds</div>
              </div>
              <div className="hero-metric rounded-2xl border border-slate-200 bg-white/70 px-3 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.04)] backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/60">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Method</div>
                <div className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-white">Field Research</div>
              </div>
              <div className="hero-metric rounded-2xl border border-slate-200 bg-white/70 px-3 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.04)] backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/60">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Base</div>
                <div className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-white">Ethiopia</div>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-5 dark:border-slate-700/80">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">University</div>
                  <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">University of Kebri Dahar</p>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Degree</div>
                  <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">B.Sc. in Natural Resources and Management</p>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Location</div>
                  <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">Kebri Dahar, Somali Region, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="mt-7 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:tracking-[0.24em]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <Compass className="h-3 w-3" aria-hidden="true" />
              <span>Available for Opportunities</span>
            </div>

            <div className="hero-cta-group mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                VIEW PROJECTS
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:text-sky-300"
                aria-label="View CV"
              >
                <FileText className="h-4 w-4" />
                VIEW CV
              </a>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-5 dark:border-slate-700/80">
              <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">GIS · Ecology · Conservation</div>
              <div className="flex flex-wrap gap-2">
                {coreAreas.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
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
                  <div className="hero-floating-tag hero-floating-tag--top">Field Research</div>
                  <div className="hero-floating-tag hero-floating-tag--bottom">GIS · Ecology · Conservation</div>
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