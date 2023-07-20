import React, { useEffect, useState } from "react";
import "../css/timer.css";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getNewTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return (
      <div className="timer">
        <div>
          <p>{`${hours}`}</p> <p>Hours</p>
        </div>
        <div>
          <p>{`${minutes}`}</p> <p>Minutes</p>
        </div>
        <div>
          <p>{`${seconds}`}</p> <p>Seconds</p>
        </div>
      </div>
    );
  };
  return <div>{getNewTime(time)}</div>;
};

export default Timer;
