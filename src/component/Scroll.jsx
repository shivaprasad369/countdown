import React from 'react'

export default function Scroll() {
  return (
    <div>
       <div
       style={{padding:' 0px 10px ',fontSize: '17px', fontWeight: '700',lineHeight: '40px'}}
       className="flex fixed overflow-hidden bottom-[0rem] h-fit w-[full] mt-4 flex-row  py-[1rem] bg-[#252525] ">

          <div className=' px-4 bg-yellow-500 z-10'>Job<span className='pl-2'></span>Oppotunies</div>
        <div className="logo-slide z-0 flex flex-row gap-20 px-2  text-[#fff]">
          <h1 className="logos">FrontEnd<span className='pl-2'></span>Developer<span className='text-yellow-500 pl-2'>05</span></h1>
          <h1 className="logos">BackEnd<span className='pl-2'></span>Developer<span className='text-red-400 pl-2'>02</span></h1>
          <h1 className="logos flex flex-row">UI<span>-</span>UX<span className='pl-2'></span>Designing<span className='text-yellow-600 pl-2'>04</span></h1>
          <h1 className="logos">Vedio<span className='pl-2'></span>Editor<span className='text-green-500 pl-2'>10</span></h1>
          <h1 className="logos">HR<span className='pl-2'></span>Manager<span className='text-red-400 pl-2'>02</span></h1>
          <h1 className="logos">Accountant<span className='text-green-600 pl-2'>08.</span></h1>
          <h1 className="logos">Manager<span className='text-red-400 pl-2'>01</span></h1>
          {/* <li className="logos flex flex-row">R-Programming</li> */}
        
          <h1 className="logos">Degital<span className='pl-2'></span>Marketing<span className='text-red-400 pl-2'>01</span></h1>
         
        </div>
      </div>
    </div>
  )
}
