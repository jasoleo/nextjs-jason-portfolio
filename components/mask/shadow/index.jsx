import { useScroll, motion, useVelocity, useTransform, useSpring } from 'framer-motion'
import styles from './style.module.scss'
import { useRef } from 'react'

const colors = ["#FA5C40", "#C4A173", "#FAF6EF", "#E0DBD4"]

export default function index({windowHeight}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', '100vh end']
  })
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  return (
    <div ref={container} className={styles.shadowContainer}>
        {[...Array(4)].map( (_, i) => {
          return <Shape key={i} color={colors[i]} zIndex={4 - i} strength={i + 1} scrollVelocity={smoothVelocity} windowHeight={windowHeight}/>
        })}
    </div>
  )
}

const Shape = ({color, zIndex, strength, scrollVelocity, windowHeight}) => {
  const translation = windowHeight * 0.1
  const y = useTransform(scrollVelocity, [-5, 5], [-translation * strength, translation * strength])
  return (
    <motion.div style={{y, zIndex}} className={styles.shadow}>
      <svg fill={color} id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 670">
        <path d="m669.03,328.01c-2.93-7.01-7.54-12.19-14.98-14.61-26.35-8.59-52.67-17.26-79-25.88-17.92-5.86-36.11-11-53.7-17.72-18.22-6.97-35.86-15.67-50.97-28.2-11.86-9.83-23.42-20.27-33.6-31.78-8.88-10.04-16.13-21.64-23.22-33.1-10.96-17.74-16.94-37.56-23.03-57.39-8.31-27.08-17.68-53.84-26.6-80.73-2.62-7.9-4.94-15.93-8.02-23.65-2.91-7.29-7.76-12.9-16.24-14.16C338.71.65,338,0,337,0c-1.33,0-3.67,0-5,0-9.1,2.83-15.54,6.57-18.69,16.21-1.45,4.44-2.86,8.89-4.31,13.32-9.33,28.57-18.34,57.24-28.1,85.66-6.41,18.67-12.67,37.56-21.26,55.25-6.49,13.37-16.54,25.01-25.01,37.41-1.9,2.78-3.48,5.87-5.76,8.28-12.38,13.11-26.6,24.02-41.67,33.82-14.55,9.46-30.07,16.89-46.66,22.17-22.3,7.1-44.47,14.6-66.72,21.84-17.39,5.65-34.71,11.59-52.3,16.56-10.38,2.94-17.89,8.17-21.52,18.47v10c3.13,11.29,11.17,16.44,22,19.81,35.69,11.1,71.05,23.26,106.73,34.39,19.22,6,37.9,13.09,54.73,24.11,10.7,7.01,20.6,15.28,30.59,23.32,15.06,12.11,26.52,27.39,36.93,43.49,11.65,18,19.42,37.76,25.99,58.06,6.6,20.39,13.39,40.72,19.99,61.12,4.86,15.02,9.8,30.02,14.24,45.16,3.01,10.24,8.36,17.99,18.79,21.55h10c12.16-3.73,16.98-13.22,20.25-24.54,4.08-14.1,9.03-27.95,13.56-41.92,7.16-22.07,14.34-44.13,21.4-66.22,5.27-16.49,12.89-31.87,20.49-47.39,10.69-21.83,26.95-38.7,44.56-54.5,17.25-15.47,37.19-27.15,58.82-35.14,26.44-9.77,53.44-18.03,80.22-26.87,18.79-6.2,37.7-12.06,56.39-18.53,6.82-2.36,11.61-7.4,13.36-14.82l.93-6.07"/>
      </svg>
    </motion.div>
  )
}