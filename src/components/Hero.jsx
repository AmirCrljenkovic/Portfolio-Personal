import React from "react";
import gradientImage from "../img/gradient-icons.png"; // Zorg dat deze afbeelding bestaat

const Hero = () => {
    return (
        <section
            className="relative bg-center bg-cover min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${gradientImage})`,
                backgroundAttachment: "fixed", // Parallax-effect
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welkom bij Mijn Portfolio
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Ontdek mijn projecten en vaardigheden.
                </p>
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    onClick={() => alert("Ontdek meer!")}
                >
                    Ontdek Meer
                </button>
            </div>
        </section>
    );
};

export default Hero;
