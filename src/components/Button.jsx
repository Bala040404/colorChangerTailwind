import React from 'react'

function Button({color,changer}) {
  return (
    <button className='rounded-lg border-solid border-1 h-8 w-24' style={{backgroundColor:color}}
    onClick={()=>{changer(color)}}>
      {color}
    </button>
  )
}

export default Button
