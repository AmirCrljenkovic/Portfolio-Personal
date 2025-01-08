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

  const languages = {
    nl: { label: "NL", flag: NLFlag },
    en: { label: "EN", flag: ENFlag },
    de: { label: "DE", flag: DEFlag },
  };

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

  const handleScrollToSection = (section) => {
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

  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full bg-[#F5F5F5] dark:bg-[#202120] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        <div className="flex-shrink-0">
          <RouterLink to="/">
            
            <img
              src={LogoLightMode}
              alt="Logo Light Mode"
              className="h-16 dark:hidden"
            />
            
            <img
              src={LogoDarkMode}
              alt="Logo Dark Mode"
              className="h-16 hidden dark:block"
            />
          </RouterLink>
        </div>

        
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

        
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <button
            onClick={() => handleScrollToSection("hero")}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer"
          >
            Over Mij
          </button>
          <button
            onClick={() => handleScrollToSection("skills")}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => handleScrollToSection("projects")}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer"
          >
            Projecten
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        
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
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-700 shadow-md rounded-md overflow-hidden z-10 w-28">
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

        
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center space-y-1"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#F5F5F5] dark:bg-[#202120] transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 dark:text-gray-200 text-2xl focus:outline-none"
        >
          ✖
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={() => {
              toggleMenu();
              handleScrollToSection("hero");
            }}
            className="text-gray-800 dark:text-gray-200 text-xl cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => {
              toggleMenu();
              handleScrollToSection("about");
            }}
            className="text-gray-800 dark:text-gray-200 text-xl cursor-pointer"
          >
            Over Mij
          </button>
          <button
            onClick={() => {
              toggleMenu();
              handleScrollToSection("skills");
            }}
            className="text-gray-800 dark:text-gray-200 text-xl cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => {
              toggleMenu();
              handleScrollToSection("projects");
            }}
            className="text-gray-800 dark:text-gray-200 text-xl cursor-pointer"
          >
            Projecten
          </button>
          <button
            onClick={() => {
              toggleMenu();
              handleScrollToSection("contact");
            }}
            className="text-gray-800 dark:text-gray-200 text-xl cursor-pointer"
          >
            Contact
          </button>

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
