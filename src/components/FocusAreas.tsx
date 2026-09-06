import React, { useState } from 'react';
import { 
  Compass, 
  Shield, 
  Sprout, 
  Layers, 
  CloudSun, 
  Repeat, 
  Trees, 
  Bird, 
  Waves, 
  FileCheck,
  ChevronRight,
  Sparkles,
  Users,
  CheckCircle2,
  BookOpen,
  Award
} from 'lucide-react';
import { focusAreas, skillCategories } from '../data/portfolioData';
import { FocusArea } from '../types';

export const FocusAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<FocusArea | null>(null);
  const [activeTab, setActiveTab] = useState<'domains' | 'competencies'>('domains');

  // Map icon names to Lucide components
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Shield,
    Sprout,
    Layers,
    CloudSun,
    Repeat,
    Trees,
    Bird,
    Waves,
    FileCheck
  };

  return (
    <section
      id="focus-areas"
      aria-label="Areas of Focus and Competency Matrix"
      className="py-20 lg:py-28 bg-transparent text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200 dark:border-blue-900/30">
          <div className="space-y-3 text-left">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 dark:text-sky-400 font-bold">
              02 / DOMAINS & COMPETENCIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Academic Focus & Capability Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-light">
              Core ecological disciplines, natural resource management frameworks, and empirical fieldwork methodologies grounded in four years of academic training.
            </p>
          </div>

          {/* Unified Perspective Toggle */}
          <div className="mt-6 md:mt-0 flex items-center glass-pill p-1 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('domains')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'domains'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              10 Study Domains
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('competencies')}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'competencies'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Field Competencies
            </button>
          </div>
        </div>

        {/* Tab 1: 10 Focus Areas Grid */}
        {activeTab === 'domains' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4.5 animate-fadeIn">
            {focusAreas.map((area) => {
              const IconComponent = iconMap[area.iconName] || Compass;
              return (
                <div
                  key={area.id}
                  onClick={() => setSelectedArea(area)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedArea(area);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${area.title}`}
                  className="group relative p-5.5 rounded-2xl glass-card glass-card-interactive flex flex-col justify-between text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold text-blue-600 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform">
                        {area.number}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-sky-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2 mb-2">
                      {area.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 font-light">
                      {area.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-blue-500/20 flex items-center justify-between text-[11px]">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[120px]">
                      {area.tags[0]}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Applied Competencies Matrix */}
        {activeTab === 'competencies' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left animate-fadeIn">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-sky-400 flex items-center justify-center shadow-xs">
                      {idx === 0 ? <Compass className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-xl bg-white/45 dark:bg-black/30 border border-slate-200 dark:border-blue-500/20 hover:border-blue-500/50 backdrop-blur-md transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100/70 dark:bg-blue-900/40 text-blue-700 dark:text-sky-300 font-medium border border-blue-200 dark:border-blue-800/40">
                            Academic &amp; Field Validated
                          </span>
                        </div>
                        {skill.description && (
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal font-light">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-blue-500/20 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                  <span>VERIFIED VIA ACADEMIC EVALUATION</span>
                  <span className="font-semibold text-blue-600 dark:text-sky-400">
                    KEBRI DAHAR UNIVERSITY
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Area Modal / Detail Drawer */}
        {selectedArea && (
          <div
            id="focus-area-modal"
            className="fixed inset-0 z-50 bg-black/70 dark:bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedArea(null)}
          >
            <div
              className="bg-white/95 dark:bg-[#060b18]/95 backdrop-blur-2xl border border-slate-200 dark:border-blue-500/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] relative text-left text-slate-900 dark:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-blue-900/30">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-xs bg-blue-100 dark:bg-blue-900/40 border border-blue-600/30 dark:border-blue-700/50 text-blue-700 dark:text-sky-300 font-bold uppercase">
                    AREA {selectedArea.number}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Kebri Dahar Curriculum
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArea(null)}
                  className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2 py-1 rounded-sm cursor-pointer"
                  aria-label="Close modal"
                >
                  Close ✕
                </button>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {selectedArea.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light">
                {selectedArea.detailedDescription}
              </p>

              <div className="space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold">
                  Associated Competencies & Themes:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedArea.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-sm text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-blue-900/30 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span>STATUS: ACTIVE STUDY</span>
                <button
                  type="button"
                  onClick={() => setSelectedArea(null)}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white dark:bg-blue-600 dark:text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
