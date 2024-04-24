import React from 'react'
import fondoPage from '../../../assets/fondopage.jpg'

export const Home = ({children}) => {
    return (
      <div style= {{backgroundImage:`url(${fondoPage})`}} className='w-full h- bg-no-repeat bg-cover bg-center'>{children}</div>
    )
}