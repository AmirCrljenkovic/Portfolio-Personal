'use client';
import { motion, MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useNavigate } from 'react-router-dom';

export const HeroParallax = ({
  products
}: {
  products: {
    title: string;
    slug: string; 
    thumbnail: string;
  }[];
}) => {
  const navigate = useNavigate(); 
  const isMobile = useMediaQuery('(max-width: 768px)');
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(6, 9);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 600]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -600]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  const handleCardClick = (slug: string) => {
    if (slug) {
      navigate(`/projects?slug=${slug}`); 
    } else {
      console.error('Slug is undefined');
    }
  };

  if (isMobile) {
    return (
      <div
        id="projects"
        ref={ref}
        className="
          relative flex flex-col items-center space-y-8 pb-40 pt-20 
          bg-gray-100 dark:bg-[#202120] 
          text-gray-900 dark:text-white
        "
      >
        <Header />
        {products.map((product) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-56 w-11/12 max-w-sm rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleCardClick(product.slug)}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="
              absolute inset-0 bg-black bg-opacity-50 
              flex items-center justify-center 
              opacity-0 hover:opacity-100 
              transition-opacity duration-300
            ">
              <h2 className="text-white text-lg font-semibold">{product.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div
      id="projects"
      ref={ref}
      className="
        relative flex flex-col self-auto overflow-hidden h-auto 
        min-h-[270vh] pb-80 pt-60 antialiased
        bg-gray-100 dark:bg-[#202120]
        text-gray-900 dark:text-white
        [perspective:1000px] [transform-style:preserve-3d]
      "
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-4 md:space-x-20 md:space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
              onClick={() => handleCardClick(product.slug)}
            />
          ))}
        </motion.div>

        <motion.div className="mb-20 flex flex-row space-x-4 md:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
              onClick={() => handleCardClick(product.slug)}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-4 md:space-x-20 md:space-x-reverse mb-60">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
              onClick={() => handleCardClick(product.slug)}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => (
  <div className="relative mx-auto w-full max-w-5xl px-4 py-10 md:py-40">
    <h1 className="font-bold text-4xl text-center md:text-left md:text-7xl text-gray-800 dark:text-white">
      Projects
    </h1>
  </div>
);

export const ProductCard = ({
  product,
  translate,
  onClick
}: {
  product: {
    title: string;
    slug: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  onClick: () => void;
}) => {
  return (
    <motion.div
      style={{
        x: translate
      }}
      whileHover={{ y: -20 }}
      key={product.title}
      onClick={onClick}
      className="group/product relative h-48 w-[55%] md:h-96 md:w-[40rem] shrink-0 mx-auto cursor-pointer"
    >
      <img
        src={product.thumbnail}
        className="absolute inset-0 size-full object-cover object-center"
        alt={product.title}
      />
      <div
        className="
          pointer-events-none absolute inset-0 size-full 
          bg-black dark:bg-[#282828]
          opacity-0 group-hover/product:opacity-80 
          transition-opacity duration-300
        "
      />
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100 transition-opacity">
        {product.title}
      </h2>
    </motion.div>
  );
};
