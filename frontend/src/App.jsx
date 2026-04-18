import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Projects from './components/Projects'

const App = () => {
  return (
   <>
     <Hero/>
     <Navbar/>
     <About/>
     <Skills/>
     <Projects/>
     <Resume/>
     <Contact/>
   </>
  )
}

export default App
