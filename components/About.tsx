import React from "react";
import ScrollAnimation from "./ScrollAnimation";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0d1117] text-[#c9d1d9] text-center py-16 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/70 via-[#161b22]/50 to-[#0d1117]/70 pointer-events-none animate-gradient-move"></div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-[#58a6ff]/30 rounded-full opacity-50"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${
              10 + Math.random() * 10
            }s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto bg-[#161b22]/80 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl shadow-lg border border-[#58a6ff]/20 hover:shadow-[#58a6ff]/40 transition-shadow duration-500">
        {/* Animated Title */}
        <ScrollAnimation direction="up" delay={0}>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#58a6ff] font-bold mb-8 animate-text-pop">
            About Me
          </h2>
        </ScrollAnimation>

        <div className="space-y-5 sm:space-y-6 md:space-y-6 lg:space-y-7 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-loose max-w-prose mx-auto text-left">
          {[
            `I&apos;m <span class="text-[#58a6ff] font-semibold">Matthew Sabeta</span>, a junior front-end developer with a passion for building clean, modern, and responsive websites. I enjoy turning ideas into real, usable products that look great on any device.`,
            `My main tools are <span class="text-[#61dafb] font-medium">HTML, CSS, JavaScript, and React</span>. I also have experience using <span class="text-[#38bdf8] font-medium">Tailwind CSS</span> for faster styling, <span class="text-[#f05032] font-medium">Git</span> for version control, and <span class="text-[#f24e1e] font-medium">Figma</span> when working with UI designs. I&apos;m always learning and love exploring new frameworks and improving my skills.`,
            `What I enjoy most is creating <span class="text-[#58a6ff] font-medium">smooth user experiences</span> — whether it&apos;s a portfolio site, landing page, or web app. I focus on writing clean code, solving real problems, and learning from every project.`,
            `I&apos;m currently open to <span class="text-[#58a6ff] font-semibold">internship opportunities, freelance work</span>, or collaborating on any cool web projects. Let’s build something great together!`,
          ].map((text, index) => (
            <ScrollAnimation key={index} direction="up" delay={0.2 * index}>
              <p
                className="transition-transform duration-500 hover:scale-105 hover:text-[#58a6ff]"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 20s ease infinite;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
          100% {
            transform: translateY(5px) translateX(-5px);
          }
        }

        @keyframes textPop {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-text-pop {
          animation: textPop 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
