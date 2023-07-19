import React from "react";
import "../css/slider.css";
import BetTips from "../components/BetTips.png";

const slider = () => {
  return (
    <div className="slider">
      <img src={BetTips} alt="BetTips: Correct predictions" />
    </div>
  );
};

export default slider;
