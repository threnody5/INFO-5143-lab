/** @format */

import { createSlice } from '@reduxjs/toolkit';

const statusList = [
  {
    status: 'Please select an option',
    value: null,
  },
  {
    status: 'Open',
    value: false,
  },
  {
    status: 'Completed',
    value: true,
  },
];

export const statusListSlice = createSlice({
  name: 'statusList',
  initialState: {
    list: statusList,
  },
});

export default statusListSlice.reducer;
