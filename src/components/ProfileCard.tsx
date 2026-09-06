import React from 'react';
import { MapPin, Mail, Phone, Linkedin, GraduationCap, Compass, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { BrandEmblem } from './BrandEmblem';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ className = '' }) => {
  return (
    <div
      id="professional-profile-card"
      className={`p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-blue-900/40 glass-card shadow-xl text-left text-slate-800 dark:text-slate-100 transition-colors ${className}`}
    >
      {/* Top Banner / Avatar */}
      <div className="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-blue-900/30">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-blue-50 dark:bg-black/40 text-slate-900 dark:text-white flex items-center justify-center border border-slate-200 dark:border-blue-700/50 shadow-md">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_20%]"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <BrandEmblem size="lg" />
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-sky-400 border-2 border-white dark:border-[#030712]" title="Active scholar" />
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-600 dark:text-sky-400 font-bold">
              PROFESSIONAL DOSSIER
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-blue-600 dark:text-sky-400 font-mono">
              {personalInfo.field}
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-1 rounded-sm bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 border border-blue-200 dark:border-blue-800/40 font-bold">
          ETHIOPIA
        </span>
      </div>

      {/* University & Degree */}
      <div className="py-4 border-b border-slate-200 dark:border-blue-900/30 space-y-1.5 text-xs">
        <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-semibold">
          <GraduationCap className="w-4 h-4 text-blue-600 dark:text-sky-400" />
          <span>{personalInfo.university}</span>
        </div>
        <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 font-mono">
          <Compass className="w-4 h-4 text-blue-600 dark:text-sky-400" />
          <span>Expected Graduation: {personalInfo.expectedGraduation}</span>
        </div>
      </div>

      {/* Location & Contact Hub Link */}
      <div className="py-4 space-y-3 text-xs">
        <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
          <MapPin className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
          <span>{personalInfo.location}</span>
        </div>

        <a
          href="#contact"
          className="flex items-center justify-between p-3 rounded-xl bg-white/70 dark:bg-black/30 border border-slate-200 dark:border-blue-500/20 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-sky-300 transition-all"
        >
          <span>Connect via Contact Hub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
        </a>
      </div>

      {/* Status Bar */}
      <div className="pt-4 border-t border-slate-200 dark:border-blue-900/30 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
        <span>STATUS: SENIOR B.SC. CANDIDATE</span>
        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
      </div>
    </div>
  );
};
