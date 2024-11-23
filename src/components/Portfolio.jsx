import React from 'react'
import web1 from '../assets/PortfolioImg1.png'
import web2 from '../assets/PortfolioImg2.png'
import web3 from '../assets/PortfolioImg3.png'
import web4 from '../assets/PortfolioImg4.png'
import web5 from '../assets/PortfolioImg5.png'
import web6 from '../assets/PortfolioImg6.png'


function Portfolio() {

    const portfolios = [
        {
            id: 5,
            src: web5,
            demoLink:'https://book-store-smrd.vercel.app/',
            isLarge: true, 
        },
        {
            id: 6,
            src: web6,
            demoLink:'https://converto-main.vercel.app/',
            isLarge: true, 
        },
        {
            id: 1,
            src: web1,
            demoLink:'https://icecream-store-delta.vercel.app/'
        },
        {
            id: 2,
            src: web2,
            demoLink:'https://touragency-one.vercel.app/'
        },
        {
            id: 3,
            src: web3,
            demoLink:'https://codingplatform-six.vercel.app/'
        },
        {
            id: 4,
            src: web4,
            demoLink:'https://ai-keyword-extractor-ashen.vercel.app/',
            isLarge: true, 
        },
        
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</h1>
                    <h3 className='py-6'>Check out some of my work right here</h3>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {portfolios.map(({ id, src,demoLink}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex justify-center items-center'>
                                <a href={demoLink} target="_blank" rel="noopener noreferrer" className='w-full text-center'>
                                    <button className='px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                </a>
                                {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}
                            </div>
                        </div>

                    ))}
                </div>

            </div>

        </div>
    )
}

export default Portfolio