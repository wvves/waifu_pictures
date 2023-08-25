import { createSlice } from "@reduxjs/toolkit";

const imgReducer = createSlice({
  name: 'image',
  initialState: {
    items: []
  },
  reducers: {
    addImage: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
      state.items.push(action.payload)
      localStorage.setItem('images', JSON.stringify(state))
     
    },
    deleteImage: (state, action) => {
      state.items = state.items.filter((value, index) => index !== action.payload)
      localStorage.setItem('images', JSON.stringify(state.items))
    },
    getImages: (state, action) => {
      return action.payload
    }
  }
});

export const { addImage, deleteImage, getImages } = imgReducer.actions

export default imgReducer.reducer