import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    configUrls: null,
  },
  reducers: {
    getConfigaration: (state, { payload }) => {
      state.configUrls = payload;
    },
  },
});

export const { getConfigaration } = homeSlice.actions;
export default homeSlice.reducer;
