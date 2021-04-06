import React, { useContext } from 'react'

const TaskContext = React.createContext();

const useTaskContext = () => {
  return useContext(TaskContext)
}

export { TaskContext, useTaskContext }