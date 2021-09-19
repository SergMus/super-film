import React from "react";
import styles from "./../ButtonToggle/ButtonToggle.module.css";

const ButtonToggle = ({
  setIsActive,
  isActive,
  showMore,
  showLess,
  count,
  setCountPerPage,
}) => {
  const activate = () => {
    setIsActive(true);
    setCountPerPage(34);
  };

  const deActivate = () => {
    setIsActive(false);
    setCountPerPage(count);
  };
  return (
    <div className={styles.btn_more_wrapper}>
      {!isActive ? (
        <button className={styles.btn_more} onClick={activate}>
          {showMore}
          <i className="fas fa-chevron-down" style={{ marginLeft: "10px" }}></i>
        </button>
      ) : (
        <button className={styles.btn_more} onClick={deActivate}>
          {showLess}
          <i className="fas fa-chevron-up" style={{ marginLeft: "10px" }}></i>
        </button>
      )}
    </div>
  );
};

export default ButtonToggle;
