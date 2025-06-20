import { createSlice } from '@reduxjs/toolkit';
import anshPhoto from '../assets/ansh.JPG';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    name : 'Anshul Gangrade',
    age  : 22,
    email: 'anshulgangrade@gmail.com',
    photo: anshPhoto,
  },
  reducers: {
    changeAdmin: (_, action) => action.payload,
  },
});

export const { changeAdmin } = adminSlice.actions;
export default adminSlice.reducer;
