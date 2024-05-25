"use client"
import React from 'react'
import { useState,useRef } from 'react';
import { useRouter } from 'next/navigation';
const Centrebox2 = () => {
    const [formData, setformData] = useState("");
    const router=useRouter();
    const refi1 = useRef()
    const refi2 = useRef()
    const refi3 = useRef()
    const refi4 = useRef()
    const refi5 = useRef()
    const refi6 = useRef()
    const refi7 = useRef()
    const refi8 = useRef()
    const refi9 = useRef()
    const refe1 = useRef()
    const refe2 = useRef()
    const refe3 = useRef()
    const refe4 = useRef()
    const refe5 = useRef()
    const refe6 = useRef()
    const refe7 = useRef()
    const refe8 = useRef()
    const refe9 = useRef()
    const refi11 = useRef()
    const refi21 = useRef()
    const refi31 = useRef()
    const refi41 = useRef()
    const refi51 = useRef()
    const refi61 = useRef()
    const refi71 = useRef()
    const refi81 = useRef()
    const refi91 = useRef()
    const refe11 = useRef()
    const refe21 = useRef()
    const refe31 = useRef()
    const refe41 = useRef()
    const refe51 = useRef()
    const refe61 = useRef()
    const refe71 = useRef()
    const refe81= useRef()
    const refe91= useRef()
    const HandleChange = () => {
        const setdata=(((Math.ceil((parseInt(refi1.current.value) + parseInt((refe1.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi2.current.value) + parseInt((refe2.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi3.current.value) + parseInt((refe3.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi4.current.value) + parseInt((refe4.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi5.current.value) + parseInt((refe5.current.value / 2))) / 10))+(Math.ceil((parseInt(refi6.current.value) + parseInt((refe6.current.value / 2))) / 10))+(Math.ceil((parseInt(refi7.current.value) + parseInt((refe7.current.value))) / 10))+(Math.ceil((parseInt(refi8.current.value) + parseInt((refe8.current.value / 2))) / 10) * 2)+(Math.ceil((parseInt(refi9.current.value) + parseInt((refe9.current.value / 2))) / 10) * 3))/20);
        if (setdata>0 &&setdata<=10) {
            router.push(`/Output/${setdata}`)
        } else {
            router.refresh();
        }     
    }
        
    const HandleChange1 = () => {
        const setData=(((Math.ceil((parseInt(refi11.current.value) + parseInt((refe11.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi21.current.value) + parseInt((refe21.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi31.current.value) + parseInt((refe31.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi41.current.value) + parseInt((refe41.current.value / 2))) / 10) * 3) + (Math.ceil((parseInt(refi51.current.value) + parseInt((refe51.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi61.current.value) + parseInt((refe61.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi71.current.value) + parseInt((refe71.current.value / 2))) / 10)) + (Math.ceil((parseInt(refi81.current.value) + parseInt((refe81.current.value / 2))) / 10) * 2) + (Math.ceil((parseInt(refi91.current.value) + parseInt((refe91.current.value ))) / 10) * 3)) / 20);
        if (setData>0 &&setData<=10) {
            router.push(`/Output/${setData}`)
        } else {
            router.refresh();
            alert("Enter valid marks");
        }     
    }
     
    return (
        <>
        <div className='sm:h-screen block md:hidden md:w-[100%] sm:grid sm:place-content-center'>
        <div className='md:fixed md:top-[12%] md:left-[10%] bg-stone-300 md:w-[100%] h-[90%]'>
            <div className='h-[90%] w-[80%] sm:mx-auto'>
                <div className='sm:w-[100%] md:grid md:place-content-center  sm:flex sm:flex-col sm:align-middle sm:justify-center'><div><div className='text-sm font-semibold md:my-1 mx-12'>Subject-1:Mathematics</div>
                    <div className='flex gap-4'>
                        <div className='sm:flex sm:justify-around sm:align-middle'><div>
                            <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                            <input type="text" ref={refi11} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                        </div></div>
                        <div className='sm:flex sm:justify-center sm:align-middle'><div>
                            <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                            <input type="text" ref={refe11} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                        </div></div>
                    </div>
                </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-2:Chemistry</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi21} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe21} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-3:Electronics</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi31} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe31} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-4:Mechanical</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi41} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe41} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-5:PPS</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi51} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe51} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-6:Chemistry lab</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi61} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe61} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-7:PPS lab</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi71} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe71} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-8:Workshop</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi81} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe81} placeholder='100' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                        </div>
                    </div>
                    <div><div className='text-sm font-semibold md:my-1 mx-12 '>Subject-9:DTI</div>
                        <div className='flex gap-4'>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Internals Marks</div>
                                <input type="text" ref={refi91} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-5' />
                            </div></div>
                            <div className='sm:flex sm:justify-center sm:align-middle'><div>
                                <div className='text-[10px] sm-[40%] font-semibold'>Externals Marks</div>
                                <input type="text" ref={refe91} placeholder='50' className='border md:w-[60%] sm:w-[100%] border-indigo-700 px-4' />
                            
                        </div>
                    </div>
                    </div></div>
                            <div className='grid place-content-center md:hidden my-4'>
                            <button onClick={HandleChange1} className='bg-green-500  text-white text-xl font-semibold py-2 px-4 rounded-full '>Submit</button>
                            </div>
                </div>
            </div>
        </div>
        </div>
        <div className='fixed top-[12%] sm:hidden md:block left-[10%] bg-stone-300 w-[80%] h-[90%]'>
            <div><div className='text-sm font-semibold my-1 mx-12'>Subject-1:Mathematics</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi1} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe1} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-2:Chemistry</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi2} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe2} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-3:Electronics</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi3} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe3} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-4:Mechanical</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi4} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe4} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-5:Workshop Lab</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi5} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe5} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-6:Chemistry lab</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi6} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe6} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-7:DTI</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi7} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe7} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-8:PPS</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi8} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe8} type="number" placeholder='100' className='border border-indigo-700 px-5' />
                    </div>
                </div>
            </div>
            <div><div className='text-sm font-semibold my-1 mx-12 '>Subject-9:PPS Lab</div>
                <div className='flex justify-around'>
                    <div>
                        <div className='text-[10px] font-semibold'>Internals Marks</div>
                        <input ref={refi9} type="number" placeholder='50' className='border border-indigo-700 px-5' />
                    </div>
                    <div>
                        <div className='text-[10px] font-semibold'>Externals Marks</div>
                        <input ref={refe9} type="number" placeholder='100' className='border border-indigo-700 px-4' />
                    </div>
                </div>
            </div>
            <button onClick={HandleChange} className='bg-green-500 text-white text-xl font-semibold py-3 px-5 rounded-full fixed bottom-2 left-[47%]'>Submit</button>
        </div>
        </>
    )
}

export default Centrebox2