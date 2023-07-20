import React, { useState } from "react";
import "../css/home.css";
import Slider from "./slider";
import Timer from "./timer";
import Plancards from "./plancards";
import Contactus from "./contactus";
import { HiMenu } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";
import { BiSolidMessageMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  const [support, setSupport] = useState(false);
  return (
    <div className="home">
      <div className="home_container">
        <div>
          <div className="header">
            <div>
              <HiMenu />
            </div>
            <div>BetTips</div>
            <div>
              <Link to="/my-account">
                <IoPerson />
              </Link>
            </div>
          </div>
          <Slider />
          <div className="welcome">
            <h1>Dear Erick!</h1>
            <p>
              Imagine having the collective wisdom of not just one, but two
              millionaire Jackpot winners dedicated to predicting games for you.
              This is not a mere game; it’s a serious business that has the
              potential to transform your fortunes. And the best part? It’s all
              just a click away. Click the Subscribe button below to Unlock Your
              Winning Potential.
            </p>
            <p>Sincerely,</p>
            <p>Bill Winston, BetTips CEO.</p>
          </div>
        </div>
        <div className="prediction_history">
          <button>
            <Link to="/yesterday-predictions">See Prediction History</Link>
          </button>
        </div>
        <div className="kickoff">
          <h2>Don't Miss Next Game Kickoff In:</h2>
          <Timer duration={2 * 60 * 60 * 1000} />
        </div>
        <h3>Want to join the Elite Circle? Choose your plan below!</h3>
        <Plancards />
        <div>
          <h2>Subscribe to join the discussion!</h2>
          <span className="testimonials_header">
            Testimonials from winners in Kenya!
          </span>
          <div className="testimonials">
            <div className="testimonial">
              <div className="avatar">
                <IoPerson className="avatar_icon" />
              </div>
              <div className="message">
                <span>BetGuru</span>
                <span>Amazing. Win! Win! Win!</span>
              </div>
            </div>
            <hr />
            <div className="testimonial">
              <div className="avatar">
                <IoPerson className="avatar_icon" />
              </div>
              <div className="message">
                <span>kioko69</span>
                <span>
                  Been using this app for a week and the experience is amazing.
                  Thanks BetTips…
                </span>
              </div>
            </div>
            <hr />
            <div className="testimonial">
              <div className="avatar">
                <IoPerson className="avatar_icon" />
              </div>
              <div className="message">
                <span>DICKSON</span>
                <span>
                  For sure this app can make one rich trust me. Can’t imagine
                  how I’ve been minting cash from sports betting. Keep it up
                  guys
                </span>
              </div>
            </div>
            <hr />
            <div className="testimonial">
              <div className="avatar">
                <IoPerson className="avatar_icon" />
              </div>
              <div className="message">
                <span>Denis Murithi</span>
                <span>Very accurate predictions.</span>
              </div>
            </div>
            <hr />
            <div className="testimonial">
              <div className="avatar">
                <IoPerson className="avatar_icon" />
              </div>
              <div className="message">
                <span>Namonye</span>
                <span>
                  The best app I’ve ever had. Thanks to the BetTips team
                </span>
              </div>
            </div>
            <hr />
            <div className="testimonial">
              <div className="avatar">
                <IoPerson className="avatar_icon" />
              </div>
              <div className="message">
                <span>Kipsang</span>
                <span>A very good app. It’s legit</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>BetTips is Powered by YOU!</h2>
            <p>
              Subscribe to BetTips for winning tips. Your win is our success.
            </p>
          </div>
          <h2>Frequently Asked Questions.</h2>
          <ul className="FAQs">
            <li>
              <h2>How do I pay?</h2>
              <p>It’s easy!</p>
              <p>
                Go to <span>M-Pesa</span>:
              </p>
              <p>
                PayBill: <small>90100</small>
              </p>
              <p>
                Account: <small>0010990100</small>
              </p>
            </li>
            <li>
              <h2>How do I subscribe?</h2>
              <p>
                To subscribe, you will pay first. Then click the corresponding
                subscription button.
              </p>
            </li>
            <li>
              <h2>How do I get the predictions?</h2>
              <p>
                After paying, tap the subscribe button for instant access the
                predictions.
              </p>
            </li>
            <li>
              <h2>How many games do you offer daily?</h2>
              <p>
                Our experts are dedicated to find the best odds and safest
                games. We make sure all the daily odds have 300% profits.
              </p>
            </li>
            <li>
              <h2>What is the accuracy of your predictions?</h2>
              <p>
                We understand that loosing will not only bring us back, but also
                will make our subscribers to lose their money. For this, we
                strive for constant profitability.
              </p>
            </li>
          </ul>
        </div>
        <div className="support_container">
          <BiSolidMessageMinus
            onClick={() => setSupport(!support)}
            className="support"
          />
          {support && <Contactus close={setSupport} />}
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

export default Home;
