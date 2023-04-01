import React, { FC, useEffect, useState } from "react";
import { IItemButton, IListButton, IMovie } from "../../../shared/types";
import { Card } from "./Card";
import { useModal } from "../../../shared/hooks/useModal";
import { Modal } from "./Modal";
import { ListButtons } from "./ListButtons";
import { Filters } from "./Filters";
import { TableView } from "./TableView";
import { CardView } from "./CardView";
interface ICardList {
  movies: IMovie[];
  itemButtons: IItemButton[];
  listButtons: IListButton[];
}
interface IContextType {
  movies: IMovie[];
  filteredMovies: IMovie[];
  setMovies: null | ((val: IMovie[]) => void);
}
export const MovieContext = React.createContext<IContextType>({
  movies: [],
  filteredMovies: [],
  setMovies: null,
});
enum ListView {
  Table = "Table",
  Cards = "Cards",
}
export const CardList: FC<ICardList> = ({ movies, listButtons, itemButtons }) => {
  const [listView, setListView] = useState(ListView.Cards);
  const { closePopup, content, isModalVisible, openPopupWithContent } = useModal();
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const setMovies = (newMoviews: IMovie[]) => {
    setFilteredMovies(newMoviews);
  };
  useEffect(() => {
    setMovies(movies);
  }, [movies]);
  const handleChangeView = () => {
    if (listView === ListView.Cards) {
      setListView(ListView.Table);
    }
    if (listView === ListView.Table) {
      setListView(ListView.Cards);
    }
  };
  return (
    <MovieContext.Provider value={{ movies, filteredMovies, setMovies }}>
      <div className='cardlist'>
        <Filters />
        <ListButtons buttons={listButtons} openModal={openPopupWithContent} />
        <div>
          <button onClick={handleChangeView}>Сменить отображение</button>
        </div>
        {filteredMovies.length === 0 && <div>Список фильмов пуст</div>}
        {listView === ListView.Cards ? (
          <CardView movies={filteredMovies} buttons={itemButtons} />
        ) : (
          <TableView movies={filteredMovies} />
        )}
        {isModalVisible ? <Modal content={content} onClose={closePopup} /> : null}
      </div>
    </MovieContext.Provider>
  );
};
