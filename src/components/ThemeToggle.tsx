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
        title={`Theme: ${resolvedTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}. Click to toggle.`}
        className="group relative flex items-center justify-between w-14 h-7 p-1 rounded-full bg-[#EEF3F2] dark:bg-[#111A1E] border border-[#D9E2E1] dark:border-[#26363B] shadow-inner cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
      >
        {/* Sun Icon on the left */}
        <Sun className="w-3.5 h-3.5 text-[#B7791F] transition-opacity duration-200 ml-0.5 opacity-90 group-hover:scale-110" />

        {/* Moon Icon on the right */}
        <Moon className="w-3.5 h-3.5 text-[#155E75] dark:text-[#55B7C8] transition-opacity duration-200 mr-0.5 opacity-90 group-hover:scale-110" />

        {/* Sliding Indicator Knob */}
        <span
          className={`absolute top-0.5 w-6 h-6 rounded-full bg-white dark:bg-[#0B1114] border border-[#D9E2E1] dark:border-[#26363B] shadow-md flex items-center justify-center transition-all duration-300 ease-out ${
            resolvedTheme === 'dark'
              ? 'left-[30px] text-[#55B7C8] shadow-[0_0_10px_rgba(85,183,200,0.22)]'
              : 'left-0.5 text-[#155E75]'
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
        <span className="ml-2 text-xs font-mono uppercase tracking-wider text-[#155E75] dark:text-[#55B7C8]">
          {resolvedTheme}
        </span>
      )}
    </div>
  );
};
