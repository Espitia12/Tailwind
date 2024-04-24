import React from 'react'
import { extras } from '../../scripts/extras'

export const Noticia = () => {
  return (
    <>
      {extras.map((news) =>(
        <div className='flex justify-self-center p-2 m-2 ' key={news.id}>
          <div className='w-32 h-32 m-2 rounded-full overflow-hidden border-4 border-neutral-950'><img className='h-full w-full ' src={news.img} alt="" /></div>
          <div className='w-full h-32 '>
            <p className='text-slate-50 m-2'>{news.date}</p>
            <p className='text-slate-50 m-2' >{news.description}</p>
          </div>
       </div>
      ))}
    </>

  )
}
