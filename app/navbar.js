"use client"
import React from 'react'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const ref = useRef();
  
  const display=()=>{
    ref.current.style.display="block";
  }
  const hide=()=>{
    ref.current.style.display="none";
  }
  const github=()=>{
    window.location.href="https://github.com/Deekshigowda08";
  }
  const insta=()=>{
    window.location.href="https://www.instagram.com/_deekshith_gowda_08?utm_source=qr&igsh=eDc1eGN6NnVvMWxo";
  }
  const linkedin=()=>{
    window.location.href="https://www.linkedin.com/in/deekshith-gowda-019b56305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  }
  return (
   <div>
    <div className='bg-indigo-700 w-screen  py-[2%] align-middle md:justify-between sm:justify-center md:px-5  fixed top-0 text-white flex'>
       <button onClick={display} className='fixed top-4 left-5 md:hidden '><IoMenu/></button> 
   <div className='text-xl font-bold  '>SGPA Calculator</div>
   <div>
    <ul className='flex gap-8 list-disc'>
        <li className='cursor-pointer hidden md:block'><Link href="/">Home</Link></li>
        <li className='cursor-pointer hidden md:block'><Link href="https://drive.google.com/drive/folders/1--yy6YZDHZLS4IBTn5VVAWTy3ZqJTxXn">Question paper</Link></li>
        <li className='cursor-pointer hidden md:block'><Link href="https://drive.google.com/drive/folders/1KeULV3o_DqNCDdEMIfuucISjOR-RKsbF">Notes</Link></li>
        <li className='cursor-pointer hidden md:block'><Link href="https://uucms.karnataka.gov.in/Login/Index_Eng">UUCMS</Link></li>
        <li className='cursor-pointer hidden md:block'><Link href="https://uvce.ac.in/">UVCE Official</Link></li>
    </ul>
   </div>
    </div>
    <div ref={ref} className='sm:p-10 sm:fixed hidden delay-200 sm:bg-indigo-700 sm:w-[70%] sm:h-[50%]  sm:justify-center sm:pt-20'>
      <button onClick={hide} className='text-white size-7 fixed top-5 left-5'><AiOutlineClose /></button>
    <ul >
        <li className=' sm:text-2xl font-bold text-white cursor-pointer'><Link href="/">Home</Link></li>
        <li className=' sm:text-2xl font-bold text-white cursor-pointer'><Link href="https://drive.google.com/drive/folders/1--yy6YZDHZLS4IBTn5VVAWTy3ZqJTxXn">Question paper</Link></li>
        <li className=' sm:text-2xl font-bold text-white cursor-pointer'><Link href="https://drive.google.com/drive/folders/1KeULV3o_DqNCDdEMIfuucISjOR-RKsbF">Notes</Link></li>
        <li className=' sm:text-2xl font-bold text-white cursor-pointer'><Link href="https://uucms.karnataka.gov.in/Login/Index_Eng">UUCMS</Link></li>
        <li className=' sm:text-2xl font-bold text-white cursor-pointer'><Link href="https://uvce.ac.in/">UVCE Official</Link></li>
    </ul>
    <div className='flex justify-around bottom-[30%] text-white size-56 fixed'>
      <div><button onClick={insta}><FaInstagram /></button></div>
      <div><button onClick={linkedin}><FaLinkedin /></button></div>
      <div><button onClick={github}><FaGithub /></button></div>
   
    </div>
   </div>
  </div>
  )
}

export default Navbar