import { configureStore } from '@reduxjs/toolkit';
import infoReducer from './features/info/infoSlice';

export const store = configureStore({
  reducer: {
    info: infoReducer,
  },
})