import React from 'react'

function About() {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-gray-800 to-black text-white pt-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h1>
        </div>

        <p className='text-lg mt-4'>
          As a passionate full-stack developer, I specialize in building dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I enjoy crafting intuitive user interfaces while ensuring the underlying infrastructure is robust, scalable, and efficient.
        </p>

        <br />

        <p className='text-lg'>
          My technical stack includes HTML, CSS, JavaScript, React, Node.js, and MongoDB, allowing me to develop complete solutions from concept to deployment. I focus on clean, maintainable code and enjoy problem-solving to deliver high-quality products that meet user needs and business goals.
        </p>

        <br />

        <p className='text-lg'>
        As a full-stack developer, I thrive on the challenges of creating seamless user experiences through innovative design and functionality. I prioritize collaboration, actively engaging with cross-functional teams to gather insights and feedback. This approach enables me to align technical solutions with user expectations, driving successful project outcomes that resonate with end-users.
        </p>

      </div>
    </div>
  )
}

export default About