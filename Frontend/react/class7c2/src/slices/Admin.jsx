import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    name: 'Anshul',
    age: 22,
    email: 'anshul@gmail.com',
  },
  reducers: {
    changeAdmin: (_, action) => action.payload,
  },
});

export const { changeAdmin } = adminSlice.actions;
export default adminSlice.reducer;