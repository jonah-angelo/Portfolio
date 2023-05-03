import { useState } from 'react'
import './styles.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage'
import { Canvas } from '@react-three/fiber'
import Navbar from '../Navbar'
import Moon from '../Moon'

function App() {

  return (
    <>
    <Navbar />
    <Canvas className='canvas pt-20'>
      <Moon />
    </Canvas>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
