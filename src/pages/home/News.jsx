import React, { useEffect, useRef, useState } from "react";
import Bukola from "../../assets/images/Bukola.svg";

const News = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 500); // Delay to improve transition smoothness
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.7 } // Triggers when 70% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div style={{ height: "200vh", textAlign: "center" }}>
      <h1>Scroll Down to See the Effect</h1>

      <div ref={sectionRef} style={{ marginTop: "100vh" }}>
        <h2>About Us</h2>
        <img
          src={Bukola}
          alt="Sample"
          style={{
            width: "300px",
            transition:
              "filter 1s ease-in-out, opacity 1s ease-in-out, transform 1s ease-in-out",
            filter: isVisible ? "grayscale(100%)" : "grayscale(0%)",
            opacity: isVisible ? 1 : 0.8,
            transform: isVisible ? "scale(1.05)" : "scale(0.95)",
          }}
        />
      </div>
    </div>
  );
};

export default News;
