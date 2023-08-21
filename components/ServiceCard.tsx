import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import Image from "next/image";





const ServiceCard = () => {
    return (  
       <div className="">
              {/* <p className="flex items-center justify-center mb-20 text-xl  ">Service</p> */}
        <div className="rounded-3xl border border-zinc-900 mx-5  p-10  ">

   <div className=" lg:flex lg:justify-between text-5xl lg:text-6xl md:text-5xl  text-white tracking-tighter">
    <div className=""><p className=" ">UI/UX Design</p>
   
         <div className="flex pt-5 ">
              
           <Image
           src="/image/figma.png"
           width={100}
           height={100}
           alt="figma"
           />
         </div>

    </div>
    <div className=" "><p className="text-end  min-[320px]:mt-5 lg:mt-0">Website Development</p>
    <div id="scrollContainer" className="flex flex-row-reverse pt-5 gap-5 overflow-auto scroll-smooth ">
    <Image 
           src="/image/javascript.png"
           width={100}
           height={100}
           alt="figma"
           />
    <Image 
           src="/image/thailwind.png"
           width={100}
           height={100}
           alt="figma"
           />
    <Image 
           src="/image/react.png"
           width={100}
           height={100}
           alt="figma"
           />
    <Image 
           src="/image/nextjs.png"
           width={100}
           height={100}
           alt="figma"
           />
    </div>
    </div>

    </div>
    </div>




<div className="rounded-3xl border border-zinc-900 m-5  p-10  ">

<div className="lg:flex lg:justify-between text-5xl lg:text-6xl md:text-5xl text-white tracking-tighter">
 <div className=""><p className=" ">Video Editing</p>

      <div className="flex pt-5 gap-5 overflow-auto ">
        <Image 
        src="/image/pr.png"
        width={100}
        height={100}
        alt=""
        />
       <Image 
        src="/image/ae.png"
        width={100}
        height={100}
        alt=""
        />
        <Image 
        src="/image/dr.png"
        width={100}
        height={100}
        alt=""
        />
        <Image 
        src="/image/filmora.png"
        width={100}
        height={100}
        alt="Filmora"
        />
      </div>

 </div>
 <div className=" "><p className="text-end min-[320px]:mt-5 lg:mt-0" >3D Motion</p>
 <div className="flex flex-row-reverse pt-5 gap-5 overflow-hidden">
 <Image 
        src="/image/spline.png"
        width={100}
        height={100}
        alt="figma"
        />
 <Image 
        src="/image/blender.png"
        width={100}
        height={100}
        alt="figma"
        />
 </div>
 </div>
</div>
 </div>


 <div className="rounded-3xl border border-zinc-900 m-5  p-10  ">

<div className="lg:flex lg:justify-between text-5xl lg:text-6xl md:text-5xl text-white tracking-tighter">
 <div className=""><p className=" ">Graphic Design</p>

      <div className="flex pt-5 gap-5 ">
        <Image 
        src="/image/ai.png"
        width={100}
        height={100}
        alt=""
        />
       <Image 
        src="/image/ps.png"
        width={100}
        height={100}
        alt=""
        />       
      </div>

 </div>
 <div className=" "><p className="text-end min-[320px]:mt-5 lg:mt-0">AI Generation</p>
 <div className="flex flex-row-reverse pt-5 gap-5">
 <Image 
        src="/image/sd.png"
        width={100}
        height={100}
        alt="figma"
        />
         <Image 
        src="/image/runway.png"
        width={100}
        height={100}
        alt="figma"
        />
 </div>
 </div>
</div>
 </div>



</div>
    );
}
 
export default ServiceCard;