import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/tasksSlice";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
}

export default AddTask;
