import React from 'react'
import Profile from '../components/home/Profile'
import About from '../components/home/About'
import Projects from '../components/home/Projects'
import Skills from '../components/home/Skills'
import Experience from '../components/home/Experience'
import Education from '../components/home/Education'
import Contact from '../components/home/Contact'

function Home() {
  return (
    <div className='min-h-screen w-6xl mx-auto overflow-hidden'>
      <Profile />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default Home
