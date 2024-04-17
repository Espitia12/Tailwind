import React from 'react'

export const Noticia = ({idnews,img,date,title,description}) => {
  return (
    <div id={idnews}>
        <div>{img}</div>
        <div className='w-full h-12 '>
            <p className='text-slate-50'>{date}</p>
            <h1 className='text-slate-50'>{title}</h1>
            <p className='text-slate-50'>{description}</p>
        </div>
    </div>
  )
}
