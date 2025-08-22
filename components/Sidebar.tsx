// components/Sidebar.tsx
import React, { useState, useEffect } from "react";

const sections = ["hero", "about", "skills", "projects", "contact"];

const Sidebar = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {sections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            active === sec ? "bg-[#58a6ff] scale-125" : "bg-[#888]"
          }`}
        />
      ))}
    </nav>
  );
};

export default Sidebar;
