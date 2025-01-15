import React from 'react';
import linkedinIcon from '../img/linkedin.png';
import githubIconLight from '../img/githubblack.png';
import githubIconDark from '../img/githubwhite.png';
import logoLight from '../img/logo-lightmode.png';
import logoDark from '../img/logo-darkmode.png';

const Footer = () => {
  return (
    <footer 
      className="
        bg-[#F5F5F5] 
        dark:bg-[#121212] 
        text-gray-800 
        dark:text-gray-200 
        py-6 
        transition-colors 
        duration-300 
        ease-in-out
      "
    >
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logoLight}
            alt="Logo Light Mode"
            className="w-24 h-auto dark:hidden"
          />
          <img
            src={logoDark}
            alt="Logo Dark Mode"
            className="w-24 h-auto hidden dark:block"
          />
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-center text-sm">
          © {new Date().getFullYear()} Amir Crljenkovic. Alle rechten voorbehouden.
        </div>

        {/* Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/amir-crljenkovic-600309272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8 hover:scale-110 transition-transform"
            />
          </a>

          <a
            href="https://github.com/AmirCrljenkovic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIconLight}
              alt="GitHub Light Mode"
              className="w-8 h-8 hover:scale-110 transition-transform dark:hidden"
            />
            <img
              src={githubIconDark}
              alt="GitHub Dark Mode"
              className="w-8 h-8 hover:scale-110 transition-transform hidden dark:block"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
