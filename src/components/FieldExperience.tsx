import React, { useState } from 'react';
import { Compass, MapPin, Eye, Filter, Maximize2, X, FileText } from 'lucide-react';
import { fieldObservations } from '../data/portfolioData';
import { FieldObservation } from '../types';

export const FieldExperience: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [inspectedObservation, setInspectedObservation] = useState<FieldObservation | null>(null);

  const categories = ['All', 'Field Ecology', 'Hydrology', 'Soil Conservation', 'Wildlife Ecology'];

  const filteredObservations = activeCategory === 'All'
    ? fieldObservations
    : fieldObservations.filter((item) => item.category === activeCategory);

  return (
    <section
      id="fieldwork"
      aria-label="Field & Environmental Perspective"
      className="py-20 lg:py-28 bg-transparent text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 dark:border-blue-900/30 text-left">
          <div className="space-y-3">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 dark:text-sky-400 font-bold">
              05 / FIELDWORK & IN-SITU OBSERVATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Field & Environmental Perspective
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-light italic">
              &ldquo;Learning from ecosystems through observation, assessment, and practical experience.&rdquo;
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white shadow-xs font-bold'
                    : 'bg-blue-50/80 dark:bg-black/30 border border-slate-200 dark:border-blue-900/40 text-slate-600 dark:text-slate-400 hover:border-blue-500 hover:text-blue-600 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredObservations.map((obs) => (
            <div
              key={obs.id}
              className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-blue-900/40 bg-white/80 dark:bg-[#060b18]/60 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#030712]">
                <img
                  src={obs.image}
                  alt={obs.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Overlaid Coordinate Tag */}
                <div className="absolute top-3 left-3 flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs border border-blue-900/50 text-[10px] font-mono text-sky-300">
                  <Compass className="w-3 h-3 text-sky-400" />
                  <span>{obs.coordinates}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setInspectedObservation(obs)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/80 text-white hover:bg-blue-600 hover:text-white transition-colors border border-blue-800/40 cursor-pointer"
                  aria-label={`Inspect ${obs.title}`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Category & Ecosystem Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full font-mono bg-blue-950/80 border border-blue-700/50 text-sky-300 text-[10px] font-bold">
                    {obs.category}
                  </span>
                  <span className="font-mono text-[11px] text-sky-200 truncate">
                    {obs.ecosystem}
                  </span>
                </div>
              </div>

              {/* Text Information Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {obs.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-sky-400 mb-2 font-mono">
                    Activity: {obs.activity}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    {obs.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-blue-900/30 text-xs flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                    Method: {obs.methodology}
                  </div>
                  <button
                    type="button"
                    onClick={() => setInspectedObservation(obs)}
                    className="font-mono text-[11px] text-blue-600 dark:text-sky-400 font-semibold hover:text-blue-800 dark:hover:text-white shrink-0 ml-2 cursor-pointer"
                  >
                    View Field Note →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fieldwork Verification Note */}
        <div className="mt-12 p-5 rounded-xl border border-dashed border-slate-200 dark:border-blue-800/40 bg-blue-50/60 dark:bg-black/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 text-left">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
            <span>
              <strong className="text-slate-900 dark:text-white">Field Observation Methodology:</strong> All fieldwork reflects academic coursework exercises in Somali Region and Gambella, focusing on baseline quadrat data, soil profiles, and watershed parameters.
            </span>
          </div>
          <a
            href="#contact"
            className="text-blue-600 dark:text-sky-400 font-semibold hover:underline shrink-0 font-mono text-[11px]"
          >
            Inquire About Field Protocols →
          </a>
        </div>

        {/* Inspection Modal */}
        {inspectedObservation && (
          <div
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setInspectedObservation(null)}
          >
            <div
              className="bg-white dark:bg-[#060b18] border border-slate-200 dark:border-blue-900/60 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl text-left text-slate-900 dark:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] w-full bg-[#030712]">
                <img
                  src={inspectedObservation.image}
                  alt={inspectedObservation.imageAlt}
                  className="w-full h-full object-cover opacity-95"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() => setInspectedObservation(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black border border-blue-800/40 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-4 text-sky-300 text-xs font-mono">
                  Coordinates: {inspectedObservation.coordinates}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-100 dark:bg-blue-950/60 border border-blue-600/30 dark:border-blue-700/50 text-blue-700 dark:text-sky-300">
                    {inspectedObservation.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {inspectedObservation.ecosystem}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {inspectedObservation.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {inspectedObservation.description}
                </p>

                <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-black/30 border border-slate-200 dark:border-blue-900/40 text-xs space-y-1">
                  <div className="font-mono font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest text-[10px]">
                    Sampling & Field Protocol:
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    {inspectedObservation.methodology}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setInspectedObservation(null)}
                    className="px-4 py-2 rounded-sm bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-500 transition-colors cursor-pointer"
                  >
                    Close Observation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
