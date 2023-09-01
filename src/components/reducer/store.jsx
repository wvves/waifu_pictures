import { configureStore } from '@reduxjs/toolkit'
import ImgReducer, { addImage, deleteImage } from './ImgReducer';
import fetchImageReducer from './fetchImage/fetchImageReducer';

let preloadedState
const persistedTodosString = localStorage.getItem('images')

if(persistedTodosString) {
  preloadedState = { 
    url: JSON.parse(persistedTodosString)
  }
}

const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('dispatching', action)
  console.log('next state', store.getState())
  return result
}

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  if(addImage.match(action)) {
    const data = store.getState().url
    console.log('add to localStorage', data)
    localStorage.setItem('images', JSON.stringify(data))
  } else if (deleteImage.match(action)) {
    const data = store.getState().url
    console.log('delete to localStorage', data)
    localStorage.setItem('images', JSON.stringify(data))
  }
  return result
}

const store = configureStore({
  reducer: {
    url: ImgReducer,
    fetchImage: fetchImageReducer
  },
  preloadedState: preloadedState,
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware, localStorageMiddleware)
});

export default store;