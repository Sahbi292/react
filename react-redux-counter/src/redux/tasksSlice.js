import { createSlice } from "@reduxjs/toolkit";

let id = 1;

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    filter: "all", // all | done | notDone
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: id++,
        description: action.payload,
        isDone: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.list.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, newDescription } = action.payload;
      const task = state.list.find(t => t.id === id);
      if (task) task.description = newDescription;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
