
import React from "react";

const AboutTitle = () => {
  return (
    <div className="p-8  text-4xl font-bold">
      About
    </div>
  )
}

function AboutInfo() {
  return (
    <div className='p-3 pt-20 md:pt-4 mx-7 w-2/2'>
      <p className='font-serif w-full md:w-1/1'>As a software enthusiast, I take pride in writing clean, efficient, and maintainable code that solves real-world problems. I love the challenge of debugging complex issues and finding creative solutions to improve the performance and scalability of my programs.</p>

      <div className='font-extrabold text-4xl pt-9'>Skills</div>

      <div>
        <ul className='flex space-x-2 p-6 font-bold'>
          <li className='bg-blue-400 p-2 rounded-2xl' key='typescript'>ʦ TypeScript</li>
          <li className='bg-yellow-400 p-2 rounded-2xl' key='react'>🚀React</li>
          <li className='bg-slate-600 p-2 rounded-2xl' key='nextjs'>💾NextJS</li>
          <li className='bg-sky-200  p-2 rounded-2xl' key='tailwindcss'>💾Tailwind-CSS</li>
          <li className='bg-blue-800 p-2 rounded-2xl' key='bootstrap'>📈BootStrap</li>
        </ul>
      </div>

      <div className='flex space-x-3 mx-24 font-bold'>
        <ul className='bg-blue-800 p-1 flex justify-center rounded-2xl text-yellow-300 w-36' key='python'>⌛️ Phyton</ul>
        <ul className='bg-sky-400 p-1 flex justify-center rounded-2xl text-white w-36' key='c++'>⽓ C++</ul>
        <ul className='bg-pink-300 p-1 flex justify-center rounded-2xl text-purple-700 w-36' key='collaboration'>👥 Collaboration</ul>
      </div>
    </div>
  )
}

export {AboutTitle,AboutInfo}