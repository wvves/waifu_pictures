import { configureStore } from '@reduxjs/toolkit'
import ImgReducer from './ImgReducer';

let preloadedState
const persistedTodosString = localStorage.getItem('images')

if(persistedTodosString) {
  preloadedState = { 
    url: JSON.parse(persistedTodosString)
  }
}
const store = configureStore({
  reducer: {
    url: ImgReducer
  },
  preloadedState: preloadedState
});

export default store;