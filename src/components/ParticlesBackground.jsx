import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#f0f4ff" },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: ["#6366f1", "#f472b6", "#facc15"] },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 2, max: 6 } },
          move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          links: {
            enable: true,
            distance: 120,
            color: "#6366f1",
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}