import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
  blur: number;
  opacity: number;
}

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize particles
  useEffect(() => {
    const colors = ["#58a6ff", "#0d7dff", "#1da1f2", "#f5a623", "#ff6b6b"];
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 0.05, // slower horizontal
      dy: (Math.random() - 0.5) * 0.05, // slower vertical
      color: colors[Math.floor(Math.random() * colors.length)],
      blur: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

  // Animate particles slowly
  useEffect(() => {
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let nx = p.x + p.dx;
          let ny = p.y + p.dy;

          if (nx > window.innerWidth) nx = 0;
          if (nx < 0) nx = window.innerWidth;
          if (ny > window.innerHeight) ny = 0;
          if (ny < 0) ny = window.innerHeight;

          return { ...p, x: nx, y: ny };
        })
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#161b22] text-[#c9d1d9] overflow-hidden">
      {/* Floating glowing particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full pointer-events-none animate-twinkle"
            style={{
              width: `${p.size}rem`,
              height: `${p.size}rem`,
              top: p.y,
              left: p.x,
              backgroundColor: p.color,
              filter: `blur(${p.blur}px)`,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.blur * 3}px ${p.color}`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 lg:py-14 flex flex-col items-center space-y-6">
        <div className="flex gap-6">
          <a
            href="https://github.com/teosabz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 bg-[#0d1117]/50 rounded-full border border-[#30363d]/30 backdrop-blur-sm transition-all duration-300 hover:bg-[#58a6ff]/20 hover:scale-110 hover:shadow-lg hover:shadow-[#58a6ff]/30"
          >
            <FaGithub className="w-6 h-6 text-[#58a6ff] group-hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/matthew-sabeta"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 bg-[#0d1117]/50 rounded-full border border-[#30363d]/30 backdrop-blur-sm transition-all duration-300 hover:bg-[#0d7dff]/20 hover:scale-110 hover:shadow-lg hover:shadow-[#0d7dff]/30"
          >
            <FaLinkedin className="w-6 h-6 text-[#0d7dff] group-hover:text-white transition-colors duration-300" />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 bg-[#0d1117]/50 rounded-full border border-[#30363d]/30 backdrop-blur-sm transition-all duration-300 hover:bg-[#1da1f2]/20 hover:scale-110 hover:shadow-lg hover:shadow-[#1da1f2]/30"
          >
            <FaTwitter className="w-6 h-6 text-[#1da1f2] group-hover:text-white transition-colors duration-300" />
          </a>
        </div>

        <p className="text-sm sm:text-base lg:text-lg font-light tracking-wide text-center">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-[#58a6ff]">Matthew Sabeta</span>.
          All rights reserved.
        </p>
      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 group bg-[#58a6ff] hover:bg-[#3a75d1] text-[#0d1117] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50 animate-pulse-glow"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3);
          }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
