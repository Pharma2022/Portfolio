import { useState } from 'react'

import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import { Route,Routes } from 'react-router-dom'
function App() {


  return (
    < >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About/>} />
      </Routes>
      <Routes>
        <Route path='/skills' element={<Skills/>} />
      </Routes>
      <Routes>
        <Route path='/work' element={<Work/>} />
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
      

    </>
  )
}

export default App
