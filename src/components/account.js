import React, { useEffect, useState } from "react";
import "../css/account.css";
import { IoPerson, IoChevronBack } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Share from "./share";

const Account = () => {
  const navigate = useNavigate();
  const [share, setShare] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="account">
      <div className="top">
        <p onClick={() => navigate(-1)}>
          <small>
            <IoChevronBack className="go_back" />
          </small>
          <small>Go back</small>
        </p>
        <p>Account details.</p>
      </div>
      <div className="account_header">
        <div className="profile_image">
          <IoPerson className="profile_image_icon" />
        </div>
        <div className="account_details">
          <span>BetGuru</span>
          <small>Phone Number: 0725540469</small>
          <small>Account Balance: Ksh. 0.00</small>
        </div>
      </div>
      <div className="account_details_container">
        <div className="bonus_odds">
          <h2>What's new?</h2>
          <h2 className="h2">
            1. <span>Bonus Odds</span>.
          </h2>
          <p>You get some Bonus Odds in every plan subscription.</p>
          <h2>How do I get Bonus Odds?</h2>
          <p>
            Regular plan: <span>10+ odds.</span>
          </p>
          <p>
            Bronze plan: <span>25+ odds.</span>
          </p>
          <p>
            Silver plan: <span>55+ odds.</span>
          </p>
          <p>
            Gold plan: <span>100+ odds.</span>
          </p>
          <h2>How do I subscribe?</h2>
          <p>
            To subscribe, you will pay first. Then click the corresponding
            subscription button.
          </p>
          <h2>How do I pay?</h2>
          <p>
            Go to <span>M-Pesa</span>:
          </p>
          <p>
            PayBill: <small>90100</small>
          </p>
          <p>
            Account: <small>0010990100</small>
          </p>
        </div>
        <div className="bonus_awards">
          <h2 className="h2">
            2. <span>Bonus Awards</span>.
          </h2>
          <p>
            You get the Bonus Awards for using BetTips. You can renew the Bonus
            Awards and use to subscribe for a new plan.
          </p>
          <h2>How do I get Bonus Awards?</h2>
          <p>
            1 Bonus: Each <small>Ksh. 10.00</small>.
          </p>
          <p>1 Bonus: First comment.</p>
          <p>5 Bonus: Each share.</p>

          <h2>How do I redeem my Bonus Awards?</h2>
          <p>
            100 Bonus: <small>Ksh. 18.00</small>.
          </p>
          <p>
            200 Bonus: <small>Ksh. 34.00</small>.
          </p>
          <p>
            300 Bonus: <small>Ksh. 51.00</small>.
          </p>
          <p>
            400 Bonus: <small>Ksh. 70.00</small>.
          </p>
          <p>
            500 Bonus: <small>Ksh. 90.00</small>.
          </p>

          <h2>Bonus Awards: 0</h2>
          <p>
            Redeem your <span>Bonus Awards</span> and have the money deposited
            into your account.
          </p>
          <button
            onClick={() =>
              alert(
                "Your Bonus Awards balance is Zero. Kindly, get more Bonus Awards and try again."
              )
            }
          >
            Redeem Now
          </button>
        </div>
        <div className="share">
          <p>
            Get your first 5 <span>Bonus Awards</span> to start to use BetTips
            for free.
          </p>
          <div className="share_container">
            <button onClick={() => setShare(!share)}>Share</button>
            {share && <Share close={setShare} />}
          </div>
        </div>

        {window.innerWidth < 600 && <hr />}

        <div className="footer">
          <span>BetTips</span>
          <small>
            <MdCopyright />
          </small>
          <span>2023</span>
        </div>
      </div>
    </div>
  );
};

export default Account;
