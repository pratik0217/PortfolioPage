import React from 'react'

export default function About(props) {
  return (
    <div id='about' className='container flex flex-col gap-10 '>
      <div id="about-info" className='hover:scale-z-200 hover:-translate-y-2 transition-all duration-300 ease-in-out group flex flex-col gap-10 md:items-center lg:flex lg:items-start'>
        <div id="heading-text" className='text-6xl text-center sm:text-8xl font-bold'>
          <h1>About me</h1>
        </div>

        <div id="about-info" className='w-[100%] sm:flex flex-col gap-5 md:w-[80%] lg:w-[70%]'>
          <p className='text-sm ml-10 sm:text-2xl ml-0'>Results-driven <mark> React Frontend Developer </mark> focused on building user-friendly interfaces.</p>
          <p className='text-sm ml-10 mt-5 sm:text-2xl ml-0 mt-0'>Strong expertise in web technologies, software troubleshooting, and system management. Skilled in developing responsive, user-friendly applications using modern tools and frameworks. Adept at analyzing technical issues, optimizing performance, and delivering reliable solutions. Experienced in working with cross-functional teams, following best coding practices, and maintaining high-quality standards. Known for quick learning, strong problem-solving abilities, and a commitment to continuous improvement in a fast-paced IT environment.</p>
        </div>
      </div>

      <div id="education-selection" className='flex flex-col gap-5'>
        <div id="education-heading" className='text-4xl text-center sm:text-5xl font-medium md:text-center lg:text-start'>
          <h1>Education</h1>
        </div>

        <div id="education-info" className='flex flex-col gap-10'>
          <div id="engineering" className='hover:scale-z-200 hover:-translate-y-2 transition-all duration-300 ease-in-out group ml-10 sm:ml-0 flex-col sm:flex flex-row-reverse justify-between items-center pt-6 pb-6 md:flex md:flex-col lg:flex lg:flex-row-reverse'>
            <div id="engineering-box">
              <h3 className='text-2xl font-medium'>D Y Patil School of Engineering & Technology, Pune</h3>
              <p className="font-semibold">Bachelor of Technology in Computer Science | DYPU</p>
              <p>2021 - 2025</p>
            </div>

            <div id="engeering-img">
              <a href="https://dypatiluniversitypune.edu.in/school-of-engineering-pune/" target='_blank'><img height={200} width={200} src={props.DYPU} alt="College img" /></a>
            </div>
          </div>

          <div id="high-school" className='hover:scale-z-200 hover:-translate-y-2 transition-all duration-300 ease-in-out group ml-10 sm:ml-0 flex-col sm:flex flex-row-reverse justify-between items-center pt-6 pb-6 md:flex md:flex-col lg:flex lg:flex-row'>
            <div id="high-school-box">
              <h3 className='text-2xl font-medium'>Aabasaheb Patil Junior College of Science, Kolhapur</h3>
              <p className="font-semibold">Higher Secondary Certificate | 12<sup>th</sup></p>
              <p>2019 - 2021</p>
            </div>

            <div id="high-school-img">
              <a href="https://abpedu.org/" target='_blank'><img height={150} width={150} src={props.ABPGroup} alt="high school img" /></a>
            </div>
          </div>
        </div>
      </div>

      <div id="experience-selection" className='flex flex-col gap-10'>
        <div id="experience-heading" className='text-4xl text-center sm:text-5xl font-medium md:text-center lg:text-start'>
          <h1>Experience</h1>
        </div>

        <div id="experience-info" className='ml-10 flex gap-10 sm:flex flex-col gap-5'>
          <div id="experience-company" className='flex flex-col-reverse gap-2.5 md:flex md:flex-row-reverse md:justify-center md:items-center lg:flex lg:flex-col-reverse lg:items-start'>
            <div id="company-name">
              <h3 className='text-2xl font-medium'>Web Development Internship | CodSoft</h3>
            <p>Aug 2023 - Sep 2023</p>
            </div>

            <div id="experience-company-img">
              <a href="#" target='_blank'><img height={300} width={300} src={props.CodSoft} className='rounded-full' alt="company-img" /></a>
            </div>
          </div>

          <div id="experience-description" className='w-[90%] m-auto md:w-[65%] lg:w-[90%]'>
            <ul className='list-disc flex flex-col gap-5'>
              <li><strong>Team Collaboration</strong>: Gained valuable experience working in a team environment, enhancing my communication and
                collaboration skills through Agile methodologies. </li>
              <li><strong>Full Development Cycle </strong>: Understood the complete software development life cycle, from requirement gathering to
                deployment and maintenance.</li>
              <li><strong>Web Frontend Stack Proficiency </strong>: Developed strong skills in the Web Frontend, gaining hands-on experience with React.js
                technologies. </li>
              <li><strong>Feedback and Iteration </strong>: Learned the importance of user feedback in the development process and how to iterate on designs
                and functionalities based on that feedback.</li>
              <li><strong>Project Management </strong>: Enhanced my project management skills by actively participating in planning sessions and using tools
                for task tracking. </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
