import { configureStore } from "@reduxjs/toolkit";
import localStorageSlice from "./localstorageSlice";
export const store = configureStore({
  reducer: {
    localstorage: localStorageSlice,
  },
});
