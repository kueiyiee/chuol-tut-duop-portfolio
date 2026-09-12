import React, { useEffect, useMemo } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  onSelectProject: (project: ProjectItem | null) => void;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, allProjects, onSelectProject, onClose }) => {
  const navState = useMemo(() => {
    if (!project) return null;

    const currentIndex = allProjects.findIndex((item) => item.id === project.id);
    const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

    return { previousProject, nextProject };
  }, [allProjects, project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleNavigateProject = (targetProject: ProjectItem | null) => {
    if (!targetProject) return;

    onSelectProject(targetProject);

    const modalOverlay = document.getElementById('project-detail-modal-overlay');
    if (modalOverlay) {
      modalOverlay.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const metadataItems = [
    { label: 'Project Type', value: project.category },
    { label: 'Project Number', value: project.number },
    { label: 'Focus', value: project.environmentalThemes.slice(0, 2).join(' · ') || 'Research and field analysis' },
    { label: 'Method', value: project.activities[0] || project.shortDescription },
    { label: 'Tools', value: project.skillsApplied.slice(0, 3).join(' · ') || 'Applied environmental analysis' },
  ].filter((item) => Boolean(item.value));

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-slate-950/80 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="mx-auto w-full max-w-5xl py-4 sm:py-8">
        <div
          className="w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white text-slate-900 shadow-[0_28px_90px_-30px_rgba(15,23,42,0.75)] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          onClick={(event) => event.stopPropagation()}
        >
          <header className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/80 sm:px-6">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to projects
            </button>

            <div className="flex items-center gap-2">
              {navState?.previousProject && (
                <button
                  type="button"
                  onClick={() => handleNavigateProject(navState.previousProject)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
                >
                  <ArrowLeft className="h-3 w-3" />
                  Previous
                </button>
              )}

              {navState?.nextProject && (
                <button
                  type="button"
                  onClick={() => handleNavigateProject(navState.nextProject)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
                >
                  Next
                  <ArrowRight className="h-3 w-3" />
                </button>
              )}
            </div>
          </header>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
                  {project.number}
                </p>
                <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.28em] text-blue-700 dark:text-sky-300">
                  {project.category}
                </p>
                <h2 id="project-modal-title" className="mt-3 max-w-3xl break-words text-3xl leading-none text-slate-900 dark:text-white sm:text-4xl lg:text-[3rem]">
                  {project.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {project.environmentalThemes.slice(0, 3).map((theme) => (
                  <span
                    key={theme}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            <p className="mb-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {project.shortDescription}
            </p>

            <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-900">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(230px,0.8fr)]">
              <div className="min-w-0 space-y-8">
                {project.overview && (
                  <section>
                    <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.26em] text-blue-700 dark:text-sky-300">
                      Project Overview
                    </p>
                    <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                      {project.overview}
                    </p>
                  </section>
                )}

                {project.objectives.length > 0 && (
                  <section>
                    <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.26em] text-blue-700 dark:text-sky-300">
                      Objectives
                    </p>
                    <ul className="space-y-2 pl-5 text-base leading-relaxed text-slate-700 marker:text-blue-600 dark:text-slate-300 dark:marker:text-sky-300">
                      {project.objectives.map((objective) => (
                        <li key={objective}>{objective}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.activities.length > 0 && (
                  <section>
                    <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.26em] text-blue-700 dark:text-sky-300">
                      Methodology
                    </p>
                    <ul className="space-y-2 pl-5 text-base leading-relaxed text-slate-700 marker:text-blue-600 dark:text-slate-300 dark:marker:text-sky-300">
                      {project.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.skillsApplied.length > 0 && (
                  <section>
                    <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.26em] text-blue-700 dark:text-sky-300">
                      Tools / Methods
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.skillsApplied.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {project.outcomes.length > 0 && (
                  <section>
                    <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.26em] text-blue-700 dark:text-sky-300">
                      Findings / Output
                    </p>
                    <ul className="space-y-2 pl-5 text-base leading-relaxed text-slate-700 marker:text-blue-600 dark:text-slate-300 dark:marker:text-sky-300">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <aside className="min-w-0 lg:pl-2">
                <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-blue-700 dark:text-sky-300">
                    Project Information
                  </p>

                  <dl className="mt-4 space-y-4">
                    {metadataItems.map((item) => (
                      <div key={item.label} className="border-t border-slate-200 pt-3 first:border-t-0 first:pt-0 dark:border-slate-700">
                        <dt className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {project.highlights.length > 0 && (
                  <div className="mt-5 rounded-[22px] border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                    <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-blue-700 dark:text-sky-300">
                      Key Highlights
                    </p>
                    <ul className="mt-4 space-y-2 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-700">
              <div className="min-w-[120px]">
                {navState?.previousProject ? (
                  <button
                    type="button"
                    onClick={() => handleNavigateProject(navState.previousProject)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Previous
                  </button>
                ) : null}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
              >
                Back to projects
              </button>

              <div className="min-w-[120px] text-right">
                {navState?.nextProject ? (
                  <button
                    type="button"
                    onClick={() => handleNavigateProject(navState.nextProject)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
                  >
                    Next
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
