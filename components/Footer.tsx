import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#161b22] text-[#c9d1d9] text-center 
                       py-2 sm:py-3 md:py-4 lg:py-5 
                       text-xs sm:text-sm md:text-base lg:text-lg
                       border-t border-[#58a6ff]"
    >
      <p>
        &copy; {new Date().getFullYear()} Matthew Sabeta. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
