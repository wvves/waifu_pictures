import { configureStore } from '@reduxjs/toolkit'
import ImgReducer from './ImgReducer';

const store = configureStore({
  reducer: {
    url: ImgReducer
  }
});

export default store;