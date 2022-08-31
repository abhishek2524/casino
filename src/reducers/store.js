import { configureStore } from "@reduxjs/toolkit";
import gamesDataSlice from "./gameSlice";
import localStorageSlice from "./localstorageSlice";
export const store = configureStore({
  reducer: {
    localstorage: localStorageSlice,
    gamesData: gamesDataSlice,
  },
});
