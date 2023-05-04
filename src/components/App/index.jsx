import { useState } from 'react'
import './styles.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage'
import About from '../About'
import { Canvas } from '@react-three/fiber'
import Navbar from '../Navbar'
import Moon from '../Moon'
function App() {

  return (
    <>
    <Navbar />
    < HomePage/>
    <Canvas className='canvas pt-20'>
      <Moon />
    </Canvas>
    <About />
    </>
  )
}

export default App
