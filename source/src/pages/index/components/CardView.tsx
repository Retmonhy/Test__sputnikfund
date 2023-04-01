import React, { FC } from "react";
import { IItemButton, IMovie } from "../../../shared/types";
import { Card } from "./Card";
interface ICardView {
  movies: IMovie[];
  buttons: IItemButton[];
}

export const CardView: FC<ICardView> = ({ movies, buttons }) => {
  return (
    <>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className='card-wrapper'>
            <Card movie={movie} buttons={buttons} />
          </div>
        );
      })}
    </>
  );
};
