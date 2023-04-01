import { ICreateData, IDeleteMovie, IEditMovieData, IMovie } from "./../../types/index";
import { MoviesActionCreators, MoviesEndpoints } from "./../../types";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const createMovie = createAction<ICreateData>(MoviesActionCreators.Create);
export const editMovie = createAction<IEditMovieData>(MoviesActionCreators.Edit);
export const deleteMovie = createAction<IDeleteMovie>(MoviesActionCreators.Delete);

export const fetchMovies = createAsyncThunk<IMovie[]>(MoviesActionCreators.Fetch, async (_, thunkApi) => {
  try {
    let data = await fetch(MoviesEndpoints.GetMovies);
    const json = await data.clone().json();
    return json.items;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
