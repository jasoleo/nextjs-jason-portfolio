"use client"

import Head from "next/head";
import Spline from "./Spline";
import { Application, SPEObject } from "@splinetool/runtime";
import { useRef } from "react";
import anime from "animejs";



export default function Hero() {
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
    <>
 
    
    <div className="rounded-3xl border  border-zinc-900 m-5 my-0 " id="home">
    <div className="  " >
      {/* <div className=" absolute top-0 left-0 right-0  bg-blue-600 h-screen  w-screen opacity-50 sm:h-0 "></div> */}
      <div className=" font-abc flex  justify-center items-center text-white">
        <iframe className=" w-screen h-[45vh] sm:h-screen  rounded-3xl border  border-zinc-500    " src="https://cables.gl/view/1ZxI4w"></iframe>
      {/* <div className=" ring-[0.3px] ring-white  rounded-lg p-2 py-1">Portfolio 2023</div> */}
      
      </div>
      {/* <div className="flex flex-col text-8xl -space-y-4 lg:-space-y-8 mt-20  justify-center items-center text-white  md:text-[12rem]  "> */}
      {/* <p className=" font-light tracking-tight ">JASON</p>
      <p className="font-light tracking-tight ">TSE</p> */}
      
      {/* </div> */}

      
      {/* <Spline className="overflow-hidden flex -mt-[120px] justify-center items-center md:-mt-44"
      scene="https://prod.spline.design/tIVQ2Yfr-K6o6grb/scene.splinecode"
      onLoad={(spline: Application) => {
        cube.current = spline.findObjectByName('Cube');
      }} /> */}
      
    </div>
    </div>
    </>
  );
}
{/* <asdaf></asdaf> */}
