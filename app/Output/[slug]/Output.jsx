import React from 'react'
export default async function Output(props){ 
  

  return (
    <div className='md:fixed md:top-[15%] md:left-[10%] bg-stone-300 md:w-[80%] md:h-[80%] sm:h-screen sm:w-screen'>
    <div className='w-[60%] md:h-[40%] sm:h-[90%] m-auto md:mt-[15%] gap-8 grid place-items-center sm:flex sm:justify-center '>
      <div className=''>
      <div className='text-3xl font-bold m-auto'>Your SGPA is:</div>
      <div className='text-6xl font-bold sm:text-center m-auto'>{props.data.slug}</div>
      </div></div>
    </div>
  )
}

