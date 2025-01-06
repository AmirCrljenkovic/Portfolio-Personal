import React, { useState } from "react";
import MountainDivider from "../icons/pyramid-divider.svg";

const SkillCard = ({ name, icon }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { offsetWidth, offsetHeight } = target;

        const xTilt = ((offsetX - offsetWidth / 2) / offsetWidth) * 25;
        const yTilt = ((offsetY - offsetHeight / 2) / offsetHeight) * -25;

        setTilt({ x: xTilt, y: yTilt });
    };

    const resetTilt = () => setTilt({ x: 0, y: 0 });

    return (
        <div
            className="relative group rounded-lg cursor-pointer overflow-hidden transition-transform duration-300 shadow-md"
            style={{
                height: "180px",
                backgroundColor: "#F5F5F5",
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.05)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
        >
            <div className="absolute inset-0 bg-[#F5F5F5] dark:bg-[#222831] transition-colors duration-300"></div>

            {/* Hover-effect */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-800 dark:text-gray-200">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold">{name}</h3>
            </div>
        </div>
    );
};

const SkillsSection = () => {
    const skills = [
        { id: 1, name: "HTML", icon: "📄" },
        { id: 2, name: "CSS", icon: "🎨" },
        { id: 3, name: "JavaScript", icon: "🟨" },
        { id: 4, name: "React", icon: "⚛️" },
        { id: 5, name: "Tailwind CSS", icon: "🌬️" },
        { id: 6, name: "UX/UI Design", icon: "🎯" },
        { id: 7, name: "WordPress", icon: "🔧" },
        { id: 8, name: "SCSS", icon: "💅" },
        { id: 9, name: "Vite.js", icon: "⚡" },
    ];

    return (
        <section
            id="skills"
            className="relative bg-gray-50 dark:bg-gray-900 pb-16" 
        >
            <div className="-mt-px">
                <img
                    src={MountainDivider}
                    alt="Divider"
                    className="w-full"
                />
            </div>

            <div className="relative container mx-auto px-6 pt-16">
                <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                    Mijn Vaardigheden
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill) => (
                        <SkillCard key={skill.id} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
