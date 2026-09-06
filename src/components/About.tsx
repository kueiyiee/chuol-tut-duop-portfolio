import React from 'react';
import { BookOpen, Users, Compass, Sprout, ShieldAlert, CheckCircle2, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const corePillars = [
    {
      icon: Compass,
      title: "Scientific Field Methods",
      description: "Trained in vegetation sampling, transect layouts, environmental baseline observations, and systematic ecological data collection."
    },
    {
      icon: Sprout,
      title: "Ecosystem Stewardship",
      description: "Dedicated to balancing fragile biodiversity preservation with sustainable community resource requirements across Ethiopian landscapes."
    },
    {
      icon: Users,
      title: "Collaborative Problem-Solving",
      description: "Experienced in team-based fieldwork, multi-disciplinary discussions, and translating ecological data into actionable conservation steps."
    },
    {
      icon: ShieldAlert,
      title: "Environmental Impact Awareness",
      description: "Groundwork in EIA fundamentals, institutional waste stream assessment, and soil and water degradation mitigation."
    }
  ];

  return (
    <section
      id="about"
      aria-label="About Chuol Tut Duop"
      className="py-20 lg:py-28 bg-transparent text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Academic Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 dark:text-sky-400 font-bold">
              01 / BACKGROUND & IDENTITY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              About <span className="font-comic">Chuol Tut Duop</span>
            </h2>
            <div className="w-12 h-0.5 bg-blue-600 dark:bg-sky-400 rounded-full" />

            <div className="pt-4 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="glass-card p-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-blue-600 dark:text-sky-400 uppercase tracking-widest font-bold block">
                    Institutional Standing
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-snug">
                    Kebri Dahar University
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    College of Dryland Agriculture &amp; Natural Resources
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-blue-500/20 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-mono">Academic Status</span>
                    <span className="font-semibold text-blue-600 dark:text-sky-400">Senior B.Sc. Candidate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-mono">Conferral Date</span>
                    <span className="font-semibold text-slate-900 dark:text-white">July 2027</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-mono">Primary Focus</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Watershed &amp; Dryland Ecology</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-5 text-xs leading-relaxed text-slate-600 dark:text-slate-400 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold">
                  Operational Readiness
                </div>
                <p>
                  Headquartered in <strong className="text-slate-900 dark:text-white font-medium">Addis Ababa, Ethiopia</strong>. Fully prepared for field research deployments, ecological survey missions, and conservation initiatives across East Africa and internationally.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-light">
              <p>
                As a fourth-year <strong className="text-blue-600 dark:text-sky-400 font-semibold">Natural Resources and Management</strong> student and Senior B.Sc. Candidate at <strong className="text-slate-900 dark:text-white font-semibold">Kebri Dahar University</strong>, I am dedicated to understanding and safeguarding the vital relationships between terrestrial ecosystems, riverine hydrology, and human livelihoods across Ethiopia and East Africa.
              </p>
              <p>
                My academic path integrates rigorous scientific coursework—spanning environmental policy, watershed stewardship, biodiversity protection, and soil-water conservation—with hands-on environmental assessments, soil classification surveys, and vegetation transects.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                I believe that enduring conservation requires bridging field biology with community wisdom. Whether analyzing fragile rangeland dynamics or proposing institutional waste management remedies, my goal is to deliver actionable, scientifically grounded environmental stewardship.
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="pt-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 dark:text-sky-400 font-bold mb-4">
                Core Scientific & Professional Mindset
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {corePillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="glass-card glass-card-interactive p-5 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-sky-400 mb-3 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Academic Journey Highlight - Glass Callout */}
            <div className="glass-card p-6 border border-blue-200/60 dark:border-blue-500/25 text-slate-900 dark:text-white space-y-3">
              <div className="flex items-center space-x-2 text-[10px] font-mono text-blue-600 dark:text-sky-400 uppercase tracking-widest font-bold">
                <Award className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span>Commitment to Scientific Inquiry</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 italic">
                &ldquo;Active fieldwork teaches humility before the natural world. Observation, precise sampling, and empirical recording are the bedrocks of effective environmental conservation.&rdquo;
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium pt-1">
                — Field perspective, Kebri Dahar University academic coursework
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
