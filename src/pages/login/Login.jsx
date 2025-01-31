import React, { useState } from "react";
import "./login.css";
import login from "../../assets/images/login.svg";
import log from "../../assets/images/log-lock.svg";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };
  return (
    <>
      <div className="login-wrap">
        <Link to='/' className="nav-login">
          <img src={login} alt="" />
        </Link>
        <div className="login-wrapp">
          <div className="sign-inn">
            <h1>Sign in</h1>
            <div className="inputt">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="inputt">
              <label htmlFor="">Password</label>
              <input
                type={PasswordVisible ? "text" : "password"}
                placeholder="**********"
              />
              <span className="eye-pos" onClick={togglePasswordVisibility}>
                {PasswordVisible ? (
                  <FiEye className="i" />
                ) : (
                  <FiEyeOff className="i" />
                )}
              </span>
            </div>
            <div className="check-pass">
              <div>
                <input type="checkbox" />
                <label htmlFor="">Remember me</label>
              </div>
              <p className="forgot">Forgot Password?</p>
            </div>
            <button>Login</button>

            <p className="create-act">
              Don't have an account?{" "}
              <Link to="/sign-up">Create an account.</Link>
            </p>
            <img className="log-imgg" src={log} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
