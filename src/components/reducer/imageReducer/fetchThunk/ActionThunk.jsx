import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../api/Api";

export const fetchDataImgage = createAsyncThunk('image/fetchImage', async (apiUrl) => {
  const response = await Api.get(apiUrl);
  return response;
});