import { Button } from '@mui/material'
import React, { useRef } from 'react'
// import { X , Download } from 'lucide-react';
function Modal({setShowModel}) {
    const modelRef=useRef()
    const onClose=(e)=>{
 
        if(modelRef.current ===e.target)
        {
            setShowModel(false)
        }
    }
  return (
    <div ref={modelRef} onClick={onClose} className='fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex justify-center items-center'>
        
      <div className='flex flex-col gap-5 mt-10 text-white'>
        <button className='place-self-end' onClick={()=>setShowModel(false)}>X</button>
        <div className='bg-indigo-600 p-4 gap-4 flex flex-col items-center w-[23rem]'>
            <h2 className='text-xl font-bold '>Enqiury form</h2>
            <p className='w-[12rem] text-center font-sans'>Enroll now</p>
            <form className='flex flex-col gap-6'>
                <input type="name" className='w-[12rem] h-[2.5rem] border-0 px-2 rounded-md text-black' placeholder='Enter your name'/>
                <input type="email" className='w-[12rem] h-[2.5rem] border-0 px-2 rounded-md text-black' placeholder='Enter your email'/>
                <input type="tel" className='w-[12rem] h-[2.5rem] border-0 px-2 rounded-md text-black' placeholder='Enter your number'/>
               
                <Button variant='contained' onClick={()=>{setShowModel(false);alert("Thank you")}}>Send</Button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
