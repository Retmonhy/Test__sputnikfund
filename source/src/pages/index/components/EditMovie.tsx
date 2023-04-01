import { ChangeEvent, FC, useState } from "react";
import { IMovieComponent } from "../../../shared/types";
import { useDispatch } from "react-redux";
import { editMovie } from "../../../shared/store/action-creators/action-creator";

export const EditMovieComp: FC<IMovieComponent> = ({ movie }) => {
  const [title, setTitle] = useState(movie.title);
  const [fullTitle, setFulltitle] = useState(movie.fullTitle);
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const dispatch = useDispatch();
  const handleChangeFulltitle = (e: ChangeEvent<HTMLInputElement>) => {
    setFulltitle(e.target.value);
  };
  const handleEdit = () => {
    dispatch(editMovie({ id: movie.id, title, fullTitle }));
  };
  return (
    <div>
      <div>Edit</div>

      <input className='edit__input' onChange={handleChangeTitle} value={title} />
      <input className='edit__input' onChange={handleChangeFulltitle} value={fullTitle} />

      <button onClick={handleEdit}>Редактирвоать</button>
    </div>
  );
};
