import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-white/75 dark:bg-[#030712]/90 backdrop-blur-2xl text-slate-800 dark:text-slate-100 pt-16 pb-12 border-t border-slate-200/80 dark:border-blue-900/30 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-blue-900/30 text-left">
          <div className="md:col-span-5">
            <div className="min-w-0 space-y-2">
              <div className="flex items-center">
                <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white font-comic">
                  CHUOL TUT DUOP
                </span>
              </div>
              <p className="text-[11px] text-blue-600 dark:text-sky-400 font-mono uppercase tracking-[0.18em] font-semibold">
                Natural Resources &amp; Management
              </p>

              <div className="text-[10px] text-slate-600 dark:text-slate-400 font-mono leading-relaxed">
                <div>University of Kebri Dahar · Somali Region, Ethiopia</div>
                <div>Expected Graduation · July 2027</div>
              </div>

              <div className="text-[10px] text-slate-600 dark:text-slate-400">B.Sc. in Natural Resources and Management Candidate · Expected July 2027</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono gap-4">
          <div>
            © {currentYear} Chuol Tut Duop. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span>Kebri Dahar, Somali Region, Ethiopia</span>
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
    </footer>
  );
};
