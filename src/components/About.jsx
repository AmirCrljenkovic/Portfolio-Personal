import React from "react";

const AboutMe = () => {
    return (
        <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
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
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Hallo! Mijn naam is [Jouw Naam], een gepassioneerde
                        ontwikkelaar met een liefde voor het bouwen van mooie
                        en functionele websites. Ik werk graag met de nieuwste
                        technologieën om innovatieve oplossingen te creëren.
                    </p>
                    <button
                        onClick={() => alert("Ga naar Contact!")}
                        className="bg-[#3C493F] dark:bg-[#7E8D85] text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:opacity-90"
                    >
                        Neem Contact Op
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
