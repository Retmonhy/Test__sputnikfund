import { FC } from "react";
import { IMovieComponent } from "../../../shared/types";

export const ViewMovieComp: FC<IMovieComponent> = ({ movie }) => {
  return (
    <div>
      <div>Show</div>
      <ul className='movieinfo'>
        <li className='movieinfo__item'>
          <img src={movie.image} />
        </li>
        <li className='movieinfo__item'>{movie.fullTitle}</li>
        <li className='movieinfo__item'>Id: {movie.id}</li>
        <li className='movieinfo__item'>Crew: {movie.crew}</li>
        <li className='movieinfo__item'>Rating: {movie.imDbRating}</li>
        <li className='movieinfo__item'>Rating Count: {movie.imDbRatingCount}</li>
        <li className='movieinfo__item'>Movie rank: {movie.rank}</li>
      </ul>
    </div>
  );
};
