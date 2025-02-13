'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from '../Gallery/project';
import Modal from '../Gallery/model';


const projects = [
  {
    title: "ClapTech PathWay Career Test",
    href: "/claptech",
    src: "Wireframe19.png",
    color: "#204DFF",
    role: "Design, Develop, 3D Model",
    year: '2024'
  },
  {
    title: "ProEdu",
    href: "/proedu",
    src: "proedu.png",
    color: "#7F56D9",
    role: "Design & Develop",
    year: '2023'
  },
  {
    title: "ProEdge",
    href: "/proedge",
    src: "proedge.png",
    color: "#000000",
    role: "Design, Develop, 3D Model & Video Edit",
    year: '2023'
  },
  {
    title: "Panda Warroir",
    href: "/panda",
    src: "panda2.png",
    color: "#03EEC9",
    role: "Design, Develop, 3D Model & Video Edit",
    year: '2023'
  },
  {
    title: "WeArePiplWorld",
    href: "/pipl",
    src: "wearepiplworld.png",
    color: "#FFE730",
     role: "Design & Develop",
     year: '2022'
  },
  {
    title: "WeAre",
    href: "/weare",
    src: "weare.png",
    color: "#EF5D33",
    role: "Design & Develop",
    year: '2022'
  },

  {
    title: "Web3.0 City",
    href: "/w3m",
    src: "w3m.png",
    color: "#58D0BB",
     role: "Design",
     year: '2022'
  },
  {
    title: "Web3.0 Social Media",
    href: "/w3s",
    src: "web3soc.png",
    color: "#283340",
     role: "Design",
     year: '2022'
  }
]

export default function Gallery() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <div className=' '>
  <main className="flex  w-screen items-center justify-center">
    <div className="flex flex-col w-screen items-center justify-center">
      {
        projects.map( (project, index, href ) => {
          return <Project index={index} title={project.title} role={project.role} year={project.year} href={project.href}  setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects} />
  </main>
  </div>
  )
}