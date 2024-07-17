import React from 'react'
import HeroImage from '../assets/1.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white py-16 text-center'>
      <img src={HeroImage} alt=""  className='mx-auto rounded-full w-48 h-48 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
      I'm {""}
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to to-blue-500 rounded-full hover:scale-105
              '>Gurjant Nehra</span>
        ,Real Estate Agent
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
      Expert realtor connecting clients with dream homes and investment opportunities
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-300 to to-blue-500 rounded-full hover:scale-105
              px-4 py-2'>contact Me</button>
        <button className='bg-gradient-to-r from-yellow-300 to to-pink-500 rounded-full hover:scale-105
              px-4 py-2'>Details</button>
      </div>

    </div>
  )
}

export default Hero
