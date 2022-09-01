import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  isGameActive: false,
  gameName: "",
  gameType: { type: undefined, value: undefined, amount: 0 },
};

export const gamesDataSlice = createSlice({
  name: "gamesData",
  initialState: initValue,
  reducers: {
    updateGameStatus(state, action) {
      const { payload } = action;
      console.log("inside updateGameStatus", payload);
      return { ...state, ...payload };
    },
    updateGameType(state, action) {
      const { payload } = action;
      state.gameType = { ...state.gameType, ...payload };
    },
    resetAll(state) {
      return {
        ...state,
        gameType: { type: undefined, value: undefined, amount: 0 },
      };
    },
  },
});

export const { updateGameStatus, resetAll, updateGameType } =
  gamesDataSlice.actions;
export default gamesDataSlice.reducer;
