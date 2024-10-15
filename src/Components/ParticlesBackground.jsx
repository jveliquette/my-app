import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
