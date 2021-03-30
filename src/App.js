import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import Button from './components/Button'
import Input from './components/Input'
import List from './components/List'

import './App.css';

function App() {
  const [taskLabel, setTaskLabel] = useState('')
  const [taskList, setTaskList] = useState([])

  const handleOnClick = () => {
    setTaskList([
      ...taskList,
      taskLabel
    ])
  }

  const handleOnInputChange = (event) => {
    setTaskLabel(event.target.value)
  }

  const handleOnRemoveClick = (index) => {
    const newTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(newTaskList)
  }

  return (
    <div className="App">
      <Header />
      <Input onInputChange={handleOnInputChange} />
      <Button label="Adicionar" onClick={handleOnClick} />
      <List tasks={taskList} onRemoveClick={handleOnRemoveClick} />
      <Footer />
    </div>
  );
}

export default App;
