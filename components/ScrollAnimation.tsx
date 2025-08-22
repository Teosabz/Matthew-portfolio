import React, { useRef, useState, useEffect } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number; // in seconds
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let translateClass = "";
  switch (direction) {
    case "up":
      translateClass = "translate-y-8";
      break;
    case "down":
      translateClass = "-translate-y-8";
      break;
    case "left":
      translateClass = "translate-x-8";
      break;
    case "right":
      translateClass = "-translate-x-8";
      break;
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out 
        ${
          visible
            ? "opacity-100 translate-x-0 translate-y-0"
            : `opacity-0 ${translateClass}`
        } 
      `}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
