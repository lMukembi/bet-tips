import React from "react";
import "../css/plancards.css";
import Neymar from "../components/Neymar.png";
import Messi from "../components/Messi.jpg";
import Ronaldo from "../components/Ronaldo.jpg";
import Mbappe from "../components/Mbappe.jpg";
import { Link } from "react-router-dom";

const plancards = () => {
  return (
    <div className="plans" id="container">
      <div className="plan">
        <img src={Mbappe} alt="Mbappe" />
        <p>Regular</p>
        <p>Price: Ksh. 99</p>
        <p>Duration: 3 days</p>
        <p className="description">Starter plan</p>
        <button>
          <Link to="/subscribe">Subscribe</Link>
        </button>
      </div>
      <div className="plan">
        <img src={Neymar} alt="Neymar" />
        <p>Bronze</p>
        <p>Price: Ksh. 179</p>
        <p>Duration: 1 week</p>
        <p className="description">VIP</p>
        <button>
          <Link to="/subscribe">Subscribe</Link>
        </button>
      </div>
      <div className="plan">
        <img src={Ronaldo} alt="Ronaldo" />
        <p>Silver</p>
        <p>Price: Ksh. 299</p>
        <p>Duration: 2 weeks</p>
        <p className="description">Recommended</p>
        <button>
          <Link to="/subscribe">Subscribe</Link>
        </button>
      </div>
      <div className="plan">
        <img src={Messi} alt="Messi" />
        <p>Gold</p>
        <p>Price: Ksh. 549</p>
        <p>Duration: 1 month</p>
        <p className="description">Millionaire plan</p>
        <button>
          <Link to="/subscribe">Subscribe</Link>
        </button>
      </div>
    </div>
  );
};

export default plancards;
