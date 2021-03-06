import React, { useRef, useState, useEffect } from 'react'

import { TaskContext } from './context/task.context'

import Footer from './components/Footer'

import TaskForm from './widgets/TaskForm'
import List from './components/List'

import { getTasks } from './services/task.service'

import './App.css';

function App() {
  const taskFormRef = useRef();
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    const { data } = await getTasks();
    setTaskList(data);
  }

  const handleOnAddTask = (title) => {
    if (taskList.includes(title)) {
      taskFormRef.current.showError('Tarefa ja adicionada anteriormente!');
    } else {
      setTaskList([
        ...taskList,
        title
      ])
    }
  }

  const handleOnRemoveClick = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList)
    loadTasks()
  }

  const handleOnClearAll = () => {
    setTaskList([])
  }

  return (
    <TaskContext.Provider value={{ tasks: taskList, onClearAll: handleOnClearAll }}>
      <div className="App">
        <TaskForm ref={taskFormRef} onAddTask={handleOnAddTask} />
        <List tasks={taskList} onRemoveClick={handleOnRemoveClick} onClearAll={handleOnClearAll} />
      </div>
      <Footer />
    </TaskContext.Provider>
  );
}

export default App;
