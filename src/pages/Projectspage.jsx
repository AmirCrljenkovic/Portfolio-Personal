import React from 'react';
import Header from '../components/Header'; // Zorg ervoor dat het pad naar je Header klopt
import Footer from '../components/Footer'; // Zorg ervoor dat het pad naar je Footer klopt

const Projectspage = () => {
    const projects = [
        {
            title: 'Project 1',
            link: 'https://example.com/project1',
            thumbnail: '/path/to/thumbnail1.jpg',
        },
        {
            title: 'Project 2',
            link: 'https://example.com/project2',
            thumbnail: '/path/to/thumbnail2.jpg',
        },
        // Voeg meer projecten toe
    ];

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
            <Header />
            <main className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold md:text-5xl">Mijn Projecten</h1>
                    <p className="mt-4 text-lg">
                        Hier vind je een overzicht van alle projecten waar ik aan heb gewerkt.
                    </p>
                </section>

                {/* Project Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <h2 className="text-white text-lg font-semibold">
                                        {project.title}
                                    </h2>
                                </div>
                            </a>
                        </div>
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Projectspage;
