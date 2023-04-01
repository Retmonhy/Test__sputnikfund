import { FC, useEffect } from "react";
import { AppDispatch, useTypedSelector } from "./../../shared/store/reducers";
import { fetchMovies } from "../../shared/store/action-creators/action-creator";
import { useDispatch } from "react-redux";
import { CardList, CreateMovieComp, DeleteMovieComp, EditMovieComp, ViewMovieComp } from "./components";
import { IItemButton, IListButton } from "../../shared/types";
interface ILayoutProps {}

const listButtons: IListButton[] = [
  {
    text: "Создать",
    renderItem: () => <CreateMovieComp />,
  },
];
const itemButtons: IItemButton[] = [
  {
    text: "Просмотреть",
    renderItem: (movie) => <ViewMovieComp movie={movie} />,
  },
  {
    text: "Редактировать",
    renderItem: (movie) => <EditMovieComp movie={movie} />,
  },
  {
    text: "Удалить",
    renderItem: (movie) => <DeleteMovieComp movie={movie} />,
  },
  {
    text: "Логировать",
    onHandleClick: (movie) => console.log("movie = ", movie),
  },
];

export const Layout: FC<ILayoutProps> = () => {
  const dispatch = useDispatch() as AppDispatch;
  const { movies, isLoading, error } = useTypedSelector((i) => i.movie);
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (error) {
    return <div>Произошла ошбика: {error}</div>;
  }
  return (
    <>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <CardList movies={movies} listButtons={listButtons} itemButtons={itemButtons} />
      )}
    </>
  );
};
