import React from 'react'
import "./style.css"

function Button({label, onClick}){
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button