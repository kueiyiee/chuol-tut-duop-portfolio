import React, { useMemo } from 'react';
import Particles from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { useTheme } from '../context/ThemeContext';

export const ParticleBackground: React.FC = () => {
  const { resolvedTheme } = useTheme();

  const options: ISourceOptions = useMemo(() => {
    const isDark = resolvedTheme === 'dark';

    return {
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 170,
            links: {
              opacity: isDark ? 0.8 : 0.6,
              color: isDark ? '#38bdf8' : '#2563eb',
            },
          },
        },
      },
      particles: {
        color: {
          value: isDark
            ? ['#3b82f6', '#38bdf8', '#60a5fa', '#0ea5e9', '#818cf8']
            : ['#1d4ed8', '#2563eb', '#0284c7', '#3b82f6'],
        },
        links: {
          color: isDark ? '#3b82f6' : '#2563eb',
          distance: 140,
          enable: true,
          opacity: isDark ? 0.35 : 0.3,
          width: 1.3,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 1.0,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 900,
            height: 900,
          },
          value: 65, // Generous and visible particle population
        },
        opacity: {
          value: { min: 0.5, max: 0.9 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 2.5, max: 5.5 },
          animation: {
            enable: true,
            speed: 1.2,
            sync: false,
          },
        },
      },
      detectRetina: true,
    };
  }, [resolvedTheme]);

  return (
    <div
      id="tsparticles-wrapper"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Particles
        id="tsparticles"
        options={options}
        className="w-full h-full"
      />
    </div>
  );
};
