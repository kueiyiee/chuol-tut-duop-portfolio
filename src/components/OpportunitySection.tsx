import React from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { targetOrganizations } from '../data/portfolioData';

interface OpportunitySectionProps {
  onOpenCV: () => void;
}

export const OpportunitySection: React.FC<OpportunitySectionProps> = ({ onOpenCV }) => {
  const learningObjectives = [
    "Gain intensive practical field experience in ecological sampling and resource monitoring",
    "Translate academic knowledge into grounded conservation and environmental solutions",
    "Support active NGO, research, or governmental environmental and sustainability projects",
    "Collaborate within multi-disciplinary scientific, consultant, and field teams",
    "Build rigorous competencies in environmental data processing, reporting, and community liaison"
  ];

  return (
    <section
      id="opportunities"
      aria-label="Open to Opportunities"
      className="py-20 lg:py-28 bg-transparent text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-blue-900/40 bg-gradient-to-b from-white/90 via-blue-50/30 to-white/90 dark:from-[#060b18]/90 dark:via-[#030712] dark:to-[#060b18]/90 p-8 sm:p-12 lg:p-16 shadow-lg dark:shadow-2xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-sky-300 text-[11px] font-mono font-bold uppercase tracking-wider border border-blue-600/30 dark:border-blue-700/50">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span>Available for Fellowships, Research & Professional Roles</span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase text-blue-600 dark:text-sky-400 font-bold tracking-[0.25em]">
                  06 / PROFESSIONAL HORIZONS & OPPORTUNITIES
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Academic Rigor. Field Readiness. Global Perspective.
                </h2>
              </div>

              {/* Career Manifesto Quote */}
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 dark:border-sky-400 text-sm sm:text-base italic text-slate-900 dark:text-white font-editorial">
                &ldquo;To apply four years of rigorous scientific training in natural resources toward high-impact conservation initiatives, international graduate research, and field deployments—championing resilient, community-centered environmental stewardship.&rdquo;
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                As a senior undergraduate candidate preparing for graduation, I am proactively seeking competitive international research fellowships, graduate scholarship pathways, field internships, and conservation project appointments where I can contribute empirical rigor while championing sustainable community outcomes.
              </p>

              {/* Key Value Checklist */}
              <div className="space-y-2.5 pt-2">
                {learningObjectives.map((obj, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-500 transition-colors shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Discuss an Opportunity</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenCV}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg border border-slate-200 dark:border-blue-800/60 bg-white/80 dark:bg-black/20 text-slate-900 dark:text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors cursor-pointer"
                >
                  <span>Review Academic CV</span>
                </button>
              </div>
            </div>

            {/* Right: Target Organization Matrix */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[10px] font-mono uppercase text-blue-600 dark:text-sky-300 font-bold tracking-widest">
                Target Organizational Arenas:
              </div>

              <div className="space-y-3">
                {targetOrganizations.map((org, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/85 dark:bg-[#030712]/70 border border-slate-200 dark:border-blue-900/40 hover:border-blue-500 transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {org.type}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-blue-100 dark:bg-blue-950/60 border border-blue-300 dark:border-blue-700/50 text-blue-700 dark:text-sky-300">
                        {org.roleType}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-light">
                      {org.focus}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-blue-100/70 dark:bg-blue-950/40 border border-slate-200 dark:border-blue-800/40 text-[10px] font-mono text-blue-700 dark:text-sky-400 flex items-center justify-between font-semibold">
                <span>STATUS: FOURTH-YEAR (SENIOR) B.SC. CANDIDATE</span>
                <span>GLOBAL HORIZON: FELLOWSHIPS & RESEARCH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
