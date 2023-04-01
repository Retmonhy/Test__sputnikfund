import React, { FC, useState } from "react";
import { IItemButton, IMovie } from "../../../shared/types";
import { Modal } from "./Modal";
import { useModal } from "../../../shared/hooks/useModal";
interface ICardProps {
  movie: IMovie;
  buttons: IItemButton[]; //сюда можно передавать рендер пропсы, которые будут в модалке(если эхто надо),, если нужна просто кнопка дейвия без модалки, то передаем onClick
  //рендер пропс и кнопка будут подхватывать текущий итем и можно с ним делать что-то  в хендлерах
}

export const Card: FC<ICardProps> = ({ movie, buttons }) => {
  const { closePopup, openPopupWithContent, isModalVisible, content } = useModal();

  return (
    <>
      <div className='card'>
        <div className='card__content'>
          <div>
            <ul className='movieinfo'>
              <li className='movieinfo__item'>{movie.title}</li>
              <li className='movieinfo__item'>{movie.fullTitle}</li>
              <li className='movieinfo__item'>Crew: {movie.crew}</li>
              <li className='movieinfo__item'>Rating: {movie.imDbRating}</li>
              <li className='movieinfo__item'>Year: {movie.year}</li>
            </ul>
          </div>
          <div className='card__buttons'>
            {buttons.map((btn) => {
              const clickHandler = () => {
                if (btn.renderItem) {
                  const component = btn.renderItem && btn.renderItem(movie);
                  openPopupWithContent(component);
                  return;
                }
                btn.onHandleClick && btn.onHandleClick(movie);
              };
              return (
                <button key={btn.text} onClick={clickHandler}>
                  {btn.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {isModalVisible ? <Modal content={content} onClose={closePopup} /> : null}
    </>
  );
};
