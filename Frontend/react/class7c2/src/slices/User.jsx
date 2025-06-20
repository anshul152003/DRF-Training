import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Raj',
    age: 25,
    email: 'raj@example.com',
  },
  reducers: {
    changeUser: (_, action) => action.payload,
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;