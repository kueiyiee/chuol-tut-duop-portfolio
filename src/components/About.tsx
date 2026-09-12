import React from 'react';
import { BookOpen, CalendarDays, MapPin, Network, UserRound } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="About Chuol Tut Duop" className="border-t border-slate-200 py-16 text-slate-800 dark:border-slate-800 dark:text-slate-100 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[22px] border border-slate-200 bg-white/90 px-5 py-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition-all duration-200 hover:shadow-[0_18px_35px_rgba(15,23,42,0.06)] dark:border-slate-700/80 dark:bg-slate-900/80 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-sky-400">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              <UserRound className="h-3.5 w-3.5" />
            </div>
            <span>01 / ABOUT</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                About Chuol
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900 dark:text-white sm:text-3xl">
                CHUOL TUT DUOP
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                B.Sc. Candidate · Natural Resources &amp; Management
              </p>
            </div>

            <div className="grid gap-4 border-t border-slate-200 pt-5 dark:border-slate-700/80 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>University</span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Kebri Dahar University
                </p>
              </div>

              <div className="space-y-2 sm:pl-5 sm:border-l sm:border-slate-200 sm:dark:border-slate-700/80">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  <UserRound className="h-3.5 w-3.5" />
                  <span>Degree</span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  B.Sc. Natural Resources and Management
                </p>
              </div>
            </div>

            <div className="grid gap-4 border-t border-slate-200 pt-5 dark:border-slate-700/80 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  <UserRound className="h-3.5 w-3.5" />
                  <span>Academic Status</span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  B.Sc. Candidate
                </p>
              </div>

              <div className="space-y-2 sm:pl-5 sm:border-l sm:border-slate-200 sm:dark:border-slate-700/80">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Location</span>
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Kebri Dahar, Somali Region, Ethiopia
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-5 dark:border-slate-700/80">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                <Network className="h-3.5 w-3.5" />
                <span>Core Areas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Field Methods', 'Ecosystem Stewardship', 'Collaboration', 'Impact Awareness'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors duration-200 hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-sky-400/35 dark:hover:text-sky-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
