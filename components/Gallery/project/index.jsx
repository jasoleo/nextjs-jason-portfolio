'use client';
import React from 'react'
import styles from './style.module.css';
import Link from 'next/link';
import { CornerDownRight  } from 'lucide-react';

export default function index({index, title, setModal, href, role,year}) {

    return (
        <Link href={href} onMouseEnter={() => {setModal({active: true, index,})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project} > 
        <div className=' md:flex w-screen justify-between  '>
            <div className='flex justify-center items-center gap-5'>
            <h2><CornerDownRight className="" /></h2>
            <h2 className='text-3xl md:text-6xl' >{title}</h2>
            </div>
            <div className='flex gap-4  justify-end '>
            <p className=''>{role}</p>
            
            <p className=''>{year}</p>
            </div>
        </div>
        </Link>
    )
}