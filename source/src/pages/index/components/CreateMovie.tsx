import { ChangeEvent, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { createMovie } from "../../../shared/store/action-creators/action-creator";

export const CreateMovieComp: FC = () => {
  const [title, setTitle] = useState("");
  const [fullTitle, setFulltitle] = useState("");
  const [year, setYear] = useState("");
  const [crew, setCrew] = useState("");

  const dispatch = useDispatch();

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeFulltitle = (e: ChangeEvent<HTMLInputElement>) => {
    setFulltitle(e.target.value);
  };
  const handleChangeYear = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };
  const handleChangeCrew = (e: ChangeEvent<HTMLInputElement>) => {
    setCrew(e.target.value);
  };
  const handleCreate = () => {
    const data = {
      title,
      fullTitle,
      year,
      crew,
    };
    dispatch(createMovie(data));
  };
  return (
    <>
      <div>
        <div>Создать</div>
        <input className='edit__input' placeholder='Title' onChange={handleChangeTitle} value={title} />
        <input className='edit__input' placeholder='full title' onChange={handleChangeFulltitle} value={fullTitle} />
        <input className='edit__input' placeholder='Year' onChange={handleChangeYear} value={year} />
        <input className='edit__input' placeholder='Crew' onChange={handleChangeCrew} value={crew} />
      </div>
      <div>
        <button onClick={handleCreate}>Создать</button>
      </div>
    </>
  );
};
