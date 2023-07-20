import React, { useEffect } from "react";
import "../css/subscribe.css";
import Lipanampesa from "../components/Lipanampesa.png";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const Subscribe = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="subscribe">
      <div onClick={() => navigate(-1)} className="subscribe_goback">
        <small>
          <IoChevronBack className="go_back" />
        </small>
        <small>Go back</small>
      </div>
      <img src={Lipanampesa} alt="Lipa na Mpesa" />
      <p>
        PayBill Number: <small>90100</small>
      </p>
      <p>
        Account Number: <small>0010990100</small>
      </p>
      <div className="alert">
        <h2>Alert!</h2>
        <p>
          Sorry Dear, your account balance is 0. Deposit Ksh 99 to get today's
          tips.
        </p>
      </div>
      <hr />
      <h2>How do I pay?</h2>
      <p>1. Go to M-Pesa Menu</p>
      <p>2. Select Lipa na M-Pesa</p>
      <p>3. Click on Pay Bill</p>
      <p>
        4. Enter Business Number: <small>90100</small>
      </p>
      <p>
        5. Enter Account Number: <small>0010990100</small>
      </p>
      <p>
        6. Enter Amount: <small>99</small>
      </p>
      <p>7. Enter Your M-Pesa PIN and CONFIRM the request.</p>
    </div>
  );
};

export default Subscribe;
