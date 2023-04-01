import { ReactElement } from "react";
import { JsxElement } from "typescript";

const apiKey = "k_pdr6wuyv";
export enum MoviesActionCreators {
  Fetch = "FetchMovies",
  Create = "CreateMovie",
  Edit = "EditMovie",
  Delete = "DeleteMovie",
}

export enum MoviesEndpoints {
  GetMovies = `https://imdb-api.com/en/API/Top250Movies/${apiKey}`,
}
export interface ICreateData {
  title: string;
  fullTitle: string;
  year: string;
  crew: string;
}
export interface IEditMovieData {
  id: string;
  title: string;
  fullTitle: string;
}
export interface IDeleteMovie {
  id: string;
}
export interface IMovieState {
  movies: IMovie[];
  error: string;
  isLoading: boolean;
}
export interface IMovie {
  id: string;
  fullTitle: string;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  crew: string;
  rank: string;
  title: string;
  year: string;
}

export interface IBaseButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export interface IItemButton extends IBaseButton {
  onHandleClick?: (movie: IMovie) => void;
  renderItem?: (movie: IMovie) => ReactElement;
}

export interface IListButton extends IBaseButton {
  onHandleClick?: () => void;
  renderItem?: () => ReactElement;
}
export interface IMovieComponent {
  movie: IMovie;
}
