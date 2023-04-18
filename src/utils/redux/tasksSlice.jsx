import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialTasks = [];

export const tasksSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: initialTasks,
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuid(),
        title: action.payload.title,
        status: action.payload.status,
      };
      state.tasks.push(newTask);
    },
    loadTasks: (state, action) => {
      state.tasks = action.payload;
    },
    changeTaskStatus: (state, action) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload.id) {
          task.done = action.payload.updatedTask;
        }
      });
    },
    removeTask: (state, action) => {
      state.tasks = action.payload;
    },
    clearTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, loadTasks, changeTaskStatus, removeTask, clearTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
