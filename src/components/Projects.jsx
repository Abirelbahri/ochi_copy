import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react";

function Projects() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full pt-36 bg-slate-100 text-zinc-900">
      <div className="w-full px-20  border-b-[0.6px] border-zinc-500 pb-20">
        <h1 className="text-6xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="flex gap-96 mt-10">
          <div className="flex -pl-3">
            <div className="bg-black h-3 w-3 rounded-full mt-2"></div>
            <h1 className="text-xl pl-3">FYDE</h1>
          </div>
          <div className="flex pl-[20.3rem]">
            <div className="bg-black h-3 w-3 rounded-full mt-2"></div>
            <h1 className="text-xl pl-3">VISE</h1>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-4 ">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative"
          >
            <h1 className="flex absolute overflow-hidden z-[9] leading-none right-0 translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-8xl text-[#CDEA68] font-semibold">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover rounded-xl"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative"
          >
            <h1 className="flex absolute overflow-hidden z-[9] leading-none right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-8xl text-[#CDEA68] font-semibold">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover rounded-xl"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </motion.div> 
        </div>

        <div className="flex gap-64">
        <div className="flex gap-3">
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>AUDIT</button> 
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>COPYWRITING</button> 
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>SALES DECK</button> 
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>SLIDES DESIGN</button> 
        </div>
        <div className="flex gap-3">
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>AGENCY</button> 
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>COMPANY PRESENTATION</button> 
        </div>
        </div>

       
        
        <div className="flex gap-96 mt-20">
          <div className="flex -pl-3">
            <div className="bg-black h-3 w-3 rounded-full mt-2"></div>
            <h1 className="text-xl pl-3">TRAWA</h1>
          </div>
          <div className="flex pl-[19rem]">
            <div className="bg-black h-3 w-3 rounded-full mt-2"></div>
            <h1 className="text-xl pl-3">PREMIUM BLEND</h1>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-4">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative"
          >
            <h1 className="flex absolute overflow-hidden z-[9] leading-none right-0 translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-8xl text-[#CDEA68] font-semibold">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover rounded-xl"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt=""
            />
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer rounded-xl w-1/2 h-[70vh] relative"
          >
            <h1 className="flex absolute overflow-hidden z-[9] leading-none right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-8xl text-[#CDEA68] font-semibold">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full bg-cover rounded-xl"
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              alt=""
            />
          </motion.div>
        </div>

        <div className="flex gap-64">
        <div className="flex gap-3">
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>BRAND IDENTITY</button> 
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>DESIGN RESEARCH</button> 
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>INVESTOR DECK</button> 
        </div>
        <div className="flex gap-3 ml-5">
        <button className='items-center px-4 py-1 mt-4 border-[1px] border-zinc-900 rounded-full text-black text-l'>BRANDED TEMPLATE</button> 
        </div>
        </div>

      </div>
      <div className="flex justify-center items-center pt-20">
        <button className="flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white text-lg">
          VIEW ALL CASES STUDIES
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
        </button>
      </div>
    </div>
  );
}

export default Projects;
