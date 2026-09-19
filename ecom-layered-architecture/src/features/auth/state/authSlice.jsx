import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthanticated: false,
    isLoading: true,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthanticated = true;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthanticated = false;
      state.isLoading = false;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
