import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";

const skillsData = [
  { id: 1, name: "React.js", icon: <FaReact />, color: "#61dafb" },
  { id: 2, name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { id: 3, name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
  { id: 4, name: "CSS", icon: <FaCss3Alt />, color: "#1572b6" },
  { id: 5, name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
  { id: 6, name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { id: 7, name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { id: 8, name: "Git", icon: <FaGit />, color: "#f05032" },
  { id: 9, name: "GitHub", icon: <FaGithub />, color: "#58a6ff" },
  { id: 10, name: "Figma", icon: <SiFigma />, color: "#f24e1e" },
];

const Skills = () => {
  const [bgIcon, setBgIcon] = useState(skillsData[0].icon);
  const [bgColor, setBgColor] = useState(skillsData[0].color);

  const hoverEffectClasses =
    "transform transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#58a6ff]/40";

  return (
    <section
      id="skills"
      className="relative py-16 px-4 sm:px-6 md:px-8 bg-[#0d1117] text-[#c9d1d9] text-center overflow-hidden"
    >
      {/* Background Icon with Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="transition-all duration-700 ease-in-out animate-slow-rotate-float relative"
          style={{ color: bgColor }}
        >
          {React.cloneElement(
            bgIcon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
            {
              className:
                "text-[20rem] sm:text-[25rem] md:text-[30rem] opacity-10 z-0",
            }
          )}

          {/* Glow layer */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-40"
            style={{ backgroundColor: bgColor }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#58a6ff] mb-12 font-bold">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          {skillsData.map(({ id, name, icon, color }) => (
            <div
              key={id}
              className={`relative w-full h-[140px] sm:h-[150px] md:h-[160px] rounded-xl bg-[#161b22] flex flex-col items-center justify-center gap-3 p-4 group ${hoverEffectClasses}`}
              onMouseEnter={() => {
                setBgIcon(icon);
                setBgColor(color);
              }}
              onMouseLeave={() => {
                setBgIcon(skillsData[0].icon);
                setBgColor(skillsData[0].color);
              }}
            >
              {/* Card Icon with original color */}
              {React.cloneElement(
                icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
                {
                  className: "text-5xl z-10",
                  style: { color },
                }
              )}
              <span className="text-base sm:text-lg md:text-xl font-semibold text-white z-10 mt-2">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframes for slow rotation + float */}
      <style jsx global>{`
        @keyframes slowRotateFloat {
          0% {
            transform: rotate(0deg) translateY(0px);
          }
          25% {
            transform: rotate(90deg) translateY(-10px);
          }
          50% {
            transform: rotate(180deg) translateY(0px);
          }
          75% {
            transform: rotate(270deg) translateY(10px);
          }
          100% {
            transform: rotate(360deg) translateY(0px);
          }
        }
        .animate-slow-rotate-float {
          animation: slowRotateFloat 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
