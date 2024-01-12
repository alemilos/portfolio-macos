import React, { useEffect, useState } from "react";

function computeWidth(max, secondsLeft) {
  // 100% : x = max : secondsLeft
  let missingPercentage = (100 * secondsLeft) / max;
  return 1 - missingPercentage * 10;
}

const Loader = ({ timer, setLoading }) => {
  const [seconds, setSeconds] = useState(timer / 1000);

  useEffect(() => {
    // Countdown Timer
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev - 0.01);
      }, 10);

      return () => {
        clearInterval(interval);
      };
    } else {
      setLoading(false);
    }
  }, [seconds]);

  const loaderBg = { backgroundColor: "rgb(75, 75, 75)" };
  const fillerBg = { width: `${computeWidth(timer, seconds) * 100}%` };

  return (
    <div style={loaderBg} className="h-2 w-64 rounded-md">
      <div style={fillerBg} className="bg-[white] h-full rounded-md"></div>
    </div>
  );
};

export default Loader;
