import React from 'react';
import { HeroParallax } from "../components/ui/HeroParallax";
import gradientIcons from '../img/gradient-icons.png';



const products = [
  {
    title: 'Mern Memories',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: gradientIcons
  },
  {
    title: 'Next Event',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: gradientIcons
  },
  {
    title: 'Devspace',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: gradientIcons
  },
  {
    title: 'Google Clone',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: gradientIcons
  },
  {
    title: 'Portfolio V1',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: gradientIcons
  },
  {
    title: 'Dresscode',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: gradientIcons
  },
  {
    title: 'Portfolio V2',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: gradientIcons
  },
  {
    title: 'Music App',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: gradientIcons
  },
  {
    title: 'Artemis',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: gradientIcons
  }
];

const Projects = () => {
  return <HeroParallax products={products} />;
};

export default Projects;
