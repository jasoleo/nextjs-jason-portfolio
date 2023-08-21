'use client'
import styles from './page.module.scss'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
  "Design not just for what the eye sees",
  "but for the experience the user feels."
]

export default function Textmask() {

  return (
    <div className={styles.container}>
      <MaskText/>
      
    </div>
  )
}

export function MaskText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className={styles.body}>
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className={styles.lineMask}>
            <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}