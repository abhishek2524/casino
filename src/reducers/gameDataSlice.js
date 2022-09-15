import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  isGameActive: false,
  gameName: undefined,
  sessionId: undefined,
  isTimerActive: false,
  dragonArr: [],
  tigerArr: [],
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
    startTimer(state) {
      state.isTimerActive = true;
    },
    stopTimer(state) {
      state.isTimerActive = false;
    },
    updateDragon(state, action) {
      const { payload } = action;
      // console.log("updating Dragon", payload);
      const { dragonArr = [] } = payload;

      state.dragonArr = dragonArr;
    },
    updateTiger(state, action) {
      const { payload } = action;
      // console.log("updating Tiger", payload);
      const { tigerArr = [] } = payload;
      state.tigerArr = tigerArr;
    },
  },
});

export const {
  updateGameStatus,
  resetAll,
  updateGameType,
  resetGameType,
  updateSessionId,
  startTimer,
  stopTimer,
  updateDragon,
  updateTiger,
} = gamesDataSlice.actions;
export default gamesDataSlice.reducer;
