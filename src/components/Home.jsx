import React from 'react'
import heroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'


function Home() {
    return (
        <div name="home" className='pt-28 md:pt-36 w-full bg-gradient-to-b from-black via-black to-gray-800'>

            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl text-white font-bold'>I'm a Full Stack Developer </h2>
                    <p className='text-gray-500 max-w-md py-4'>Experienced Full-Stack Developer with 4 years of expertise in building responsive, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js)</p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-end bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer'>
                            Porfolio
                            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={20} /></span>
                        </Link>
                    </div>
                </div>
                <div className=''>
                    <img src={heroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full md:ml-24 md:pb-10' />
                </div>
            </div>

        </div>
    )
}

export default Home