import React from 'react'
import { extras } from '../../scripts/extras'

export const Noticia = () => {
  return (
    <>
      {extras.map((news) =>(
        <div className='flex justify-self-center' key={news.id}>
          <div className='w-32 h-32'><img className='h-full w-full' src={news.img} alt="" /></div>
          <div className='w-full h-12 '>
            <p className='text-slate-50'>{news.date}</p>
            <p className='text-slate-50'>{news.description}</p>
          </div>
       </div>
      ))}
    </>

  )
}
