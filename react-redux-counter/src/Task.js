import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "./redux/tasksSlice";

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleSave = () => {
    dispatch(editTask({ id: task.id, newDescription }));
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <>
          <input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleSave}>Enregistrer</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? "line-through" : "" }}>
            {task.description}
          </span>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
        </>
      )}
    </div>
  );
}

export default Task;
