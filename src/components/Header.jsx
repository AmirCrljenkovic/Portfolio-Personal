import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";

import LogoDarkMode from "../img/logo-darkmode.png";
import LogoLightMode from "../img/logo-lightmode.png";
import NLFlag from "../img/flags/nl.png";
import ENFlag from "../img/flags/en.png";
import DEFlag from "../img/flags/de.png";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const location = useLocation();

  const languages = {
    nl: { label: "NL", flag: NLFlag },
    en: { label: "EN", flag: ENFlag },
    de: { label: "DE", flag: DEFlag },
  };

  
  useEffect(() => {
    
    if (location.pathname.startsWith("/projects")) {
      setActiveSection("projects");
      return; 
    }

    
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "hero"; 
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "nl";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

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
    setActiveSection(section);
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

  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveSection("hero");
    if (location.pathname !== "/") {
      window.location.href = "/#hero";
    } else {
      scroller.scrollTo("hero", {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLanguageDropdownOpen(false);
  };

  const navItems = [
    { label: t("nav.home"), section: "hero" },
    { label: t("nav.about"), section: "about" },
    { label: t("nav.skills"), section: "skills" },
    { label: t("nav.projects"), section: "projects" },
    { label: t("nav.contact"), section: "contact" },
  ];

  const mobileNavItems = [
    { label: t("nav.home"), section: "hero" },
    { label: t("nav.about"), section: "about" },
    { label: t("nav.skills"), section: "skills" },
    { label: t("nav.projects"), section: "projects" },
    { label: t("nav.contact"), section: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#F5F5F5] dark:bg-[#202120] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        <a href="/" onClick={handleLogoClick} className="flex-shrink-0">
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
        </a>

        
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navItems.map((item) => (
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

        
        <div className="hidden md:flex items-center space-x-4">
          
          <div className="relative">
            <input
              id="darkModeToggle"
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="hidden"
            />
            <label
              htmlFor="darkModeToggle"
              className={`
                w-[60px] h-[30px] rounded-full
                shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05)]
                cursor-pointer
                relative
                flex
                items-center
                justify-start
                transition-all
                duration-500
                ${
                  isDarkMode
                    ? "bg-[#B3BFB8] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5)]"
                    : "bg-[#ECECEC]"
                }
              `}
            >
              <div
                className={`
                  w-[26px] h-[26px] rounded-full 
                  bg-white 
                  shadow-[2px_2px_4px_rgba(0,0,0,0.1),-1px_-1px_4px_rgba(0,0,0,0.05)_inset]
                  absolute 
                  top-1/2
                  -translate-y-1/2
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    isDarkMode
                      ? "left-[30px] bg-[#353635] shadow-[2px_2px_6px_rgba(0,0,0,0.5),-2px_-2px_6px_rgba(0,0,0,0.5)_inset]"
                      : "left-[2px]"
                  }
                `}
              >
                
                <svg
                  className={`sun w-4 absolute text-[#FFD600] transition-all duration-500 ${
                    isDarkMode
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[1rem]"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
                <svg
                  className={`moon w-4 absolute text-[#3C493F] transition-all duration-500 ${
                    isDarkMode
                      ? "opacity-0 -translate-y-[1rem]"
                      : "opacity-100 translate-y-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </label>
          </div>

          
          <div className="relative">
            <button
              className="flex items-center space-x-2"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <img
                src={languages[i18n.language]?.flag}
                alt={languages[i18n.language]?.label}
                className="w-6 h-6 object-cover rounded-full"
              />
              <span className="text-gray-800 dark:text-gray-200 text-sm">
                {languages[i18n.language]?.label}
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
          {mobileNavItems.map((item) => (
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

          
          <div className="relative">
            <input
              id="darkModeToggleMobile"
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="hidden"
            />
            <label
              htmlFor="darkModeToggleMobile"
              className={`
                w-[60px] h-[30px] rounded-full
                shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05)]
                cursor-pointer
                relative
                flex
                items-center
                justify-start
                transition-all
                duration-500
                ${
                  isDarkMode
                    ? "bg-[#B3BFB8] shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5)]"
                    : "bg-[#ECECEC]"
                }
              `}
            >
              <div
                className={`
                  w-[26px] h-[26px] rounded-full 
                  bg-white 
                  shadow-[2px_2px_4px_rgba(0,0,0,0.1),-1px_-1px_4px_rgba(0,0,0,0.05)_inset]
                  absolute 
                  top-1/2
                  -translate-y-1/2
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    isDarkMode
                      ? "left-[30px] bg-[#353635] shadow-[2px_2px_6px_rgba(0,0,0,0.5),-2px_-2px_6px_rgba(0,0,0,0.5)_inset]"
                      : "left-[2px]"
                  }
                `}
              >
                <svg
                  className={`sun w-4 absolute text-[#FFD600] transition-all duration-500 ${
                    isDarkMode
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[1rem]"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
                <svg
                  className={`moon w-4 absolute text-[#3C493F] transition-all duration-500 ${
                    isDarkMode
                      ? "opacity-0 -translate-y-[1rem]"
                      : "opacity-100 translate-y-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </label>
          </div>

          
          <div className="flex flex-col items-center space-y-2">
            {Object.entries(languages).map(([key, { label, flag }]) => (
              <button
                key={key}
                onClick={() => {
                  handleLanguageChange(key);
                  toggleMenu();
                }}
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
