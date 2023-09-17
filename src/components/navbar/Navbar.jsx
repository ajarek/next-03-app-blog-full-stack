'use client'

import { useState } from 'react'
import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

const links = [
  {
    id: 1,
    title: 'Home',
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
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
]

const Navbar = () => {
  const [sessionStatus, setSessionStatus] = useState(true)
  return (
    <div className='flex justify-between items-center px-10 h-16'>
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
            Logout
          </button>
        ) : (
          <button
            className=''
            onClick={() => alert('logged in')}
          >
            Login
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
