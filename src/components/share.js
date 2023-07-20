import React from "react";
import "../css/share.css";
import { MdClose } from "react-icons/md";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const share = ({ close }) => {
  const shareUrl = "http://localhost:3000/";
  return (
    <div className="share_wrapper">
      <MdClose className="close" onClick={() => close()} />
      <p className="share_title">Share to Get 5 Bonus Awards.</p>
      <div className="share_icons">
        <p>
          <WhatsappShareButton
            url={shareUrl}
            quote="Punguza moto ya kuchoma bet na BetTips."
            hashtag={"#BetTips, #BonusAwards"}
          >
            <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        </p>
        <p>
          <FacebookShareButton
            url={shareUrl}
            quote="Punguza moto ya kuchoma bet na BetTips."
            hashtag={"#BetTips, #BonusAwards"}
          >
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        </p>
        <p>
          <FacebookMessengerShareButton
            url={shareUrl}
            quote="Punguza moto ya kuchoma bet na BetTips."
            hashtag={"#BetTips, #BonusAwards"}
          >
            <FacebookMessengerIcon size={40} round={true} />
          </FacebookMessengerShareButton>
        </p>
        <p>
          <TwitterShareButton
            url={shareUrl}
            quote="Punguza moto ya kuchoma bet na BetTips."
            hashtag={"#BetTips, #BonusAwards"}
          >
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </p>
        <p>
          <LinkedinShareButton
            url={shareUrl}
            quote="Punguza moto ya kuchoma bet na BetTips."
            hashtag={"#BetTips, #BonusAwards"}
          >
            <LinkedinIcon size={40} round={true} />
          </LinkedinShareButton>
        </p>
        <p>
          <TelegramShareButton
            url={shareUrl}
            quote="Punguza moto ya kuchoma bet na BetTips."
            hashtag={"#BetTips, #BonusAwards"}
          >
            <TelegramIcon size={40} round={true} />
          </TelegramShareButton>
        </p>
      </div>
    </div>
  );
};

export default share;
