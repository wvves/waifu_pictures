import { configureStore } from '@reduxjs/toolkit'
import ImgReducer from './imageReducer/ImgReducer';
import fetchImageReducer from './imageReducer/fetchThunk/fetchImageReducer';
import { localStorageMiddleware, loggerMiddleware } from './imageReducer/ImgMiddleware';
import authReducer from './authReducer/AuthReducer';

let preloadedState
const persistedTodosString = localStorage.getItem('images')

if(persistedTodosString) {
  preloadedState = { 
    url: JSON.parse(persistedTodosString)
  }
}

const store = configureStore({
  reducer: {
    url: ImgReducer,
    fetchImage: fetchImageReducer,
    auth: authReducer
  },
  preloadedState: preloadedState,
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: 1000
    }
  }).concat(
    loggerMiddleware, localStorageMiddleware)
});

export default store;