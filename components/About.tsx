import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0d1117] text-[#c9d1d9] text-center py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto bg-[#161b22] p-6 sm:p-8 rounded-xl max-w-md sm:max-w-xl lg:max-w-3xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#58a6ff] font-bold mb-6">
          About Me
        </h2>
        <div className="space-y-4 sm:space-y-5 text-base sm:text-lg lg:text-xl leading-relaxed max-w-prose mx-auto">
          <p>
            I&apos;m Matthew Sabeta, a junior front-end developer with a passion
            for building clean, modern, and responsive websites. I enjoy turning
            ideas into real, usable products that look great on any device.
          </p>
          <p>
            My main tools are HTML, CSS, JavaScript, and React. I also have
            experience using Tailwind CSS for faster styling, Git for version
            control, and Figma when working with UI designs. I&apos;m always
            learning and love exploring new frameworks and improving my skills.
          </p>
          <p>
            What I enjoy most is creating smooth user experiences — whether
            it&apos;s a portfolio site, landing page, or web app. I focus on
            writing clean code, solving real problems, and learning from every
            project.
          </p>
          <p>
            I&apos;m currently open to internship opportunities, freelance work,
            or collaborating on any cool web projects. Let’s build something
            great together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
