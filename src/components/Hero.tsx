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
        <div className="flex flex-col items-center gap-10 lg:gap-12">
          <div className="order-2 max-w-3xl min-w-0 text-center">
            <div className="hero-badge flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-sky-400 sm:tracking-[0.32em]">
              <Leaf className="h-3.5 w-3.5" />
              <span>ENVIRONMENTAL RESEARCHER / DIGITAL PRACTITIONER</span>
            </div>

            <h1 className="hero-title mt-5 whitespace-nowrap text-[clamp(1.55rem,8.5vw,5.25rem)] font-bold tracking-[-0.06em] text-slate-900 dark:text-white">
              CHUOL TUT DUOP
            </h1>

            <p className="hero-subtitle mt-3 text-base font-medium text-slate-700 dark:text-slate-200 sm:text-xl">
              B.Sc. in Natural Resources and Management · University of Kebri Dahar
            </p>

            <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[#7F9A8A] dark:text-[#7F9A8A]">
              Environmental research · Digital tools · Field practice
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Investigating watershed health, biodiversity resilience, and sustainable land stewardship through applied environmental research and field-based assessment.
            </p>

            <div className="mt-8 grid gap-4 border-y border-[#DDD8CF] py-5 text-left dark:border-white/10 sm:grid-cols-3">
              {[
                ['Class of', '2027'],
                ['University', 'University of Kebri Dahar'],
                ['Base', 'Ethiopia'],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B735B] dark:text-[#B8AFA3]">{label}</div>
                  <p className="mt-2 text-sm font-medium text-[#20211F] dark:text-[#F7F6F2]">{value}</p>
                </div>
              ))}
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
                EXPLORE WORK
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

          <div className="order-1 relative flex w-full justify-center">
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
                  <div className="hero-floating-tag hero-floating-tag--top">PROFILE / 01</div>
                  <div className="hero-floating-tag hero-floating-tag--bottom">FIELD + DIGITAL</div>
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

        <div className="hero-scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <span className="hero-scroll-cue__line" />
        </div>
      </div>
    </section>
  );
};