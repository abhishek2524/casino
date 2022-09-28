import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./commonSlice";
import gamesDataSlice from "./gameDataSlice";
import gamesSlice from "./gamesSlice";
import localStorageSlice from "./localstorageSlice";
export const store = configureStore({
  reducer: {
    localstorage: localStorageSlice,
    gamesData: gamesDataSlice,
    games: gamesSlice,
    common: commonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
