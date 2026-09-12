import React from 'react';
import { Target } from 'lucide-react';

const focusItems = [
  { number: '01', title: 'Natural Resource Management', category: 'Resource Governance' },
  { number: '02', title: 'Environmental Conservation', category: 'Habitat Protection' },
  { number: '03', title: 'Biodiversity Conservation', category: 'Species Preservation' },
  { number: '04', title: 'Soil & Water Conservation', category: 'Erosion Control' },
  { number: '05', title: 'Climate Change', category: 'Vulnerability Assessment' },
  { number: '06', title: 'Sustainable Resource Utilization', category: 'Renewable Systems' },
  { number: '07', title: 'Forest Resource Management', category: 'Canopy Preservation' },
  { number: '08', title: 'Wildlife Management', category: 'Fauna Monitoring' },
  { number: '09', title: 'Watershed Management', category: 'Drainage Basins' },
  { number: '10', title: 'Environmental Impact Assessment', category: 'Impact Identification' },
];

export const FocusAreas: React.FC = () => {
  return (
    <section
      id="focus-areas"
      aria-label="Areas of Focus"
      className="border-t border-[#DDD8CF] bg-[#EAE6DE]/35 py-20 text-[#20211F] dark:border-white/10 dark:bg-[#171916] dark:text-[#F7F6F2] lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 flex flex-col gap-4 border-b border-[#DDD8CF] pb-6 text-left dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#8B735B] dark:text-[#B8AFA3]">
              <Target className="h-4 w-4" />
              <span>02 / FOCUS</span>
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.04em] text-[#20211F] dark:text-[#F7F6F2] sm:text-5xl">
              Environmental intelligence.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#625C54] dark:text-[#C9C2B8]">
            A working vocabulary for understanding, protecting, and managing natural systems.
          </p>
        </header>

        <div className="grid gap-x-8 sm:grid-cols-2">
          {focusItems.map((item, index) => (
            <div
              key={item.number}
              className="group relative overflow-hidden border-b border-[#DDD8CF] px-2 py-6 transition-colors duration-300 hover:bg-white/45 dark:border-white/10 dark:hover:bg-white/[0.03]"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.24em] text-[#8B735B] dark:text-[#B8AFA3]">
                  <span>{item.number}</span>
                  <Target className="h-3 w-3" />
                </div>

                <div className="space-y-2">
                  <h3 className="max-w-sm font-serif text-2xl leading-none tracking-[-0.03em] text-[#20211F] transition-transform duration-300 group-hover:translate-x-1 dark:text-[#F7F6F2]">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7F9A8A] dark:text-[#7F9A8A]">
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
