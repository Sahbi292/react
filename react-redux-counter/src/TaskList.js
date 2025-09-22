import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { setFilter } from "./redux/tasksSlice";

function TaskList() {
  const dispatch = useDispatch();
  const { list, filter } = useSelector((state) => state.tasks);

  const filteredTasks = list.filter((t) => {
    if (filter === "done") return t.isDone;
    if (filter === "notDone") return !t.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>Toutes</button>
        <button onClick={() => dispatch(setFilter("done"))}>Effectuées</button>
        <button onClick={() => dispatch(setFilter("notDone"))}>Non effectuées</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
