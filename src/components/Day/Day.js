import React, { useState, useEffect } from "react";
import helpers from "../../helpers";
import ButtonToggle from "../ButtonToggle/ButtonToggle";
import Modal from "../Modal/Modal";
import styles from "./../Day/Day.module.css";

const Day = ({ date, showMore, showLess, count, chooseDay }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const monthNames = helpers.currentDay.monthsTable;
  let day = date.getDate() + chooseDay;
  let year = date.getFullYear();
  const month = monthNames[date.getMonth()];

  const showModal = (e) => {
    e.stopPropagation();
    let index = items.findIndex(
      (item) =>
        item.id ===
        (+e.target.parentNode.parentNode.id || +e.target.parentNode.id)
    );

    let g = items[index];
    g.modal = true;
    setItems([...items.slice(0, index), g, ...items.slice(index + 1)]);
  };

  useEffect(() => {
    fetch(
      `https://api.tvmaze.com/schedule?country=US&date=${year}-${helpers.currentDay.getMonthFetch(
        date
      )}-${helpers.currentDay.getDayFetch(day)}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
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
          {day} {month} {year}
        </div>
        {items.map((item, i, arr) => {
          !isActive ? (arr.length = count) : (arr.length = 34);
          return (
            <div
              className={styles.film_wrapper}
              key={item.id}
              id={item.id}
              onClick={() => window.open(item.url, "_blank")}
            >
              <div className={styles.image_wrapper} onClick={showModal}>
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
                <div className={styles.film_content_rating}>
                  Rating:{" "}
                  <i
                    className="fas fa-star"
                    style={{ color: "#EFC35A", marginRight: "3px" }}
                  ></i>
                  <b>{item.show.rating.average}</b>
                </div>
                <div
                  className={styles.film_content_summary}
                  dangerouslySetInnerHTML={{ __html: item.show.summary }}
                ></div>
                <button className={styles.film_content_btn}>
                  Сезон: {item.season}
                </button>
              </div>
              {item.modal ? (
                <Modal item={item} items={items} setItems={setItems} />
              ) : null}
            </div>
          );
        })}

        <ButtonToggle
          setIsActive={setIsActive}
          isActive={isActive}
          showMore={showMore}
          showLess={showLess}
        />
      </div>
    );
  }
};

export default Day;
