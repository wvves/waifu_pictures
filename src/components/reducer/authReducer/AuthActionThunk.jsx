import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUser = createAsyncThunk(
  'fetchUser',
  async ( username ) => {
    try {
      const response = (await axios.post('http://localhost:31299/api/user', { user: username }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }))
      return response.data[0]
    } catch(error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)