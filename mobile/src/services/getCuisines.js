import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCuisines = createAsyncThunk(
  "cuisines/fetchCuisines",
  async () => {
    const response = await axios.get("http://localhost:3000");
    return response.data;
  }
);
