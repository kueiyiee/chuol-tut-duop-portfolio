import React from 'react';
import { Compass, Users } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsDashboard: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Core Competencies & Skills"
      className="py-20 lg:py-28 bg-transparent text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200 dark:border-blue-900/30 text-left">
          <div className="space-y-3">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 dark:text-sky-400 font-bold">
              06 / CAPABILITY MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Competencies
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-light">
              Grounded environmental methodologies, technical assessment frameworks, and professional collaborative capabilities.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-[10px] font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-sky-300 font-bold">
            AUTHENTIC CAPABILITIES · EMPIRICAL RIGOR
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-blue-900/40 bg-white/80 dark:bg-[#060b18]/60 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-sky-400 flex items-center justify-center">
                    {idx === 0 ? <Compass className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light">
                  {cat.description}
                </p>

                {/* Skill Items */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-lg bg-blue-50/50 dark:bg-[#030712]/60 border border-slate-200 dark:border-blue-900/40 hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 font-medium border border-blue-300/40 dark:border-blue-800/40">
                          Academic & Field Validated
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

              {/* Card Footer Metric */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-blue-900/30 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                <span>VERIFIED VIA ACADEMIC EVALUATION</span>
                <span className="font-semibold text-blue-600 dark:text-sky-400">
                  UNIVERSITY OF KEBRI DAHAR
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
