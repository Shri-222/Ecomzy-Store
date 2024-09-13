import React from 'react'
import './spinner.css'

 export const Spinner = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
        <div className="custom-loader spinner"></div>
        <div className='font-semibold text-lg mt-5'>Loding...</div>
          
    </div>
  )
}

