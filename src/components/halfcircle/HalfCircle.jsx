import React, { useState, useEffect } from "react";
import "./half.css";

const HalfCircleSwitch = () => {
  // State to track position and text
  const [isSwitched, setIsSwitched] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const switchInterval = setInterval(() => {
      setIsSwitched((prev) => !prev); // Switch position and text
    }, 4000);

    return () => clearInterval(switchInterval);
  }, []);

  // Trigger text fade-in shortly after switching positions
  useEffect(() => {
    setShowText(false); // Hide text briefly during position change
    const textTimeout = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(textTimeout);
  }, [isSwitched]);

  return (
    <div className="half-circle-container">
      <div
        className={`half-circle ${isSwitched ? "green-left" : "yellow-left"}`}
      >
        <span className={`circle-text ${showText ? "fade-in" : ""}`}>
          {isSwitched ? "Festival" : "Gateway"}
        </span>
      </div>
      <div
        className={`half-circle ${isSwitched ? "yellow-right" : "green-right"}`}
      >
        <span className={`circle-text ${showText ? "fade-in" : ""}`}>
          {isSwitched ? "Sport" : "2024"}
        </span>
      </div>
    </div>
  );
};

export default HalfCircleSwitch;
