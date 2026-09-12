import React, { useState, useEffect, useRef } from 'react';
import { FileText, FolderOpen, GraduationCap, Mail, MapPin, MoreVertical, Target, UserRound } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      const sections = ['home', 'about', 'focus-areas', 'projects', 'fieldwork', 'education', 'skills', 'opportunities', 'contact'];
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

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', icon: UserRound },
    { label: 'Expertise', href: '#focus-areas', icon: Target },
    { label: 'Projects', href: '#projects', icon: FolderOpen },
    { label: 'Fieldwork', href: '#fieldwork', icon: MapPin },
    { label: 'Education', href: '#education', icon: GraduationCap },
    { label: 'Skills', href: '#skills', icon: Target },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed left-1/2 top-3 z-40 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-2xl border transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 py-2.5 shadow-[0_12px_36px_rgba(32,33,31,0.08)] dark:bg-[#20211F]/90'
          : 'bg-white/70 py-3 shadow-[0_10px_30px_rgba(32,33,31,0.05)] dark:bg-[#111311]/75'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            id="nav-logo-link"
            className="group flex min-w-0 max-w-[calc(100%-118px)] items-center gap-2 rounded-xl px-1.5 py-1 text-left transition-colors hover:bg-[#EAE6DE]/60 focus-visible:outline-2 focus-visible:outline-[#3F6655] sm:gap-3 sm:px-2"
            aria-label="Chuol Tut Duop - Home"
          >
            <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-blue-600 bg-blue-50 shadow-xs transition-colors group-hover:border-sky-400 dark:border-blue-400 dark:bg-blue-950/60 sm:h-8 sm:w-8">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt="Chuol Tut Duop avatar"
                  className="h-full w-full object-cover object-[center_20%]"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-blue-600 dark:text-sky-300">
                  CTD
                </div>
              )}
            </div>

            <div className="min-w-0 leading-none">
              <span className="block truncate text-[0.72rem] font-bold tracking-[-0.04em] text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-sky-400 sm:text-sm">
                CHUOL TUT DUOP
              </span>
              <span className="mt-1 hidden text-[8px] font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-sky-400 sm:block sm:text-[9px] sm:tracking-[0.22em]">
                Natural Resources &amp; Management
              </span>
            </div>
          </a>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
            <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#3F6655] dark:text-[#7F9A8A]'
                      : 'text-[#625C54] hover:text-[#20211F] dark:text-[#C9C2B8] dark:hover:text-[#F7F6F2]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <ThemeToggle />

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-download-cv-btn"
              className="inline-flex items-center justify-center rounded-full border border-[#20211F] bg-[#20211F] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(32,33,31,0.12)] transition-all hover:bg-[#3A3934] focus-visible:outline-2 focus-visible:outline-[#3F6655] sm:px-4"
              aria-label="View CV"
            >
              <FileText className="h-3.5 w-3.5 sm:mr-1.5" />
              <span className="hidden sm:inline">CV</span>
            </a>

            <div ref={menuRef} className="relative lg:hidden">
              <button
                id="nav-menu-toggle-btn"
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-haspopup="menu"
                onClick={() => setMenuOpen((open) => !open)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD8CF] bg-white/80 text-[#20211F] shadow-[0_8px_20px_rgba(32,33,31,0.06)] backdrop-blur-md transition-all duration-200 hover:bg-[#EAE6DE] focus-visible:outline-2 focus-visible:outline-[#3F6655] dark:border-white/10 dark:bg-[#20211F]/80 dark:text-[#F7F6F2] dark:hover:bg-[#2A2520] ${
                  menuOpen ? 'border-[#7F9A8A] bg-[#EAE6DE] text-[#3F6655] dark:border-[#7F9A8A] dark:bg-[#3F6655]/20 dark:text-[#F7F6F2]' : ''
                }`}
              >
                <MoreVertical className="h-4 w-4" />
              </button>

              {menuOpen && (
                <div
                  role="menu"
                  aria-label="Main navigation menu"
                  className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(260px,calc(100vw-24px))] overflow-hidden rounded-[18px] border border-slate-200 bg-white/90 p-2.5 shadow-[0_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl dark:border-blue-500/20 dark:bg-[#060d1a]/90"
                >
                  <div className="mb-1.5 px-2.5 pb-2 pt-1 text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    Navigation
                  </div>

                  <div className="space-y-1.5">
                    {navLinks.map((link) => {
                      const sectionId = link.href.replace('#', '');
                      const Icon = link.icon;
                      const isActive = activeSection === sectionId;

                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          role="menuitem"
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-all duration-200 ${
                            isActive
                              ? 'bg-blue-600 text-white shadow-[0_12px_24px_rgba(37,99,235,0.28)]'
                              : 'text-slate-700 hover:bg-slate-100 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-300'
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          <span>{link.label}</span>
                        </a>
                      );
                    })}
                  </div>

                  <div className="my-2 h-px bg-slate-200 dark:bg-blue-500/20" />

                  <a
                    href={personalInfo.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-500/20 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-sky-400/25 dark:hover:bg-sky-500/10 dark:hover:text-sky-300"
                    aria-label="View CV"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>View CV</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
