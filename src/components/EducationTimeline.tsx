import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

type EducationEntry = {
  period: string;
  degree: string;
  institution: string;
  status?: string;
  location: string;
  featured?: boolean;
};

const educationEntries: EducationEntry[] = [
  {
    period: '2023 — PRESENT',
    degree: 'B.Sc. in Natural Resources and Management',
    institution: 'University of Kebri Dahar',
    status: 'Fourth-Year Student · Expected July 2027',
    location: 'Kebri Dahar, Somali Region, Ethiopia',
    featured: true,
  },
  {
    period: '2019 — 2021',
    degree: 'Ethiopian Secondary School Leaving Certificate Examination',
    institution: 'Gambella Secondary and Preparatory School',
    location: 'Gambella, Ethiopia',
  },
  {
    period: '2011 — 2018',
    degree: 'Primary School Leaving Certificate Examination',
    institution: 'RRS Junior Primary School',
    location: 'Pinyudo, Gambella, Ethiopia',
  },
];

const EducationBlock: React.FC<{ entry: EducationEntry }> = ({ entry }) => {
  const isFeatured = Boolean(entry.featured);

  return (
    <div className="relative">
      <div className="absolute left-[18px] top-0 h-full w-px bg-slate-200 dark:bg-slate-700/80" aria-hidden="true" />

      <div className="relative flex items-start gap-5 sm:gap-7">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
          <span
            className={`relative z-10 flex h-4 w-4 items-center justify-center rounded-full border ${
              isFeatured
                ? 'border-blue-600 bg-blue-600 shadow-[0_0_0_5px_rgba(37,99,235,0.12)] dark:border-sky-400 dark:bg-sky-400'
                : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'
            }`}
            aria-hidden="true"
          >
            {isFeatured ? <GraduationCap className="h-2.5 w-2.5 text-white" /> : null}
          </span>
        </div>

        <article
          className={`w-full rounded-[20px] border border-slate-200 bg-white px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(15,23,42,0.06)] dark:border-slate-700/80 dark:bg-slate-900/80 md:px-6 ${
            isFeatured ? 'shadow-[0_18px_35px_rgba(15,23,42,0.07)] md:px-7 md:py-7' : 'md:px-6 md:py-5'
          }`}
        >
          <div
            className={`flex items-center gap-2 font-mono uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 ${
              isFeatured ? 'text-[10px] sm:text-[11px]' : 'text-[9px] sm:text-[10px]'
            }`}
          >
            <BookOpen className="h-3 w-3" />
            <span>{entry.period}</span>
          </div>

          <div className="mt-4 space-y-3">
            <h3
              className={`font-semibold tracking-[-0.02em] text-slate-900 dark:text-white ${
                isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
              }`}
            >
              {entry.degree}
            </h3>

            <p
              className={`font-medium text-slate-700 dark:text-slate-200 ${
                isFeatured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
              }`}
            >
              {entry.institution}
            </p>

            {entry.status && (
              <p className="text-sm text-slate-600 dark:text-slate-300">{entry.status}</p>
            )}

            <p className="text-sm text-slate-500 dark:text-slate-400">{entry.location}</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export const EducationTimeline: React.FC = () => (
  <section id="education" aria-label="Academic Journey and Education" className="border-t border-slate-200 py-20 text-slate-800 dark:border-slate-800 dark:text-slate-100 lg:py-28">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-left">
        <div className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-sky-400">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
            <GraduationCap className="h-3.5 w-3.5" />
          </div>
          <span>05 / EDUCATION</span>
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Academic Journey
        </h2>
      </header>

      <div className="space-y-8 sm:space-y-10">
        {educationEntries.map((entry) => (
          <EducationBlock key={`${entry.period}-${entry.degree}`} entry={entry} />
        ))}
      </div>
    </div>
  </section>
);
