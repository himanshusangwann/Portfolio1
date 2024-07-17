import React from 'react'
import HeroImage from '../assets/1.jpg'

const About = () => {
  return (
    <div className='bg-black text-white py-20 ' id='about'>
      <div className='mx-auto px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-row items-center space-x-12  ' >
            <img src={HeroImage} alt=""  className='w-72 h-80 rounded object-cover mb-8'/>
            
           
        <p className=' text-lg mb-8'>As a dedicated real estate agent, I specialize in helping clients find their perfect homes and lucrative investment properties. With extensive market knowledge, strong negotiation skills, and a client-focused approach, I am committed to delivering exceptional service and results, ensuring a seamless and rewarding real estate experience.</p>
        
        
        <div>
            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to to-blue-500 rounded-full hover:scale-105'>10+</h3>
            <p>Year of Experience</p>
        </div>
        <div>
            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to to-blue-500 rounded-full hover:scale-105'>500+</h3>
            <p>Projects completed</p>
        </div>
        <div>
            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to to-blue-500 rounded-full hover:scale-105'>500+</h3>
            <p>Happy clients</p>
        </div>
        </div>

      </div>
    </div>
  )
}

export default About
