import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import tailwindcss from '../assets/tailwindcss.png'
import reactlogo from '../assets/reactlogo.png'
import expressjs from '../assets/expressjs.png'
import github from '../assets/github.svg'
import Mongodb from '../assets/Mongodb.png'
import nodejs from '../assets/nodejs.svg'

function Experience() {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwindcss,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 5,
      src: reactlogo,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: expressjs,
      title: "Express",
      style: "shadow-black-500",
    },
    {
      id: 7,
      src: Mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
      size: "w-20 h-20 md:w-32 md:h-20",
    },
    {
      id: 8,
      src: nodejs,
      title: "NodeJs",
      style: "shadow-green-500",
      size: "w-20 h-20 md:w-32 md:h-20",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full pt-20'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
          <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</h1>
          <h3 className='py-6'>These are the technologies I've worked with</h3>
        </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 text-center'>
            {techs.map(({id,src,title,style,size})=>(
              <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 shadow-gray-600 rounded-lg flex flex-col justify-center items-center ${style}`}>
              <img src={src} className={`object-contain ${size || "w-20 h-20"}`} alt="" />
              <p className='mt-4'>{title}</p>
            </div>
            ))}
            
          </div>
      </div>

    </div>
  )
}

export default Experience