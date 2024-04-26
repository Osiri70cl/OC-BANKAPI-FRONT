import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  tokenData: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setTokenData: (state, action: PayloadAction<any>) => {
      state.tokenData = action.payload;
    },
    clearTokenData: (state) => {
      state.tokenData = null;
    },
  },
});

export const { setTokenData, clearTokenData } = tokenSlice.actions;
export default tokenSlice.reducer;
