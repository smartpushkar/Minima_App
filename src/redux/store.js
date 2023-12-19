import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from './slices/AuthSlice';
import UserSlice from './slices/UserSlice';
import RoleSlice from './slices/RoleSlice';

export const store = configureStore({
  reducer: {
    userData: authSlice,
    userListData: UserSlice,
    roleListData:RoleSlice
  },
})

