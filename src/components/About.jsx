import { motion } from 'framer-motion'
import React from 'react'


function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black -mt-20'>
        <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.1vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-8 mt-20 border-[#A1B562]'>
            <div className='w-1/2'>
                <h1 className='text-6xl'>Our approach: </h1>
                <button className='flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>READ MORE
                    <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[65vh] rounded-2xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")]'>

            </div>
        </div>
    </div>
  )
}

export default About