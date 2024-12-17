import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoDarkMode from "../img/logo-darkmode.png";
import LogoLightMode from "../img/logo-lightmode.png";
import YinYangSVG from "../icons/yinyang.svg";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-[#F5F5F5] dark:bg-gray-900 shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">

                <div className="flex-shrink-0">
                    <Link to="/">
                        
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
                    </Link>
                </div>

                <nav className="hidden md:flex flex-1 justify-center space-x-8">
                    <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        Over Mij
                    </Link>
                    <Link to="/skills" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        Skills
                    </Link>
                    <Link to="/projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        Projecten
                    </Link>
                    <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        Contact
                    </Link>
                </nav>

                {/* Yin-Yang Dark Mode Button */}
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
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#F5F5F5] dark:bg-gray-900 transform transition-transform duration-300 ${
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
                    <Link
                        to="/"
                        className="text-gray-800 dark:text-gray-200 text-xl"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-800 dark:text-gray-200 text-xl"
                        onClick={toggleMenu}
                    >
                        Over Mij
                    </Link>
                    <Link
                        to="/projects"
                        className="text-gray-800 dark:text-gray-200 text-xl"
                        onClick={toggleMenu}
                    >
                        Projecten
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-800 dark:text-gray-200 text-xl"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
