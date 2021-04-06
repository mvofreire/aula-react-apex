import React from 'react'
import { useTaskContext } from '../../context/task.context'
import "./style.css"

function Header() {
  const { tasks } = useTaskContext()
  return (
    <div className='header'>
      Minhas Tarefas (Quantidade: {tasks.length})
    </div>
  )
}

export default Header