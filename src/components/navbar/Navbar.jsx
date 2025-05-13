"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "emailjs-com"
import toggler from "../../assets/images/toggler.svg"
import close_nav from "../../assets/images/close-nav.svg"
import "./navbar.css"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when sidebar or modal is open
  useEffect(() => {
    if (isSidebarOpen || isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen, isModalOpen])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const openModal = () => {
    setIsModalOpen(true)
    setIsSidebarOpen(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    emailjs.sendForm("default_service", "template_dlg37sn", e.target, "JRI_W7aPIVDiM_NZ9").then(
      () => {
        setIsSubmitting(false)
        setSuccessMessage("Thank you for reaching out! I'll get back to you shortly.")
        setFormData({ from_name: "", email: "", message: "" })

        // Auto close modal after success
        setTimeout(() => {
          closeModal()
          setSuccessMessage("")
        }, 3000)
      },
      () => {
        setIsSubmitting(false)
        setErrorMessage("There was an error sending your message. Please try again.")
      },
    )
  }

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const contactVariants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const formItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.4,
      },
    }),
  }

  return (
    <>
      <motion.div
        className={`navbar fixed top-0 left-0 right-0 px-6 md:px-10 lg:px-36 z-[100] py-4 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
          <NavLink to="/" className="flex flex-col items-start">
            <div className="overflow-hidden">
              <motion.h2
                className="text-black text-2xl font-bold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={0}
                >
                  K
                </motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={1}
                >
                  O
                </motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={2}
                >
                  F
                </motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={3}
                >
                  A
                </motion.span>
                <motion.span className="inline-block ml-2"></motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={4}
                >
                  I
                </motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={5}
                >
                  B
                </motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={6}
                >
                  R
                </motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={7}
                >
                  A
                </motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={8}
                >
                  H
                </motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={9}
                >
                  I
                </motion.span>
                <motion.span
                  className="inline-block"
                  whileHover={(i) => ({
                    y: -5,
                    transition: { duration: 0.2, delay: i * 0.05 },
                  })}
                  custom={10}
                >
                  M
                </motion.span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[1px] bg-black mb-1"
            />
            <motion.p
              className="italic text-xs font-normal ml-1 text-black"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ideas. Solutions. Stories.
            </motion.p>
          </NavLink>
        <div className="reg-men">
          <motion.div className="menu" onClick={toggleSidebar} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {isSidebarOpen ? (
              <motion.img
                src={close_nav}
                alt="Close menu"
                className="w-12 cursor-pointer"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                src={toggler}
                alt="Open menu"
                className="w-12 cursor-pointer"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Add a spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-[72px] w-full"></div>

      {/* Sidebar overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="overlay fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar menu */}
      <motion.div
        className="sidebar fixed top-0 right-0 h-full w-full md:w-[80%] lg:w-[60%] bg-white px-6 lg:px-36 pt-32 z-40 lg:flex justify-between rounded-bl-3xl"
        variants={sidebarVariants}
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
      >
        <nav className="sidebar-links w-full lg:w-9/12 mb-8 lg:mb-0 flex flex-col">
          {["Home", "About Us", "Blogs", "Initiatives"].map((item, index) => {
            const path =
              item === "Home"
                ? "/"
                : item === "About Us"
                  ? "/about"
                    : item === "Blogs"
                      ? "/blogs"
                      : "/initiatives"

            return (
              <motion.div key={item} variants={linkVariants} custom={index}>
                <NavLink
                  to={path}
                  className="py-5 pr-10 text-3xl md:text-4xl block font-medium hover:text-black/70 transition-colors"
                  onClick={toggleSidebar}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </NavLink>
              </motion.div>
            )
          })}
        </nav>
        <motion.div variants={contactVariants} className="lg:w-4/12">
          <h2 className="font-bold text-2xl mb-3">Let's Connect & Collaborate</h2>
          <p className="text-sm mt-2 text-gray-700">
            Have a project in mind, a question, or just want to connect? Reach out and let's discuss how we can bring
            ideas to life.
          </p>
          <motion.button
            onClick={openModal}
            className="bg-black text-white mt-5 py-3 px-6 rounded-full text-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/45 backdrop-blur-sm z-50 p-4"
            onClick={handleBackdropClick}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
          >
            <motion.div
              className="bg-white p-8 md:p-10 rounded-3xl w-full max-w-md relative shadow-lg"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              <motion.h3 className="text-2xl font-bold text-center mb-2" variants={formItemVariants} custom={0}>
                Let's Connect & Collaborate
              </motion.h3>

              <motion.p
                className="mb-8 text-sm max-w-sm mx-auto text-center text-gray-600"
                variants={formItemVariants}
                custom={1}
              >
                Got a project in mind, or simply looking to collaborate? Complete the form below and we'll get back to
                you.
              </motion.p>

              {successMessage && (
                <motion.div
                  className="bg-green-50 text-green-700 p-4 rounded-xl text-sm text-center mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {successMessage}
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  className="bg-red-50 text-red-700 p-4 rounded-xl text-sm text-center mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {errorMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <motion.div className="mb-4" variants={formItemVariants} custom={2}>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300"
                  />
                </motion.div>

                <motion.div className="mb-4" variants={formItemVariants} custom={3}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300"
                  />
                </motion.div>

                <motion.div className="mb-6" variants={formItemVariants} custom={4}>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full p-3 rounded-xl text-white font-medium 
                    ${isSubmitting ? "bg-gray-400" : "bg-black"}`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  variants={formItemVariants}
                  custom={5}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
