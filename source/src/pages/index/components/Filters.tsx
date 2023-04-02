import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { MovieContext } from "./CardList";
interface IFilterProps {}

export const Filters: FC<IFilterProps> = () => {
  const [value, setValue] = useState<string>("");
  const { setMovies, movies } = useContext(MovieContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (setMovies) {
      if (value.length === 0) {
        setMovies(movies);
        return;
      } else {
        setMovies(
          movies.filter((movie) => {
            return movie.title.startsWith(value);
          })
        );
      }
    }
  }, [value, movies]);
  return (
    <section className='section'>
      <h3>Фильтрация</h3>
      <div className='filters-wrapper'>
        <div>
          <label className='input-label'>Поиск по названию:</label>
          <input value={value} onChange={handleChange} />
        </div>
        <div>
          <button onClick={() => {}}>Другие фильтры мы не сделали</button>
        </div>
      </div>
    </section>
  );
};
