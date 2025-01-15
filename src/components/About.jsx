
import React from "react";
import { scroller } from "react-scroll";

import { useTranslation } from "react-i18next";

const AboutMe = () => {
  
  const { t } = useTranslation();

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
            {t("aboutMe.title")}
          </h2>

          
          <p className="text-lg text-gray-600 dark:text-white mb-6">
            {t("aboutMe.text")}
          </p>

          
          <button
            onClick={handleScrollToContact}
            className="
              bg-[#3C493F] text-white  
              dark:bg-[#7E8D85]        
              dark:text-white         
              font-bold py-3 px-6 rounded-lg transition duration-300 hover:opacity-90
            "
          >
            {t("aboutMe.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
