import { useState } from 'react'

import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

function App() {


  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
