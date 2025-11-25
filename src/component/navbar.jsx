import React from 'react'
import { NavLink } from 'react-router'

export default function navbar() {
  return (
      <div id="navbar-container" className="container hover:scale-z-200 hover:-translate-y-2 transition-all duration-300 ease-in-out group flex flex-row-reverse justify-between items-center py-6 md:pl-10 pr-10 lg:pl-0 pr-0">
            <div id="social-links" className="flex justify-around items-center text-2xl gap-5">
                <div id="linkedin" className='hidden lg:flex'>
                    <a href="https://www.linkedin.com/in/pratik-nandkumar-jadhav/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div id="github" className='hidden lg:flex'>
                    <a href="https://github.com/pratik0217" target='_blank'><i className="fa-brands fa-github"></i></a>
                </div>
                <div id="dark-mode" className='-mr-45 pr-5 sm: flex md:mr-0'>
                    <i className="fa-solid fa-lightbulb"></i>
                </div>
            </div>

            <div id="navbar-menu">
                <nav className='flex text-lg font-semibold gap-6 hidden sm:hidden md:flex'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About me</NavLink>
                    <NavLink to="/experience">Experience</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
        </div>
  )
}
