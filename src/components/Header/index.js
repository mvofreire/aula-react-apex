import React from 'react'
import Button from '../Button'
import { useTaskContext } from '../../context/task.context'
import "./style.css"

function Header() {
  const { tasks, onClearAll } = useTaskContext()
  return (
    <div className='header'>
      Minhas Tarefas (Quantidade: {tasks.length})
      {
        tasks.length > 0 && (
          <Button label='Limpar todos' type='secondary' onClick={onClearAll} />
        )
      }
    </div>
  )
}

export default Header