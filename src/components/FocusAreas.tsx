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
      className="border-t border-slate-200 py-16 text-slate-800 dark:border-slate-800 dark:text-slate-100 lg:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-left">
          <div className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-sky-400">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              <Target className="h-3.5 w-3.5" />
            </div>
            <span>02 / FOCUS</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Areas of Focus
          </h2>
        </header>

        <div className="grid gap-3 sm:grid-cols-2">
          {focusItems.map((item, index) => (
            <div
              key={item.number}
              className="group relative overflow-hidden border border-slate-200 bg-white px-4 py-4 transition-all duration-300 hover:border-blue-200 hover:bg-slate-50 dark:border-slate-700/80 dark:bg-slate-900/80 dark:hover:border-sky-400/30 dark:hover:bg-slate-900"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-transparent transition-all duration-300 group-hover:bg-blue-600 dark:group-hover:bg-sky-400" />

              <div className="space-y-3 pl-2">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500 transition-colors duration-300 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-sky-400">
                  <span>{item.number}</span>
                  <Target className="h-3 w-3" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-900 transition-transform duration-300 group-hover:-translate-y-0.5 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
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
