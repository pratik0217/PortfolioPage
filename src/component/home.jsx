import React from 'react'

export default function home(props) {
  return (
    <div id='home-container' className='pt-14 min-h-screen'>
      <div className="container hover:scale-z-200 hover:-translate-y-2 transition-all duration-300 ease-in-out group flex flex-col-reverse sm:flex justify-between items-center md:flex-col-reverse lg:flex-row">
        <div id="introduction-section" className="w-[65%] mt-10 flex gap-5 sm:flex flex-col gap-5 font-bold uppercase lg:w-[30%] md:w-[70%] md:mt-0 lg:mt-0">
            <h3 className='text-2xl sm:text-4xl text-start'>Hi, I'm Pratik</h3>
            <h1 className='text-6xl sm:text-8xl text-start'>I'm a React Frontend Developer</h1>
            <a href={props.CV} download className='text-center py-3 px-5 border-2 border-black rounded-full shadow-2xl hover:bg-purple-500 hover:text-white transition-colors duration-300'>Download CV</a>
        </div>

        <div id="profile-image" className="ml-20 sm:ml-0 md:ml-0 lg:ml-0 w-fit">
            <img src={props.profileImage} className='h-[300px] sm:h-[500px] lg:w-[500px] object-cover' alt="Pratik Jadhav Img" />
        </div>
      </div>
    </div>
  )
}
