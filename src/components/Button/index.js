import React from 'react'
import "./style.css"

function Button({ label, onClick, htmlType = 'button', type = 'primary', className = '', ...rest }) {
  return (
    <button className={`btn ${type} ${className}`} type={htmlType} onClick={onClick} {...rest}>
      {label}
    </button>
  )
}

export default Button