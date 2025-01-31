import React from "react";
import News from "./News";
import Navbar from "../../components/navbar/Navbar";
import Partners from "../../components/partners/Partners";
import Footer from "../../components/footer/Footer";
import Banner from './../../components/banner/Banner';
import commitee from "../../assets/images/commitee.svg";

const NewsPage = () => {
  return (
    <>
      <Navbar />
      <Banner title={'NEWS'} bannerbg={commitee} />

      
      <News />
      <Partners/>
      <Footer/>
    </>
  );
};

export default NewsPage;
