/** @format */

import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import tasksReducer from './tasksSlice';
import statusListReducer from './statusListSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    task: tasksReducer,
    statusList: statusListReducer,
  },
});
