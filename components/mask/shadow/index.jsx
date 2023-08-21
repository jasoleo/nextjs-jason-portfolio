import { useScroll, motion, useVelocity, useTransform, useSpring } from 'framer-motion';
import styles from './style.module.scss';
import { useRef } from 'react';

const colors = ["#FA5C40", "#C4A173", "#FAF6EF", "#E0DBD4"];

export default function MaskShadow({ windowHeight }) {  // Renamed from 'index' to 'MaskShadow'

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', '100vh end']
  });
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  return (
    <div ref={container} className={styles.shadowContainer}>
      {[...Array(4)].map((_, i) => {
        return <Shape key={i} color={colors[i]} zIndex={4 - i} strength={i + 1} scrollVelocity={smoothVelocity} windowHeight={windowHeight} />;
      })}
    </div>
  );
}

const Shape = ({ color, zIndex, strength, scrollVelocity, windowHeight }) => {
  const translation = windowHeight * 0.1;
  const y = useTransform(scrollVelocity, [-5, 5], [-translation * strength, translation * strength]);
  
  return (
    <motion.div style={{ y, zIndex }} className={styles.shadow}>
      <svg fill={color} id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 670">
        <path d="m669.03,328.01c-2.93-7.01-7.54-12.19-14.98-14.61 ..."/>
      </svg>
    </motion.div>
  );
}
