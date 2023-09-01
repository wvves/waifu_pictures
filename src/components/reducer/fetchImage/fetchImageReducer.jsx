import { createSlice } from "@reduxjs/toolkit";
import { fetchDataImgage } from "./ActionThunk";

const initialState = {
  entities: null,
  status: 'idle'
}

const fetchImageReducer = createSlice({
  name: 'fetchImages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDataImgage.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(fetchDataImgage.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchDataImgage.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = 'succeeded'
      })
  }
});

export default fetchImageReducer.reducer;