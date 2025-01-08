import React, { useState, useEffect } from "react";
import MountainDividerLight from "../icons/pyramid-divider.svg";
import MountainDividerDark from "../icons/pyramid-divider-dark.svg";
import htmlIconLight from "../icons/light/html-light.svg";
import htmlIconDark from "../icons/dark/html-dark.svg";
import cssIconLight from "../icons/light/css-light.svg";
import cssIconDark from "../icons/dark/css-dark.svg";
import jsIconLight from "../icons/light/js-light.svg";
import jsIconDark from "../icons/dark/js-dark.svg";
import reactIconLight from "../icons/light/react-light.svg";
import reactIconDark from "../icons/dark/react-dark.svg";
import tailwindIconLight from "../icons/light/tailwind-light.svg";
import tailwindIconDark from "../icons/dark/tailwind-dark.svg";
import sassIconLight from "../icons/light/sass-light.svg";
import sassIconDark from "../icons/dark/sass-dark.svg";
import viteIconLight from "../icons/light/vite-light.svg";
import viteIconDark from "../icons/dark/vite-dark.svg";
import tsIconLight from "../icons/light/ts-light.svg";
import tsIconDark from "../icons/dark/ts-dark.svg";
import wordpressIconLight from "../icons/light/wordpress-light.svg";
import wordpressIconDark from "../icons/dark/wordpress-dark.svg";

const SkillCard = ({ name, iconLight, iconDark, isDarkMode }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xTilt = ((offsetX - offsetWidth / 2) / offsetWidth) * 25;
    const yTilt = ((offsetY - offsetHeight / 2) / offsetHeight) * -25;

    setTilt({ x: xTilt, y: yTilt });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className="relative group rounded-lg cursor-pointer overflow-hidden transition-transform duration-300 shadow-md"
      style={{
        height: "180px",
        
        backgroundColor: "#F5F5F5",
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.05)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      
      <div className="absolute inset-0 bg-[#F5F5F5] dark:bg-[#282828] transition-colors duration-300"></div>

      
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300"></div>

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800 dark:text-white">
        <img
          src={isDarkMode ? iconDark : iconLight}
          alt={name}
          className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-semibold mt-4">{name}</h3>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const skills = [
    { id: 1, name: "HTML", iconLight: htmlIconLight, iconDark: htmlIconDark },
    { id: 2, name: "CSS", iconLight: cssIconLight, iconDark: cssIconDark },
    { id: 3, name: "JavaScript", iconLight: jsIconLight, iconDark: jsIconDark },
    { id: 4, name: "React", iconLight: reactIconLight, iconDark: reactIconDark },
    { id: 5, name: "Tailwind CSS", iconLight: tailwindIconLight, iconDark: tailwindIconDark },
    { id: 6, name: "SASS", iconLight: sassIconLight, iconDark: sassIconDark },
    { id: 7, name: "Vite", iconLight: viteIconLight, iconDark: viteIconDark },
    { id: 8, name: "TypeScript", iconLight: tsIconLight, iconDark: tsIconDark },
    { id: 9, name: "WordPress", iconLight: wordpressIconLight, iconDark: wordpressIconDark },
  ];

  useEffect(() => {
    
    const initialDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(initialDark);

    
    const handleDarkModeChanged = (e) => {
      setIsDarkMode(e.detail.dark);
    };
    window.addEventListener("dark-mode-changed", handleDarkModeChanged);

    return () => {
      window.removeEventListener("dark-mode-changed", handleDarkModeChanged);
    };
  }, []);

  return (
    
    <section id="skills" className="relative bg-gray-50 dark:bg-[#121212] pb-16">
      
      <div className="-mt-px">
        <img
          src={isDarkMode ? MountainDividerDark : MountainDividerLight}
          alt="Divider"
          className="w-full"
        />
      </div>

      <div className="relative container mx-auto px-6 pt-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Mijn Vaardigheden
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              iconLight={skill.iconLight}
              iconDark={skill.iconDark}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
