import React, { useState } from 'react';
import { Compass, Droplets, Leaf, MapPin, NotebookPen, X } from 'lucide-react';
import { fieldObservations } from '../data/portfolioData';
import { FieldObservation } from '../types';

export const FieldExperience: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [inspectedObservation, setInspectedObservation] = useState<FieldObservation | null>(null);

  const categories = [
    { label: 'All', icon: Compass },
    { label: 'Field Ecology', icon: Leaf },
    { label: 'Hydrology', icon: Droplets },
    { label: 'Soil Conservation', icon: MapPin },
    { label: 'Wildlife Ecology', icon: Compass },
  ];

  const filteredObservations = activeCategory === 'All'
    ? fieldObservations
    : fieldObservations.filter((item) => item.category === activeCategory);

  return (
    <section
      id="fieldwork"
      aria-label="Fieldwork"
      className="border-t border-slate-200 py-16 text-slate-800 transition-colors duration-300 dark:border-slate-800 dark:text-slate-100 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-left">
          <div className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-sky-400">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              <Compass className="h-3.5 w-3.5" />
            </div>
            <span>04 / FIELDWORK</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Field Journal
          </h2>
        </header>

        <div className="mb-10 border-b border-slate-200 pb-4 dark:border-slate-700/80">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveCategory(label)}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap border-b border-transparent px-1 pb-2 text-[10px] font-mono uppercase tracking-[0.22em] transition-all duration-200 ${
                  activeCategory === label
                    ? 'border-blue-600 text-blue-700 dark:border-sky-400 dark:text-sky-300'
                    : 'text-slate-500 hover:border-slate-300 hover:text-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="h-3 w-3" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {filteredObservations.map((observation, index) => {
            const isImageFirst = index % 2 === 0;

            return (
              <article
                key={observation.id}
                className="border-t border-slate-200 pt-7 first:border-t-0 first:pt-0 dark:border-slate-800"
              >
                <div
                  className={`grid items-center gap-6 md:gap-10 ${
                    isImageFirst ? 'md:grid-cols-[1.15fr_0.85fr]' : 'md:grid-cols-[0.85fr_1.15fr]'
                  }`}
                >
                  <div className={`${isImageFirst ? 'order-1' : 'order-2 md:order-1'}`}>
                    <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="mb-3 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      <Compass className="h-3 w-3" />
                      <span>{observation.category}</span>
                    </div>

                    <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      {observation.ecosystem}
                    </div>

                    <h3 className="max-w-md text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white sm:text-3xl">
                      {observation.title}
                    </h3>

                    <div className="mt-7 space-y-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                      <div className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400" />
                        <div>
                          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                            <MapPin className="h-3 w-3" />
                            <span>Location</span>
                          </div>
                          <div className="mt-1 text-sm tracking-[0.02em] text-slate-700 dark:text-slate-200">
                            {observation.coordinates}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                          <Compass className="h-3 w-3" />
                          <span>Activity</span>
                        </div>
                        <p className="mt-2 text-base font-medium text-slate-800 dark:text-slate-100">
                          {observation.activity}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                          <NotebookPen className="h-3 w-3" />
                          <span>Method</span>
                        </div>
                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {observation.methodology}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setInspectedObservation(observation)}
                      className="mt-7 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-sky-300"
                    >
                      View Field Note
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>

                  <div className={`${isImageFirst ? 'order-2' : 'order-1 md:order-2'}`}>
                    <div className="relative overflow-hidden border border-slate-200 bg-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.04)] dark:border-slate-700 dark:bg-slate-900/80">
                      <img
                        src={observation.image}
                        alt={observation.imageAlt}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-200 pt-3 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                      <span className="flex items-center gap-2">
                        <Compass className="h-3 w-3" />
                        {observation.coordinates}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {inspectedObservation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-[2px]"
          onClick={() => setInspectedObservation(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden border border-slate-200 bg-white text-left text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative">
              <img
                src={inspectedObservation.image}
                alt={inspectedObservation.imageAlt}
                className="aspect-[16/9] w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setInspectedObservation(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/20 bg-slate-950/70 text-white transition-colors hover:bg-slate-900"
                aria-label="Close field note"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5 p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                <span>{inspectedObservation.category}</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span>{inspectedObservation.ecosystem}</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 text-slate-500 dark:text-slate-400">
                  <Compass className="h-4 w-4" />
                </div>
                <div className="text-sm tracking-[0.05em] text-slate-600 dark:text-slate-300">
                  {inspectedObservation.coordinates}
                </div>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white">
                {inspectedObservation.title}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    <Compass className="h-3 w-3" />
                    <span>Activity</span>
                  </div>
                  <p className="mt-2 text-base font-medium text-slate-800 dark:text-slate-100">
                    {inspectedObservation.activity}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    <NotebookPen className="h-3 w-3" />
                    <span>Method</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {inspectedObservation.methodology}
                  </p>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Description
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {inspectedObservation.description}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setInspectedObservation(null)}
                  className="border border-slate-200 bg-slate-900 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white transition-colors hover:bg-slate-700 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
