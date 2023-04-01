import { ReactElement, useState } from "react";

export const useModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [content, setContent] = useState<ReactElement | null>(null);

  const openPopupWithContent = (content: ReactElement) => {
    setContent(content);
    setModalVisible(true);
  };

  const closePopup = () => {
    setModalVisible(false);
  };
  return { isModalVisible, openPopupWithContent, closePopup, content };
};
