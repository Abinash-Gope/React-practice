import React from 'react'
import { NavLink, Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <NavLink to={"/detail"}>Show Detail</NavLink>
      <Outlet />
    </div>
  )
}

export default Home
