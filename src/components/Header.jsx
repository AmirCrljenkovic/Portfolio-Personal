import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import LogoDarkMode from "../img/logo-darkmode.png";
import LogoLightMode from "../img/logo-lightmode.png";
import YinYangSVG from "../icons/yinyang.svg";
import NLFlag from "../img/flags/nl.png";
import ENFlag from "../img/flags/en.png";
import DEFlag from "../img/flags/de.png";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("nl");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const languages = {
    nl: { label: "NL", flag: NLFlag },
    en: { label: "EN", flag: ENFlag },
    de: { label: "DE", flag: DEFlag },
  };

  const location = useLocation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "nl";
    setCurrentLanguage(savedLanguage);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    const event = new CustomEvent("dark-mode-changed", {
      detail: { dark: newDarkMode },
    });
    window.dispatchEvent(event);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll
  const handleScrollToSection = (section) => {
    setActiveSection(section); // Mark this section as 'active'
    if (location.pathname !== "/") {
      window.location.href = `/#${section}`;
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#F5F5F5] dark:bg-[#202120] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex-shrink-0">
          <RouterLink to="/">
            {/* Light Logo */}
            <img
              src={LogoLightMode}
              alt="Logo Light Mode"
              className="h-16 dark:hidden"
            />
            {/* Dark Logo */}
            <img
              src={LogoDarkMode}
              alt="Logo Dark Mode"
              className="h-16 hidden dark:block"
            />
          </RouterLink>
        </div>

        {/* Dark Mode toggle (Mobile) */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
          <div
            className="relative w-12 h-12 cursor-pointer flex items-center justify-center"
            onClick={toggleDarkMode}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src={YinYangSVG}
                alt="Yin Yang Icon"
                className={`w-14 h-14 transition-transform duration-500 ease-in-out ${
                  isDarkMode ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {[
            { label: "Home", section: "hero" },
            { label: "Over Mij", section: "about" },
            { label: "Skills", section: "skills" },
            { label: "Projecten", section: "projects" },
            { label: "Contact", section: "contact" },
          ].map((item) => (
            <button
              key={item.section}
              onClick={() => handleScrollToSection(item.section)}
              className="relative text-gray-800 dark:text-gray-200 cursor-pointer group"
            >
              {item.label}
              <span
                className={`
                  absolute left-0 bottom-[-2px] h-[2px] 
                  bg-[#3C493F] dark:bg-[#B3BFB8]
                  transition-all duration-300 
                  ${
                    activeSection === item.section
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </button>
          ))}
        </nav>

        {/* Right side (Dark Mode & Language) */}
        <div className="hidden md:flex items-center space-x-4">
          <div
            className="relative w-12 h-12 cursor-pointer flex items-center justify-center"
            onClick={toggleDarkMode}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <img
                src={YinYangSVG}
                alt="Yin Yang Icon"
                className={`w-14 h-14 transition-transform duration-500 ease-in-out ${
                  isDarkMode ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>

          <div className="relative">
            <button
              className="flex items-center space-x-2"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <img
                src={languages[currentLanguage]?.flag}
                alt={languages[currentLanguage]?.label}
                className="w-6 h-6 object-cover rounded-full"
              />
              <span className="text-gray-800 dark:text-gray-200 text-sm">
                {languages[currentLanguage]?.label}
              </span>
            </button>
            {isLanguageDropdownOpen && (
              <div
                className="
                  absolute right-0 mt-2 bg-white 
                  dark:bg-[#111213] 
                  shadow-md rounded-md overflow-hidden 
                  z-10 w-28
                "
              >
                {Object.entries(languages).map(([key, { label, flag }]) => (
                  <button
                    key={key}
                    onClick={() => handleLanguageChange(key)}
                    className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <img
                      src={flag}
                      alt={label}
                      className="w-6 h-6 object-cover rounded-full"
                    />
                    <span className="text-gray-800 dark:text-gray-200 text-sm">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center space-y-1"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen 
          bg-[#F5F5F5] dark:bg-[#202120] 
          transform transition-transform duration-300 
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 dark:text-gray-200 text-2xl focus:outline-none"
        >
          ✖
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[
            { label: "Home", section: "hero" },
            { label: "Over Mij", section: "about" },
            { label: "Skills", section: "skills" },
            { label: "Projecten", section: "projects" },
            { label: "Contact", section: "contact" },
          ].map((item) => (
            <button
              key={item.section}
              onClick={() => {
                toggleMenu();
                handleScrollToSection(item.section);
              }}
              className="text-gray-800 dark:text-gray-200 text-xl cursor-pointer relative group"
            >
              {item.label}
              <span
                className={`
                  absolute left-0 bottom-[-2px] h-[2px] 
                  bg-[#3C493F] dark:bg-[#B3BFB8]
                  transition-all duration-300 
                  ${
                    activeSection === item.section
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </button>
          ))}

          <div className="flex flex-col items-center space-y-2">
            {Object.entries(languages).map(([key, { label, flag }]) => (
              <button
                key={key}
                onClick={() => handleLanguageChange(key)}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <img
                  src={flag}
                  alt={label}
                  className="w-6 h-6 object-cover rounded-full"
                />
                <span className="text-gray-800 dark:text-gray-200 text-sm">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
