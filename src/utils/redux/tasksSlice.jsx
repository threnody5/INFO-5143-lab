import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuid } from 'uuid';

const initialTasks = [];

export const tasksSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: initialTasks,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    changeTaskStatus: (state, action) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload.id) {
          task.status = action.payload.updatedTask;
        }
      });
    },
    removeTask: (state, action) => {
      state.tasks = action.payload;
    },
    clearTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const {
  addTask,
  changeTaskStatus,
  removeTask,
  clearTasks,
  setTasks,
} = tasksSlice.actions;
export default tasksSlice.reducer;
