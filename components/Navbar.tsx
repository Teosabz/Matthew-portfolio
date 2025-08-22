import React, { useState, useEffect, useRef } from "react";

const sections = ["hero", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const desktopNavRef = useRef<HTMLUListElement>(null);

  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  // Scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
      className={`fixed w-full z-[1000] flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } text-[#c9d1d9]`}
    >
      {/* Logo */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-[#58a6ff]">
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
              className={`font-medium hover:text-[#58a6ff] hover:underline underline-offset-4 transition-all ${
                activeSection === section ? "text-[#58a6ff]" : "text-[#c9d1d9]"
              }`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}

        {/* Animated underline */}
        <span
          className="absolute bottom-0 h-[2px] bg-[#58a6ff] transition-all duration-300"
          style={{
            width: underlineStyle.width,
            left: underlineStyle.left,
          }}
        />
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-[#58a6ff] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
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

      {/* Mobile Menu */}
      <ul
        className={`sm:hidden absolute top-full left-0 w-full bg-[#0d1117] flex flex-col items-center gap-4 py-4 text-base transition-transform duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {sections.map((section) => (
          <li key={section} className="relative w-full text-center">
            <button
              className={`w-full font-medium hover:text-[#58a6ff] hover:underline underline-offset-4 transition-all ${
                activeSection === section
                  ? "text-[#58a6ff] underline"
                  : "text-[#c9d1d9]"
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
