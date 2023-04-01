import { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../../shared/store/action-creators/action-creator";
import { IMovieComponent } from "../../../shared/types";

export const DeleteMovieComp: FC<IMovieComponent> = ({ movie }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteMovie({ id: movie.id }));
  };
  return (
    <div>
      <div>Delete</div>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
};
