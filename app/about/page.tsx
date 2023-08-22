'use client';
import Header from "@/components/header";
import About from "@/components/about";
import { AnimatePresence } from 'framer-motion';
import Textmask from "../../components/textmask_about";
import  Contact from "@/components/ContactUs";
import  {SheetDemo}  from "@/components/sheet";
import Lenis from '@studio-freight/lenis';
import { Suspense, useEffect, useState } from "react";
import Preloader from '@/components/preloader/preloader_about';
import FramerMagnetic from '@/components/framer';
import {  Briefcase    } from 'lucide-react';
import Link from "next/link";



const AboutPage = () => {

 
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

  

    return ( 
        <div>
                <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
         </AnimatePresence>
    <Header />
    
    <div className=" py-8"></div>
    <About />
<Textmask />

<div className="flex items-center justify-center p-10">
<Link href='/work' >
<FramerMagnetic>
  <div className="cursor-pointer rounded-full border text-white hover:text-purple-500 border-white hover:border-purple-500 p-5">
<div className="gap-4  flex items-center justify-center">
  <p className="">View My Work</p>
  <Briefcase    />
  </div>
  </div>
</FramerMagnetic>
</Link>
</div>

<Contact />


    {/* <div className=" p-60 px-10">
        <h1 className="indent-8 font-light text-start text-5xl">
        
Freelancer for <span className="font-medium text-sky-500"> UI designe </span>& <span className="font-medium text-violet-500">Web frontend development</span>. Skilled in designing and developing. Aspiring to combine broad background with strong technical skills to excel as a <span className=" font-medium text text-pink-500">Front-End Developer</span>.
I'm passionate about learning new skills.</h1>
    </div> */}
    </div>
    
    );
}
 
export default AboutPage;