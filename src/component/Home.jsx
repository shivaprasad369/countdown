import React, { useEffect, useState } from "react";
import img2 from "./whatsapp.png";
import img from "./WhatsApp_Image_2024-03-05_at_6.30.42_PM-removebg-preview.png";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

export default function Home() {
  const dur = 20 * 24 * 60 * 60 * 1000;
  var total_second = 0;
  var total_minute = 0;
  var total_hours = 0;
  var total_days = 0;
  var seconds = 0;
  var Minutes = 0;
  var hours = 0;
  const [time, setTime] = useState(dur);
  const [formate, setFormate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, [1000]);
    getFormate(time);
  }, [time]);
  const getFormate = (time) => {
    total_second = parseInt(Math.floor(time / 1000));
    total_minute = parseInt(Math.floor(total_second / 60));
    total_hours = parseInt(Math.floor(total_minute / 60));
    total_days = parseInt(Math.floor(total_hours / 24));
    seconds = parseInt(total_second % 60);
    Minutes = parseInt(total_minute % 60);
    hours = parseInt(total_hours % 60);
    setFormate({
      days: total_days,
      hours: hours,
      minutes: Minutes,
      seconds: seconds,
    });
    console.log(total_days, hours, Minutes, seconds);
  };

  return (
    <div className=" flex relative items-center">
      <div className=" md:w-[50%] w-[80%] ml-[2rem] md:ml-[7rem] leading-[4rem] mt-[5rem] md:mt-[15rem]">
        <h1
         
          style={{fontFamily: 'Montserrat',fontWeight:700,fontSize:'54px',lineHeight: '65px',fontStyle: 'normal',opacity: 1}}
          className="text-[54px]  text-[#ffffff] leading-[64px] text-center "
        >
          {" "}
          LEARNERS IT ACADEMY, Exciting Updates coming soon
        </h1>
        <p 
         style={{fontFamily: 'Montserrat',fontWeight:400,fontSize:'20px',lineHeight: '24px',fontStyle: 'normal',opacity: 1}}
        className="text-md text-white font-bold leading-[24px] tracking-wide text-xl px-[3rem] py-[2rem] text-center ">
          check back for our countdown to the big reveal with exciting
          offers on courses
        </p>
        <h1
         style={{fontFamily: 'Montserrat',fontWeight:700,fontSize:'24px',lineHeight: '24px',fontStyle: 'normal',opacity: 1}}
        className="text-[24px] text-[#6cd087] leading-[24px] font-bold  text-center">
          SECOND STEP CLOSING IN
        </h1>
        <div className="flex pl-[5rem] py-[2rem] text-[54px] flex-wrap leading-loose tracking-[0.3rem] uppercase text-center text-white font-bold ">
          <span className="flex flex-col gap-3">
            <h1 className="text-5xl">-{formate?.days}</h1>
            <p className="font-normal text-sm">Days</p>
          </span>{" "}
          <span className="fle flex-col gap-3">
            <h1 className="text-5xl ">-{formate?.hours}-</h1>
            <p className="font-normal pt-3 text-sm">Hours</p>
          </span>{" "}
          <span className="flex flex-col gap-3 ">
            <h1 className="text-5xl">:-{formate?.minutes}-</h1>
            <p className="font-normal text-sm">Minutes</p>
          </span>
          <span className="flex flex-col gap-3">
            <h1 className="text-5xl">:-{formate?.seconds} </h1>
            <p className="font-normal text-sm"> Seconds</p>
          </span>
        </div>
      </div>
      <motion.img
      initial={{scale:1}}
      whileHover={{scale:1.1,transition:{duration:0.4,type:'tween',ease:'easeIn'}}}
        src={img}
        alt=""
        className="absolute w-[100%] md:w-[80%] max-[810]:w-[100%]  max-[810]:top-[-5rem] left-[35%]"
      />
      <motion.a
       whileHover={{scale:1.1,transition:{
        duration:0.6,type:'spring',ease:'easeIn'
      }}}
        href="https://wa.me/message/OUAIVNXOPAVGA1"
        target="_blank"
        className="absolute bottom-[4rem] md:right-10 right-0 "
      >
        <h1>
          <img
            src={img2}
            alt=""
            className="md:w-[6rem] w-[4rem] border-[0.5rem] bg-white rounded-full cursor-pointer border-[#639c2e] p-2 "
          />
        </h1>
      </motion.a>
      {/* <img
        src={img}
        alt=""
        className="absolute md:right-[-3rem] right-[-10rem] top-[4rem] md:top-[0rem] w-[100%] md:w-[80%]"
      /> */}
      <div>
        <motion.div whileHover={{scale:1.1,transition:{duration:0.5,type:'tween',ease:'easeIn'}}} className=" hover:w-[3.3rem] transition-all duration-75 flex-col gap-10 px-3 py-4 absolute left-0 top-[20%] w-fit bg-[#3a944e]">
          <Tooltip title="Setting"
        >
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            className="py-3"
            viewBox="0 0 512 512"
          >
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </svg>
          </Tooltip> 
          <Tooltip title="Buy">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            className="py-3"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          </Tooltip>
          <Tooltip title={'Guide'}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="py-3"
            viewBox="0 0 576 512"
            width={20}
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
          </Tooltip>
          <Tooltip title={'Support'}>

            <svg xmlns="http://www.w3.org/2000/svg"  className="py-3" width={20} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
          </Tooltip>
        </motion.div>
      </div>
     
    </div>
  );
}
