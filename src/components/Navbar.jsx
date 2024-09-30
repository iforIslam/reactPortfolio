import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

function Navbar() {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]

  return (
    <nav className='flex justify-between items-center w-full h-16 px-4 text-white bg-black fixed'>
      <div className='font-lobster'>
        <h1 className='flex space-x-1'><span className='text-xs'>Muhammad</span> <span className='text-3xl'>Islam.</span></h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map((({ id, link }) =>
          <li key={id} className='mx-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-gray-300 duration-200'>
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 hover:text-gray-300 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center top-0 left-0 absolute w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
          {links.map((({ id, link }) =>
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={()=>setNav(!nav)} to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </nav>
  )
}

export default Navbar