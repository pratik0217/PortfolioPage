import React from 'react'

export default function Contact() {
  return (
    <div id='contact-selection' className='container flex flex-col gap-12.5'>
      <div id='contact-heading' className='text-5xl text-center ml-10 sm:ml-0 text-start sm:text-7xl font-bold mt-20 md:text-center lg:text-start'>
        <h1>Contact</h1>
      </div>

      <div id='contact-info' className='text-center ml-12 sm:ml-0 sm:flex flex-col gap-1 md:text-center lg:text-start'>
        <p className='hover:text-red-600'><a href="mailto:jadhavpratik0208@gmail.com">Email : jadhavpratik0208@gmail.com</a></p>
        <p>Phone : +91 7038302915</p>
        <p><span className='hover:text-blue-600'><a href="https://www.linkedin.com/in/pratik-nandkumar-jadhav/" target='_blank'><i className="fa-brands fa-linkedin"></i> LinkedIn/pratikjadhav</a></span> <span className='hover:text-blue-600'><a href="https://github.com/pratik0217" target='_blank'><i className="fa-brands fa-github"></i> GitHub/pratik0217</a></span></p>
        <address><i className="fa-solid fa-location-dot"></i> Pimpri-Chinchwad, Pune, Maharashtra, India</address>
      </div>
    </div>
  )
}
