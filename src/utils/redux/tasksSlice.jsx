/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialTasks = [
  {
    id: uuid(),
    title: 'Change Jeep oil',
    status: 'Open',
  },
  {
    id: uuid(),
    title: 'Clean the kitchen',
    status: 'Open',
  },
  {
    id: uuid(),
    title: 'Rake the leaves',
    status: 'Open',
  },
  {
    id: uuid(),
    title: 'Cut down that dead tree',
    status: 'Open',
  },
  {
    id: uuid(),
    title: 'Clean the litter box',
    status: 'Open',
  },
  {
    id: uuid(),
    title: 'Do laundry',
    status: 'Open',
  },
];

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
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;