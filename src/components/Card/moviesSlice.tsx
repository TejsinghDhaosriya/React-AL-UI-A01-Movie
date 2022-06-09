import { createSlice } from "@reduxjs/toolkit";
import MoviesListInterface from "../../model/MoviesListInterface";

export interface MoviesState {
  movies: {
    movies: MoviesListInterface[];
    moviesLoading: boolean;
    moviesError: string;
  };
}
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    moviesLoading: true,
    moviesError: "",
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMoviesLoading: (state, action) => {
      state.moviesLoading = !!action.payload;
    },
    setMoviesError: (state, action) => {
      state.moviesError = action.payload;
    },
  },
});
export const { setMovies, setMoviesLoading, setMoviesError } =
  moviesSlice.actions;

export const selectMovies = (state: MoviesState) => state.movies.movies;
export const selectMoviesLoading = (state: MoviesState) =>
  state.movies.moviesLoading;
export const selectMoviesError = (state: MoviesState) =>
  state.movies.moviesError;
export default moviesSlice.reducer;
