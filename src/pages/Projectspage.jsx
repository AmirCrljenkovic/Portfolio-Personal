import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import client from "../../contentfulClient";


const Projectspage = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    // Slider instellingen
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await client.getEntries({ content_type: "portfolio" });
                const formattedProjects = response.items.map((item) => ({
                    title: item.fields.title,
                    languages: item.fields.languages,
                    description: item.fields.description,
                    idea: item.fields.idea,
                    functions: item.fields.functions,
                    website: item.fields.website,
                    images: item.fields.images ? item.fields.images.map((img) => img.fields.file.url) : [],
                }));
                setProjects(formattedProjects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#18191B] text-gray-900 dark:text-gray-100">

            <div className="pt-40 pb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center dark:text-white">
                    Mijn Projecten
                </h1>
            </div>


            <div className="container mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-xl"
                            onClick={() => openModal(project)}
                        >
                            {project.images[0] && (
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="rounded-t-lg w-full object-cover h-40"
                                />
                            )}
                            <div className="p-6">
                                <p className="text-sm text-[#F2911C] font-semibold">{project.languages}</p>
                                <h2 className="text-2xl font-bold mt-2 text-black dark:text-white">
                                    {project.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 relative w-full max-w-4xl max-h-full overflow-auto">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-black dark:text-white text-4xl font-bold"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
                            <Slider {...sliderSettings} className="w-full mb-6">
                                {(selectedProject.images || []).map((img, idx) => (
                                    <div key={idx} className="flex justify-center">
                                        <img
                                            src={img}
                                            alt={`Slide ${idx + 1}`}
                                            className="rounded-lg w-full max-h-[70vh] object-contain"
                                        />
                                    </div>
                                ))}
                            </Slider>
                            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                            <p className="text-lg text-[#F2911C] font-semibold mb-2">{selectedProject.languages}</p>
                            <p className="text-xl mb-6">{selectedProject.description}</p>
                            <h3 className="text-2xl font-bold mb-4">Het Idee:</h3>
                            <p className="text-lg mb-6">{selectedProject.idea}</p>
                            <h3 className="text-2xl font-bold mb-4">Functies:</h3>
                            {Array.isArray(selectedProject.functions) ? (
                                <ul className="mb-6 text-lg space-y-2">
                                    {selectedProject.functions.map((func, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="mr-2 text-[#F2911C]">•</span>
                                            <span>{func}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mb-6 text-lg">{selectedProject.functions}</p>
                            )}
                            {selectedProject.website && (
                                <a
                                    href={selectedProject.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 bg-[#F2911C] text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-[#E05A00] transition"
                                >
                                    Bezoek Website
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projectspage;
