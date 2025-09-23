import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

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

  useEffect(() => {
    const colors = ["#58a6ff", "#0d7dff", "#1da1f2", "#f5a623", "#ff6b6b"];
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1.5,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 0.08,
      dy: (Math.random() - 0.5) * 0.08,
      color: colors[Math.floor(Math.random() * colors.length)],
      blur: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

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
    <footer className="relative bg-[#161b22] text-[#c9d1d9] overflow-hidden pt-16 pb-10">
      {/* Particles */}
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* About / Branding */}
        <div className="text-center md:text-left max-w-sm">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#58a6ff] mb-3">
            Matthew Sabeta
          </h3>
          <p className="text-sm sm:text-base text-[#e5e5e5]/80">
            Full-stack developer passionate about modern web apps, UI/UX, and
            interactive experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-6 text-center md:text-left">
          <a
            href="#projects"
            className="hover:text-[#58a6ff] transition-colors"
          >
            Projects
          </a>
          <a href="#about" className="hover:text-[#58a6ff] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#58a6ff] transition-colors">
            Contact
          </a>
          <a
            href="mailto:matthew@example.com?subject=Portfolio%20Inquiry"
            className="hover:text-[#58a6ff] transition-colors"
          >
            Email Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/teosabz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58a6ff] transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/matthew-sabeta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0d7dff] transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1da1f2] transition-colors text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:matthew@example.com?subject=Portfolio%20Inquiry"
            className="hover:text-[#f97316] transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm sm:text-base lg:text-lg text-center mt-10 font-light">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-medium text-[#58a6ff]">Matthew Sabeta</span>. All
        rights reserved.
      </p>

      {/* Back to top button */}
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

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
