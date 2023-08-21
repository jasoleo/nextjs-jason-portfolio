'use client';
import Header from "@/components/header";
import About from "@/components/about";
import Preloader from '@/components/preloader/preloader_work';
import { AnimatePresence } from 'framer-motion';
// import Textmask from "../../components/textmask_about";
import  Contact from "@/components/ContactUs";
import { SheetDemo } from "@/components/sheet";
import Spline from "@/components/Spline";
import { Application, SPEObject } from "@splinetool/runtime";
import Image from "next/image";
import Gallery from "@/components/Gallery/page";
import { Suspense, useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis';

const WorkPage = () => {
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
    
    <div className="relative overflow-hidden py-8"></div>
    <div className="  rounded-3xl border border-zinc-900 m-5 p-5 md:p-20  " id="home">
        <div className="grid text-3xl md:px-10 tracking-tighter indent-32 items-center justify-center font-light text-start md:text-4xl lg:text-5xl xl:text-8xl">
        <p className="pb-5 ">My mission is to amplify the voices of the world&apos;s most visionary companies and creators. Together, we sculpt brands and narratives that reshape how we engage with and perceive the world around us.</p>
        <div className=" rounded-3xl overflow-hidden">
        <Image
      src="/image/workhero.png"
      width={1920}
      height={1920}
      alt="Picture of the author"
      className="w-screen pt-10 "
    />
    </div>
        </div>
                </div>
                <div className="flex md:w-[90vh] p-10 pt-48">
                <h1 className="text-2xl  md:text-5xl">Creating next level
                digital products</h1>
                <p className="w-[45vh] text-gray-500">2021-2023</p></div>
                <Gallery />
                <div className="pt-48">
                <Contact />
                </div>


    {/* <div className=" p-60 px-10">
        <h1 className="indent-8 font-light text-start text-5xl">
        
Freelancer for <span className="font-medium text-sky-500"> UI designe </span>& <span className="font-medium text-violet-500">Web frontend development</span>. Skilled in designing and developing. Aspiring to combine broad background with strong technical skills to excel as a <span className=" font-medium text text-pink-500">Front-End Developer</span>.
I'm passionate about learning new skills.</h1>
    </div> */}
    </div>
    
    );
}
 
export default WorkPage;