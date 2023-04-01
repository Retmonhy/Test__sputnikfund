import { Movie } from "../../models/movieModel";
import { createMovie, deleteMovie, editMovie, fetchMovies } from "../action-creators/action-creator";
import { IMovieState } from "./../../types/index";
import { createReducer } from "@reduxjs/toolkit";

const initialState: IMovieState = {
  movies: [],
  error: "",
  isLoading: true,
};
export const movieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    })
    .addCase(createMovie, (state, action) => {
      state.movies = [{ ...new Movie(action.payload) }, ...state.movies];
    })
    .addCase(editMovie, (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          return { ...movie, ...action.payload };
        }
        return movie;
      });
    })
    .addCase(deleteMovie, (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
    })
    .addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      if (action.error.message) state.error = action.error.message;
    })
    .addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
});
