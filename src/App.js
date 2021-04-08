import React, { useRef, useState, useEffect } from 'react'
import { Layout } from 'antd'
import { TaskContext } from './context/task.context'

import TaskForm from './widgets/TaskForm'
import List from './components/List'

import { getTasks, createTask, deleteTask, deleteAll } from './services/task.service'

import './App.css';

const { Header, Content } = Layout

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

  const handleOnAddTask = async (title) => {
    if (taskList.includes(title)) {
      taskFormRef.current.showError('Tarefa ja adicionada anteriormente!');
    } else {
      await createTask(title);
      loadTasks()
    }
  }

  const handleOnRemoveClick = async (index) => {
    await deleteTask(index)
    loadTasks()
  }

  const handleOnClearAll = async () => {
    await deleteAll();
    loadTasks()
  }

  return (
    <TaskContext.Provider value={{ tasks: taskList, onClearAll: handleOnClearAll }}>
      <Layout>
        <Header>
          <TaskForm ref={taskFormRef} onAddTask={handleOnAddTask} />
        </Header>
        <Content style={{ padding: '20px 50px' }}>
          <List tasks={taskList} onRemoveClick={handleOnRemoveClick} onClearAll={handleOnClearAll} />
        </Content>
      </Layout>
    </TaskContext.Provider>
  );
}

export default App;
