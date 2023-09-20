'use client'

import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const DarkModeToggle = () => {
  const { setMode, mode } = useContext(ThemeContext)

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  return (
    <div
      className='flex items-center border rounded-xl relative'
      onClick={toggle}
    >
      <div className=''>🌙</div>
      <div className=''>🔆</div>
      <div
        className='bg-emerald-500 w-5 h-5 rounded-full absolute cursor-pointer'
        style={mode === 'dark' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}

export default DarkModeToggle
