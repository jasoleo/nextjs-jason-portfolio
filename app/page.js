'use client';
import Hero from "@/components/Hero";
import  Contact from "@/components/ContactUs"
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import Preloader from '../components/preloader';
import { AnimatePresence } from 'framer-motion';
import React from "react";
import Lenis from '@studio-freight/lenis';
import Double from '@/components/Double';
import styles from './page.module.scss';
import { projects } from '../components/data';
import Textmask from "../components/textmask";
import Link from "next/link";
import FramerMagnetic from '@/components/framer';
import {  Briefcase    } from 'lucide-react';


export default function Home(index ,href ) {

 

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
  

  
  return (
    
    <div className="">
     
     <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
         </AnimatePresence>
        
      <Header />
   
      <div className=" p-10"></div>
      <Hero />
      <div className="font-abc flex  justify-center items-center text-white p-10">
      <p className="ring-[0.3px] ring-white  rounded-lg p-2 py-1">Skills</p>
      </div>
    <ServiceCard />
   
   <div className="font-abc flex my- justify-center items-center text-white p-10">
      <p className="ring-[0.3px] ring-white  rounded-lg p-2 py-1">Recent Work</p>
      </div>
   <div className={styles.gallery}>
   
       <div onMouseEnter={() => {({active: true, index,})}} onMouseLeave={() => {({active: false, index})}} className={styles.project} > 
       
      
        
       {/* <Link href='/work' > */}
       <Double  projects={[projects[0] , projects[1]]} />               
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        {/* </Link> */}
       
        
      </div>
      </div>

      <div className="flex items-center justify-center p-10 mt-20 md:mt-0">
<Link href='/work' >
<FramerMagnetic>
  <div className="cursor-pointer rounded-full border text-white hover:text-purple-500 border-white hover:border-purple-500 p-5">
<div className="gap-4  flex items-center justify-center">
  <p className="">View All My Work</p>
  <Briefcase    />
  </div>
  </div>
</FramerMagnetic>
</Link>
</div>
<Textmask />
      
   <Contact />
   
    </div>
    
  )
}

