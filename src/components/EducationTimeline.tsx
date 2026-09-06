import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Academic Journey & Education"
      className="py-20 lg:py-28 bg-transparent text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 pb-6 border-b border-slate-200 dark:border-blue-900/30 text-left">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 dark:text-sky-400 font-bold mb-2">
            03 / ACADEMIC FOUNDATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Academic Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mt-2 font-light">
            Formal educational milestones spanning foundational schooling in Gambella to advanced undergraduate studies in Natural Resources at Kebri Dahar University.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8 text-left max-w-4xl">
          {educationHistory.map((item, idx) => (
            <div
              key={item.id}
              className={`relative pl-8 sm:pl-10 border-l-2 ${
                idx === educationHistory.length - 1 ? 'border-transparent' : 'border-blue-200 dark:border-blue-900/40'
              }`}
            >
              {/* Timeline Marker */}
              <div
                className={`absolute -left-[13px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-110 shadow-xs z-10 ${
                  item.isCurrent
                    ? 'bg-blue-600 text-white dark:bg-blue-600 border-blue-400 dark:text-white'
                    : 'bg-blue-100 dark:bg-blue-950 border-blue-400 dark:border-blue-800 text-blue-600 dark:text-sky-400'
                }`}
              >
                <GraduationCap className="w-3 h-3" />
              </div>

              {/* Content Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 mb-6 ${
                  item.isCurrent
                    ? 'glass-card border-blue-300 dark:border-blue-500/40 shadow-xl'
                    : 'glass-panel border-slate-200 dark:border-blue-900/30'
                }`}
              >
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2 text-xs font-mono">
                    <span className="flex items-center text-blue-600 dark:text-sky-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-blue-600 dark:text-sky-400" />
                      {item.period}
                    </span>
                    {item.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-700/50 text-blue-700 dark:text-sky-300 font-bold">
                        Fourth-Year Student · Class of July 2027
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-blue-600 dark:text-sky-400" />
                    {item.location}
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-blue-600 dark:text-sky-300 uppercase tracking-wider">
                    {item.institution}
                  </span>
                  {item.academicStanding && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white dark:bg-blue-900 dark:text-sky-200">
                      {item.academicStanding}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 font-light">
                  {item.description}
                </p>

                {/* 4-Year Academic Progression Matrix (For Global Evaluation) */}
                {item.curriculumProgress && item.curriculumProgress.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-slate-200 dark:border-blue-900/30">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-300 font-bold">
                        <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                        <span>Four-Year Academic Progression:</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        Year 4 / Senior Standing
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {item.curriculumProgress.map((stage) => (
                        <div
                          key={stage.year}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            stage.status.includes('Current')
                              ? 'bg-white/60 dark:bg-blue-950/40 border-blue-400 dark:border-blue-500/50 shadow-xs backdrop-blur-md'
                              : 'bg-white/40 dark:bg-black/20 border-slate-200 dark:border-blue-900/30 backdrop-blur-xs'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-bold text-xs text-slate-900 dark:text-white">
                              {stage.year} · {stage.stage}
                            </span>
                            <span
                              className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm ${
                                stage.status.includes('Current')
                                  ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white'
                                  : 'bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-slate-400'
                              }`}
                            >
                              {stage.status}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-2 font-light">
                            {stage.focus}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {stage.keyModules.map((mod) => (
                              <span
                                key={mod}
                                className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-800/40"
                              >
                                {mod}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Relevant Coursework Section */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-slate-200 dark:border-blue-900/30">
                    <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-300 font-bold mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                      <span>Relevant Coursework:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {item.coursework.map((course) => (
                        <div
                          key={course}
                          className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/45 dark:bg-[#030712]/60 border border-slate-200 dark:border-blue-900/30 text-xs font-medium text-slate-800 dark:text-slate-200 backdrop-blur-md"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
