import React from 'react'
import Button from '../Button'

import "./style.css"

function List({ tasks = [], onRemoveClick }) {
  return (
    <ul className='list'>
      {tasks.map((task, index) => (
        <li className='list-item' key={`list-item-${index}`}>
          <span className='list-item-label'>{task}</span>
          <Button label="Remover" onClick={() => {
            onRemoveClick(index)
          }} />
        </li>
      ))}
    </ul>
  )
}

export default List