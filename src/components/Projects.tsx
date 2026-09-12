import React, { useEffect, useState } from 'react';
import { ArrowUpRight, FileText, FolderOpen, Globe, NotebookPen } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

const categories = [
  { label: 'All', icon: FolderOpen },
  { label: 'Academic Research', icon: FileText },
  { label: 'Academic Project', icon: FolderOpen },
  { label: 'Academic Fieldwork', icon: NotebookPen },
  { label: 'Earth Observation', icon: Globe },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const openProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="border-t border-slate-200 py-16 text-slate-800 dark:border-slate-800 dark:text-slate-100 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-left">
          <div className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-sky-400">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              <FolderOpen className="h-3.5 w-3.5" />
            </div>
            <span>03 / PROJECTS</span>
          </div>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Selected Work
            </h2>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Research · Fieldwork · Analysis
            </div>
          </div>
        </header>

        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-5 dark:border-slate-700/80">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveFilter(label)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-200 ${
                activeFilter === label
                  ? 'text-blue-700 dark:text-sky-300'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group cursor-pointer border border-slate-200 bg-white/80 transition-all duration-300 hover:border-blue-200 hover:bg-slate-50 dark:border-slate-700/80 dark:bg-slate-900/80 dark:hover:border-sky-400/30 dark:hover:bg-slate-900"
              onClick={() => openProject(project)}
            >
              <div className="grid items-center gap-4 px-4 py-4 sm:px-5 md:grid-cols-[52px_minmax(0,1.3fr)_minmax(0,0.8fr)_164px] md:gap-5 md:py-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  {project.number}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    <FileText className="h-3 w-3" />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-slate-900 transition-transform duration-300 group-hover:-translate-y-0.5 dark:text-white sm:text-xl">
                    {project.title}
                  </h3>
                </div>

                <div className="hidden md:block">
                  <div className="relative overflow-hidden rounded-[14px] border border-slate-200 bg-slate-100 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-800/80">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-16 w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openProject(project);
                    }}
                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-700 transition-colors duration-200 hover:text-blue-700 dark:text-slate-300 dark:hover:text-sky-300"
                  >
                    View Case Study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        allProjects={projects}
        onSelectProject={setSelectedProject}
        onClose={closeProject}
      />
    </section>
  );
};
