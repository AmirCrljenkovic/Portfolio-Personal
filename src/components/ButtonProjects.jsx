
import React from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const ButtonProjects = () => {
  
  const { t } = useTranslation();

  return (
    <section className="flex justify-center py-8 bg-gray-100 dark:bg-[#202120] text-gray-900 dark:text-white">
      <Link
        to="/projects"
        className="
          px-8 py-4 
          bg-[#3C493F] dark:bg-[#7E8D85] 
          text-white 
          rounded-lg text-lg font-medium shadow-md 
          hover:opacity-90 transition-colors duration-300
        "
      >
        
        {t("buttonProjects.label")}
      </Link>
    </section>
  );
};

export default ButtonProjects;
