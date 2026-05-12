import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Certificates from './components/Certificates'

const App = () => {
  return (
   <>
     <Hero/>
     <Navbar/>
     <About/>
     <Skills/>
     <Projects/>
     <Certificates/>
     <Resume/>
     <Contact/>
   </>
  )
}

export default App
