import React from "react";
import "../css/timer.css";

const timer = () => {
  return (
    <div className="timer">
      <div>
        <p>01</p> <p>Hours</p>
      </div>
      <div>
        <p>26</p> <p>Minutes</p>
      </div>
      <div>
        <p>41</p> <p>Seconds</p>
      </div>
    </div>
  );
};

export default timer;
