"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


interface open{
  isSheetOpen:boolean
  setSheetOpen: () => void
}



export const SheetDemo:React.FC<open> = ({isSheetOpen, setSheetOpen}) => {


 
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
  
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: { preventDefault: () => void; }) => {
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
            // to_name: "ProEdge Technology",
            from_email: form.email,
            // to_email: "info@proedge.io",
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

    const { toast } = useToast();
  

// export function SheetDemo() {
  return (
    <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        {/* <Button variant="outline">Open</Button>  */}
      </SheetTrigger >
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>Contact</SheetTitle>
          <SheetDescription className="pb-5">
          Let&apos;s start a project together !
          </SheetDescription>
        </SheetHeader>
        <form
          // ref={formRef}
          // action="https://formsubmit.co/a11d954da61870fc7e46bf4e9cb9ec3f"
          // method="POST"
          onSubmit={handleSubmit}
          className="grid md:grid-cols-1 gap-4  "
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
        <SheetFooter>
          <SheetClose asChild>
          
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
