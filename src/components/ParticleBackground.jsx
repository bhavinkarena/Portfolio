import { useEffect, useRef, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  const glowRef = useRef(null);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 20,
      });
    }
    setParticles(newParticles);
  }, []);

  // Subtle glow that follows the cursor
  useEffect(() => {
    let raf = null;
    const handleMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
        }
        raf = null;
      });
    };
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Moving grid */}
      <div className="grid-backdrop absolute inset-0" />

      {/* Aurora blobs */}
      <div
        className="aurora bg-primary/20 w-[40vw] h-[40vw] -top-32 -left-24"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="aurora bg-secondary/20 w-[35vw] h-[35vw] top-1/3 -right-24"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="aurora bg-primary/10 w-[30vw] h-[30vw] bottom-0 left-1/3"
        style={{ animationDelay: '8s' }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Cursor-follow glow */}
      <div
        ref={glowRef}
        className="hidden md:block absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 will-change-transform"
        style={{ background: 'radial-gradient(circle, hsl(187 94% 43% / 0.5) 0%, transparent 70%)' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 opacity-50" />
    </div>
  );
};

export default ParticleBackground;
