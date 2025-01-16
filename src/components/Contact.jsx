import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import MountainDividerLight from "../icons/triangle-asymmetrical-divider-inverse.svg";
import MountainDividerDark from "../icons/triangle-asymmetrical-divider-inverse-dark.svg";

const Contact = () => {
  const { t } = useTranslation();

  const [isDarkMode, setIsDarkMode] = useState(false);

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
    <section id="contact" className="relative py-16 bg-white dark:bg-[#121212]">
      <div className="absolute top-0 left-0 w-full -mt-1">
        <img
          src={isDarkMode ? MountainDividerDark : MountainDividerLight}
          alt="Divider"
          className="w-full"
        />
      </div>

      <div className="container mx-auto px-6 pt-16">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {t("contact.title")}
        </h2>

        <div className="w-full lg:w-1/2 mx-auto">
          <form
            action="https://formspree.io/f/mkggperr"
            method="POST"
            className="bg-gray-100 dark:bg-[#282828] p-8 rounded-md shadow-md space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                className="
                  mt-2 p-3 w-full border border-gray-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-[#3C493F]
                  dark:focus:ring-[#7E8D85]
                  dark:bg-[#353635] dark:text-white
                  dark:border-gray-600
                "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("contact.email")}
              </label>
              <input
                type="email"
                name="email"
                className="
                  mt-2 p-3 w-full border border-gray-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-[#3C493F]
                  dark:focus:ring-[#7E8D85]
                  dark:bg-[#353635] dark:text-white
                  dark:border-gray-600
                "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                name="phone"
                className="
                  mt-2 p-3 w-full border border-gray-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-[#3C493F]
                  dark:focus:ring-[#7E8D85]
                  dark:bg-[#353635] dark:text-white
                  dark:border-gray-600
                "
                placeholder={`(${t("contact.phoneOptional")})`}
              />
              <p className="text-sm text-gray-500 mt-1">{t("contact.phoneOptional")}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                rows="4"
                className="
                  mt-2 p-3 w-full border border-gray-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-[#3C493F]
                  dark:focus:ring-[#7E8D85]
                  dark:bg-[#353635] dark:text-white
                  dark:border-gray-600
                "
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                w-full bg-[#3C493F] dark:bg-[#7E8D85]
                hover:opacity-90 text-white py-3
                rounded-md transition
              "
            >
              {t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
