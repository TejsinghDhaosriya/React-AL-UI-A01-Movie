import { createSlice } from "@reduxjs/toolkit";
import MoviesListInterface from "../../model/MoviesListInterface";

export interface MoviesState {
  movies: {
    movies: MoviesListInterface[];
    moviesLoading: boolean;
  };
}
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    moviesLoading: true,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMoviesLoading: (state, action) => {
      state.moviesLoading = !!action.payload;
    },
  },
});
export const { setMovies, setMoviesLoading } = moviesSlice.actions;

export const selectMovies = (state: MoviesState) => state.movies.movies;
export const selectMoviesLoading = (state: MoviesState) =>
  state.movies.moviesLoading;

export default moviesSlice.reducer;
