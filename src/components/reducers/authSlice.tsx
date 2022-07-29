import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface loginState {
  value: boolean;
}

const initialState: loginState = {
  value: false,
};

export const authSlice = createSlice({
  name: "loginCheck",
  initialState,
  reducers: {
    authPass: (state) => {
      state.value = true;
    },
    authFail: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authPass, authFail } = authSlice.actions;

export default authSlice.reducer;
