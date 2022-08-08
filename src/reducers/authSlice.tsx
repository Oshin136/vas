import { createSlice } from "@reduxjs/toolkit";

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
    setAuth: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
