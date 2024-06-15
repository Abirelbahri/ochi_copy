import React from 'react'
import Eyyes from './Eyyes';

function PlayEyes() {

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.9" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <Eyyes />
        </div>
    </div>
  )
}

export default PlayEyes