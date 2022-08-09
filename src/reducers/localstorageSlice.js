import { createSlice } from "@reduxjs/toolkit";

const initValue = {};

export const localStorageSlice = createSlice({
  name: "localstorage",
  initialState: initValue,
  reducers: {
    addKeyObject(state, action) {
      const { payload } = action;
      const { data } = payload;
      return { ...state, ...data };
    },
    readAllKeys(state, action) {
      const { payload } = action;
      return { ...state, ...payload };
    },
  },
});

export const { addKeyObject, readAllKeys } = localStorageSlice.actions;
export default localStorageSlice.reducer;
