'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center tracking-widest items-center flex-col relative z-10 -top-[30px]">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          ArtQiv
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.1, 0.8)}
        className="relative w-full md:-mt-[10px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-[140px] z-[0] -top-[20px]" />
        <img
          src="/beeple_01.jpg"
          alt="cover"
          className="w-full sm:h-[700px] h-[350px] object-cover rounded-[140px] z-10 relative -top-[1px]"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[7-px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>~
    </motion.div>
  </section>
);

export default Hero;
