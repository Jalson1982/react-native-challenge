import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils";

export const fetchCuisines = createAsyncThunk(
  "cuisines/fetchCuisines",
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  }
);
