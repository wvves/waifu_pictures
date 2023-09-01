import { createSlice } from "@reduxjs/toolkit";
import { fetchDataImgage } from "./fetchImage/ActionThunk";

const imgReducer = createSlice({
  name: 'images',
  initialState: {
    items: []
  },
  reducers: {
    addImage: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
      state.items.push(action.payload)
      // localStorage.setItem('images', JSON.stringify(state))
      
    },
    deleteImage: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload)
      // localStorage.setItem('images', JSON.stringify(state))
    },
    getState: state => {
      return state
    }
  },
});

export const { addImage, deleteImage, getState } = imgReducer.actions

export default imgReducer.reducer