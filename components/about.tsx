"use client"

import { fill } from 'lodash';
import Image from 'next/image'
import Spline from "./Spline";
import { Application, SPEObject } from "@splinetool/runtime";
import anime from "animejs";
import { useRef } from "react";




const aboutHero = () => {

  const cube = useRef<SPEObject>();

  function moveCube(direction: 'x' | 'y' | 'z') {
    if (!cube.current) {
      return;
    }

    const newPosition = { ...cube.current.position };
    switch (direction) {
      case 'x':
        newPosition.x += 100;
        break;
      case 'y':
        newPosition.y += 100;
        break;
      case 'z':
        newPosition.z += 100;
        break;
    }

    anime({
      targets: cube.current.position,
      ...newPosition,
      duration: 500,
    });
  }


    return (
        <div className='relative overflow-hidden ' >
          {/* <Image className=' object-cover scale-[1.4]' 
            src="/image/jason3.jpg"
            fill={true}
            alt="background"
            />  */}
            <div className='h-[100vh] '   >
 <Spline className='' scene="https://prod.spline.design/4FjTuSjxI5SWmvyZ/scene.splinecode"   onLoad={(spline: Application) => {
        cube.current = spline.findObjectByName('Cube');
      }} /></div>
      
        <div className="absolute inset-x-0 inset-y-0 rounded-3xl border border-zinc-400 m-5  " id="home">

      

        <div className=" relative  " >      
        <div className=" flex justify-center items-center text-white p-10  ">
          <p className=" ring-1 ring-white  rounded-lg p-2 py-1 ">About</p>
          </div>
          <div className="flex flex-col text-3xl sm:text-6xl justify-center items-center text-white">
          <p className=" drop-shadow-xl font-light tracking-tight ">Hi, I'm Jason</p>
          
         
          </div>
       
          </div>
          <div className=' absolute justify-center inset-0 z-5 scale-75 ml-[-30vh] pt-32 sm:ml-[-15vh] w-max h-[130vh] -translate-y-32
          md:scale-100 md:ml-0 md:w-screen md:translate-y-0 md:h-[100vh] ' >
        <Spline className='' scene="https://prod.spline.design/RO6E0rHX4z66Oi7n/scene.splinecode" />
        </div>
        
          </div>
          
          </div>
      );
}
 
export default aboutHero;