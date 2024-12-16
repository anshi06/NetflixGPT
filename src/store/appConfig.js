import { createSlice } from "@reduxjs/toolkit";

const appConfig = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = appConfig.actions;
export default appConfig.reducer;
