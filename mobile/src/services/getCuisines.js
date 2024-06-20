import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3000";

export const fetchCuisines = createAsyncThunk(
  "cuisines/fetchCuisines",
  async () => {
    const response = await axios.get(URL);
    return response.data;
  }
);
