'use client';
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
  <span key="phrase1" className="text-2xl indent-8 items-center justify-center font-light text-start md:text-5xl">       
    Freelancer for <span className="font-medium text-sky-500"> UI designe </span>&amp; <span className="font-medium text-violet-500">Web frontend development</span>.
    Skilled in designing and developing.
    Aspiring to combine broad background with strong technical skills to excel as a <span className="font-medium text text-pink-500">Front-End Developer</span>.
    I&apos;m passionate about learning new skills.
  </span>
];

export default function TextmaskAbout() {
  return (
    <div className={styles.container}>
      <MaskText/>
    </div>
  );
}

export function MaskText() {
  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className={styles.body}>
      {
        phrases.map((phrase, index) => (
          <div key={index} className={styles.lineMask}>
            <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        ))
      }
    </div>
  );
}
