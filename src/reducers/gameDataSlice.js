import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  isGameActive: false,
  gameName: undefined,
  sessionId: undefined,
  gameType: { type: undefined, value: undefined, amount: 0 },
};

export const gamesDataSlice = createSlice({
  name: "gamesData",
  initialState: initValue,
  reducers: {
    updateGameStatus(state, action) {
      const { payload } = action;
      console.log("inside updateGameStatus", payload);
      if (state.isGameActive !== payload.isGameActive) {
        state.isGameActive = payload.isGameActive;
        if (payload.isGameActive === false) {
          state.gameType = { type: undefined, value: undefined, amount: 0 };
        }
      }
      return state;
    },
    updateGameType(state, action) {
      const { payload } = action;
      state.gameType = { ...state.gameType, ...payload };
    },
    resetGameType(state) {
      return {
        ...state,
        gameType: { type: undefined, value: undefined, amount: 0 },
      };
    },
    updateSessionId(state, action) {
      const { payload } = action;
      const { sessionId = undefined } = payload;
      state.sessionId = sessionId;
    },
    resetAll() {
      return initValue;
    },
  },
});

export const {
  updateGameStatus,
  resetAll,
  updateGameType,
  resetGameType,
  updateSessionId,
} = gamesDataSlice.actions;
export default gamesDataSlice.reducer;
