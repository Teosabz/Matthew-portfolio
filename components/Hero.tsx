import React, { useEffect, useRef } from "react";

const techParticles = [
  { text: "HTML", color: "#e34c26" },
  { text: "CSS", color: "#1572b6" },
  { text: "JavaScript", color: "#f7df1e" },
  { text: "React", color: "#61dafb" },
  { text: "Node.js", color: "#339933" },
  { text: "Next.js", color: "#ffffff" },
  { text: "Tailwind", color: "#38bdf8" },
  { text: "Git", color: "#f05032" },
  { text: "Figma", color: "#f24e1e" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = containerRef.current?.querySelectorAll(".particle");
    if (!particles) return;

    particles.forEach((p) => {
      const el = p as HTMLElement;
      const duration = 20 + Math.random() * 20; // very slow floating (20–40s)
      const delay = Math.random() * -20; // stagger animation
      el.style.setProperty("--duration", `${duration}s`);
      el.style.setProperty("--delay", `${delay}s`);
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20 text-[#c9d1d9] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/image.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d1117]/70 z-0"></div>

      {/* Floating particles */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0">
        {techParticles.map((t, i) => (
          <span
            key={i}
            className="particle absolute text-sm sm:text-base md:text-lg font-bold opacity-70"
            style={{
              color: t.color,
              animation: `float var(--duration) linear infinite`,
              animationDelay: "var(--delay)",
            }}
          >
            {t.text}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#58a6ff] mb-6 drop-shadow-lg">
          Hi, I&#39;m Matthew Sabeta
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed max-w-3xl mx-auto text-[#c9d1d9]/90">
          I&apos;m a{" "}
          <span className="text-[#58a6ff] font-semibold">
            Software Developer
          </span>{" "}
          who enjoys building websites that look great and work seamlessly.
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed max-w-3xl mx-auto text-[#c9d1d9]/90">
          I mainly work with{" "}
          <span className="text-[#61dafb] font-semibold">HTML</span>,{" "}
          <span className="text-[#f7df1e] font-semibold">JavaScript</span>,{" "}
          <span className="text-[#1572b6] font-semibold">CSS</span>,{" "}
          <span className="text-[#61dafb] font-semibold">React</span>,{" "}
          <span className="text-[#339933] font-semibold">Node.js</span>, and{" "}
          <span className="text-white font-semibold">Next.js</span>.
        </p>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto text-[#c9d1d9]/90">
          I&apos;m open to{" "}
          <span className="text-[#58a6ff] font-semibold">internships</span> and{" "}
          <span className="text-[#58a6ff] font-semibold">freelance work</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#58a6ff] text-[#0d1117] font-bold rounded-md hover:bg-[#3a75d1] transition-colors"
          >
            View My Projects
          </a>
          <a
            href="/Matthew-Sabeta-Resume.pdf"
            download="Matthew-Sabeta-Resume.pdf"
            className="px-6 py-3 bg-[#58a6ff] text-[#0d1117] font-bold rounded-md hover:bg-[#3a75d1] transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-40px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
