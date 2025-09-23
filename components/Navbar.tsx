import React, { useState, useEffect, useRef } from "react";

const sections = ["hero", "about", "skills", "projects", "contact", "footer"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [progress, setProgress] = useState(0);

  const desktopNavRef = useRef<HTMLUListElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  // Scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // progress bar
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);

      // active section
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update desktop underline
  useEffect(() => {
    if (desktopNavRef.current) {
      const buttons = Array.from(
        desktopNavRef.current.children
      ) as HTMLElement[];
      const activeBtn = buttons.find(
        (btn) => btn.textContent?.toLowerCase() === activeSection
      );
      if (activeBtn) {
        setUnderlineStyle({
          width: activeBtn.offsetWidth,
          left: activeBtn.offsetLeft,
        });
      }
    }
  }, [activeSection, isOpen]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-[#0d1117]/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#58a6ff] via-[#9b6dff] to-[#ff6ec4] transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>

      <div className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 text-[#c9d1d9]">
        {/* Logo */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#ff6ec4] animate-pulse">
          Matthew Sabeta
        </h2>

        {/* Desktop Menu */}
        <ul
          ref={desktopNavRef}
          className="hidden sm:flex gap-6 md:gap-8 relative list-none m-0 p-0 text-sm sm:text-base md:text-lg"
        >
          {sections.map((section) => (
            <li key={section} className="relative">
              <button
                className={`font-medium relative group transition-transform duration-300 ${
                  activeSection === section
                    ? "text-[#58a6ff]"
                    : "text-[#c9d1d9]"
                } hover:-translate-y-[2px]`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}

                {/* Hover underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#58a6ff] to-[#ff6ec4] transition-all duration-500 group-hover:w-full"></span>
              </button>
            </li>
          ))}

          {/* Active underline */}
          <span
            className="absolute bottom-0 h-[3px] bg-gradient-to-r from-[#58a6ff] via-[#9b6dff] to-[#ff6ec4] transition-all duration-500 ease-in-out rounded-full"
            style={{
              width: underlineStyle.width,
              left: underlineStyle.left,
            }}
          />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-[#58a6ff] focus:outline-none transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`sm:hidden flex flex-col items-center gap-4 py-6 text-lg transform transition-all duration-500 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        } bg-[#0d1117]/95 backdrop-blur-md`}
      >
        {sections.map((section, index) => (
          <li
            key={section}
            className="relative w-full text-center transition-all duration-500"
            style={{
              transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            <button
              className={`w-full py-2 font-medium ${
                activeSection === section ? "text-[#58a6ff]" : "text-[#c9d1d9]"
              }`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
