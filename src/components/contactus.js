import React from "react";
import "../css/contactus.css";
import { MdClose } from "react-icons/md";

const contactus = ({ close }) => {
  return (
    <div className="contactus">
      <MdClose className="close" onClick={() => close()} />
      <small>BetTips</small>
      <p>Welcome to BetTips!</p>
      <textarea cols={10} rows={5} placeholder="How may we assist you today?" />
      <button>Submit</button>
    </div>
  );
};

export default contactus;
