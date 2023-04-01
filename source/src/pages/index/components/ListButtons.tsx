import React, { FC, ReactElement } from "react";
import { IListButton } from "../../../shared/types";
interface IListButtonsProps {
  buttons: IListButton[];
  openModal: (a: ReactElement) => void;
}

export const ListButtons: FC<IListButtonsProps> = ({ buttons, openModal }) => {
  return (
    <section className='section'>
      <h3>Блок действий</h3>
      <div className='cardList__buttons'>
        {buttons.map((btn) => {
          const clickHandler = () => {
            if (btn.renderItem) {
              const component = btn.renderItem && btn.renderItem();
              openModal(component);
              return;
            }
            btn.onHandleClick && btn.onHandleClick();
          };
          return (
            <button onClick={clickHandler} key={btn.text}>
              {btn.text}
            </button>
          );
        })}
      </div>
    </section>
  );
};
