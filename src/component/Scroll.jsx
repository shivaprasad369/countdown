import React from 'react'

export default function Scroll() {
  return (
    <div>
       <div
       style={{padding:' 0px 10px ',fontSize: '14px', fontWeight: '700',lineHeight: '40px'}}
       className="flex  overflow-hidden bottom-[0rem] h-fit w-[full] mt-4 flex-row  py-[1rem] bg-[#252525] ">
        <ul className="logo-slide flex flex-row gap-20   text-[#fff]">
          <li className="logos">React.js</li>
          <li className="logos">MERNStack</li>
          <li className="logos flex">JavaFullStack</li>
          <li className="logos">Python</li>
          <li className="logos">Laravel</li>
          <li className="logos">DataScience</li>
          <li className="logos">DataAnalysis</li>
          {/* <li className="logos flex flex-row">R-Programming</li> */}
          <li className="logos">Android</li>
          <li className="logos">ReactNative</li>
          <li className="logos">PyhonFullStack</li>
          <li className="logos">InternshipOppotunity</li>
          <li className="logos">100%IntenGuarantee</li>
        </ul>
      </div>
    </div>
  )
}
