"use client"

import { fill } from 'lodash';
import Image from 'next/image'
import Spline from "./Spline";
import { Application, SPEObject } from "@splinetool/runtime";
import anime from "animejs";
import { useRef } from "react";




const aboutHero = () => {

  // const cube = useRef<SPEObject>();

  // function moveCube(direction: 'x' | 'y' | 'z') {
  //   if (!cube.current) {
  //     return;
  //   }

  //   const newPosition = { ...cube.current.position };
  //   switch (direction) {
  //     case 'x':
  //       newPosition.x += 100;
  //       break;
  //     case 'y':
  //       newPosition.y += 100;
  //       break;
  //     case 'z':
  //       newPosition.z += 100;
  //       break;
  //   }

  //   anime({
  //     targets: cube.current.position,
  //     ...newPosition,
  //     duration: 500,
  //   });
  // }


    return (
        <div className='relative overflow-hidden ' >
          {/* <Image className=' object-cover scale-[1.4]' 
            src="/image/jason3.jpg"
            fill={true}
            alt="background"
            />  */}
            {/* <div className='h-[100vh] '   >
 <Spline className='' scene="https://prod.spline.design/ni4468N2brPoJUwp/scene.splinecode"   onLoad={(spline: Application) => {
        
      }} /></div> */}
      
        <div className=" overflow-hidden  rounded-3xl border border-zinc-400 m-5  " id="home">

      

        <div className="   " >      
        <div className=" flex justify-center items-center text-white p-10  ">
          <p className=" ring-1 ring-white  rounded-lg p-2 py-1 ">About</p>
          </div>
          <div className="flex flex-col text-3xl sm:text-6xl justify-center items-center text-white">
          <p className=" drop-shadow-xl font-light tracking-tight ">Hi, I&apos;m Jason</p>
          </div>
          </div>

          <div className=" overflow-hidden ">
          <div className=' flex z-5 justify-center items-center  h-screen -m-40 scale-75 md:m-0 md:scale-100 md:w-screen ' >
        <Spline className='' scene="https://prod.spline.design/RO6E0rHX4z66Oi7n/scene.splinecode" />
        </div>
        </div>
        
          </div>
          
          </div>
      );
}
 
export default aboutHero;