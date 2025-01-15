import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll"; 
import leafsImage from "../img/leafs.png";

import MountainDividerLight from "../icons/mountain-divider.svg";
import MountainDividerDark from "../icons/mountain-divider-dark.svg";
import Logo from "../img/logo-darkmode.png";

const Hero = () => {
  
  const [text, setText] = useState("");
  const [loopIndex, setLoopIndex] = useState(0);   
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const roles = [
    "Front-end Developer",
    "Onderweg naar Full-Stack Developer",
    "Web Designer"
  ];

  
  const TYPING_SPEED = 100;          
  const DELETING_SPEED = 50;         
  const PAUSE_BETWEEN_WORDS = 1000;  

  useEffect(() => {
    
    const currentIndex = loopIndex % roles.length;
    const fullText = roles[currentIndex];

    let timer;

    
    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_BETWEEN_WORDS);

    
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopIndex(loopIndex + 1);

    
    } else {
      timer = setTimeout(() => {
        setText((prevText) => {
          if (!isDeleting) {
            
            return fullText.substring(0, prevText.length + 1);
          } else {
            
            return fullText.substring(0, prevText.length - 1);
          }
        });
      }, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }

    
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, roles]);

  
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

  
  const handleScrollToContact = (e) => {
    e.preventDefault(); 
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500,
      offset: -80, 
    });
  };

  return (
    <section
      id="hero"
      className="relative bg-center bg-cover min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${leafsImage})`,
        backgroundAttachment: "fixed",
        backgroundColor: "#F5F5F5",
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      
      <div className="relative z-10 text-center text-white px-6">
        <div className="mb-6">
          <img src={Logo} alt="Logo" className="h-32 mx-auto" />
        </div>
        
        <h1 className="text-lg md:text-xl font-light text-white mb-4">
          Hello, I'm Amir. A passionate Software Developer.
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {text}
          <span className="inline-block animate-blink">|</span>
        </h2>

        <div className="flex justify-center space-x-4">
          <a
            href="/path/to/your-cv.pdf"
            download
            className="
              bg-[#3C493F] hover:bg-[#2B362E] 
              text-white font-bold py-3 px-6 
              rounded-lg transition duration-300
            "
          >
            Download CV
          </a>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="
              bg-gray-200 hover:bg-gray-300 
              text-black font-bold py-3 px-6 
              rounded-lg transition duration-300
            "
          >
            Contact Me
          </a>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-screen overflow-hidden">
        <img
          src={isDarkMode ? MountainDividerDark : MountainDividerLight}
          alt="Divider"
          className="w-screen transform rotate-180"
        />
      </div>
    </section>
  );
};

export default Hero;
