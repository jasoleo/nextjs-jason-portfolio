"use client"
import React, { useRef, useState, ChangeEvent, FormEvent  } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
// import * as fbq from "../../lib/fbpixel";
import PhoneInput from "react-phone-number-input/input";
// import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { ArrowDownRight , Instagram } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_USER || "";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE || "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

//   const gaEventTracker = useAnalyticsEventTracker("Contact us");

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // gaEventTracker("email sent");
    // fbq.event("Contact");

    emailjs.init(PUBLIC_KEY);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "ProEdge Technology",
          from_email: form.email,
          to_email: "info@proedge.io",
          from_phone: form.phone,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
            
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(
            "Ahh, something went wrong. Please try again or Please call +852 6100 3435 for direct inquires."
          );
        }
      );
  };

  const { toast } = useToast()

  return (
    
    <div className="">
   {/* <div className=" ">
      <div className='flex items-center justify-center rounded-3xl border border-zinc-900 p-10  hover:bg-white hover:text-black'>
      <Instagram strokeWidth={1.5} />
      <p className="">Instagram</p>
    </div>

    <div className='flex items-center justify-center rounded-3xl border border-zinc-900 p-10  hover:bg-white hover:text-black'>
      <Instagram strokeWidth={1.5} />
      <p>Instagram</p>
    </div>

    <div className='flex items-center justify-center rounded-3xl border border-zinc-900 p-10  hover:bg-white hover:text-black'>
      <Instagram strokeWidth={1.5} />
      <p>Instagram</p>
    </div> 

    </div> */}


    <div
      className=' items-center justify-center rounded-3xl border border-zinc-900 m-5 p-10 pt-48'
    >
      <div className="">
        <div className="flex items-end gap-4"> 
        <p className="text-3xl md:text-6xl text-white ">Let&apos;s start a project together</p>
         <ArrowDownRight className="h-20 w-20 md:h-10 md:w-10 text-white" />
        </div>
        
        <div className=" md:flex space-x-4  py-5">
        
        <div>
        <p className="text-secondary text-gray-400 ">
          Email:
          <br />
          jasontse2511@gmail.com
        </p>
        </div>
        
      {/* <div className="items-center justify-center flex gap-4">
        <div className='  items-center justify-center rounded-full border border-zinc-900 p-4  hover:bg-white hover:text-black'>
      <Instagram strokeWidth={1.5} />
      </div>

      <div className='items-center justify-center rounded-full border border-zinc-900 p-4  hover:bg-white hover:text-black'>
      <Instagram strokeWidth={1.5} />
      </div>

      <div className='items-center justify-center rounded-full border border-zinc-900 p-4  hover:bg-white hover:text-black'>
      <Instagram strokeWidth={1.5} />
      </div>
      </div> */}

        </div>

        <form
          // ref={formRef}
          // action="https://formsubmit.co/a11d954da61870fc7e46bf4e9cb9ec3f"
          // method="POST"
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4  "
        >
<div className="grid gap-4 ">
      <Input className="" type="text"
      name="name" 
      value={form.name}
      onChange={handleChange}
      placeholder="Name*"
      required/>

      <Input type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Email Address*"
      required/>

      <Input type="numeric"
      name="phone"
      value={form.phone}
      onChange={handleChange}
      placeholder="Mobile Number"
      />


      {/* <Input type="numeric"
      name="phone"
      value={form.message}
      onChange={handleChange}
      placeholder="Message"
      required
      /> */}
      </div>
    <Textarea className=""
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="Type your message here."
      required />
<div></div>
  <Button className="h-14"
      variant="outline"
      onClick={() => {
        toast({
          title: "Submit Succeed!",
          description: " Thank You for your submission.",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Send
    </Button>

        </form>
      </div>

    
    </div>
    </div>
  );
};

export default Contact ;