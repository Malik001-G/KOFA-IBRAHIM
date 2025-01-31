import React from "react";
import "./banner.css";
import logo from '../../assets/images/banner-logo.svg'
import banner from "../../assets/images/taking.svg";
import Timer from "../timer/Timer";

const Banner = ({title, bannerbg}) => {
  return (
    <>
      <div className="banner-wrap">
        <img className="banner-img" src={bannerbg ? bannerbg : banner} alt="" />
        <div className="banner">
          <img className="banner-logo" src={logo} alt="" />
          <Timer/>
          <h1>{title ? title : "PAGE TITLE"}</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
