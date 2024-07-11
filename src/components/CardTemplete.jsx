import React from 'react'
import { Link } from 'react-router-dom'

const CardTemplete = ({ link, title, rasm }) => {
  return (
    <Link to={link} className='w-1/4 rounded-lg relative flex-1 border-sky-400 shadow-lg shadow-sky-400 border-2'>
      <img src={rasm} alt="Placeholder" className='w-full' />

      <div className='w-full h-full bg-slate-950 bg-opacity-0 absolute top-0 left-0 items-center justify-center flex text-white font-bold text-xl hover:bg-opacity-50 hover:text-opacity-100'>
        <h2 className='text-opacity-0'>{title}</h2>
      </div>
    </Link>
  )
}

export default CardTemplete