import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./AuthActionThunk";

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    entities: null,
    status: 'idle',
  },
  reducers: {
    getState: (state) => {
      return state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'pending'
        state.auth = false
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
        state.auth = false
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.entities = action.payload
        state.auth = true
        state.status = 'succeeded'
        
      })
  }
});

export const { getState } = authReducer.actions

export default authReducer.reducer