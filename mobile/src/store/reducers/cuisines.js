import { createSlice } from "@reduxjs/toolkit";
import { fetchCuisines } from "../../services/getCuisines";

const initialState = {
  data: [],
  parentIds: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const cuisinesSlice = createSlice({
  name: "cuisines",
  initialState: { ...initialState },
  reducers: {
    selectCategory: (state, action) => {
      const selectedCategory = action.payload.category;
      state.parentIds.push({
        id: selectedCategory.id,
        name: selectedCategory.name,
      });
    },
    resetCategory: (state) => {
      state.parentIds = [];
    },
    goBack: (state) => {
      state.parentIds.pop();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCuisines.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCuisines.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCuisines.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectCategory, resetCategory, goBack } = cuisinesSlice.actions;

export default cuisinesSlice.reducer;
