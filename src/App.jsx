import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderBlog from './components/HeaderBlog/HeaderBlog'
import { Home } from './components/Pages/Home/Home'
import { MainBlog } from './components/MainBlog/MainBlog'



function App() {
  return (
    <>
    <Home> 
      <HeaderBlog> 
      </HeaderBlog>
      <MainBlog>
        <section className=' bg-white w-80 h-80'>

        </section>
        <section className=' bg-white w-80 h-80'>
          
        </section>
      </MainBlog>
      
    </Home>
    </>
  )
}

export default App
