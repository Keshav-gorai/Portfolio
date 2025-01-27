import React from 'react'
import Profile from '../assets/profile.jpg'
import Resume from '../assets/resume.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={Profile} alt=""  className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 '/>
      <h1 className='text-4xl font-bold font-serif'>
        I'm {""}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Keshav Gorai</span>
        , Frontend Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 '>
        I am passionate in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect with me</button>
        <a
    href={Resume}
    download="Resume"
    className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
  >
    Resume
  </a>
      </div>
    </div>
  )
}

export default Hero
