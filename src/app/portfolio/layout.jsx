import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='min-h-screen w-full p-10'>
      <h1 className='text-5xl'>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout