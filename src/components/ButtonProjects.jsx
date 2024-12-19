import React from 'react';
import { Link } from 'react-router-dom';

const ButtonProjects = () => {
    return (
        <section className="flex justify-center py-8 bg-gray-100 dark:bg-gray-900">
            <Link
                to="/projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium shadow-md hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300"
            >
                Bekijk Alle Projecten
            </Link>
        </section>
    );
};

export default ButtonProjects;
