import React, { FC } from "react";
import { IMovie } from "../../../shared/types";
interface ITableViewProps {
  movies: IMovie[];
}

export const TableView: FC<ITableViewProps> = ({ movies }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>FullTitle</th>
          <th>Crew</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.fullTitle}</td>
              <td>{item.crew}</td>
              <td>{item.imDbRating}</td>
              <td>-</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
