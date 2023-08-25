import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./featureSlice/homeSlice";

const store = configureStore({
  reducer: {
    homeSlice,
  },
});

export default store;
