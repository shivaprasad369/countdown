import React from 'react'

export default function () {
  return (
    <div>    
      <div className= ' flex justify-around items-center font-bold leading-[30px] text-[16px] text-white flex-1 bg-[#241e5a] h-[5rem]'>
        <h1>Learner IT Academy</h1>
        <ul className='flex justify-around flex-[0.2] pt-[1rem]'>
            <li>Home</li>
            <li className='border-2 px-[2rem] rounded-sm py-2'><a href="mailto:"  >Contact us</a></li>
           
        </ul>
      </div>
    </div>
  )
}
