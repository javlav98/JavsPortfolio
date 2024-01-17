import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Social from './Components/Social'
import Header from './Components/Header'


export default function App() {
  return (
    <div>
      <Header />
      <Projects />
      <About />
      <Contact />
      <Social />
    </div>
  )
}
