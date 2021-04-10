import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TaskPage from "./pages/TaskPage";
import TaskDetailPage from "./pages/TaskDetailPage";

import { Layout } from "antd";
import { TaskContext } from "./context/task.context";
import TaskForm from "./widgets/TaskForm";
import {
  getTasks,
  createTask,
  deleteTask,
  deleteAll,
} from "./services/task.service";
import "./App.css";

const { Header, Content } = Layout;
const App = () => {
  const taskFormRef = useRef();
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const { data } = await getTasks();
    setTaskList(data);
  };

  const handleOnAddTask = async (title) => {
    if (taskList.includes(title)) {
      taskFormRef.current.showError("Tarefa ja adicionada anteriormente!");
    } else {
      await createTask(title);
      loadTasks();
    }
  };

  const handleOnRemoveClick = async (index) => {
    await deleteTask(index);
    loadTasks();
  };

  const handleOnClearAll = async () => {
    await deleteAll();
    loadTasks();
  };

  return (
    <BrowserRouter>
      <TaskContext.Provider
        value={{
          tasks: taskList,
          onClearAll: handleOnClearAll,
          onRemoveItem: handleOnRemoveClick,
          onRemoveAll: handleOnClearAll,
        }}
      >
        <Layout>
          <Header>
            <TaskForm ref={taskFormRef} onAddTask={handleOnAddTask} />
          </Header>
          <Content style={{ padding: "20px 50px" }}>
            <Switch>
              <Route exact path="/" component={TaskPage} />
              <Route path="/:index" component={TaskDetailPage} />
            </Switch>
          </Content>
        </Layout>
      </TaskContext.Provider>
    </BrowserRouter>
  );
};

export default App;
