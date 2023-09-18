'use client'

import { useState } from 'react'
import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
  {
    id: 1,
    title: 'Główna',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'O_Nas',
    url: '/about',
  },
  {
    id: 5,
    title: 'Kontakt',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Panel',
    url: '/dashboard',
  },
]

const Navbar = () => {
  const [sessionStatus, setSessionStatus] = useState(true)
  return (
    <div className='flex justify-between items-center px-10 h-16 '>
      <Link
        href='/'
        className=''
      >
        <h1 className='text-xl font-normal'>Blogomania</h1> 
      </Link>
      <div className='flex items-center text-center gap-4'>
        <DarkModeToggle />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className=''
          >
            {link.title}
          </Link>
        ))}
        {sessionStatus ? (
          <button
            className=''
            onClick={() => alert('logged out')}
          >
            Wyloguj
          </button>
        ) : (
          <button
            className=''
            onClick={() => alert('logged in')}
          >
            Zaloguj
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
