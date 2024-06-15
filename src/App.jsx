import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import PlayEyes from './components/PlayEyes'
import Projects from './components/Projects'
import Cards from './components/Cards'
import Foooter from './components/Foooter'
import LocomotiveScroll from 'locomotive-scroll';
import Startproject from './components/Startproject'



function App() {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
       <Navbar />
       <LandingPage />
       <Marquee />
       <About />
       <PlayEyes />
       <Projects />
       <Cards/>
       <Startproject />
       <Foooter />
    </div>
  )
}

export default App
