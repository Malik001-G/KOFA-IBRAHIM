import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";
import About from "./About";
import PorfolioCategories from "../../components/portfoliocategories/PorfolioCategories";
import Career_Milestone from "../../components/career-milestone/Career_Milestone";
import Reviews from "../../components/Reviews/Reviews";
import Contact from "../../components/contact-us/Contact";
import Footer from "../../components/footer/Footer";


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
      <Footer/>
    </>
  );
};

export default Home;
