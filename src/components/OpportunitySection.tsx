import React from 'react';
import { Briefcase, Compass, FileText, Leaf, Send, Target } from 'lucide-react';

interface OpportunitySectionProps {
  onOpenCV: () => void;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ onOpenCV }) => {
  const opportunityTypes = [
    { label: 'Research', icon: Target },
    { label: 'Fieldwork', icon: Compass },
    { label: 'Environmental projects', icon: Leaf },
    { label: 'Internships', icon: Briefcase },
    { label: 'Graduate opportunities', icon: FileText },
  ];

  return (
    <section
      id="opportunities"
      aria-label="Open to Opportunities"
      className="py-20 lg:py-28 bg-transparent text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-y border-slate-200 dark:border-blue-900/30 py-12 lg:py-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase text-blue-600 dark:text-sky-400 font-bold tracking-[0.25em]">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
                  <Briefcase className="h-3.5 w-3.5" />
                </div>
                <span>06 / OPEN TO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">Research, fieldwork &amp; internships.</h2>
              <p className="max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Interested in environmental research, field assessment, conservation, watershed management, and sustainable resource systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {opportunityTypes.map(({ label, icon: Icon }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 border border-slate-200 dark:border-blue-900/40 px-3 py-2 text-xs text-slate-700 dark:text-slate-300">
                    <Icon className="h-3.5 w-3.5" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
              <div className="pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Discuss an opportunity</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenCV}
                  className="ml-2 inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-300 transition-colors cursor-pointer"
                >
                  <span>View CV</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 border-l border-slate-200 dark:border-blue-900/30 pl-6">
              <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-300 font-bold">Professional focus</div>
              <p className="mt-3 text-sm text-slate-900 dark:text-white">
                Environmental research, watershed systems, field assessment, and sustainable resource management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
