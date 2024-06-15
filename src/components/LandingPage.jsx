import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import './font.css'


function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-[#F1F1F1] pt-1 text-[#212121]'>
        <div className='textstructure mt-48 px-20 pb-20'>
        {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item , index) =>{
                return (<div key={index} className='masker'>
                    <div className='w-fit flex'>
                    {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease : [0.76 , 0 , 0.24 , 1] ,  duration : 1}} className='nr-[1vw] w-[9vw] h-[5vw] relative -top-[1vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] rounded-md '></motion.div>)}
                    <h1 className='h-full flex items-center font-bold text-[6vw] leading-[5vw] tracking-tight font-custom'>{item}</h1>
                    </div>
            </div>)
        })}
        </div>
        <div className='border-t-[1px] border-zinc-400 mt-20 flex justify-between items-center  py-4 px-16'>
            {["For public and private companies" , "From the first pitch to IPO"].map((item, index)=>(
                <p key={index} className='text-xl font-normal tracking-tight landing-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-2'>
                <div className='px-5 py-2 uppercase border-zinc-400 font-light text-md border-[1px] rounded-full'>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-zinc-400 border-[1px] rounded-full'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUp /> 
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage