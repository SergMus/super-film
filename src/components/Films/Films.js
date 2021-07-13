import React from "react";
import CurrentDay from "../CurrentDay/CurrentDay";
import NextDay from "../NextDay/NextDay";

const Films = ({
  location: {
    state: { date },
  },
}) => {
  return (
    <>
      <CurrentDay date={date} />
      <NextDay date={date} />
    </>
  );
};

export default Films;
