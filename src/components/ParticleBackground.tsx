import React, { useEffect, useMemo, useState } from 'react';
import Particles from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { useTheme } from '../context/ThemeContext';

export const ParticleBackground: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const isDark = resolvedTheme === 'dark';
    const staticMotion = reducedMotion;

    return {
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: staticMotion ? 20 : 32,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: {
            enable: !staticMotion,
            mode: 'repulse',
          },
          resize: {
            enable: true,
          },
        },
      },
      particles: {
        color: {
          value: isDark
            ? ['#F5F3EE', '#B8B2A8', '#A69E93', '#8B735B', '#7F9A8A']
            : ['#EAE6DE', '#D4CEC4', '#B8AFA3', '#8B735B', '#7F9A8A'],
        },
        links: {
          color: isDark ? '#7F9A8A' : '#8B735B',
          distance: 105,
          enable: !staticMotion,
          opacity: 0.07,
          width: 0.45,
        },
        move: {
          direction: 'none',
          enable: !staticMotion,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.08,
          straight: false,
          decay: 0.02,
        },
        number: {
          density: {
            enable: true,
            width: 1100,
            height: 900,
          },
          value: 58,
        },
        opacity: {
          value: { min: 0.05, max: 0.16 },
          animation: {
            enable: !staticMotion,
            speed: 0.18,
            sync: false,
          },
        },
        shape: {
          type: ['circle', 'square', 'diamond'],
        },
        size: {
          value: { min: 0.8, max: 1.8 },
        },
        rotate: {
          animation: {
            enable: !staticMotion,
            speed: 1.2,
            sync: false,
          },
          direction: 'random',
          value: 0,
        },
      },
      responsive: [
        {
          maxWidth: 640,
          options: {
            particles: {
              number: {
                value: 22,
              },
              links: {
                enable: false,
              },
              move: {
                speed: 0.04,
              },
            },
          },
        },
      ],
      detectRetina: true,
    };
  }, [reducedMotion, resolvedTheme]);

  return (
    <div
      id="tsparticles-wrapper"
      className="environmental-particle-field fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="environmental-geometry environmental-geometry--one" />
      <div className="environmental-geometry environmental-geometry--two" />
      <div className="environmental-geometry environmental-geometry--three" />
      <div className="environmental-geometry environmental-geometry--cross" />
      <Particles
        id="tsparticles"
        options={options}
        className="w-full h-full"
      />
    </div>
  );
};
