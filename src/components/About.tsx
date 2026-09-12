import React from 'react';
import { ArrowRight, Compass, Network, UserRound } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="About Chuol Tut Duop" className="border-t border-slate-200 py-16 text-slate-800 dark:border-slate-800 dark:text-slate-100 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[22px] border border-slate-200 bg-white/90 px-5 py-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all duration-200 hover:shadow-[0_18px_35px_rgba(15,23,42,0.06)] dark:border-slate-700/80 dark:bg-slate-900/80 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-sky-400">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              <Compass className="h-3.5 w-3.5" />
            </div>
            <span>01 / RESEARCH PERSPECTIVE</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white sm:text-3xl">
                Environmental systems, field evidence, and community-centered stewardship.
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                My academic and field interests center on understanding how ecological systems, land use patterns, and community practices interact across fragile landscapes. I am particularly drawn to watershed management, biodiversity resilience, and sustainable resource use as practical ways to address environmental stress while supporting local livelihoods.
              </p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                Through field-based investigation, environmental observation, and applied ecological reasoning, I aim to contribute to research and practical work that connects conservation with long-term community well-being.
              </p>
            </div>

            <div className="space-y-4 border-t border-slate-200 pt-5 dark:border-slate-700/80 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                <Network className="h-3.5 w-3.5" />
                <span>Research direction</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                {[
                  'Watershed health and land stewardship',
                  'Biodiversity conservation and ecosystem resilience',
                  'Field-based environmental assessment',
                  'Sustainable resource management'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-700 dark:bg-sky-500/10 dark:text-sky-300">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
