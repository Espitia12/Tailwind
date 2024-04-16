import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderBlog from './components/HeaderBlog/HeaderBlog'
import { Home } from './components/Pages/Home/Home'

function App() {
  return (
    <>
    <Home> 
      <HeaderBlog> 
      </HeaderBlog>
    </Home>
    </>
  )
}

export default App
