import React from 'react'
    
const Button = (props) => {
  return (

        <div className='flex gap-[2rem] px-6 rounded-2xl cursor-pointer text-white py-3 bg-blue-500 '>{props.text}</div>
   
  )
}

export default Button
