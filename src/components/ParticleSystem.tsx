import React from 'react';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ParticleBackground } from './ParticleBackground';

export const ParticleSystem: React.FC = () => (
  <ParticlesProvider init={async (engine) => { await loadSlim(engine); }}>
    <ParticleBackground />
  </ParticlesProvider>
);