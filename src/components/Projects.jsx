import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
    { id: 1, title: "Project 1", img: "/path-to-your-image1.jpg" },
    { id: 2, title: "Project 2", img: "/path-to-your-image2.jpg" },
    { id: 3, title: "Project 3", img: "/path-to-your-image3.jpg" },
    { id: 4, title: "Project 4", img: "/path-to-your-image4.jpg" },
    { id: 5, title: "Project 5", img: "/path-to-your-image5.jpg" },
    { id: 6, title: "Project 6", img: "/path-to-your-image6.jpg" },
];

const ProjectCard = ({ project, scrollYProgress, index }) => {
    // Transformaties voor elke kaart
    const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]); // Draai van scheef naar recht
    const translateY = useTransform(scrollYProgress, [0, 1], [200, 0]); // Beweeg van beneden naar recht
    const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.7, 1]); // Fade-in

    return (
        <motion.div
            style={{
                rotateX,
                y: translateY,
                opacity,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
            className="w-80 h-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
            <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-gray-800 dark:text-white">
                {project.title}
            </h3>
        </motion.div>
    );
};

const Projects = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef, // Observeer de scrollpositie van de sectie
        offset: ["start end", "center center"], // Begin animatie bij binnenkomst
    });

    return (
        <section
            ref={containerRef}
            className="relative bg-gray-50 dark:bg-gray-900 py-40"
        >
            <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-white">
                Mijn Projecten
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        scrollYProgress={scrollYProgress}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
