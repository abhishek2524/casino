import { configureStore } from "@reduxjs/toolkit";
import gamesDataSlice from "./gameDataSlice";
import gamesSlice from "./gamesSlice";
import localStorageSlice from "./localstorageSlice";
export const store = configureStore({
  reducer: {
    localstorage: localStorageSlice,
    gamesData: gamesDataSlice,
    games: gamesSlice,
  },
});
