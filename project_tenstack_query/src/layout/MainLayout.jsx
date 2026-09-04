import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='p-2 bg-gray-800'>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
