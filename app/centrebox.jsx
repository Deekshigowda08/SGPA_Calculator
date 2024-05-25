"use client"
import React from 'react'
import { useEffect,useState,useRef } from 'react'

const Centrebox = () => {
  const sub = useRef();

  let handlechange=()=>{
     if (sub.current.value==="Chemistry"||sub.current.value==="Physics") {
      window.location.href=`/${sub.current.value}`
     } 
      else {
      window.location.reload();
      alert("Enter vaild Cycle")
     }
  }
   
  
  return (
    <div className='md:fixed md:top-[15%] md:left-[10%] bg-stone-300 sm:flex sm:justify-center sm:h-screen md:w-[80%]  md:h-[80%]'>
    <div className='md:w-[60%] h-[40%] md:m-auto sm:my-auto md:mt-[15%]  gap-8 grid md:place-items-center'>
      <div className='text-3xl font-bold m-auto sm:h-2'>Enter Your Semester</div>
      <input ref={sub} placeholder='Physics or Chemistry etc..' type="text" className='border-2  border-indigo-700 rounded-full py-3 px-5 text-center md:w-[70%] m-auto' />
      <button onClick={handlechange} className='bg-green-500 p-5   rounded-full w-[30%] m-auto text-white font-bold'>Submit</button>
      </div>
    </div>
  )
}

export default Centrebox 