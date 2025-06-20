import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../slices/Admin';
import userReducer from '../slices/User';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    user: userReducer,
  },
});

export default store;