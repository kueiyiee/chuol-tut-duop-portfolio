import React from 'react';
import { ArrowRight, Compass, Network } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="About Chuol Tut Duop" className="border-t border-[#DDD8CF] py-20 text-[#20211F] dark:border-white/10 dark:text-[#F7F6F2] lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.28em] text-[#8B735B] dark:text-[#B8AFA3]">
          <Compass className="h-4 w-4" />
          <span>01 / RESEARCH PERSPECTIVE</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="space-y-7">
            <h2 className="max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#20211F] dark:text-[#F7F6F2] sm:text-5xl lg:text-6xl">
              Research meets practice.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[#625C54] dark:text-[#C9C2B8] sm:text-lg">
              My academic and field interests center on understanding how ecological systems, land use patterns, and community practices interact across fragile landscapes. I am particularly drawn to watershed management, biodiversity resilience, and sustainable resource use as practical ways to address environmental stress while supporting local livelihoods.
            </p>
            <p className="max-w-2xl text-base leading-8 text-[#625C54] dark:text-[#C9C2B8] sm:text-lg">
              Through field-based investigation, environmental observation, and applied ecological reasoning, I aim to contribute to research and practical work that connects conservation with long-term community well-being.
            </p>
          </div>

          <div className="border-t border-[#DDD8CF] pt-5 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B735B] dark:text-[#B8AFA3]">
              <Network className="h-3.5 w-3.5" />
              <span>Research direction</span>
            </div>
            <ul className="divide-y divide-[#DDD8CF] dark:divide-white/10">
              {[
                'Watershed health and land stewardship',
                'Biodiversity conservation and ecosystem resilience',
                'Field-based environmental assessment',
                'Sustainable resource management'
              ].map((item) => (
                <li key={item} className="group flex items-center justify-between gap-4 py-4 text-sm text-[#20211F] dark:text-[#F7F6F2]">
                  <span>{item}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#7F9A8A] transition-transform duration-300 group-hover:translate-x-1" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
