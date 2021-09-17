import React from "react";
import styles from "./../Modal/Modal.module.css";

const Modal = ({ items, item, setItems }) => {
  const closeModal = (e) => {
    e.stopPropagation();
    let index = items.findIndex(
      (item) =>
        item.id === +e.target.parentNode.id ||
        item.id === +e.target.parentNode.parentNode.id
    );
    let g = items[index];
    if (g !== undefined) {
      g.modal = false;
      setItems([...items.slice(0, index), g, ...items.slice(index + 1)]);
    }
  };
  return (
    <div className={styles.modal_window} onClick={closeModal}>
      <div className={styles.modal_image_wrapper}>
        <img
          src={item.show.image.original}
          className={styles.modal_image}
          alt="image_modal"
        />
      </div>
    </div>
  );
};

export default Modal;
