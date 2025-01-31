import React, { useEffect, useState } from "react";
import logo from "../../assets/images/timer-logo.svg";
import "./timer.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-14T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(intervalId);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="timer">
      <div className="timer-two-wrap">
        <div className="first-div">
          <img src={logo} alt="Timer Logo" />
          <h2>GATEWAY GAMES</h2>
          <p>OFFICIAL TIME KEEPER</p>
        </div>
        <div className="second-div">TIME LEFT UNTIL THE GATEWAY GAMES 2024</div>
      </div>
      <div className="counter">
        <div>
          <h3>{timeLeft.days}</h3>
          <p>DAYS</p>
        </div>
        <div>
          <h3>{timeLeft.hours}</h3>
          <p>HOURS</p>
        </div>
        <div>
          <h3>{timeLeft.minutes}</h3>
          <p>MINS</p>
        </div>
        <div>
          <h3>{timeLeft.seconds}</h3>
          <p>SECS</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
