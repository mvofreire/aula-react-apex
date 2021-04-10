import React from "react";
import { useTaskContext } from "../context/task.context";
import List from "../components/List";

function TaskPage() {
  const { tasks, onRemoveItem, onRemoveAll } = useTaskContext();

  return (
    <List tasks={tasks} onRemoveClick={onRemoveItem} onClearAll={onRemoveAll} />
  );
}

export default TaskPage;
