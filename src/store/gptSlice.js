import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movies: null,
    movieNames: null
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult:(state, action) => {
      const { movieNames, movies } = action.payload;
      state.movieNames = movieNames;
      state.movies = movies;
    }
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
