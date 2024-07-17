import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 lg:px-24 md:px-16 '>
      <div className=' flex  py-2  md:justify-between items-center'>
              <div className=' text-2xl font-bold'>Gurjant Nehra</div>  
              <div className='space-x-6'>
              <a className='hover:text-gray-400' href="#Home">Home</a>
              <a className='hover:text-gray-400' href="#about">About Me</a>
              <a className='hover:text-gray-400' href="#service">Services</a>
              
              <a className='hover:text-gray-400' href="#ContactMe">Contact Me</a>
              </div>
              <button className='bg-gradient-to-r from-green-300 to to-blue-500 rounded-full hover:scale-105
              px-4 py-2'>Contact Me</button>
      </div>
    </nav>
  )
}

export default Navbar
