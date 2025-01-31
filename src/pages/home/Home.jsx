import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Partners from "../../components/partners/Partners";
import "./home.css";
import Hero from "./Hero";
import About from "./About";

import a from "../../assets/images/a.svg";
import b from "../../assets/images/b.svg";
import t from "../../assets/images/t.svg";
import f from "../../assets/images/f.svg";
import aa from "../../assets/images/aa.svg";
import bb from "../../assets/images/bb.svg";
import tt from "../../assets/images/tt.svg";
import ff from "../../assets/images/ff.svg";

import newsmall from "../../assets/images/new-small.svg";
import newbig from "../../assets/images/new-big.svg";

import video from "../../assets/video/sport.mp4";
import SwiperSpeech from "./Swiper";
import LatestVideos from "./LatestVideos";
import Questions from "./Questions";
import HalfCircleSwitch from "../../components/halfcircle/HalfCircle";
import News from "./News";

const Home = () => {


  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
  
    </>
  );
};

export default Home;
