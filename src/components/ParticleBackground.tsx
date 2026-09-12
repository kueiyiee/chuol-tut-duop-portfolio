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
      fpsLimit: 45,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: false,
          },
          resize: {
            enable: true,
          },
        },
      },
      particles: {
        color: {
          value: isDark
            ? ['#6EA8FE', '#55B7C8', '#5EB890', '#1D4ED8', '#A9B9BC']
            : ['#155E75', '#1D4ED8', '#28745A', '#55B7C8'],
        },
        links: {
          color: isDark ? '#6EA8FE' : '#155E75',
          distance: 140,
          enable: false,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.42,
          straight: false,
          decay: 0.01,
        },
        number: {
          density: {
            enable: true,
            width: 900,
            height: 900,
          },
          value: 18,
        },
        opacity: {
          value: { min: 0.18, max: 0.48 },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1.4, max: 3.2 },
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
