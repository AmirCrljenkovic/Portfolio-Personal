import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img
                            src="/path/to/your/logo.png"
                            alt="Logo"
                            className="h-10"
                        />
                    </Link>
                </div>

                {/* Menu */}
                <nav className="hidden md:flex flex-1 justify-center space-x-8">
                    <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        Over Mij
                    </Link>
                    <Link to="/projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        Projecten
                    </Link>
                    <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        Contact
                    </Link>
                </nav>

                {/* Dark Mode Switch */}
                <div
                    className={`hidden md:flex w-12 h-6 items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out ${isDarkMode ? 'justify-end' : 'justify-start'
                        }`}
                    onClick={toggleDarkMode}
                >
                    <div
                        className="w-4 h-4 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center text-sm transform transition-transform duration-300 ease-in-out"
                    >
                        {isDarkMode ? '🌙' : '☀️'}
                    </div>
                </div>


                {/* Hamburger Menu (mobile only) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col items-center justify-center space-y-1"
                >
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-100 dark:bg-gray-900 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-gray-800 dark:text-gray-200 text-2xl focus:outline-none"
                >
                    ✖
                </button>

                {/* Menu Links */}
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

                    {/* Dark Mode Switch */}
                    <div
                        className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out`}
                        onClick={() => {
                            toggleDarkMode();
                            setIsMenuOpen(false);
                        }}
                    >
                        <div
                            className="w-4 h-4 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center text-sm transform transition-transform duration-300 ease-in-out"
                        >
                            {isDarkMode ? '🌙' : '☀️'}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
