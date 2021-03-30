import React from 'react'
import "./style.css"

function Input({onInputChange}){
  return (
    <input className='input' onChange={onInputChange} />
  )
}

export default Input