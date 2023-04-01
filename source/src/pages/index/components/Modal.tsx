import React, { FC, ReactNode } from "react";
interface IModalProps {
  content: ReactNode;
  onClose: () => void;
}

export const Modal: FC<IModalProps> = ({ onClose, content }) => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <div>
          <button onClick={onClose}>X</button>
        </div>
        <div className='modal_content'>{content}</div>
      </div>
    </div>
  );
};
