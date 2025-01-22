import React from 'react';
import { HeroParallax } from "../components/ui/HeroParallax";
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
    slug: 'petax-advies',
    thumbnail: thumbnail1,
  },
  {
    title: 'Technoberg Portfolio',
    slug: 'techno-berg',
    thumbnail: thumbnail2,
  },
  {
    title: 'Ajaxzaterdag',
    slug: 'ajax-zaterdag',
    thumbnail: thumbnail3,
  },
  {
    title: 'Youtube Clone',
    slug: 'youtube-clone',
    thumbnail: thumbnail4,
  },
  {
    title: 'Zakelijk-IPTV',
    slug: 'zakelijk-tv',
    thumbnail: thumbnail5,
  },
  {
    title: 'Bank App',
    slug: 'bank-app',
    thumbnail: thumbnail6,
  },
  {
    title: 'Telcel',
    slug: 'tel-cel',
    thumbnail: thumbnail7,
  },
  {
    title: 'Gemeente Amsterdam',
    slug: 'gemeente-amsterdam',
    thumbnail: thumbnail8,
  },
  {
    title: 'Markant Mantelzorg',
    slug: 'markant-zorg',
    thumbnail: thumbnail9,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <HeroParallax products={products} />
    </section>
  );
};

export default Projects;
