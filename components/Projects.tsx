import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    title: "NewsPulse ",
    description:
      "A modern news aggregator app that fetches articles from multiple sources, delivering real-time news in one place. Users can browse, search, and stay updated on trending topics with a clean, responsive interface.",
    imageUrl: "/assets/NewsPulse.png",
    link: "https://news-pulse-beta.vercel.app/",
    type: "project",
    tech: [
      { icon: <FaHtml5 />, color: "#E34F26" },
      { icon: <FaCss3Alt />, color: "#1572B6" },
      { icon: <FaJs />, color: "#F7DF1E" },
    ],
  },
  {
    id: 2,
    title: "Whispers-Of-Yore",
    description:
      "A folktale app built using Next.js, Tailwind CSS, and Node.js, featuring story browsing, filtering, and user interactions.",
    imageUrl: "/assets/w-o-y.png", // replace with actual cover image if you have one
    link: "https://whispers-of-yore.vercel.app/", // replace with the live URL
    type: "project",
    tech: [
      { icon: <FaReact />, color: "#61DAFB" },
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#38BDF8" },
      { icon: <FaNodeJs />, color: "#339933" },
    ],
  },

  {
    id: 3,
    title: "Baker's Inn Website",
    description:
      "A responsive clone of the Baker’s Inn homepage built with Next.js and Tailwind CSS. Includes dynamic sections, animations, and optimized images.",
    imageUrl:
      "/assets/imgi_22_360101446_621081670158184_3000966430470798433_n.png",
    link: "https://bakers-inn-project.vercel.app/",
    type: "project",
    tech: [
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
  },
  {
    id: 4,
    title: "FlickPick-movieverse",
    description:
      "FlickPick lets you discover movies, watch trailers, and save your favorites.",
    imageUrl: "/assets/FlickPick.png",
    link: "https://flickpick-movieverse.vercel.app/",
    type: "project",
    tech: [
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#06B6D4" },
      { icon: <FaNodeJs />, color: "#339933" },
    ],
  },
  {
    id: 5,
    title: "Picksy",
    description:
      "Picksy, A modern e-commerce product catalog that makes browsing, searching, and filtering products simple and enjoyable",
    imageUrl: "/assets/Picksy.png",
    link: "https://flickpick-movieverse.vercel.app/",
    type: "project",
    tech: [
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#06B6D4" },
      { icon: <FaNodeJs />, color: "#339933" },
    ],
  },
  {
    id: 6,
    title: "StyleSphere",
    description:
      "StyleSphere, A fashion discovery and style inspiration web app ",
    imageUrl: "/assets/SS.png",
    link: "https://style-sphere-qjdeo2tnb-matthew-sabetas-projects.vercel.app/",
    type: "project",
    tech: [
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#06B6D4" },
      { icon: <FaNodeJs />, color: "#339933" },
    ],
  },
  {
    id: 7,
    title: "Elite Wheels",
    description:
      "Elite Wheels, is a luxury car discovery web app designed to showcase high-end and exotic vehicles",
    imageUrl: "/assets/FlickPick.png",
    link: "https://elite-wheels.vercel.app/",
    type: "project",
    tech: [
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#06B6D4" },
      { icon: <FaNodeJs />, color: "#339933" },
    ],
  },
  {
    id: 8,
    title: "Zen Escape",
    description:
      "Zen Escape is a luxury wellness & relaxation app that helps people find calming retreats, spas, and relaxation experiences worldwide",
    imageUrl: "/assets/FlickPick.png",
    link: "https://zen-escape.vercel.app/",
    type: "project",
    tech: [
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#06B6D4" },
      { icon: <FaNodeJs />, color: "#339933" },
    ],
  },

  {
    id: 9,
    title: "Cooksy",
    description:
      "Cooksy helps users turn whatever’s in their kitchen into delicious meals",
    imageUrl: "/assets/Cooksy.png",
    link: "https://zen-escape.vercel.app/",
    type: "project",
    tech: [
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#06B6D4" },
      { icon: <FaNodeJs />, color: "#339933" },
    ],
  },

  {
    id: 10,
    title: "News pulse",
    description:
      "News Pulse is a sleek, modern news aggregation and trend-tracking app that curates stories from multiple sources and highlights what’s currently making waves. Unlike static news feeds, it gives users a live “pulse” of global and local conversations, blending credibility with trending relevance.",
    imageUrl: "/assets/FlickPick.png",
    link: "https://zen-escape.vercel.app/",
    type: "project",
    tech: [
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#06B6D4" },
      { icon: <FaNodeJs />, color: "#339933" },
    ],
  },

  {
    id: 11,
    title: "NewsPulse",
    description:
      "NewsPulse is a modern, responsive platform that delivers the latest headlines in a clean and engaging interface.",
    imageUrl: "/assets/NewsPulse.png",
    link: "https://news-pulse-58pt.vercel.app/",
    type: "project",
    tech: [
      { icon: <SiNextdotjs />, color: "#FFFFFF" },
      { icon: <SiTailwindcss />, color: "#06B6D4" },
      { icon: <FaNodeJs />, color: "#339933" },
    ],
  },

  {
    id: 12,
    title: "Coming Soon",
    description: "More projects on the way!",
    videoUrl: "/assets/coming-soon.mp4",
    type: "comingSoon",
  },
  {
    id: 13,
    title: "Coming Soon",
    description: "More projects on the way!",
    videoUrl: "/assets/coming-soon.mp4",
    type: "comingSoon",
  },
  {
    id: 14,
    title: "Coming Soon",
    description: "More projects on the way!",
    videoUrl: "/assets/coming-soon.mp4",
    type: "comingSoon",
  },
];

const Projects = () => {
  const hoverEffectClasses =
    "transform transition-transform hover:-translate-y-1.5 hover:shadow-[#58a6ff]/60";

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 md:px-8 bg-[#0d1117] text-[#c9d1d9] text-center"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl text-[#58a6ff] mb-12 font-bold">
          My Projects
        </h2>

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projectsData.map(
            ({
              id,
              title,
              description,
              imageUrl,
              link,
              videoUrl,
              type,
              tech,
            }) =>
              type === "project" ? (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative h-[280px] sm:h-[300px] md:h-[320px] rounded-xl shadow-lg shadow-[#58a6ff]/30 overflow-hidden flex flex-col justify-end bg-cover bg-center ${hoverEffectClasses}`}
                  style={{ backgroundImage: `url(${imageUrl})` }}
                >
                  <div className="bg-[#0d1117]/70 p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full text-left">
                    <h3 className="text-[#58a6ff] text-lg sm:text-xl md:text-xl mb-2 font-semibold">
                      {title}
                    </h3>
                    <p className="text-[0.85rem] sm:text-[0.95rem] md:text-[0.95rem] leading-relaxed flex-grow">
                      {description}
                    </p>
                    <div className="flex gap-3 mt-3 flex-wrap">
                      {tech &&
                        tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-lg inline-block animate-bounce-on-hover"
                            style={{ color: t.color }}
                          >
                            {t.icon}
                          </span>
                        ))}
                    </div>
                    <span className="mt-4 text-[#58a6ff] font-bold underline">
                      View Project
                    </span>
                  </div>
                </a>
              ) : (
                <div
                  key={id}
                  className={`relative h-[280px] sm:h-[300px] md:h-[320px] rounded-xl overflow-hidden bg-black shadow-lg shadow-[#58a6ff]/30 ${hoverEffectClasses}`}
                >
                  <video
                    src={videoUrl}
                    autoPlay
                    loop
                    muted={true}
                    playsInline
                    className="w-full h-full object-cover block rounded-xl"
                  />
                  <div className="absolute inset-0 bg-[#0d1117]/60 flex flex-col justify-center items-center text-center p-4 text-[#c9d1d9]">
                    <h3 className="text-[#58a6ff] text-lg sm:text-xl md:text-xl mb-2 font-semibold">
                      {title}
                    </h3>
                    <p className="text-base m-0">{description}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      {/* Tailwind custom keyframes */}
      <style jsx global>{`
        @keyframes bounceOnHover {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-on-hover:hover {
          animation: bounceOnHover 0.4s ease;
        }
      `}</style>
    </section>
  );
};

export default Projects;
