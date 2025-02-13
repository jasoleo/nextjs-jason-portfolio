'use client';
import Header from "@/components/header";
import  Contact from "@/components/ContactUs";
import Image from "next/image";
import styles from './page.module.scss';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/preloader/preloader_proedu';
import Link from "next/link";
import FramerMagnetic from '@/components/framer';
import { MoveUpRight, Briefcase    } from 'lucide-react';


const Proedu = () => {

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect( () => {
    (
      async () => {
          // const LocomotiveScroll = (await import('locomotive-scroll')).default
          // const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }

      
    )()
  }, [])

  useEffect( () => {

    const lenis = new Lenis()

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)}

    requestAnimationFrame(raf)
  }, [])


  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1])


  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time:any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

    return ( 
        
    <div>

      

     <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
         </AnimatePresence>



    <Header />
    
    <div className="py-8"></div>
    
    <div className="rounded-3xl border border-zinc-900 m-5 p-5 py-10 md:p-20 lg:p-" id="home">

        <div className="tracking-tighter items-center justify-center">

        <h3 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">ProEdu</h3>
        
        <div className="grid md:grid-cols-3 py-5 items-start justify-between gap-5 md:gap-20 md:py-20">

        <div className=" divide-zinc-600 grid grid-cols-1 divide-y ">                    
        <h1 className="text-zinc-600 py-5">ROLE</h1>
        <h1 className="py-5">Design & Development</h1>
        </div>

        <div className="divide-zinc-600 grid grid-cols-1 divide-y ">                    
        <h1 className="text-zinc-600 py-5">TYPE</h1>
        <h1 className="py-5">Online E-Learning Platform</h1>
        </div>

        <div className="divide-zinc-600 grid grid-cols-1 divide-y ">                    
        <h1 className="text-zinc-600 py-5">YEAR</h1>
        <h1 className="py-5">2023</h1>
        </div>
         </div>
         

        </div>
        <div> <Image 
          src="/image/proedu1440.png"
          height={1920}
          width={1920}
      alt="image" /></div>
          <h1 className="pt-12 indent-20 text-3xl">ProEdu is an integrated online e-learning platform with e-commerce features, where I played a pivotal role in both UI design and front-end development, ensuring a seamless and user-friendly experience for learners and shoppers alike.</h1>
                </div>
       
       
               <div>


        <main className="">
      <div className="h-[10vh]"></div>
      <div ref={gallery} className={styles.gallery}>
      <motion.div 
      className={styles.column}
      style={{y}}
      >
   <div  className={styles.imageContainer}>
    <Image 
          src="/image/proedulong.png"
          fill
      alt="image" />
          </div>
  </motion.div>
        
      </div>
      <div className="h-[10vh]"></div>
      
    <div className="grid grid-row-1  items-center justify-center ">
      <h1 className="text-lg  grid items-center justify-center">Next Project</h1>     
      <h1 className="text-6xl py-5 grid items-center justify-center">ProEdge</h1>     
      <div className="rounded-2xl overflow-auto">
      <Link href="/proedge"  >
    <video muted loop autoPlay playsInline
           onMouseOver={event => {
            const target = event.target as HTMLVideoElement;
            target.play();
          }}
          onMouseOut={event => {
            const target = event.target as HTMLVideoElement;
            target.pause();
          }}
              src='video/proedge_1.webm' 
              height={500}
              width={500}
             />
              </Link>
              </div>
    </div>

    <div className="flex items-center justify-center p-10">
<Link href='/work' >
<FramerMagnetic>
  <div className="cursor-pointer rounded-full border text-white hover:text-purple-500 border-white hover:border-purple-500 p-5">
<div className="gap-4  flex items-center justify-center">
  <p className="">Back to Work Page</p>
  <Briefcase    />
  </div>
  </div>
</FramerMagnetic>
</Link>
</div>

    </main>
    





                <div>
                <Contact  />
                </div>

    </div>
     </div>
    
    );
}
 

export default Proedu;