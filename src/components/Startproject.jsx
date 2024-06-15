import React from 'react'
import Eyyes from './Eyyes'



function Startproject() {
  return (
    <div className=' w-full h-[100%] overflow-hidden -mt-3  bg-[#CDEA68] rounded-2xl text-zinc-800'>
    <div className=' flex flex-col justify-center items-center pt-20 '>
            <h1 className='text-8xl font-sans font-bold tracking-tighter '>READY</h1>
            <h1 className='text-8xl font-sans font-bold tracking-tighter '>TO START</h1>
            <h1 className='text-8xl font-sans font-bold tracking-tighter '>THE PROJECT?</h1>
        </div>
    <div className='relative p-40 z-2'>
       <Eyyes />
    </div>

    <div className='flex justify-center items-center pr-10'>
        <button className=' flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white text-lg'>VIEW ALL CASES STUDIES
                    <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
        </button>
        
        </div>
        <div className='flex justify-center items-center pb-20 pr-10'>
        <button className='flex gap-10 items-center px-10 py-6 mt-10 border-[1px] border-zinc-900 rounded-full text-black text-xl'>HELLO@OCHI.DESIGN
                    <div className='w-3 h-3 bg-zinc-900 rounded-full'></div>
        </button>
        </div>
        
    </div>
  )
}
export default Startproject