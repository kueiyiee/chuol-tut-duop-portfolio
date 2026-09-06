import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Academic Research', 'Academic Project', 'Academic Fieldwork', 'Earth Observation'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      aria-label="Projects & Academic Experience"
      className="py-20 lg:py-28 bg-transparent text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200 dark:border-blue-900/30 text-left">
          <div className="space-y-3">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-600 dark:text-sky-400 font-bold">
              04 / PRACTICAL &amp; ACADEMIC INQUIRY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Projects &amp; Environmental Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl font-light">
              Applied academic investigations, real-world GIS modeling, empirical fieldwork sampling, and institutional environmental systems developed throughout undergraduate studies.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-[10px] font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-sky-300 font-bold">
            SENIOR CAPSTONE &amp; SYSTEM SUITES
          </div>
        </div>

        {/* Filter Navigation Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 text-left">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center mr-1">
              <Filter className="w-3.5 h-3.5 mr-1 text-blue-600 dark:text-sky-400" />
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'bg-white/70 dark:bg-black/40 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-blue-900/40 hover:border-blue-500 backdrop-blur-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            Showing {filteredProjects.length} System {filteredProjects.length === 1 ? 'Suite' : 'Suites'}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden glass-card glass-card-interactive transition-all duration-300 shadow-sm hover:shadow-2xl text-left border border-slate-200 dark:border-blue-900/40"
            >
              {/* Window Chrome Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 dark:bg-[#030712] border-b border-slate-800 dark:border-blue-900/40 text-[10px] font-mono text-white">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-gray-500">|</span>
                  <span className="text-sky-400 font-semibold truncate max-w-[200px] sm:max-w-xs">
                    {project.systemMeta?.systemName || "Analytical Suite"}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <span className="text-sky-300">{project.systemMeta?.resolution || "4K"}</span>
                </div>
              </div>

              {/* Card Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#030712]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#030712]/90 border border-blue-500/50 text-sky-300 backdrop-blur-xs">
                    PROJECT {project.number}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#030712]/85 text-sky-300 backdrop-blur-xs border border-blue-900/60">
                    {project.category}
                  </span>
                </div>

                {/* Station coordinates pin */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/80 bg-black/60 px-2.5 py-0.5 rounded-full backdrop-blur-xs hidden sm:block border border-white/10">
                  {project.systemMeta?.stationCoordinates?.slice(0, 24)}...
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    &ldquo;{project.shortDescription}&rdquo;
                  </p>

                  {/* Telemetry snippet callout */}
                  {project.systemMeta?.telemetrySnippet && (
                    <div className="p-2.5 rounded-xl bg-black/80 dark:bg-black/60 text-sky-300 font-mono text-[10px] border border-blue-500/30 backdrop-blur-md">
                      <span className="text-sky-400 font-bold uppercase block text-[9px] mb-0.5">TELEMETRY:</span>
                      {project.systemMeta.telemetrySnippet}
                    </div>
                  )}

                  {/* Highlights Checklist */}
                  <div className="pt-2 border-t border-slate-200 dark:border-blue-900/30 space-y-1.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-sky-400 font-semibold">
                      Key Highlights:
                    </div>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="capitalize">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-200 dark:border-blue-900/30">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-full bg-white/70 dark:bg-black/40 border border-slate-200 dark:border-blue-500/30 text-slate-900 dark:text-white text-xs font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white backdrop-blur-md transition-all group/btn cursor-pointer shadow-xs"
                  >
                    <span>Inspect System &amp; Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
