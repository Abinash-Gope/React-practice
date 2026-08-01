import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className='h-screen p-2'>
      <nav className='flex items-center justify-between mb-4'>
        <h1>Logo</h1>
        <div className='flex gap-10 items-center justify-between'>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <button>Login</button>
      </nav>
      <Home />
      <About />
      <Contact />
    </div>
  )
}

export default App;
