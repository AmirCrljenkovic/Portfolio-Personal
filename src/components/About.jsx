import React from "react";
import { scroller } from "react-scroll"; 

const AboutMe = () => {
  
  const handleScrollToContact = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      duration: 500, 
      offset: -80,  
    });
  };

  return (
    <section
      id="about"
      className="py-16 bg-gray-100 dark:bg-[#202120] dark:text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/path-to-your-image.jpg"
            alt="About Me"
            className="rounded-lg shadow-lg w-80 md:w-full"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Over Mij
          </h2>
          <p className="text-lg text-gray-600 dark:text-white mb-6">
          Ik ben Amir Crljenkovic, 20 jaar jong en woon in Purmerend. 
          Op dit moment focus ik me op front-end development, 
          maar ik ga graag voor een full-stack toekomst. 
          Naast het bouwen van interactieve webapplicaties
          luister ik veel muziek en verzamel ik niche parfums. 
          Elke geur heeft z’n eigen karakter—net als iedere regel code.
          </p>
          <button
            onClick={handleScrollToContact} 
            className="
              bg-[#3C493F] text-white   /* Light mode */
              dark:bg-[#7E8D85]        /* Dark mode button background */
              dark:text-white         /* Dark mode button text */
              font-bold py-3 px-6 rounded-lg transition duration-300 hover:opacity-90
            "
          >
            Neem Contact Op
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
