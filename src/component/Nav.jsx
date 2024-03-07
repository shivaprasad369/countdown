import React from 'react'
import img from "./logo full white.png"
import { motion } from 'framer-motion'

export default function () {
  return (
    <div>    
      <div className= 'fixed w-[100%] z-10 flex justify-between  shadow-md box-border content-center items-center font-bold leading-[30px] text-[16px]  text-white flex-1 bg-[rgba(23,16,85,0.9)] h-[5rem]'>
        <img src={img} alt="" className='md:w-[15rem] pl-[2rem] w-[10rem]' />
        <ul className='flex justify-around flex-[0.2] p-[1rem]'>
        <motion.a whileHover={{scale:1.1,transition:{type:'spring',duration:0.3,ease:'easeIn'}}} href="mailto: learnersitacademy@gmail.com" className='border-2 w-[8rem] border-blue-500 text-center hover:bg-blue-500 rounded-md py-2 ' >Contact us</motion.a>
           
        </ul>
      </div>
    </div>
  )
}
