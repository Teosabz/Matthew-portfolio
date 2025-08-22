import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20 text-[#c9d1d9] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/assets/image.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0d1117]/70 z-0"></div>

      <div className="relative z-10 max-w-xl sm:max-w-2xl md:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#58a6ff] mb-6">
          Hi, I&#39;m Matthew Sabeta
        </h1>

        {/* Improved paragraphs */}
        <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto text-[#c9d1d9]/90">
          I&#39;m a{" "}
          <span className="text-[#58a6ff] font-semibold">
            Software Developer
          </span>{" "}
          who enjoys building websites that look great and work seamlessly. I
          focus on creating projects that are both visually appealing and
          performant.
        </p>

        <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto text-[#c9d1d9]/90">
          I mainly work with{" "}
          <span className="text-[#61dafb] font-semibold">HTML</span>,{" "}
          <span className="text-[#f7df1e] font-semibold">JavaScript</span>,{" "}
          <span className="text-[#1572b6] font-semibold">CSS</span>,{" "}
          <span className="text-[#61dafb] font-semibold">React</span>,{" "}
          <span className="text-[#339933] font-semibold">Node.js</span>, and{" "}
          <span className="text-white font-semibold">Next.js</span>. I also use
          tools like{" "}
          <span className="text-[#38bdf8] font-semibold">Tailwind CSS</span>,{" "}
          <span className="text-[#f05032] font-semibold">Git</span>, and{" "}
          <span className="text-[#f24e1e] font-semibold">Figma</span>.
        </p>

        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-[#c9d1d9]/90">
          I&#39;m open to{" "}
          <span className="text-[#58a6ff] font-semibold">internships</span> and{" "}
          <span className="text-[#58a6ff] font-semibold">freelance work</span> —
          feel free to reach out and collaborate on exciting projects!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-5 py-3 bg-[#58a6ff] text-[#0d1117] font-bold rounded-md hover:bg-[#3a75d1] transition-colors"
          >
            View My Projects
          </a>
          <a
            href="/Matthew-Sabeta-Resume.pdf"
            download="Matthew-Sabeta-Resume.pdf"
            className="px-5 py-3 bg-[#58a6ff] text-[#0d1117] font-bold rounded-md hover:bg-[#3a75d1] transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
