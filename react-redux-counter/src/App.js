import React from "react";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

function App() {
  return (
    <div>
      <h1>Application ToDo avec Redux</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
