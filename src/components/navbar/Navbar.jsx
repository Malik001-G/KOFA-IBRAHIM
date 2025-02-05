import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import toggler from "../../assets/images/toggler.svg"
import close_nav from "../../assets/images/close-nav.svg"
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="navbar px-6 md:px-10 lg:px-36 sticky top-0 z-50  py-4">
        <NavLink to="/">
          <h2 className="text-black text-xl font-medium">KOFA IBRAHIM</h2>
        </NavLink>
        <div className="reg-men">
          <div className="menu" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <img src={close_nav} alt="" className="w-16 cursor-pointer" />
            ) : (
              <img src={toggler} alt="" className="w-16 cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* Sidebar overlay */}
      <div
        className={`overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar menu */}
      <div className={`sidebar px-6 lg:px-36 pt-32 rounded-bl-3xl ${isSidebarOpen ? "open" : ""}`}>
        <nav className="sidebar-links">
          <NavLink to="/" className="py-5 pr-10 text-4xl" onClick={toggleSidebar}>
            Home
          </NavLink>
          <NavLink to="/commitee" className="py-5 pr-10 text-4xl" onClick={toggleSidebar}>
            About Us
          </NavLink>
          <NavLink to="/portfolio/documentary" className="py-5 pr-10 text-4xl" onClick={toggleSidebar}>
            My Portfolio
          </NavLink>
          <NavLink to="/taking-part" className="py-5 pr-10 text-4xl" onClick={toggleSidebar}>
            Blog
          </NavLink>
          <NavLink to="/about" className="py-5 pr-10 text-4xl" onClick={toggleSidebar}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
