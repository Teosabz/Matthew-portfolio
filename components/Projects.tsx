import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Tigzozo Media",
    description:
      "A personal portfolio built with HTML, CSS and JavaScript. Fully responsive and clean UI.",
    imageUrl: "/assets/tigzozo-media.jpg",
    link: "https://teosabs.github.io/Tigzozo-media/",
  },
  {
    id: 2,
    title: "Start Bootstrap",
    description: "A simple React to-do list with local storage support.",
    imageUrl: "/assets/boot.jpeg",
    link: "https://teosabs.github.io/START-BOOTSTRAP-REACT/",
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "My personal portfolio built using React.js",
    imageUrl: "/assets/portfolio.jpeg",
    link: "#",
  },
];

const Projects = () => {
  // Common hover classes for all cards
  const hoverEffectClasses =
    "transform transition-transform hover:-translate-y-1.5 hover:shadow-[#58a6ff]/60";

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 md:px-8 bg-[#0d1117] text-[#c9d1d9] text-center"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl text-[#58a6ff] mb-8 font-bold">
          My Projects
        </h2>

        {/* Row 1 - Image background project cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
          {projectsData.map(({ id, title, description, imageUrl, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative w-full max-w-[280px] h-[320px] rounded-xl shadow-lg shadow-[#58a6ff]/30 overflow-hidden flex flex-col justify-end bg-cover bg-center ${hoverEffectClasses}`}
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div className="bg-[#0d1117]/70 p-5 sm:p-6 flex flex-col justify-between h-full text-left">
                <h3 className="text-[#58a6ff] text-xl mb-2 font-semibold">
                  {title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed flex-grow">
                  {description}
                </p>
                <span className="mt-4 text-[#58a6ff] font-bold underline">
                  View Project
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Row 2 - Video "Coming Soon" cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`relative w-full max-w-[280px] h-[320px] rounded-xl overflow-hidden bg-black shadow-lg shadow-[#58a6ff]/30 ${hoverEffectClasses}`}
            >
              <video
                src="/assets/coming-soon.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover block rounded-xl"
              />
              <div className="absolute inset-0 bg-[#0d1117]/60 flex flex-col justify-center items-center text-center p-4 text-[#c9d1d9]">
                <h3 className="text-[#58a6ff] text-xl mb-2 font-semibold">
                  Coming Soon
                </h3>
                <p className="text-base m-0">More projects on the way!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
