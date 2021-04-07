import React from 'react'
import Button from '../Button'

import "./style.css"

function List({ tasks = [], onRemoveClick, onClearAll }) {
  return (
    <ul className='list'>
      {tasks.map((task, index) => (
        <li className='list-item' key={`list-item-${index}`}>
          <span className='list-item-label'>{task}</span>
          <Button type='secondary' label="x" onClick={() => {
            onRemoveClick(index)
          }} />
        </li>
      ))}
      {
        tasks.length === 0 && (
          <span className='list-blank-result'>Você ainda não possui nenhuma tarefa!</span>
        )
      }
      {
        tasks.length > 0 && (
          <Button className='list-clear-all' type='secondary' onClick={onClearAll} label='Apagar Todos' />
        )
      }
    </ul>
  )
}

export default List