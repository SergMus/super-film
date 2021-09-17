import React from "react";
import Day from "../Day/Day";

const Films = ({
  location: {
    state: { date },
  },
}) => {
  return (
    <>
      <Day
        date={date}
        showMore={"Еще 32 сериала"}
        showLess={"Свернуть обратно"}
        count={2}
        chooseDay={0}
      />
      <Day
        date={date}
        showMore={"Развернуть"}
        showLess={"Показать основные"}
        count={8}
        chooseDay={1}
      />
    </>
  );
};

export default Films;
