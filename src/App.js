import React, { useRef, useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import TaskForm from './widgets/TaskForm'
import List from './components/List'

import './App.css';

function App() {
  const taskFormRef = useRef();
  const [taskList, setTaskList] = useState([])

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
  }

  const handleOnClearAll = () => {
    setTaskList([])
  }

  return (
    <>
      <Header />
      <div className="App">
        <TaskForm ref={taskFormRef} onAddTask={handleOnAddTask} />
        <List tasks={taskList} onRemoveClick={handleOnRemoveClick} onClearAll={handleOnClearAll} />
      </div>
      <Footer />
    </>
  );
}

export default App;
