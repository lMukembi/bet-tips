import React, { useState, useEffect } from "react";
import "../css/socialproof.css";
import Betika from "../components/Betika.png";

const Socialproof = () => {
  const notifications = [
    {
      name: "Dickson",
      plan: "Bronze plan",
      time: "5 sec ago",
    },
    {
      name: "Kioko",
      plan: "Regular plan",
      time: "11 sec ago",
    },
    {
      name: "Nyabuto",
      plan: "Bronze plan",
      time: "25 sec ago",
    },
    {
      name: "Okindo",
      plan: "Silver plan",
      time: "6 sec ago",
    },
    {
      name: "Bravin",
      plan: "Bronze plan",
      time: "14 sec ago",
    },
    {
      name: "Alex",
      plan: "Gold plan",
      time: "3 sec ago",
    },
    {
      name: "Gikuhi",
      plan: "Bronze plan",
      time: "5 sec ago",
    },
    {
      name: "Gitonga",
      plan: "Regular plan",
      time: "11 sec ago",
    },
    {
      name: "Kipsang",
      plan: "Bronze plan",
      time: "25 sec ago",
    },
    {
      name: "Brian",
      plan: "Silver plan",
      time: "6 sec ago",
    },
    {
      name: "Kefha",
      plan: "Bronze plan",
      time: "14 sec ago",
    },
    {
      name: "Karani",
      plan: "Gold plan",
      time: "3 sec ago",
    },
    {
      name: "Otieno",
      plan: "Bronze plan",
      time: "9 sec ago",
    },
    {
      name: "Ian",
      plan: "Regular plan",
      time: "10 sec ago",
    },
    {
      name: "Maroko",
      plan: "Bronze plan",
      time: "4 sec ago",
    },
    {
      name: "Eric",
      plan: "Silver plan",
      time: "13 sec ago",
    },
    {
      name: "Murithi",
      plan: "Bronze plan",
      time: "18 sec ago",
    },
    {
      name: "Suleiman",
      plan: "Gold plan",
      time: "2 sec ago",
    },
    {
      name: "Osoro",
      plan: "Bronze plan",
      time: "21 sec ago",
    },
    {
      name: "Kibaki",
      plan: "Regular plan",
      time: "31 sec ago",
    },
    {
      name: "Mwenda",
      plan: "Bronze plan",
      time: "11 sec ago",
    },
    {
      name: "Maxwell",
      plan: "Silver plan",
      time: "15 sec ago",
    },
    {
      name: "Victor",
      plan: "Bronze plan",
      time: "4 sec ago",
    },
    {
      name: "Ondipo",
      plan: "Gold plan",
      time: "7 sec ago",
    },
    {
      name: "Gakure",
      plan: "Bronze plan",
      time: "9 sec ago",
    },
    {
      name: "Korir",
      plan: "Regular plan",
      time: "10 sec ago",
    },
    {
      name: "Richard",
      plan: "Bronze plan",
      time: "23 sec ago",
    },
    {
      name: "Kitong'o",
      plan: "Silver plan",
      time: "16 sec ago",
    },
    {
      name: "Jimmy",
      plan: "Bronze plan",
      time: "5 sec ago",
    },
    {
      name: "Solomon",
      plan: "Gold plan",
      time: "11 sec ago",
    },
    {
      name: "Abdi",
      plan: "Bronze plan",
      time: "32 sec ago",
    },
    {
      name: "Agnes",
      plan: "Regular plan",
      time: "17 sec ago",
    },
    {
      name: "Pascacials",
      plan: "Bronze plan",
      time: "2 sec ago",
    },
    {
      name: "Mwende",
      plan: "Silver plan",
      time: "4 sec ago",
    },
    {
      name: "Amos",
      plan: "Bronze plan",
      time: "9 sec ago",
    },
    {
      name: "Salad",
      plan: "Gold plan",
      time: "3 sec ago",
    },
  ];

  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasNotificationShown, setHasNotificationShown] = useState(false);

  useEffect(() => {
    const showNextNotification = () => {
      setIsVisible(true);
      setHasNotificationShown(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 15000);

      setTimeout(() => {
        setHasNotificationShown(false);
        setCurrentNotificationIndex(
          (prevIndex) => (prevIndex + 1) % notifications.length
        );
      }, 25000);
    };

    if (!hasNotificationShown) {
      showNextNotification();
    }
  }, [currentNotificationIndex, hasNotificationShown, notifications.length]);

  return (
    <div>
      {isVisible && (
        <div className="notificationpopup">
          <p className="popupavatar">
            <img
              src={Betika}
              alt={notifications[currentNotificationIndex].name}
            />
          </p>

          <p>
            {notifications[currentNotificationIndex].name}
            <span> has just subscribed to </span>
            <span className="currentplan">
              {notifications[currentNotificationIndex].plan}{" "}
            </span>
            <span>
              <i>{notifications[currentNotificationIndex].time}</i>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Socialproof;
