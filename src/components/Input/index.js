import React, { forwardRef } from 'react'
import "./style.css"

function Input({ onInputChange, onEnter, ...rest }, ref) {

  const handleOnKeyUp = (e) => {
    const { key } = e

    if (key === 'Enter') {
      onEnter(e);
    } else {
      return true;
    }
  }

  return (
    <input ref={ref} className='input' onChange={onInputChange} onKeyDown={handleOnKeyUp} {...rest} />
  )
}

export default forwardRef(Input)