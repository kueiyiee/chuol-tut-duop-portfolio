import React from 'react';

interface BrandEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandEmblem: React.FC<BrandEmblemProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`relative inline-flex items-center justify-center flex-shrink-0 ${sizeClasses[size]} ${className}`} aria-label="Chuol Tut Duop Brand Emblem">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
      >
        {/* Outer Tech Shield / Geospatial Emblem Shape */}
        <path
          d="M20 3C10 3 5 10 5 20c0 9 6.5 15 15 17 8.5-2 15-8 15-17 0-10-5-17-15-17z"
          className="fill-blue-950/60 stroke-blue-500"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        {/* Geospatial Coordinate Contour Ring */}
        <path
          d="M20 7c-6.5 0-10.5 5.5-10.5 13 0 6.5 4.5 11 10.5 12.5 6-1.5 10.5-6 10.5-12.5 0-7.5-4-13-10.5-13z"
          className="stroke-sky-400/60"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        {/* Central Axis / Telemetry Meridian */}
        <path
          d="M20 8v24"
          className="stroke-cyan-400"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Geospatial Lateral Branches */}
        <path
          d="M13 17c3.5 1 7 1.5 7 6"
          className="stroke-blue-400"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M27 15c-3.5 1.2-7 2-7 7"
          className="stroke-blue-400"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Coordinate Center Point */}
        <circle
          cx="20"
          cy="20"
          r="1.8"
          className="fill-sky-300"
        />
      </svg>
    </div>
  );
};
