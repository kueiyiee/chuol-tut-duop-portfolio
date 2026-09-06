import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, BookOpen, Tag, Sparkles, Laptop, Layers, MapPin, ZoomIn } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'system' | 'methodology' | 'outcomes'>('system');
  const [zoomPreview, setZoomPreview] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        id="project-detail-modal-card"
        className="relative w-full max-w-4xl my-8 bg-white/95 dark:bg-[#060b18]/95 backdrop-blur-2xl border border-slate-200 dark:border-blue-500/30 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden text-left text-slate-800 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Workstation Titlebar Chrome */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 dark:bg-[#030712] border-b border-slate-800 dark:border-blue-900/40 text-xs font-mono text-white">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-gray-500 mx-1">|</span>
            <div className="flex items-center space-x-1 text-sky-400">
              <Laptop className="w-3.5 h-3.5" />
              <span className="font-semibold text-white truncate max-w-[200px] sm:max-w-md">
                {project.systemMeta?.systemName || "Analytical Workstation"}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded-sm bg-blue-950 text-sky-300 text-[10px] hidden sm:inline border border-blue-800/60">
              PROJECT {project.number}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="p-1 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Visual Media Frame */}
        <div className="relative aspect-[16/9] max-h-80 w-full overflow-hidden bg-black group">
          <img
            src={project.image}
            alt={project.imageAlt}
            className={`w-full h-full object-cover transition-transform duration-500 ${zoomPreview ? 'scale-125' : 'scale-100'}`}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

          {/* Overlaid System Tag & Action */}
          <div className="absolute top-3 left-3 flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-[#030712]/90 text-sky-300 border border-blue-500/50 backdrop-blur-xs">
              {project.category}
            </span>
            <span className="px-2 py-0.5 rounded-sm text-[10px] font-mono bg-black/70 text-sky-300 border border-blue-900/60 backdrop-blur-xs hidden sm:inline">
              {project.systemMeta?.resolution || "4K UHD"}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <button
              type="button"
              onClick={() => setZoomPreview(!zoomPreview)}
              className="px-2.5 py-1 rounded-sm bg-black/80 hover:bg-black text-white text-[10px] font-mono flex items-center space-x-1 border border-blue-500/50 transition-colors cursor-pointer"
            >
              <ZoomIn className="w-3 h-3" />
              <span>{zoomPreview ? "RESET ZOOM" : "ZOOM IN"}</span>
            </button>
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <h2 id="project-modal-title" className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h2>
            <div className="flex items-center space-x-2 text-[11px] font-mono text-sky-300/90 mt-1">
              <MapPin className="w-3 h-3 text-sky-400" />
              <span>{project.systemMeta?.stationCoordinates || "Kebri Dahar Station · Somali Region"}</span>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center border-b border-slate-200 dark:border-blue-900/40 px-6 bg-slate-50/80 dark:bg-[#030712]/60 backdrop-blur-md text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('system')}
            className={`py-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'system'
                ? 'border-blue-500 text-blue-600 dark:text-sky-300 bg-white/60 dark:bg-blue-950/30'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Workstation &amp; Telemetry</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('methodology')}
            className={`py-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'methodology'
                ? 'border-blue-500 text-blue-600 dark:text-sky-300 bg-white/60 dark:bg-blue-950/30'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Methodology &amp; Activities</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('outcomes')}
            className={`py-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'outcomes'
                ? 'border-blue-500 text-blue-600 dark:text-sky-300 bg-white/60 dark:bg-blue-950/30'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Outcomes &amp; Policy Impact</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
          {activeTab === 'system' && (
            <div className="space-y-5">
              {/* Telemetry Strip */}
              {project.systemMeta?.telemetrySnippet && (
                <div className="p-3.5 rounded-lg bg-slate-900 dark:bg-[#030712] text-white font-mono text-xs border border-blue-900/50">
                  <div className="text-[10px] uppercase tracking-widest text-sky-400 font-bold mb-1">
                    ACTIVE TELEMETRY VECTOR
                  </div>
                  <div className="text-sky-200">{project.systemMeta.telemetrySnippet}</div>
                </div>
              )}

              {/* Active Geospatial Layers */}
              {project.systemMeta?.activeLayers && (
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold flex items-center">
                    <Layers className="w-3.5 h-3.5 mr-1.5" />
                    <span>Configured System Layers &amp; GIS Datasets</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.systemMeta.activeLayers.map((layer, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-md bg-white dark:bg-blue-950/20 border border-slate-200 dark:border-blue-900/40 text-xs text-slate-900 dark:text-slate-100 flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{layer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview text */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold">
                  Analytical Scope &amp; Context
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'methodology' && (
            <div className="space-y-5">
              {/* Objectives */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold">
                  Core Research Objectives
                </div>
                <div className="space-y-2">
                  {project.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic & Field Activities */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold">
                  Fieldwork &amp; Implementation Workflow
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.activities.map((act, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/40 text-xs text-slate-700 dark:text-slate-300 flex items-start space-x-2"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applied Competencies */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-blue-900/30">
                <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold">
                  Applied Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.skillsApplied.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-sm text-xs bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-sky-300 font-medium border border-blue-200 dark:border-blue-800/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'outcomes' && (
            <div className="space-y-5">
              {/* Outcomes & Insights */}
              <div className="space-y-3 p-5 rounded-xl bg-slate-50/80 dark:bg-blue-950/20 border border-slate-200 dark:border-blue-900/40">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-blue-700 dark:text-sky-300 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  <span>Key Policy Insights &amp; Empirical Conclusions</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-sky-400 font-bold mt-0.5">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Environmental Themes */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-sky-400 font-bold">
                  Targeted Environmental Themes
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.environmentalThemes.map((theme, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-sm text-xs bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-sky-300 font-medium border border-blue-200 dark:border-blue-900/40 flex items-center space-x-1"
                    >
                      <Tag className="w-2.5 h-2.5 text-sky-400" />
                      <span>{theme}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50/80 dark:bg-[#030712]/80 backdrop-blur-md border-t border-slate-200 dark:border-blue-900/40 flex items-center justify-between text-xs">
          <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            Kebri Dahar University Academic Portfolio · B.Sc. Senior Capstone
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 text-xs font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
