import React from 'react'

export default function Certifications() {
  return (
    <div id='certification-selection' className='container flex flex-col gap-10'>
        <div id='certification-heading' className='text-5xl text-center ml-10 sm:ml-0 text-start sm:text-7xl font-bold mt-20 md:text-center lg:text-start'>
            <h1>Certifications</h1>
        </div>

        <div id='certification-info' className='ml-10 sm:flex justify-between items-center md:justify-evenly lg:justify-between'>
            <h1 className='text-xl text-center sm:mr-10 sm:text-3xl font-medium'>Web Development | Internship</h1>
            <i className="hidden sm:fa-solid fa-link text-2xl"></i>
        </div>
    </div>
  )
}
