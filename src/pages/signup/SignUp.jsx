import './signup.css'
import sign from '../../assets/images/sign.svg'
import signstate from "../../assets/images/signstate.svg";
import sport from "../../assets/images/sport.svg";
import part from "../../assets/images/part.svg";
import media from "../../assets/images/media.svg";
import vendor from "../../assets/images/vendor.svg";
import volun from "../../assets/images/volun.svg";
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const SignUp = () => {
  const signGrid = [
    {
      name: "State/Sport Commission",
      img: signstate,
      desc: "Create and Manage your Profile",
    },
    {
      name: "Sport Personnel",
      img: sport,
      desc: "Private Sport Personnel",
    },
    {
      name: "State Participants",
      img: part,
      desc: "Athletes, Media, Technical crew ",
    },
    {
      name: "Media Personnel",
      img: media,
      desc: "Private Media ( eg. SWAN)",
    },
    {
      name: "Vendor",
      img: vendor,
      desc: "Create and Manage your Profile",
    },
    {
      name: "Volunteers",
      img: volun,
      desc: "Create and Manage your Profile",
    },
  ];
  return (
    <>
      <div className="signup-wrap">
        <div className="signup-left">
          <img src={sign} alt="" />
          <NavLink to='/' className='sign-home'></NavLink>
        </div>
        <div className="signup-right">
          <div className="sign-top">
            <p>Already have an account?</p>
            <NavLink to="/login">Sign In</NavLink>
          </div>
          <div className="sign-grid">
            {signGrid.map((sig, index) => (
              <div className="sign-in" key={index}>
                <img src={sig.img} alt="" />
                <div className="signtxt">
                  <h2>{sig.name}</h2>
                  <p>{sig.desc}</p>
                </div>
                <FaArrowRight className="signrow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp