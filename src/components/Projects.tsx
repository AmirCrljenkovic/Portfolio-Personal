import React from 'react';
import { HeroParallax } from "../components/ui/HeroParallax";
import gradientIcons from '../img/gradient-icons.png';
import thumbnail1 from '../img/covers/petax1.png';
import thumbnail2 from '../img/covers/technowhite1.png';
import thumbnail3 from '../img/covers/ajax1.png';
import thumbnail4 from '../img/covers/yt1.png';
import thumbnail5 from '../img/covers/zakelijk1.png';
import thumbnail6 from '../img/covers/bank1.png';
import thumbnail7 from '../img/covers/telcel1.png';
import thumbnail8 from '../img/covers/amsterdam1.png';
import thumbnail9 from '../img/covers/markant1.png';



const products = [
  {
    title: 'Petaxadvies',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: thumbnail1
  },
  {
    title: 'Technoberg Portfolio',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: thumbnail2
  },
  {
    title: 'Ajaxzaterdag',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: thumbnail3
  },
  {
    title: 'Youtube Clone',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: thumbnail4
  },
  {
    title: 'Zakelijk-IPTV',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: thumbnail5
  },
  {
    title: 'Bank App',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: thumbnail6
  },
  {
    title: 'Telcel',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: thumbnail7
  },
  {
    title: 'Gemeente Amsterdam',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: thumbnail8
  },
  {
    title: 'Markant Mantelzorg',
    link: 'https://github.com/AmirCrljenkovic/Portfolio-Personal',
    thumbnail: thumbnail9
  }
];

const Projects = () => {
  return <HeroParallax products={products} />;
};

export default Projects;
