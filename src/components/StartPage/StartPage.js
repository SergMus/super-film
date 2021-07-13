import React from "react";
import styles from "./../StartPage/StartPage.module.css";
import image from "./../../images/TV.jpeg";
import Calendar from "../Calendar/Calendar";

const StartPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img className={styles.img} src={image} alt="img" />
        <div className={styles.text}>
          Для получения списка сериалов, <br />
          пожалуйста, выберите <br />
          необходимый месяц и день
        </div>
      </div>
      <Calendar />
    </div>
  );
};

export default StartPage;
