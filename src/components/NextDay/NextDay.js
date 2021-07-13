import React, { useState, useEffect } from "react";
import styles from "./../NextDay/NextDay.module.css";

const NextDay = ({ date }) => {
  console.log(date);
  const monthNames = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  let day = date.getDate();

  const getDayFetch = () => {
    day += 1;
    if (day < 10) return (day = "0" + day);
    return day;
  };
  const year = date.getFullYear();
  let monthFetch = date.getMonth();
  const getMonthFetch = () => {
    if (monthFetch < 10) return (monthFetch = "0" + monthFetch);
  };
  const month = monthNames[date.getMonth()];
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const activate = () => {
    setIsActive(true);
  };
  const deActivate = () => {
    setIsActive(false);
  };
  useEffect(() => {
    fetch(
      `https://api.tvmaze.com/schedule?country=US&date=${year}-${getMonthFetch()}-${getDayFetch()}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [items.length]);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          {day + 1} {month} {year}
        </div>
        {items.map((item, i, arr) => {
          !isActive ? (arr.length = 8) : (arr.length = 34);
          return (
            <div className={styles.film_wrapper} key={item.show.id}>
              <div className={styles.image_wrapper}>
                <img
                  className={styles.image}
                  src={
                    item.show.image
                      ? item.show.image.medium
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Video-film.svg/284px-Video-film.svg.png"
                  }
                  alt=""
                />
              </div>
              <div className={styles.film_content}>
                <div className={styles.film_content_name}>{item.show.name}</div>
                <div className={styles.film_content_year}>
                  {item.show.premiered.slice(0, 4)}
                </div>
                <button className={styles.film_content_btn}>
                  Сезон: {item.season}
                </button>
              </div>
            </div>
          );
        })}
        <div className={styles.btn_more_wrapper}>
          {!isActive ? (
            <button className={styles.btn_more} onClick={activate}>
              Показать основные
              <i
                className="fas fa-chevron-up"
                style={{ marginLeft: "10px" }}
              ></i>
            </button>
          ) : (
            <button className={styles.btn_more} onClick={deActivate}>
              Развернуть
              <i
                className="fas fa-chevron-up"
                style={{ marginLeft: "10px" }}
              ></i>
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default NextDay;
