import { addImage, deleteImage } from "./ImgReducer"

export const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  console.log('dispatching', action)
  console.log('next state', store.getState())
  return result
}

export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  const data = store.getState().url
  if(addImage.match(action)) {
    console.log('add to localStorage', data)
    localStorage.setItem('images', JSON.stringify(data))
  } else if (deleteImage.match(action)) {
    console.log('delete to localStorage', data)
    localStorage.setItem('images', JSON.stringify(data))
  }
  return result
}