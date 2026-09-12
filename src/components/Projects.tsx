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
        <header className="mb-10 flex flex-col gap-5 border-b border-[#DDD8CF] pb-6 text-left dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#8B735B] dark:text-[#B8AFA3]">
              <FolderOpen className="h-4 w-4" />
              <span>03 / PROJECTS</span>
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.04em] text-[#20211F] dark:text-[#F7F6F2] sm:text-5xl">
              Selected work.
            </h2>
          </div>
          <div className="max-w-xs text-sm leading-6 text-[#625C54] dark:text-[#C9C2B8]">
            Research, fieldwork, and digital environmental analysis.
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

        <div className="space-y-14 sm:space-y-20">
          {filteredProjects.map((project, index) => {
            const imageFirst = index % 2 === 0;

            return (
            <article
              key={project.id}
              className="group cursor-pointer"
              onClick={() => openProject(project)}
            >
              <div className={`grid items-center gap-7 lg:grid-cols-2 lg:gap-14 ${imageFirst ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                <div className="relative overflow-hidden border border-[#DDD8CF] bg-[#EAE6DE] shadow-[0_16px_40px_rgba(32,33,31,0.07)] dark:border-white/10 dark:bg-[#20211F]">
                  <div className="absolute left-4 top-4 z-10 text-[10px] font-mono uppercase tracking-[0.2em] text-white mix-blend-difference">
                    Project / {project.number}
                  </div>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02] group-hover:brightness-105"
                    loading={index > 0 ? 'lazy' : 'eager'}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="min-w-0 py-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#7F9A8A] dark:text-[#7F9A8A]">
                    <FileText className="h-3 w-3" />
                    <span>{project.category}</span>
                  </div>
                  <h3 className="mt-4 max-w-lg font-serif text-3xl leading-[0.98] tracking-[-0.04em] text-[#20211F] transition-transform duration-500 group-hover:translate-x-1 dark:text-[#F7F6F2] sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-[#625C54] dark:text-[#C9C2B8]">
                    {project.shortDescription}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.environmentalThemes.slice(0, 3).map((theme) => (
                      <span key={theme} className="border border-[#DDD8CF] px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-[#8B735B] dark:border-white/10 dark:text-[#B8AFA3]">
                        {theme}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-start">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openProject(project);
                    }}
                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#20211F] transition-colors duration-200 hover:text-[#3F6655] dark:text-[#F7F6F2] dark:hover:text-[#7F9A8A]"
                  >
                    View case study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                  </div>
                </div>
              </div>
            </article>
            );
          })}
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
