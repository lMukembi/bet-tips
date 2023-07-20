import React, { useEffect } from "react";
import "../css/predictions.css";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const Predictions = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="predictions">
      <p onClick={() => navigate(-1)} className="predictions_goback">
        <small>
          <IoChevronBack className="go_back" />
        </small>
        <small>Go back</small>
      </p>
      <h1>Yesterday’s Predictions</h1>
      <div>
        <div className="team">
          <p>USA: USL League Two</p>
          <p>Ocean City Vs. West Chester Utd at 02:00 am</p>
        </div>
        <div className="markets">
          <p>
            Pick: <span>Over 6.5 (GUARANTEED TIP)</span>
          </p>
          <p>
            Odd: <span>9.63</span>
          </p>
          <p>
            Result: <span>3:6 </span>
            <small>WON</small>
          </p>
        </div>
      </div>
      <div>
        <div className="team">
          <p>World: Club Friendly</p>
          <p>Brondby (Den) Vs. B.93 (Den) at 03:00 pm</p>
        </div>
        <div className="markets">
          <p>
            Pick: <span>Over 6.5 (GUARANTEED TIP)</span>
          </p>
          <p>
            Odd: <span>8.20</span>
          </p>
          <p>
            Result: <span>8:2 </span>
            <small>WON</small>
          </p>
        </div>
      </div>
      <div>
        <div className="team">
          <p>Vietnam: V.League 1</p>
          <p>Hanoi FC Vs. Binh Dinh at 03:15 pm</p>
        </div>
        <div className="markets">
          <p>
            Pick: <span>Over 4.5 (GUARANTEED TIP)</span>
          </p>
          <p>
            Odd: <span>5.90</span>
          </p>
          <p>
            Result: <span>4:2 </span>
            <small>WON</small>
          </p>
        </div>
      </div>
      <div>
        <div className="team">
          <p>USA: USL League Two</p>
          <p>Ocean City Vs. West Chester Utd at 02:00 am</p>
        </div>
        <div className="markets">
          <p>
            Pick: <span>Over 6.5 (GUARANTEED TIP)</span>
          </p>
          <p>
            Odd: <span>9.63</span>
          </p>
          <p>
            Result: <span>3:6 </span>
            <small>WON</small>
          </p>
        </div>
      </div>
      <div>
        <div className="team">
          <p>USA: USL League Two</p>
          <p>Ocean City Vs. West Chester Utd at 02:00 am</p>
        </div>
        <div className="markets">
          <p>
            Pick: <span>Over 6.5 (GUARANTEED TIP)</span>
          </p>
          <p>
            Odd: <span>9.63</span>
          </p>
          <p>
            Result: <span>3:6 </span>
            <small>WON</small>
          </p>
        </div>
      </div>
      <div>
        <div className="team">
          <p>USA: USL League Two</p>
          <p>Ocean City Vs. West Chester Utd at 02:00 am</p>
        </div>
        <div className="markets">
          <p>
            Pick: <span>Over 6.5 (GUARANTEED TIP)</span>
          </p>
          <p>
            Odd: <span>9.63</span>
          </p>
          <p>
            Result: <span>3:6 </span>
            <small>WON</small>
          </p>
        </div>
      </div>
      <div className="allodds">
        TOTAL ODDS: <span>983.04</span>
      </div>
    </div>
  );
};

export default Predictions;
