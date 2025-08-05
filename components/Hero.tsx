import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import backgroundImage from "../public/assets/image.jpg"; // move the image to public/assets/

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
        <p className="text-base sm:text-lg md:text-xl mb-6">
          I&#39;m a Junior Front-End Developer who enjoys building websites that
          look good and work well. I&#39;m continually developing my skills and
          staying current with evolving web technologies.
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          I mostly work with HTML, CSS, JavaScript, React, Node.js, and Next.js.
          I’ve also used tools like Tailwind CSS, Git, and Figma to help bring
          my projects to life.
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          I&#39;m open to internships and freelance work — feel free to reach
          out!
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
