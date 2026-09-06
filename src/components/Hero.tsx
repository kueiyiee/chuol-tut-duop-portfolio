import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft,
  FileText, 
  Mail, 
  Linkedin, 
  MapPin, 
  Compass, 
  Sparkles, 
  User, 
  TreePine, 
  Laptop, 
  Activity, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Scan
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import watershedGisImg from '../assets/images/watershed_gis_system_1788476787030.jpg';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  // Default to 'profile' so Chuol Tut Duop's photograph is the direct hero visual
  const [visualMode, setVisualMode] = useState<'profile' | 'system' | 'landscape'>('profile');
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(false);
  const [crosshairActive, setCrosshairActive] = useState<boolean>(true);

  // Allow closing the inspector via Escape key and preserve scroll integrity
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isInspectorOpen) {
        setIsInspectorOpen(false);
      }
    };
    if (isInspectorOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isInspectorOpen]);

  const heroImageUrl = personalInfo.profileImage || "https://i.postimg.cc/m26zS2fL/5823561112182526026.jpg";

  return (
    <section
      id="home"
      aria-label="Introduction & Overview"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      {/* Ambient Atmospheric Glow - AletCloud Cyber Blue */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-blue-600/15 dark:bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 -left-24 w-[350px] h-[350px] bg-cyan-600/10 dark:bg-indigo-950/30 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* Topographic Contour Lines SVG Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C 300 100, 600 350, 1000 200 C 1200 120, 1400 240, 1600 180"
            stroke="#2563EB"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            strokeOpacity="0.4"
          />
          <path
            d="M-100 320 C 250 240, 700 480, 1100 300 C 1300 220, 1500 360, 1600 300"
            stroke="#38BDF8"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M-100 460 C 350 400, 800 620, 1200 440 C 1380 360, 1520 480, 1600 420"
            stroke="#60A5FA"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <path
            d="M-100 600 C 400 520, 850 780, 1280 580 C 1420 520, 1540 600, 1600 560"
            stroke="#0EA5E9"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            strokeOpacity="0.35"
          />
          <circle cx="1020" cy="220" r="4" fill="#2563EB" fillOpacity="0.7" />
          <circle cx="620" cy="380" r="3" fill="#38BDF8" fillOpacity="0.7" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Professional Identity Pill with Avatar Seal */}
            <div className="flex items-center space-x-2.5 p-1 pr-4 rounded-full bg-white/70 dark:bg-[#070d1e]/80 border border-blue-200 dark:border-blue-500/30 w-fit backdrop-blur-xl shadow-xs">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-blue-500/80 shadow-xs shrink-0">
                <img
                  src={heroImageUrl}
                  alt="Chuol Tut Duop thumbnail"
                  className="w-full h-full object-cover object-[center_20%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-blue-700 dark:text-sky-300 font-semibold font-mono">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Senior Student · Kebri Dahar University · Class of 2027</span>
              </div>
            </div>

            {/* Main Name & Discipline */}
            <div className="space-y-2">
              <h1 className="text-[52px] sm:text-6xl lg:text-[72px] leading-[0.92] font-bold tracking-tight text-slate-900 dark:text-white font-comic">
                CHUOL TUT DUOP
              </h1>
              <p className="text-xl sm:text-2xl text-blue-600 dark:text-sky-400 leading-relaxed font-light italic">
                Emerging Natural Resources Professional & Environmental Steward
              </p>
            </div>

            {/* Core Mission Statement */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl border-l-2 border-blue-600 dark:border-blue-500 pl-4 py-1">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>

            {/* Institutional Academic Strip - Frosted Glassmorphism Panel */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/75 dark:bg-[#070d1e]/75 border border-blue-100 dark:border-blue-500/25 backdrop-blur-2xl shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 font-bold block mb-1">
                  Institution
                </span>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Kebri Dahar University</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Somali Region, Ethiopia</div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 font-bold block mb-1">
                  Department
                </span>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Natural Resources &amp; Mgmt</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">College of Dryland Agriculture</div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 font-bold block mb-1">
                  Academic Standing
                </span>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Senior B.Sc. Candidate</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Conferral: July 2027</div>
              </div>
            </div>

            {/* Clean, Non-Duplicative Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] inline-flex items-center space-x-2 group border border-blue-400/30"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                id="hero-cta-cv"
                onClick={onOpenCV}
                className="bg-white/80 dark:bg-[#070d1e]/80 border border-slate-300 dark:border-blue-500/30 px-6 py-3 rounded-full text-xs uppercase tracking-widest text-slate-900 dark:text-white font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/50 backdrop-blur-md transition-all inline-flex items-center space-x-2 cursor-pointer shadow-xs"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                <span>Academic CV</span>
              </button>

              <a
                href="#contact"
                id="hero-cta-contact"
                className="bg-white/60 dark:bg-[#070d1e]/60 border border-slate-300 dark:border-blue-500/25 px-5 py-3 rounded-full text-xs uppercase tracking-widest text-slate-800 dark:text-slate-200 font-semibold hover:text-blue-600 dark:hover:text-sky-300 hover:border-blue-500 backdrop-blur-md transition-all inline-flex items-center space-x-1.5"
              >
                <span>Contact Hub</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              {/* Verified Professional Link */}
              <div className="flex items-center space-x-2 sm:pl-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chuol Tut Duop on LinkedIn"
                  className="p-2.5 rounded-full bg-white/80 dark:bg-[#070d1e]/80 border border-slate-300 dark:border-blue-500/30 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-300 hover:border-blue-500 transition-colors shadow-xs backdrop-blur-md"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Modern High-Tech System Hero Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Modern Workstation Chassis Container with Glassmorphism */}
              <div className="relative rounded-2xl overflow-hidden border border-blue-200/60 dark:border-blue-500/30 bg-[#060b18]/90 text-white shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                
                {/* Workstation Console Titlebar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#030712] border-b border-blue-900/50 text-xs">
                  {/* Left: Window Dots & System ID */}
                  <div className="flex items-center space-x-2 font-mono">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-blue-500/80 inline-block" />
                    </div>
                    <span className="text-slate-700">|</span>
                    <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider hidden xs:inline">
                      SYS-ID: KDU-NRM · FIELD SCIENTIST
                    </span>
                  </div>

                  {/* Right: Modern Mode Switcher */}
                  <div className="flex items-center bg-black/60 p-0.5 rounded-md border border-blue-900/60 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setVisualMode('profile')}
                      className={`px-2.5 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
                        visualMode === 'profile'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      title="View Chuol Tut Duop Portrait"
                    >
                      <User className="w-3 h-3" />
                      <span>Portrait</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisualMode('system')}
                      className={`px-2.5 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
                        visualMode === 'system'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      title="View ArcGIS Hydrology Suite"
                    >
                      <Laptop className="w-3 h-3" />
                      <span>GIS Suite</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisualMode('landscape')}
                      className={`px-2.5 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer ${
                        visualMode === 'landscape'
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                      title="View Somali Biome Ecosystem"
                    >
                      <TreePine className="w-3 h-3" />
                      <span>Biome</span>
                    </button>
                  </div>
                </div>

                {/* Main Visual Frame with Modern Optical Telemetry */}
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#030712] group">
                  {visualMode === 'profile' ? (
                    <>
                      {/* Direct Hero Photo of Chuol Tut Duop */}
                      <img
                        src={heroImageUrl}
                        alt="Chuol Tut Duop - Natural Resources & Management Senior B.Sc. Candidate at Kebri Dahar University"
                        className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105 filter contrast-[1.02] brightness-[0.98]"
                        referrerPolicy="no-referrer"
                      />

                      {/* Optical Vignette & Lighting Filter */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/35 to-transparent opacity-90 pointer-events-none" />

                      {/* Optical Crosshair HUD Elements */}
                      {crosshairActive && (
                        <div className="absolute inset-0 pointer-events-none">
                          {/* Corner Reticles */}
                          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-sky-400/80" />
                          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-sky-400/80" />
                          <div className="absolute bottom-28 left-3 w-3 h-3 border-b-2 border-l-2 border-sky-400/80" />
                          <div className="absolute bottom-28 right-3 w-3 h-3 border-b-2 border-r-2 border-sky-400/80" />
                          
                          {/* Center Target Cross */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-30">
                            <div className="w-full h-px bg-sky-400 absolute top-1/2" />
                            <div className="h-full w-px bg-sky-400 absolute left-1/2" />
                          </div>
                        </div>
                      )}

                      {/* Top Overlay Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        {/* Verified Scholar Badge */}
                        <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-sm bg-black/80 border border-blue-500/60 backdrop-blur-md text-[10px] font-mono text-sky-300 shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                          <span className="font-semibold">VERIFIED SCHOLAR · KDU</span>
                        </div>

                        {/* Top-Right Tools: Toggle Reticle & High-Res Inspection */}
                        <div className="flex items-center space-x-1.5">
                          <button
                            type="button"
                            onClick={() => setCrosshairActive(!crosshairActive)}
                            className="p-1 rounded-sm bg-black/80 border border-blue-500/40 text-sky-300 hover:text-white hover:border-sky-400 backdrop-blur-md transition-colors cursor-pointer"
                            title="Toggle Optical Grid"
                          >
                            <Scan className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsInspectorOpen(true)}
                            className="flex items-center space-x-1 px-2 py-1 rounded-sm bg-black/80 border border-blue-500/40 text-sky-300 hover:text-white hover:border-sky-400 backdrop-blur-md transition-colors cursor-pointer text-[10px] font-mono"
                            title="Inspect Full Resolution"
                          >
                            <Maximize2 className="w-3 h-3" />
                            <span>Inspect</span>
                          </button>
                        </div>
                      </div>

                      {/* Floating Identity & System Telemetry Glass HUD */}
                      <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-lg bg-[#030712]/92 backdrop-blur-md border border-blue-800/60 text-white space-y-1.5 shadow-2xl">
                        <div className="flex items-center justify-between text-[10px] font-mono text-sky-400">
                          <span className="flex items-center space-x-1">
                            <ShieldCheck className="w-3 h-3 text-sky-400" />
                            <span className="font-bold">KEBRI DAHAR UNIVERSITY</span>
                          </span>
                          <span className="text-slate-400">06°44&apos; N · 44°16&apos; E</span>
                        </div>

                        <div className="pt-0.5">
                          <h3 className="text-base font-bold text-white tracking-tight flex items-center justify-between font-comic">
                            <span>CHUOL TUT DUOP</span>
                            <span className="text-[10px] font-mono font-normal text-sky-300 bg-blue-950/70 border border-blue-700/60 px-1.5 py-0.5 rounded-xs font-sans">
                              SENIOR CANDIDATE
                            </span>
                          </h3>
                          <div className="text-xs text-slate-300 font-light">
                            B.Sc. in Natural Resources and Management · Class of 2027
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1.5 border-t border-blue-900/60 font-mono">
                          <span className="text-sky-400">FOCUS: HYDROLOGY & CONSERVATION</span>
                          <span className="text-slate-300">BASE: ADDIS ABABA</span>
                        </div>
                      </div>
                    </>
                  ) : visualMode === 'system' ? (
                    <>
                      <img
                        src={watershedGisImg}
                        alt="GIS Environmental Hydrology Workstation interface screenshot"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />
                      
                      {/* System overlay tag */}
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-sm bg-black/80 border border-blue-500/50 text-[10px] font-mono text-sky-300">
                        ArcGIS Hydrology Suite v3.34
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#030712]/90 backdrop-blur-md border border-blue-800/60 text-white space-y-1">
                        <div className="text-[10px] font-mono text-sky-400 font-bold">
                          DEM FLOW ACCUMULATION & DRAINAGE
                        </div>
                        <div className="text-xs text-white">
                          Fafen & Wabi Shebelle Basin Catchment Model
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src="https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1000&q=85"
                        alt="East African environmental landscape showing savanna woodland, river basin, and natural resource terrain"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />

                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#030712]/90 backdrop-blur-md border border-blue-800/60 text-white space-y-1">
                        <div className="text-[10px] font-mono text-sky-400 font-bold">
                          REGIONAL ECOSYSTEM PERSPECTIVE
                        </div>
                        <div className="text-xs text-white">
                          Somali Region Semi-Arid Woodland & Riverine Zone
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Card Sub-strip with Status Indicators */}
                <div className="p-3 bg-[#030712] border-t border-blue-900/50 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-slate-400">
                      Dossier: <span className="text-white font-semibold">Active & Available</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsInspectorOpen(true)}
                    className="text-[11px] font-semibold text-sky-400 hover:text-white flex items-center space-x-1 cursor-pointer transition-colors"
                  >
                    <span>Inspect Scholar Dossier</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution System Inspection Modal */}
      {isInspectorOpen && (
        <div
          id="hero-image-inspector-modal"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsInspectorOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl bg-[#060b18] border border-blue-500/40 rounded-xl shadow-2xl overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Back and Close navigation */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 bg-[#030712] border-b border-blue-900/60 text-xs font-mono">
              <div className="flex items-center space-x-3">
                <button
                  id="dossier-header-back-btn"
                  type="button"
                  onClick={() => setIsInspectorOpen(false)}
                  className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-sm bg-blue-950/70 hover:bg-blue-900 border border-blue-600/50 text-sky-300 hover:text-white transition-colors cursor-pointer text-xs"
                  title="Back to portfolio (Esc)"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-sky-300 font-bold tracking-wider hidden sm:inline">
                    HIGH-RESOLUTION DOSSIER // CHUOL TUT DUOP
                  </span>
                  <span className="text-sky-300 font-bold tracking-wider sm:hidden">
                    DOSSIER // CHUOL TUT DUOP
                  </span>
                </div>
              </div>
              <button
                id="dossier-header-close-btn"
                type="button"
                onClick={() => setIsInspectorOpen(false)}
                className="inline-flex items-center space-x-1 p-1.5 rounded-sm text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer text-xs"
                aria-label="Close dossier modal"
                title="Close (Esc)"
              >
                <span className="text-[10px] uppercase font-mono hidden xs:inline">Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Image & Dossier */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Image Frame */}
              <div className="md:col-span-6 relative aspect-[3/3.8] rounded-lg overflow-hidden border border-blue-800/50 bg-[#030712]">
                <img
                  src={heroImageUrl}
                  alt="Chuol Tut Duop high-resolution professional portrait"
                  className="w-full h-full object-cover object-[center_18%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-sm bg-black/80 border border-blue-500/40 text-[10px] font-mono text-sky-300 flex justify-between">
                  <span>RES: HIGH-DEFINITION</span>
                  <span>OPTICAL PORTRAIT</span>
                </div>
              </div>

              {/* Dossier Information */}
              <div className="md:col-span-6 space-y-4 text-left">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    Official Academic Profile
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-0.5 font-comic">
                    Chuol Tut Duop
                  </h3>
                  <div className="text-sm text-blue-400 font-medium">
                    Senior B.Sc. Candidate · Class of 2027
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300 border-y border-blue-900/60 py-3">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-slate-400">Institution:</span>
                    <span className="text-white text-right font-semibold">Kebri Dahar University</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-slate-400">Department:</span>
                    <span className="text-white text-right">Natural Resources & Management</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-slate-400">Campus Location:</span>
                    <span className="text-white text-right">Somali Region, Ethiopia</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-slate-400">Current Base:</span>
                    <span className="text-white text-right">Addis Ababa, Ethiopia</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-slate-400">Field Specialties:</span>
                    <span className="text-sky-400 text-right font-medium">Hydrology, GIS, Conservation</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Fourth-year senior dedicated to empirical watershed modeling, in-situ soil transects, institutional resource recovery audits, and regional earth observation across East Africa.
                </p>

                {/* Actions & Return Navigation */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-blue-900/60">
                  <button
                    id="dossier-back-btn"
                    type="button"
                    onClick={() => setIsInspectorOpen(false)}
                    className="px-3.5 py-2 rounded-sm bg-blue-950/80 hover:bg-blue-900 border border-blue-500/50 text-white font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5 cursor-pointer shadow-xs"
                    title="Return to the main portfolio view"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-sky-400" />
                    <span>Back to Portfolio</span>
                  </button>

                  <button
                    id="dossier-view-cv-btn"
                    type="button"
                    onClick={() => {
                      setIsInspectorOpen(false);
                      onOpenCV();
                    }}
                    className="px-3.5 py-2 rounded-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5 cursor-pointer shadow-xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View CV</span>
                  </button>

                  <a
                    id="dossier-contact-btn"
                    href={`mailto:${personalInfo.email}`}
                    className="px-3 py-2 rounded-sm border border-blue-700/60 hover:bg-white/10 text-sky-300 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Message</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Footer Return Bar */}
            <div className="px-5 py-3 bg-[#030712] border-t border-blue-900/60 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="text-[11px] text-sky-300">Kebri Dahar University · Class of 2027</span>
              </div>
              <button
                id="dossier-footer-return-btn"
                type="button"
                onClick={() => setIsInspectorOpen(false)}
                className="inline-flex items-center space-x-1.5 text-sky-400 hover:text-white font-semibold transition-colors cursor-pointer text-xs"
                title="Return to main view"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Main View</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
