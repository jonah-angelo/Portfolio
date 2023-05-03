import { useState } from 'react'
import './styles.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage'

function App() {

  return (
    <>
    <div className='flex'>
      <nav className='navbar'>
        <ul>
          <li>
            <a href="/">001 Home</a>
          </li>
          <li>
            <a href="/about">002 About Me</a>

          </li>
          <li>
            <a href="/projects">003 Projects</a>
          </li>
          <li>
            <a href="/contact">004 Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      #stars
      #stars2
      #stars3

    </div>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </>
  )
}

export default App
