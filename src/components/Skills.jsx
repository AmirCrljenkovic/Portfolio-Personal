import React, { useState } from "react";
import MountainDivider from "../icons/pyramid-divider.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faWordpress, faSass } from '@fortawesome/free-brands-svg-icons';


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
                <FontAwesomeIcon icon={icon} className="text-4xl group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mt-4">{name}</h3>
            </div>
        </div>
    );
};

// Skills Section
const SkillsSection = () => {
    const skills = [
        { id: 1, name: "HTML", icon: faHtml5 },
        { id: 2, name: "CSS", icon: faCss3Alt },
        { id: 3, name: "JavaScript", icon: faJs },
        { id: 4, name: "React", icon: faReact },
        { id: 5, name: "WordPress", icon: faWordpress },
        { id: 6, name: "SCSS", icon: faSass },
    ];

    return (
        <section id="skills" className="relative bg-gray-50 dark:bg-gray-900 pb-16">
            <div className="-mt-px">
                <img src={MountainDivider} alt="Divider" className="w-full" />
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
