import React, { useEffect, useState } from "react";

const getDate = () => {
  const now = Date.now();
  const date = new Date(now);
  const splitDate = date.toString().split(" ");

  const hour = splitDate[4];
  const splitHour = hour.split(":");

  return `${splitDate[0]} ${splitDate[2]} ${splitDate[1]} ${splitHour[0]}:${splitHour[1]}`;
};

const Time = () => {
  const [currentTime, setCurrentTime] = useState(getDate());

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => setCurrentTime(getDate()), 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="menuBar-r-time-container">
      <p>{currentTime}</p>
    </div>
  );
};

export default Time;
