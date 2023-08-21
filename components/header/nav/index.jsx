'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';
// import { Link } from "react-scroll/modules";
import { SheetDemo } from '@/components/sheet';
import { useRouter } from 'next/navigation';
import Link from "next/link";
// import React from 'react';


export default function Index() {

const links = [
  {
    title: "Home",
    href: "/",
    src: "HOME.png"
},
{
  title: "About",
  href: "/about",
  src: "about1.png"
  
},
  {
    title: "work",
    href: "/work",
    src: "work.png"
  },
{
    title: "CONTACT",
    action: () => setSheetOpen(!isSheetOpen),
    src: "contact1.png"
  }
]




  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});
  const [isSheetOpen, setSheetOpen] = useState(false);

  // useEffect(()=>{
  //   console.log(isSheetOpen)
  //   },[isSheetOpen])

 return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
        
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          {/* {isSheetOpen && <SheetDemo/>} */}
          <SheetDemo isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen}/>
         
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
      
    </motion.div>
  )
}

