import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  email: null,
  displayName: null,
};

const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
        return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
