import { createSlice } from "@reduxjs/toolkit";

const imgReducer = createSlice({
  name: 'image',
  initialState: {
    items: []
  },
  reducers: {
    addImage: (state, action) => {
      state.items.push(action.payload)
      localStorage.setItem('images', JSON.stringify(state))
    },
    deleteImage: (state, action) => {
      state.items = state.items.filter((value, index) => index !== action.payload)
      localStorage.setItem('images', JSON.stringify(state.items))
    }
  }
});

export const { addImage, deleteImage } = imgReducer.actions

export default imgReducer.reducer