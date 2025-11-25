import React from 'react'

export default function technicalSkill() {
  return (
    <div id='technical-skill-section' className='container hover:scale-z-200 hover:-translate-y-2 transition-all duration-300 ease-in-out group'>
      <div id='technical-skill-heading' className='text-7xl font-bold mt-20 md:text-center lg:text-start'>
        <h1>Skills</h1>
      </div>

      <div id="skill-details" className='md:w-[60%] m-auto md:mt-20 lg:hidden'>
        <p><span className='font-semibold text-xl'>Frontend Development :</span> React, Tailwind CSS, JavaScript(+ES6), Bootstrap, HTML, CSS</p>
        <p><span className='font-semibold text-xl'>Backend & Database :</span> MySQL</p>
        <p><span className='font-semibold text-xl'>Version Control & Collaboration :</span> Git, GitHub. </p>
        <p><span className='font-semibold text-xl'>Other Tools & Technologies :</span> Vercel, VS Code, Windsurf. </p>
      </div>
    </div>
  )
}
