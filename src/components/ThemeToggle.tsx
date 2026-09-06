import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Quick Toggle Button */}
      <button
        id="theme-toggle-btn"
        type="button"
        onClick={toggleTheme}
        aria-label={`Current theme is ${resolvedTheme}. Click to switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode.`}
        title={`Theme: ${resolvedTheme === 'dark' ? 'Dark Mode (Cosmic Blue)' : 'Light Mode (Ice Blue)'}. Click to toggle.`}
        className="group relative flex items-center justify-between w-14 h-7 p-1 rounded-full bg-slate-200 dark:bg-[#070d1e] border border-blue-300/40 dark:border-blue-500/40 shadow-inner cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        {/* Sun Icon on the left */}
        <Sun className="w-3.5 h-3.5 text-amber-500 transition-opacity duration-200 ml-0.5 opacity-90 group-hover:scale-110" />

        {/* Moon Icon on the right */}
        <Moon className="w-3.5 h-3.5 text-sky-400 transition-opacity duration-200 mr-0.5 opacity-90 group-hover:scale-110" />

        {/* Sliding Indicator Knob */}
        <span
          className={`absolute top-0.5 w-6 h-6 rounded-full bg-white dark:bg-[#030712] border border-black/10 dark:border-blue-400/60 shadow-md flex items-center justify-center transition-all duration-300 ease-out ${
            resolvedTheme === 'dark'
              ? 'left-[30px] text-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]'
              : 'left-0.5 text-amber-500'
          }`}
        >
          {resolvedTheme === 'dark' ? (
            <Moon className="w-3.5 h-3.5" />
          ) : (
            <Sun className="w-3.5 h-3.5" />
          )}
        </span>
      </button>

      {showLabel && (
        <span className="ml-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-sky-400">
          {resolvedTheme}
        </span>
      )}
    </div>
  );
};
