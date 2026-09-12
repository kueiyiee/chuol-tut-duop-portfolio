import React, { useState, useEffect } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ShieldCheck,
  Send,
  Globe
} from 'lucide-react';
import { personalInfo, academicReference } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copiedMode, setCopiedMode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'p1' | 'p2'>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const copyToClipboard = async (text: string, label: string): Promise<boolean> => {
    let success = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch {
        success = false;
      }
    }
    if (!success) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        success = document.execCommand('copy');
        textArea.remove();
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopiedMode(label);
      showToast(`✓ ${label} copied to clipboard`);
      setTimeout(() => setCopiedMode(null), 2500);
    } else {
      showToast('Copy failed. Please manually select and copy text.');
    }
    return success;
  };

  const plainTextCV = `CHUOL TUT DUOP - CURRICULUM VITAE
Natural Resources and Management
Kebri Dahar University, Ethiopia

📍 Kebri Dahar, Somali Region, Ethiopia
📞 +251 917491593
📧 nyuonjamestutduop@gmail.com
🔗 LinkedIn: linkedin.com/in/chuol-tut-duop

==================================================
PROFESSIONAL SUMMARY
==================================================
Detail-oriented third-year Natural Resources and Management student seeking an internship to apply academic knowledge, gain practical field experience, and support natural resource conservation and sustainable management. Skilled in environmental management, teamwork, communication, problem-solving, and basic data organization.

==================================================
EDUCATION
==================================================
Bachelor of Science in Natural Resources and Management
Kebri Dahar University, Ethiopia
Expected Graduation: July 2027

Relevant Coursework: Natural Resource Management, Environmental Conservation, Biodiversity Conservation, Watershed Management, Soil and Water Conservation, Climate Change, Forest Resource Management, Wildlife Management, Environmental Impact Assessment, and Sustainable Development.

Secondary School Leaving Certificate Examination, 2019–2021
Gambella Secondary and Preparatory School, Gambella Region, Ethiopia

Primary School Leaving Certificate Examination, 2011–2018
RRS Junior Primary School, Pinyudo, Gambella, Ethiopia

==================================================
TECHNICAL & PROFESSIONAL SKILLS
==================================================
- Natural resource assessment and management
- Environmental and biodiversity conservation
- Soil and water conservation
- Sustainable resource utilization
- Climate change and environmental management
- Environmental impact assessment fundamentals
- Teamwork, communication, and problem-solving

==================================================
PROJECTS & ACADEMIC EXPERIENCE
==================================================
1. Environmental and Natural Resource Management Studies — Kebri Dahar University
- Studied environmental and natural resource management challenges and their effects on communities and ecosystems.
- Participated in academic activities related to environmental assessment, conservation, and sustainable resource management.

2. Solid Waste Management Assessment — Academic Project
- Investigated sources and impacts of solid waste in an institutional environment.
- Identified waste management challenges and proposed practical solutions for waste reduction, proper disposal, and environmental improvement.

3. Vegetation and Environmental Assessment — Academic Fieldwork
- Participated in vegetation sampling and environmental data collection.
- Applied basic field techniques to assess vegetation and natural resources.

==================================================
CAREER OBJECTIVE
==================================================
To obtain an internship in Natural Resources and Management where I can gain practical field experience, strengthen my professional skills, and contribute to environmental conservation, sustainable resource management, and community development.

==================================================
REFERENCE
==================================================
Dagnachew Bezaredie
Department Head, Natural Resources and Management
Kebri Dahar University, Ethiopia
📞 +251 937 612 345
Telegram: @Dagnachew Bezaredie`;

  return (
    <div
      id="cv-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 dark:bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div 
          role="status"
          aria-live="polite"
          className="fixed top-5 left-1/2 -translate-x-1/2 z-60 px-4 py-2.5 rounded-full bg-blue-900/95 text-white text-xs font-semibold shadow-2xl backdrop-blur-md flex items-center space-x-2 border border-blue-500/50 animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <Check className="w-3.5 h-3.5 text-sky-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main CV Modal Window with Frosted Glassmorphic Shell */}
      <div
        id="cv-modal-window"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white/95 dark:bg-[#060b18]/95 border border-slate-200 dark:border-blue-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modern Top Header / Glass Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-slate-50/90 dark:bg-[#030712]/90 border-b border-slate-200 dark:border-blue-900/40 backdrop-blur-md">
          {/* Left: Scholar Identity & Official Seal */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-600 dark:text-sky-300 shadow-xs">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                Academic Curriculum Vitae
              </h2>
              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-3 h-3 text-sky-400" />
                <span>Verified Scholar Dossier · Kebri Dahar University</span>
              </div>
            </div>
          </div>

          {/* Right: Clean, Modern Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Page View Tabs */}
            <div className="flex items-center bg-black/5 dark:bg-black/40 p-1 rounded-lg border border-slate-200 dark:border-blue-900/40 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Full CV
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('p1')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                  activeTab === 'p1'
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Page 1
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('p2')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                  activeTab === 'p2'
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Page 2
              </button>
            </div>

            {/* Direct Online CV Link Indicator (Validated as only online CV) */}
            <div
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 dark:bg-blue-950/50 border border-blue-500/30 text-blue-600 dark:text-sky-300 text-xs font-semibold backdrop-blur-md select-none"
              title="Official Verified Online CV"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Official Online CV</span>
            </div>

            {/* Single Fast Copy CV Text Button */}
            <button
              type="button"
              id="cv-modal-copy-btn"
              onClick={() => copyToClipboard(plainTextCV, 'CV Text')}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-blue-950/40 border border-slate-200 dark:border-blue-500/30 hover:bg-slate-50 dark:hover:bg-blue-900/40 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all cursor-pointer shadow-xs"
              title="Copy clean plain text CV to clipboard"
            >
              {copiedMode === 'CV Text' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-sky-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  <span className="hidden sm:inline">Copy CV Text</span>
                  <span className="sm:hidden">Copy</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              id="cv-modal-close-btn"
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-8 text-left bg-slate-50/50 dark:bg-[#060b18] text-slate-800 dark:text-slate-100 text-sm leading-relaxed font-sans">
          
          {/* ================= PAGE 1 ================= */}
          {(activeTab === 'all' || activeTab === 'p1') && (
            <div className="space-y-6">
              {/* Header Info */}
              <div className="border-b border-slate-200 dark:border-blue-900/40 pb-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    {/* Passport-Sized Portrait on Academic CV */}
                    <div className="w-16 sm:w-20 aspect-[3.5/4.5] rounded-lg overflow-hidden border border-slate-300 dark:border-blue-500/40 shadow-xs bg-slate-100 dark:bg-[#070d1e] shrink-0">
                      <img
                        src={personalInfo.profileImage || "https://i.postimg.cc/m26zS2fL/5823561112182526026.jpg"}
                        alt="Chuol Tut Duop - Passport Portrait"
                        className="w-full h-full object-cover object-[center_20%]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-comic">
                        CHUOL TUT DUOP
                      </h1>
                      <p className="text-base text-blue-600 dark:text-sky-400 font-medium">
                        Curriculum Vitae
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        Natural Resources and Management · Kebri Dahar University, Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                      <span>Kebri Dahar, Somali Region, Ethiopia</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                      <a href="tel:+251917491593" className="hover:underline text-slate-900 dark:text-white font-semibold">
                        +251 917491593
                      </a>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                      <a href="mailto:nyuonjamestutduop@gmail.com" className="hover:underline text-slate-900 dark:text-white">
                        nyuonjamestutduop@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0" />
                      <a 
                        href="https://www.linkedin.com/in/chuol-tut-duop" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline text-blue-600 dark:text-sky-300"
                      >
                        linkedin.com/in/chuol-tut-duop
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <section className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 border-b border-slate-200 dark:border-blue-900/40 pb-1 font-bold">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                  {personalInfo.professionalSummary}
                </p>
              </section>

              {/* Education */}
              <section className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 border-b border-slate-200 dark:border-blue-900/40 pb-1 font-bold">
                  Education
                </h2>
                <div className="space-y-4">
                  {/* Kebri Dahar University */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      <span>Bachelor of Science in Natural Resources and Management</span>
                      <span className="text-xs font-mono font-normal text-blue-600 dark:text-sky-400">Expected Graduation: July 2027</span>
                    </div>
                    <div className="text-xs text-blue-600 dark:text-sky-300 font-medium">
                      Kebri Dahar University, Ethiopia
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 pt-1 font-light leading-relaxed">
                      <strong className="text-slate-900 dark:text-white font-medium">Relevant Coursework:</strong> Natural Resource Management, Environmental Conservation, Biodiversity Conservation, Watershed Management, Soil and Water Conservation, Climate Change, Forest Resource Management, Wildlife Management, Environmental Impact Assessment, and Sustainable Development.
                    </div>
                  </div>

                  {/* Secondary School */}
                  <div className="space-y-0.5 pt-1">
                    <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      <span>Secondary School Leaving Certificate</span>
                      <span className="text-xs font-mono font-normal text-blue-600 dark:text-sky-400">2019 – 2021</span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Gambella Secondary and Preparatory School, Gambella Region, Ethiopia
                    </div>
                  </div>

                  {/* Primary School */}
                  <div className="space-y-0.5 pt-1">
                    <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      <span>Primary School Leaving Certificate</span>
                      <span className="text-xs font-mono font-normal text-blue-600 dark:text-sky-400">2011 – 2018</span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      RRS Junior Primary School, Pinyudo, Gambella, Ethiopia
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical & Professional Skills */}
              <section className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 border-b border-slate-200 dark:border-blue-900/40 pb-1 font-bold">
                  Technical &amp; Professional Skills
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 pt-1">
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Natural resource assessment and management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Environmental and biodiversity conservation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Soil and water conservation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Sustainable resource utilization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Climate change and environmental management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Environmental impact assessment fundamentals</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:col-span-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>Teamwork, communication, and problem-solving</span>
                  </li>
                </ul>
              </section>
            </div>
          )}

          {/* Separator / Page boundary visual in continuous mode */}
          {activeTab === 'all' && (
            <div className="my-8 flex items-center justify-center">
              <div className="w-full border-t border-dashed border-slate-300 dark:border-blue-900/50 relative">
                <span className="absolute left-1/2 -translate-x-1/2 -top-2.5 px-3 bg-white dark:bg-[#060b18] text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Page 2 Divider
                </span>
              </div>
            </div>
          )}

          {/* ================= PAGE 2 ================= */}
          {(activeTab === 'all' || activeTab === 'p2') && (
            <div className="space-y-6">
              {/* Projects & Academic Experience */}
              <section className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 border-b border-slate-200 dark:border-blue-900/40 pb-1 font-bold">
                  Projects &amp; Academic Experience
                </h2>
                <div className="space-y-4">
                  {/* Project 1 */}
                  <div className="space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      Environmental and Natural Resource Management Studies — <span className="font-normal text-blue-600 dark:text-sky-400">Kebri Dahar University</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1 font-light pl-1">
                      <li>Studied environmental and natural resource management challenges and their effects on communities and ecosystems.</li>
                      <li>Participated in academic activities related to environmental assessment, conservation, and sustainable resource management.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      Solid Waste Management Assessment — <span className="font-normal text-blue-600 dark:text-sky-400">Academic Project</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1 font-light pl-1">
                      <li>Investigated sources and impacts of solid waste in an institutional environment.</li>
                      <li>Identified waste management challenges and proposed practical solutions for waste reduction, proper disposal, and environmental improvement.</li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div className="space-y-1.5">
                    <div className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      Vegetation and Environmental Assessment — <span className="font-normal text-blue-600 dark:text-sky-400">Academic Fieldwork</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1 font-light pl-1">
                      <li>Participated in vegetation sampling and environmental data collection.</li>
                      <li>Applied basic field techniques to assess vegetation and natural resources.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Career Objective */}
              <section className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 border-b border-slate-200 dark:border-blue-900/40 pb-1 font-bold">
                  Career Objective
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                  {personalInfo.careerObjective}
                </p>
              </section>

              {/* Reference */}
              <section className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400 border-b border-slate-200 dark:border-blue-900/40 pb-1 font-bold">
                  Reference
                </h2>
                <div className="p-4 rounded-xl bg-white dark:bg-[#030712]/60 border border-slate-200 dark:border-blue-900/40 space-y-1 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white text-sm">
                    {academicReference.name}
                  </div>
                  <div className="text-blue-600 dark:text-sky-300 font-medium">
                    {academicReference.title}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400">
                    {academicReference.institution}
                  </div>
                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                      <a href={`tel:${academicReference.phone.replace(/\s+/g, '')}`} className="hover:underline text-slate-900 dark:text-white">
                        {academicReference.phone}
                      </a>
                    </div>
                    {academicReference.telegram && (
                      <div className="flex items-center space-x-1.5">
                        <Send className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                        <span>Telegram: {academicReference.telegram}</span>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Official Verification Footer Note */}
          <div className="pt-4 border-t border-slate-200 dark:border-blue-900/40 text-[10px] text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row justify-between font-mono gap-2">
            <span>Verified Curriculum Vitae · Kebri Dahar University</span>
            <span>Document Ref: KDU-NRM-2027 · Ethiopia</span>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-6 border-t border-slate-200 dark:border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-500 dark:text-slate-400 text-center sm:text-left font-light">
              Official Academic Dossier for fellowships, research partnerships, and conservation opportunities.
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => copyToClipboard(plainTextCV, 'Plain Text CV')}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white dark:bg-blue-950/40 border border-slate-200 dark:border-blue-500/30 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors cursor-pointer hover:bg-slate-100 dark:hover:bg-blue-900/40 shadow-xs"
              >
                {copiedMode === 'Plain Text CV' ? <Check className="w-3.5 h-3.5 text-sky-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedMode === 'Plain Text CV' ? 'Copied' : 'Copy Plain Text'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
