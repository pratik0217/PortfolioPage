import React from 'react'
import './App.css'
import Navbar from './component/navbar'
import { Route, Routes } from 'react-router'
import Home from './component/home'
import About from './component/about'
import Experience from './component/experience'
import Skills from './component/technicalSkill'
import Projects from './component/projects'
import Contact from './component/contact'
import ProfileImage from './assets/Me.png'
import CV from './assets/Pratik \Jadhav \React \Developer.pdf'
import DYPU from './assets/DYPU.png'
import ABPGroup from './assets/ABP \Education \group.webp'
import CodSoft from './assets/CodSoft \Company.avif'
import TechnicalSkill from './component/skillLogo'
import htmlLogo from './assets/HTML.webp'
import cssLogo from './assets/CSS.webp'
import jsLogo from './assets/JavaScript.webp'
import reactLogo from './assets/React.png'
import tailwindLogo from './assets/Tailwind \CSS.png'
import bootstrapLogo from './assets/Bootstrap.png'
import git from './assets/Git.png'
import gitLogo from './assets/GitHub.png'
import mySql from './assets/MySQL.webp'
import vercel from './assets/Vercel.svg'
import vsCode from './assets/vsCode.png'
import windsurf from './assets/windsurf.png'
import HomePageUsabilityHub from './assets/UsabilityHub \HomePage.png'
import HomePageToDesktop from './assets/ToDesktop \HomePage.png'
import HomePageAltus from './assets/Altus \HomePage.png'
import Certifications from './component/Certifications'
import CopyRight from './component/copyRight'

export default function App() {
  return (
    <>
      <header>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </header>

      <main>
        <section>
          <Home profileImage={ProfileImage} CV={CV} />
        </section>
        <section>
          <About DYPU={DYPU} ABPGroup={ABPGroup} CodSoft={CodSoft} />
        </section>

        <section className='flex flex-col gap-15'>
          <Skills />
          <section className='flex-col gap-15'>
            <section id='logos' className='container flex justify-center gap-20'>
              <TechnicalSkill logo={htmlLogo} />
              <TechnicalSkill logo={cssLogo} />
              <TechnicalSkill logo={bootstrapLogo} />
              <TechnicalSkill logo={tailwindLogo} />
              <TechnicalSkill logo={jsLogo} />
              <TechnicalSkill logo={reactLogo} />
            </section>

            <section id='logos' className='container justify-center flex gap-20'>
              <TechnicalSkill logo={mySql} />
              <TechnicalSkill logo={git} />
              <TechnicalSkill logo={gitLogo} />
              <TechnicalSkill logo={vercel} />
              <TechnicalSkill logo={vsCode} />
              <TechnicalSkill logo={windsurf} />
            </section>
          </section>
        </section>

        <section>
          <Projects HomePageUsabilityHub={HomePageUsabilityHub} HomePageToDesktop={HomePageToDesktop} HomePageAltus={HomePageAltus} />
        </section>

        <section>
          <Certifications />
        </section>
      </main>

      <footer>
        <Contact />
        <CopyRight />
      </footer>
    </>
  )
}