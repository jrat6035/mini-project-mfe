import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    localUser: null,
  },
  reducers: {
    setLocalUser: (state, action) => {
      state.localUser = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const {
  setLocalUser,
  setUser,
  clearUser,
} = userSlice.actions;

export default userSlice;
