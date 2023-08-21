'use client';
import Header from "@/components/header";
import  Contact from "@/components/ContactUs";
import Image from "next/image";
import styles from './page.module.scss';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/preloader/preloader_pipl';
import Link from "next/link";
import FramerMagnetic from '@/components/framer';
import { MoveUpRight , Briefcase    } from 'lucide-react';

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

        <h3 className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl">WeArePiplWorld</h3>
        
        <div className="grid md:grid-cols-3 py-5 items-start justify-between gap-5 md:gap-20 md:">

        <div className=" divide-zinc-600 grid grid-cols-1 divide-y ">                    
        <h1 className="text-zinc-600 py-5">ROLE</h1>
        <h1 className="py-5">Design, Development, Motion Graphic</h1>
        </div>

        <div className="divide-zinc-600 grid grid-cols-1 divide-y ">                    
        <h1 className="text-zinc-600 py-5">TYPE</h1>
        <h1 className="py-5">Philanthropic community NFT project</h1>
        </div>

        <div className="divide-zinc-600 grid grid-cols-1 divide-y ">                    
        <h1 className="text-zinc-600 py-5">YEAR</h1>
        <h1 className="py-5">2022</h1>
        </div>
         </div>
         

        </div>

        <div className="flex items-center justify-end p-10">
<Link href='https://pipl.world/' rel="noopener noreferrer" target="_blank">
<FramerMagnetic>
  <div className="cursor-pointer rounded-full border text-white hover:text-purple-500 border-white hover:border-purple-500 p-5">
<div className="gap-4  flex items-center justify-center">
  <p className="">Live Site</p>
  <MoveUpRight   />
  </div>
  </div>
</FramerMagnetic>
</Link>
</div>

        <div className="grid items-center justify-center gap-y-40"> <video muted autoPlay loop 
          src="/video/pipl_1.mp4"
          height={1920}
          width={1920}
      alt="video/mp4" /></div>
      
          <h1 className=" pt-12 indent-20 text-3xl sm:text-4xl lg:text-6xl ">WeArePiplWorld is a philanthropic community-driven NFT project, where I took the helm in UI design and front-end development, ensuring a seamless and impactful digital representation for the cause.</h1>
                </div>
     <div className="grid items-center justify-center">
                <video muted autoPlay loop 
                className=""
          src="/video/pipl_2.mp4"
          height={1920}
          width={1920}
      alt="video/mp4" />
      </div>






<div>
        {/* <main className="">
      <div className="h-[10vh]"></div>
      <div ref={gallery} className={styles.gallery}>
      <motion.div 
      className={styles.column}
      style={{y}}
      >
   <div  className={styles.imageContainer}>
    <Image 
          src="/../public/image/proedgelogobg.png"
          fill
      alt="image" />
          </div>
  </motion.div>
  </div>
 

</main> */}

{/* <div>
      <div className="grid items-center justify-center py-52 ">
      <div className="grid grid-cols-2 xl:flex items-center gap-20 justify-center md:p-10 overflow-scroll">
       
       <Image 
          src="/../public/image/3dweb.png"
          height={400}
          width={400}
      alt="image" />
      
       <Image 
          src="/../public/image/ai1.png"
          height={400}
          width={400}
      alt="image" />

       <Image 
          src="/../public/image/phone.png"
          height={400}
          width={400}
      alt="image" />
     
       <Image 
          src="/../public/image/block.png"
          height={400}
          width={400}
      alt="image" />
      
     </div>

     <p className="flex items-center justify-center p-10 text-6xl">Those Logo are buliding & design in Blender.</p>
     </div>
     </div> */}
     
      
    <div className="grid grid-row-1  items-center justify-center hover:text-white p-10">
      <h1 className="text-lg  grid items-center justify-center">Next Project</h1>     
      <h1 className="text-4xl md:text-6xl py-5  grid items-center justify-center ">WeAre</h1>     
      <div className="rounded-2xl overflow-auto  ">
      <Link href="/weare"  >
    <video muted loop autoPlay 
             onMouseOver={event => event.target.play()}
             onMouseOut={event => event.target.pause()}
              src='video/weare.mp4' 
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
  <p className="">Back to Work</p>
  <Briefcase    />
  </div>
  </div>
</FramerMagnetic>
</Link>
</div>

    





                <div className="">
                <Contact  />
                </div>

    </div>
     </div>
    
    );
}
 

export default about;