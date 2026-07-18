import React from 'react'

const Navbar = () => {
  return (
    <div className='p-4 flex items-center justify-between bg-black rounded text-white'>
      <div>
        <img className='rounded-full' width={35} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFeioPLnEOiRJqeXk9mWZsfINuCow3ipsvFW3GBggpA&s=10" alt="" />
      </div>
      <div className='flex gap-4 font-semibold'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button className='p-2 bg-blue-700 rounded text-white cursor-pointer'>Create User</button>
    </div>
  )
}

export default Navbar;
