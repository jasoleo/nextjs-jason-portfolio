'use client';
import styles from './style.module.scss';
import { useScroll, useTransform, motion, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import useDimension from '../useDimension';

export default function Mask() {  // Renamed from 'index' to 'Mask'

    const container = useRef(null);
    const { height, width } = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "250vh start"]
    });
    const opacity = useTransform(scrollYProgress, [0.6, 1], [0, 0.75]);
    const y = useTransform(scrollYProgress, [0.6, 1], [0, height]);
    const maskSize = useTransform(scrollYProgress, [0, 0.6], [height * 0.66, width * 1.5 + height * 1.5]);
    const maskSizeTemplate = useMotionTemplate`${maskSize}px`;

    return (
        <div>
            <div className='flex p-10 text-5xl items-center justify-center text-center '>
                <p>We have a bold vision for the future of travel where you can better connect with the outdoors and each other. Lightship’s electric travel trailers allow you to visit new corners of the world while doing your part to preserve it.</p>
            </div>
            <div ref={container} className={styles.container}>
                <div className={styles.sticky}>
                    <motion.div 
                        className={styles.mask}
                        style={{y, WebkitMaskSize: maskSizeTemplate}} 
                    >
                        <video autoPlay muted loop>
                            <source src='/medias/video.mp4' type="video/mp4"></source>
                        </video>
                    </motion.div>
                    <motion.div style={{opacity}} className={styles.background}></motion.div>
                </div>
            </div>
        </div>
    );
}
