import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Linkedin, Compass, ShieldCheck, Maximize2, X, UserCheck, ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { BrandEmblem } from './BrandEmblem';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const [isPhotoPreviewOpen, setIsPhotoPreviewOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPhotoPreviewOpen) {
        setIsPhotoPreviewOpen(false);
      }
    };
    if (isPhotoPreviewOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPhotoPreviewOpen]);

  const profilePhotoUrl = personalInfo.profileImage || "https://i.postimg.cc/m26zS2fL/5823561112182526026.jpg";

  return (
    <footer
      id="main-footer"
      className="bg-white/70 dark:bg-[#030712]/90 backdrop-blur-2xl text-slate-800 dark:text-slate-100 pt-16 pb-12 border-t border-slate-200 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-blue-900/30 text-left">
          {/* Brand Col with Passport-Sized Portrait */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-start space-x-4">
              {/* Passport-Sized Photo Frame */}
              <div className="relative shrink-0 group">
                <button
                  type="button"
                  onClick={() => setIsPhotoPreviewOpen(true)}
                  className="relative block w-20 sm:w-24 aspect-[3.5/4.5] rounded-xl overflow-hidden border-2 border-blue-500/40 shadow-lg bg-blue-50 dark:bg-[#070d1e] ring-2 ring-white/80 dark:ring-blue-950/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] focus-visible:outline-2 focus-visible:outline-blue-500 cursor-zoom-in"
                  title="Click to inspect passport-sized portrait"
                  aria-label="View Chuol Tut Duop's full portrait"
                >
                  <img
                    src={profilePhotoUrl}
                    alt="Chuol Tut Duop - Official Passport Sized Photograph"
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle Vignette & Glare */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10 opacity-70 pointer-events-none" />

                  {/* Hover Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity backdrop-blur-[1px]">
                    <Maximize2 className="w-4 h-4 text-white drop-shadow-md" />
                  </div>

                  {/* Passport ID pill label */}
                  <span className="absolute bottom-1 left-1 right-1 text-[8px] font-mono tracking-wider text-center uppercase bg-black/80 text-sky-300 py-0.5 rounded-sm backdrop-blur-xs font-semibold leading-tight border border-blue-500/30">
                    Portrait
                  </span>
                </button>

                {/* Verified Official Seal */}
                <div
                  className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white rounded-full p-1 shadow-md border-2 border-white dark:border-[#030712] flex items-center justify-center"
                  title="Verified Candidate Profile"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Identity & Status */}
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white font-comic">
                    CHUOL TUT DUOP
                  </span>
                  <BrandEmblem size="sm" />
                </div>
                <p className="text-xs text-blue-600 dark:text-sky-400 font-mono uppercase tracking-wider font-semibold">
                  Natural Resources &amp; Management
                </p>

                <div className="pt-0.5 text-xs text-slate-600 dark:text-slate-400 font-mono space-y-0.5">
                  <div>Kebri Dahar University · Somali Region, Ethiopia</div>
                  <div>Expected Graduation · July 2027</div>
                </div>

                <div className="pt-1 flex items-center space-x-2">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-50 dark:bg-blue-950/60 border border-blue-500/30 text-blue-700 dark:text-sky-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span>Senior B.Sc. Candidate</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-editorial italic max-w-sm leading-relaxed pt-1">
              &ldquo;Exploring sustainable solutions for healthier ecosystems, resilient communities, and responsible natural resource management.&rdquo;
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 dark:text-sky-400 font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  About Chuol
                </a>
              </li>
              <li>
                <a href="#focus-areas" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Focus &amp; Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Education Timeline
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Projects &amp; Systems
                </a>
              </li>
              <li>
                <a href="#fieldwork" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Field &amp; Environmental Perspective
                </a>
              </li>
              <li>
                <a href="#opportunities" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Open to Opportunities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Contact &amp; Inquiries
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCV}
                  className="hover:text-blue-600 dark:hover:text-white transition-colors text-left cursor-pointer"
                >
                  Academic Curriculum Vitae
                </button>
              </li>
            </ul>
          </div>

          {/* Centralized Communication Channel (Directing cleanly to #contact) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 dark:text-sky-400 font-bold">
              Direct Inquiries
            </div>
            <div className="p-4 rounded-2xl glass-card space-y-3">
              <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                All direct communication coordinates, academic reference information, and immediate messaging are consolidated in the verified Contact Hub.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.35)]"
                >
                  <span>Go to Contact Hub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3.5 py-2 rounded-full bg-white/70 dark:bg-blue-950/40 border border-slate-200 dark:border-blue-500/30 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-sky-300 transition-all"
                  title="LinkedIn profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono gap-4">
          <div>
            © 2026 Chuol Tut Duop. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span>Kebri Dahar, Ethiopia</span>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Passport Photo Full Lightbox Modal */}
      {isPhotoPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Official Passport Photo of Chuol Tut Duop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsPhotoPreviewOpen(false)}
        >
          <div
            className="relative max-w-sm w-full bg-white dark:bg-[#060b18] border border-slate-200 dark:border-blue-500/30 rounded-2xl shadow-2xl p-6 text-left space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-blue-900/40">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-sky-300">
                  Official Passport Photograph
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsPhotoPreviewOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Card with Passport Framing */}
            <div className="flex justify-center py-2">
              <div className="relative w-52 aspect-[3.5/4.5] rounded-xl overflow-hidden border-4 border-white dark:border-blue-900/60 shadow-2xl bg-black/5 ring-1 ring-black/10 dark:ring-blue-500/30">
                <img
                  src={profilePhotoUrl}
                  alt="Chuol Tut Duop passport portrait"
                  className="w-full h-full object-cover object-[center_20%]"
                  referrerPolicy="no-referrer"
                />
                {/* Holographic Watermark / Official Badge */}
                <div className="absolute top-2 right-2 bg-blue-600/90 text-white text-[9px] font-mono px-2 py-0.5 rounded-full shadow-xs backdrop-blur-xs flex items-center space-x-1 border border-blue-400/40">
                  <UserCheck className="w-3 h-3" />
                  <span>35×45mm</span>
                </div>
              </div>
            </div>

            {/* Candidate Metadata */}
            <div className="bg-blue-50/70 dark:bg-blue-950/30 rounded-xl p-3 border border-blue-200/50 dark:border-blue-500/20 text-xs font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Subject:</span>
                <strong className="text-slate-900 dark:text-white">Chuol Tut Duop</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Department:</span>
                <span className="text-slate-900 dark:text-white">Natural Resources &amp; Mgmt</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">University:</span>
                <span className="text-slate-900 dark:text-white">Kebri Dahar University</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-1 flex items-center justify-end space-x-2">
              <a
                href={profilePhotoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-500/30 text-blue-700 dark:text-sky-300 text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
              >
                Open Original Image
              </a>
              <button
                type="button"
                onClick={() => setIsPhotoPreviewOpen(false)}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 text-xs font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
