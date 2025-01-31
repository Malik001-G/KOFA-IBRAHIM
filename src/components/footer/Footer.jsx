import "./footer.css";
import React from "react";
import logo from "../../assets/images/footer-logo.svg";
import fb from "../../assets/images/fb.svg";
import tw from "../../assets/images/tw.svg";
import ln from "../../assets/images/ln.svg";
import wh from "../../assets/images/wh.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div>
            <img src={logo} alt="" />
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/commitee">The Committee</Link>
              <Link to="/games">The Games</Link>
              <Link to="/taking-part">Taking Part</Link>
              <Link to="/about">About Ogun State</Link>
              <Link to="/venue">Competition Venues</Link>
            </div>
          </div>
          <div className="subscribe">
            <p>
              Subscribe to stay tuned for new web design and latest updates.
              Let's do it!
            </p>
            <form action="">
              <input type="text" placeholder="Enter your email Address" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <p>NSF Gateway Games ©2024 – All right reserved.</p>
          <div className="socials">
            <a href="" target="_blank">
              <img src={fb} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={tw} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={ln} alt="" />
            </a>
            <a href="" target="_blank">
              <img src={wh} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
