import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Partners from "../../components/partners/Partners";
import "./home.css";
import Hero from "./Hero";
import About from "./About";

// import Portfolio from "./portfolio";
import PorfolioCategories from "../../components/portfoliocategories/PorfolioCategories";
import Career_Milestone from "../../components/career-milestone/Career_Milestone";
import Reviews from "../../components/Reviews/Reviews";
import Contact from "../../components/contact-us/Contact";

const Home = () => {


  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <PorfolioCategories/>
      <Career_Milestone/>
      <Reviews/>
      <Contact/>
    </>
  );
};

export default Home;
