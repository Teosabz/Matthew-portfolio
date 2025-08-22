import React from "react";
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
  {
    id: 1,
    name: "React.js",
    icon: <FaReact className="text-5xl text-[#61dafb]" />,
  },
  {
    id: 2,
    name: "Next.js",
    icon: <SiNextdotjs className="text-5xl text-white" />,
  },
  {
    id: 3,
    name: "HTML",
    icon: <FaHtml5 className="text-5xl text-[#e34f26]" />,
  },
  {
    id: 4,
    name: "CSS",
    icon: <FaCss3Alt className="text-5xl text-[#1572b6]" />,
  },
  {
    id: 5,
    name: "Tailwind",
    icon: <SiTailwindcss className="text-5xl text-[#38bdf8]" />,
  },
  {
    id: 6,
    name: "Node.js",
    icon: <FaNodeJs className="text-5xl text-[#339933]" />,
  },
  {
    id: 7,
    name: "JavaScript",
    icon: <FaJs className="text-5xl text-[#f7df1e]" />,
  },
  { id: 8, name: "Git", icon: <FaGit className="text-5xl text-[#f05032]" /> },
  {
    id: 9,
    name: "GitHub",
    icon: <FaGithub className="text-5xl text-[#58a6ff]" />,
  },
  {
    id: 10,
    name: "Figma",
    icon: <SiFigma className="text-5xl text-[#f24e1e]" />,
  },
];

const Skills = () => {
  const hoverEffectClasses =
    "transform transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#58a6ff]/40";

  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 md:px-8 bg-[#0d1117] text-[#c9d1d9] text-center"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl text-[#58a6ff] mb-12 font-bold">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {skillsData.map(({ id, name, icon }) => (
            <div
              key={id}
              className={`relative w-full max-w-[160px] h-[160px] rounded-xl bg-[#161b22] flex flex-col items-center justify-center gap-3 p-4 ${hoverEffectClasses}`}
            >
              {icon}
              <span className="text-lg font-semibold text-white mt-2">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
