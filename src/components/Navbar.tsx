import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Linkedin, Mail } from 'lucide-react';
import { BrandEmblem } from './BrandEmblem';
import { ThemeToggle } from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll compaction
      setIsScrolled(window.scrollY > 30);

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section detection
      const sections = ['home', 'about', 'focus-areas', 'education', 'projects', 'fieldwork', 'opportunities', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Focus & Skills', href: '#focus-areas' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Fieldwork', href: '#fieldwork' },
    { label: 'Opportunities', href: '#opportunities' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/85 dark:bg-[#030712]/85 backdrop-blur-2xl border-b border-blue-100 dark:border-blue-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.8)]'
            : 'py-4 sm:py-5 bg-white/60 dark:bg-[#030712]/60 backdrop-blur-xl border-b border-blue-100/60 dark:border-blue-500/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Signature */}
            <a
              href="#home"
              id="nav-logo-link"
              className="group flex items-center space-x-3 text-left focus-visible:outline-2 focus-visible:outline-blue-500 rounded-xl py-1 px-2 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors"
              aria-label="Chuol Tut Duop - Home"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/60 shadow-xs group-hover:border-sky-400 transition-colors shrink-0">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt="Chuol Tut Duop avatar"
                    className="w-full h-full object-cover object-[center_20%]"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-blue-600 dark:text-sky-300">
                    CTD
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors font-comic">
                  CHUOL TUT DUOP
                </span>
                <span className="text-[10px] font-medium tracking-[0.25em] text-blue-600 dark:text-sky-400 uppercase font-mono">
                  Natural Resources & Management
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 p-1 rounded-full bg-slate-100/70 dark:bg-[#070d1e]/80 backdrop-blur-md border border-blue-200/50 dark:border-blue-500/20 shadow-xs" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    id={`nav-link-${sectionId}`}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-blue-600 dark:bg-blue-600 backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.45)] border border-blue-400/40'
                        : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-white/60 dark:hover:bg-blue-950/50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Side Actions: Theme Toggle, LinkedIn, Academic CV Button, Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-2.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                id="nav-linkedin-link"
                className="hidden sm:inline-flex p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-300 bg-white/70 hover:bg-white dark:bg-[#070d1e]/80 dark:hover:bg-blue-950/60 border border-slate-200 dark:border-blue-500/30 transition-colors rounded-full shadow-xs backdrop-blur-md"
                title="LinkedIn: chuol-tut-duop"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <ThemeToggle />

              {/* CV Action Button */}
              <button
                id="nav-download-cv-btn"
                type="button"
                onClick={onOpenCV}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(37,99,235,0.55)] cursor-pointer border border-blue-400/30"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Online CV</span>
                <span className="sm:hidden">CV</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                id="nav-mobile-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="xl:hidden p-2 rounded-xl text-slate-800 dark:text-slate-100 bg-white/70 dark:bg-slate-900/80 border border-slate-200 dark:border-blue-500/30 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-50 xl:hidden bg-black/70 backdrop-blur-xs flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-menu"
            className="w-4/5 max-w-sm h-full bg-white dark:bg-[#030712] text-slate-900 dark:text-white border-l border-slate-200 dark:border-blue-500/20 p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-blue-900/40">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center text-[10px] font-bold text-blue-600 dark:text-sky-300 bg-blue-50 dark:bg-blue-950/60">
                    CTD
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">CHUOL TUT DUOP</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-2 text-[10px] font-mono text-blue-600 dark:text-sky-400 uppercase tracking-widest font-bold">
                Kebri Dahar University · Ethiopia
              </div>

              <nav className="mt-4 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-xs uppercase tracking-wider font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50/50 dark:hover:bg-blue-950/40 rounded-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-blue-900/40 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Academic Curriculum Vitae</span>
              </button>

              <div className="flex items-center justify-center space-x-4 pt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-300 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
