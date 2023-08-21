'use client';
import Header from "@/components/header";
import  Contact from "@/components/ContactUs";
import Image from "next/image";
import styles from './page.module.scss';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/preloader/preloader_panda';
import Link from "next/link";
import VimeoVideo from '@/components/VimeoVideo';
import FramerMagnetic from '@/components/framer';
import {  Briefcase    } from 'lucide-react';

const about = () => {

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

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

    function raf(time) {
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

    const raf = (time) => {
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
    
    <div className="rounded-3xl border border-zinc-900 m-5 p-5 py-10 md:p-20 " id="home ">

        <div className="tracking-tighter items-center justify-center">

        <h3 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">Panda Warrior</h3>
        
        <div className="grid md:grid-cols-3 py-5 items-start justify-between gap-5 md:gap-20 md:py-20">

        <div className=" divide-zinc-600 grid grid-cols-1 divide-y ">                    
        <h1 className="text-zinc-600 py-5">ROLE</h1>
        <h1 className="py-5 ">Design, Development, 3D Modeling & 3D Animation</h1>
        </div>

        <div className="divide-zinc-600 grid grid-cols-1 divide-y ">                    
        <h1 className="text-zinc-600 py-5">TYPE</h1>
        <h1 className="py-5">Blockchain GameFi</h1>
        </div>

        <div className="divide-zinc-600 grid grid-cols-1 divide-y ">                    
        <h1 className="text-zinc-600 py-5">YEAR</h1>
        <h1 className="py-5">2023</h1>
        </div>
         </div>
         

        </div>
        <div className="grid items-center justify-center gap-y-40"> <video muted autoPlay loop 
          src="/video/panda.mp4"
          height={1920}
          width={1920}
      alt="video/mp4" /></div>
          <h1 className=" pt-12 indent-20 text-2xl sm:text-4xl lg:text-6xl ">Panda Warrior is a GameFi project on the blockchain, where I spearheaded the UI design, front-end development, NFT Design, and designed detailed 3D models to enhance the gaming experience and interface.</h1>
                </div>

     <div className="md:flex py-10">

     <div className="grid items-center justify-center">
                <video muted autoPlay loop 
                className=""
          src="/video/panda_mobile.mp4"
          height={1080}
          width={1920}
      alt="video/mp4" />
      </div>
      

     <div className="grid items-center justify-center">
                <video muted autoPlay loop 
                className=""
          src="/video/panda_mobile2.mp4"
          height={1080}
          width={1920}
      alt="video/mp4" />
      </div>

     <div className="grid items-center justify-center">
                <video muted autoPlay loop 
                className=""
          src="/video/panda_mobile3.mp4"
          height={1080}
          width={1920}
      alt="video/mp4" />
      </div>

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
          src="/../public/image/pandabg.png"
          fill
      alt="image" />
          </div>
  </motion.div>
  </div>
  </main>
 
<div className="">
  
<VimeoVideo videoId="831427164" />

</div>


<div>
      <div className="grid items-center justify-center  ">
      <div className="grid grid-cols-3 items-center justify-center lg:p-0 overflow-x-scroll no-scrollbar">
       
       <Image className=""
          src="/../public/image/NFT1.png"
          height={500}
          width={500}
      alt="image" />
      
       <Image 
          src="/../public/image/NFT2.png"
          height={500}
          width={500}
      alt="image" />

       <Image 
          src="/../public/image/NFT3.png"
          height={500}
          width={500}
      alt="image" />
     
       <Image 
          src="/../public/image/NFT6.png"
          height={500}
          width={500}
      alt="image" />
      
     
       <Image 
          src="/../public/image/NFT7.png"
          height={500}
          width={500}
      alt="image" />
      
     
       <Image 
          src="/../public/image/NFT8.png"
          height={500}
          width={500}
      alt="image" />
      
     
      
     </div>
<div>
     <p className="flex items-center justify-center p-10 text-5xl">Those NFT are buliding & design in Blender.</p>
     </div>
     </div>
     </div>
     
      
    <div className="grid grid-row-1 pt-36 items-center justify-center hover:text-white ">
      <h1 className="text-lg  grid items-center justify-center">Next Project</h1>     
      <h1 className="text-4xl md:text-6xl py-5  grid items-center justify-center ">WeArePiplWorld</h1>     
      <div className="rounded-2xl overflow-auto  ">
      <Link href="/pipl"  >
    <video muted loop autoPlay 
             onMouseOver={event => event.target.play()}
             onMouseOut={event => event.target.pause()}
              src='video/pipl_1.mp4' 
              height={500}
              width={500}
              type="video/mp4"/>
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
    
    
    

 



                <div>
                <Contact  />
                </div>

    </div>
     </div>
    
    );
}
 

export default about;