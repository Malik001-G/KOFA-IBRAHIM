import React, { useState } from "react";
import "./navbar.css";
import emailjs from 'emailjs-com';
import toggler from "../../assets/images/toggler.svg";
import close_nav from "../../assets/images/close-nav.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    emailjs
      .sendForm(
        'default_service',
        'template_dlg37sn',
        e.target,
        'JRI_W7aPIVDiM_NZ9'
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSuccessMessage("Thank you for reaching out! I'll get back to you shortly.");
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setIsSubmitting(false);
          setErrorMessage('There was an error sending your message. Please try again.');
        }
      );
  };

  return (
    <>
      <div className="navbar px-6 md:px-10 lg:px-36 sticky top-0 z-50 py-4">
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
      <div
        className={`sidebar px-6 lg:px-36 pt-32 lg:flex justify-between rounded-bl-3xl ${isSidebarOpen ? "open" : ""
          }`}
      >
        <nav className="sidebar-links w-9/12 mb-8 lg:mb-0">
          <NavLink to="/" className="py-5 pr-10 text-3xl md:text-4xl" onClick={toggleSidebar}>
            Home
          </NavLink>
          <NavLink to="/about" className="py-5 pr-10 text-3xl md:text-4xl" onClick={toggleSidebar}>
            About Us
          </NavLink>
          <NavLink to="/portfolio/documentary" className="py-5 pr-10 text-3xl md:text-4xl" onClick={toggleSidebar}>
            My Portfolio
          </NavLink>
          <NavLink to="/blogs" className="py-5 pr-10 text-3xl md:text-4xl" onClick={toggleSidebar}>
            Blog
          </NavLink>
        </nav>
        <div>
          <h2 className="font-bold text-2xl">Let's Connect & Collaborate </h2>
          <p className="text-sm mt-2">
            Have a project in mind, a question, or just want to connect? Reach
            out and let's discuss how we can bring ideas to life.
          </p>
          <button
                onClick={openModal}
                className="bg-black text-white mt-5 py-3 px-5 rounded-full text-sm hover:transition-all duration-500 ease-linear hover:bg-black/75 transition-colors"
            >
                Contact Me
            </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/45 backdrop-blur-sm z-50"   onClick={handleBackdropClick }>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white p-10 rounded-3xl w-full max-w-md relative shadow-lg"
          >
            <button
              className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              X
            </button>
            <h3 className="text-2xl font-semibold text-center mb-2">Let's Connect & Collaborate</h3>
            <p className='mb-10 text-sm max-w-sm text-center'>Got a project in mind, or simply looking to collaborate with us? Complete the form below and we’ll get back to you. Or send us a mail to the email address</p>

            {successMessage && <p className="text-green-500 text-sm text-center mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 text-center text-sm mb-4">{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-3xl text-sm focus:outline-none focus:ring-0 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-3xl text-sm focus:outline-none focus:ring-0 focus:ring-blue-500"
                />
              </div>
              <div className="mb-5">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-2xl text-sm focus:outline-none focus:ring-0 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-2 rounded-3xl text-white font-semibold 
                     ${isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-black/75 hover:transition-all duration-500 ease-linear'}
                     transition-colors`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </motion.div>

        </div>
      )}
    </>
  );
};

export default Navbar;
