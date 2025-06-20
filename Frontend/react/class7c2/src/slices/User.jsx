import { createSlice } from '@reduxjs/toolkit';
import aviPhoto from '../assets/avi.JPG';  

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name : 'Aviraj Bhaii',
    age  : 25,
    email: 'Avibhaliya@example.com',
    photo: aviPhoto,
  },
  reducers: {
    changeUser: (_, action) => action.payload,
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
