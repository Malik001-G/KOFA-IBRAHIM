"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { NavLink, Link } from "react-router-dom"
import emailjs from "emailjs-com"

const CreativeHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringName, setIsHoveringName] = useState(false)
  const [isHoveringMenu, setIsHoveringMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [letterHover, setLetterHover] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const nameRef = useRef(null)

  // Form state
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // Mouse parallax effect - REDUCED as requested
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Reduced parallax values
  const backgroundX = useTransform(mouseX, [-500, 500], [5, -5])
  const backgroundY = useTransform(mouseY, [-500, 500], [5, -5])

  const nameX = useTransform(mouseX, [-500, 500], [8, -8])
  const nameY = useTransform(mouseY, [-500, 500], [8, -8])

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      mouseX.set(clientX - centerX)
      mouseY.set(clientY - centerY)
      setMousePosition({ x: clientX, y: clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen, isMobileMenuOpen])

  // Menu items
  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Initiatives", path: "/initiatives" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "#", action: () => setIsModalOpen(true) },
  ]

  // Split name for letter animations
  const firstName = "KOFA"
  const lastName = "IBRAHIM"

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
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

  // Animation variants for modal
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
    <div className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center">
      {/* Background image with parallax effect and black & white filter */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          x: backgroundX,
          y: backgroundY,
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test.jpg-4VTehHNtHYDIj1HcHxW60ptEvqWmMM.jpeg)`,
        }}
        initial={{ scale: 1.2, filter: "grayscale(100%)" }}
        animate={{ scale: 1, filter: "grayscale(100%)" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Base overlay for contrast */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 mix-blend-multiply"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Visionary, authentic background elements */}

        {/* Organic flowing light streams - like aurora borealis */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`aurora-${i}`}
              className="absolute"
              style={{
                width: `${200 + Math.random() * 400}px`,
                height: `${10 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
                filter: "blur(8px)",
                transformOrigin: "center",
                rotate: `${Math.random() * 360}deg`,
              }}
              animate={{
                width: [
                  `${200 + Math.random() * 400}px`,
                  `${300 + Math.random() * 500}px`,
                  `${200 + Math.random() * 400}px`,
                ],
                opacity: [0.3, 0.7, 0.3],
                rotate: [
                  `${Math.random() * 360}deg`,
                  `${Math.random() * 360 + 40}deg`,
                  `${Math.random() * 360 + 80}deg`,
                ],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Ethereal ink drops in water effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`ink-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: `${50 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 70%)`,
                filter: "blur(10px)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 3, 5],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        {/* Organic light tendrils */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => {
            const startX = Math.random() * 100
            const startY = Math.random() * 100
            const endX = startX + (Math.random() * 40 - 20)
            const endY = startY + (Math.random() * 40 - 20)

            return (
              <motion.div
                key={`tendril-${i}`}
                className="absolute bg-white/5"
                style={{
                  width: `${1 + Math.random() * 2}px`,
                  height: `${30 + Math.random() * 70}px`,
                  left: `${startX}%`,
                  top: `${startY}%`,
                  transformOrigin: "bottom",
                  filter: "blur(1px)",
                }}
                animate={{
                  left: [`${startX}%`, `${endX}%`, `${startX}%`],
                  top: [`${startY}%`, `${endY}%`, `${startY}%`],
                  rotate: [
                    `${Math.random() * 360}deg`,
                    `${Math.random() * 360 + 45}deg`,
                    `${Math.random() * 360 + 90}deg`,
                  ],
                  height: [
                    `${30 + Math.random() * 70}px`,
                    `${50 + Math.random() * 100}px`,
                    `${30 + Math.random() * 70}px`,
                  ],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 20 + Math.random() * 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  delay: Math.random() * 5,
                }}
              />
            )
          })}
        </div>

        {/* Subtle light mist */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`mist-${i}`}
              className="absolute"
              style={{
                width: `${300 + Math.random() * 500}px`,
                height: `${300 + Math.random() * 500}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)`,
                filter: "blur(50px)",
              }}
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 30 + Math.random() * 40,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>

        {/* Visionary light paths - like neural networks */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(15)].map((_, i) => {
            const startX = Math.random() * 100
            const startY = Math.random() * 100
            const controlX1 = startX + (Math.random() * 30 - 15)
            const controlY1 = startY + (Math.random() * 30 - 15)
            const controlX2 = startX + (Math.random() * 30 - 15)
            const controlY2 = startY + (Math.random() * 30 - 15)
            const endX = startX + (Math.random() * 30 - 15)
            const endY = startY + (Math.random() * 30 - 15)

            return (
              <motion.div
                key={`path-${i}`}
                className="absolute w-1 h-1 rounded-full bg-white/30"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  filter: "blur(1px)",
                }}
                animate={{
                  opacity: [0, 0.7, 0],
                  left: [`${startX}%`, `${endX}%`],
                  top: [`${startY}%`, `${endY}%`],
                }}
                transition={{
                  duration: 5 + Math.random() * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: Math.random() * 10,
                  repeatDelay: Math.random() * 5,
                }}
              />
            )
          })}
        </div>

        {/* Authentic film grain texture - more organic */}
        <motion.div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundSize: "150px 150px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "150px 150px"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient-to-transparent from-black/40 to-transparent pointer-events-none" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 py-8 z-10">
        {/* Logo using the provided NavLink component */}
        <NavLink to="/" className="flex flex-col items-start">
          <div className="overflow-hidden">
            <motion.h2
              className="text-white text-2xl font-bold"
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
            className="h-[1px] bg-white mb-1"
          />
          <motion.p
            className="italic text-xs font-normal ml-1 text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ideas. Solutions. Stories.
          </motion.p>
        </NavLink>

        {/* Desktop Navigation - Updated to match the reference image */}
        <div className="hidden md:flex items-center">
          <motion.ul
            className="flex items-center gap-8 list-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.1 }}
            onHoverStart={() => setIsHoveringMenu(true)}
            onHoverEnd={() => setIsHoveringMenu(false)}
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
                onHoverStart={() => setActiveMenu(item.name)}
                onHoverEnd={() => setActiveMenu(null)}
                className="relative py-2"
              >
                {item.action ? (
                  <button
                    onClick={item.action}
                    className={`text-white text-base font-medium relative py-2 bg-transparent border-none cursor-pointer outline-none ${activeMenu === item.name ? "font-semibold" : ""}`}
                  >
                    {item.name}
                    {activeMenu === item.name && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        layoutId="underline"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-white text-base font-medium relative py-2 ${activeMenu === item.name ? "font-semibold" : ""}`}
                  >
                    {item.name}
                    {activeMenu === item.name && (
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        layoutId="underline"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Mobile menu button with improved animation */}
        <motion.button
          className="md:hidden text-white p-2 z-50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 h-6 relative flex items-center justify-center">
            <motion.span
              className="absolute w-6 h-0.5 bg-white block"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 0 : -3,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-white block"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
                x: isMobileMenuOpen ? 20 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-white block"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? 0 : 3,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <motion.div
          className="fixed inset-0 bg-black/95 z-40 md:hidden flex flex-col justify-center items-center"
          initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            clipPath: isMobileMenuOpen
              ? "circle(150% at calc(100% - 2.5rem) 2.5rem)"
              : "circle(0% at calc(100% - 2.5rem) 2.5rem)",
            pointerEvents: isMobileMenuOpen ? "auto" : "none",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <motion.ul className="flex flex-col items-center gap-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    y: isMobileMenuOpen ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: isMobileMenuOpen ? 0.3 + index * 0.1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  {item.action ? (
                    <button
                      onClick={() => {
                        item.action()
                        setIsMobileMenuOpen(false)
                      }}
                      className="text-white text-2xl font-medium bg-transparent border-none cursor-pointer outline-none"
                    >
                      <motion.span whileHover={{ scale: 1.1, x: 10 }} transition={{ duration: 0.2 }}>
                        {item.name}
                      </motion.span>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-white text-2xl font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.span whileHover={{ scale: 1.1, x: 10 }} transition={{ duration: 0.2 }}>
                        {item.name}
                      </motion.span>
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </nav>

      {/* Main content */}
      <div className="relative z-2 flex flex-col items-center justify-center w-full h-full px-4">
        <motion.div
          ref={nameRef}
          className="flex flex-col items-center justify-center"
          style={{ x: nameX, y: nameY }}
          onHoverStart={() => setIsHoveringName(true)}
          onHoverEnd={() => setIsHoveringName(false)}
        >
          {/* Elegant fade-in animation for the name */}
          <div className="text-center mb-6">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
              }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.span
                className="block md:inline"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                {firstName}
              </motion.span>
              <motion.span
                className="block md:inline md:ml-5"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                {lastName}
              </motion.span>
            </motion.h1>

            <motion.div
              className="h-0.5 bg-white/50 w-0 mx-auto mt-4"
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
              whileHover={{ width: "60%", backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            />
          </div>

          {/* Animated underline with gradient effect */}
          <motion.div
            className="h-1 bg-gradient-to-r from-white/30 via-white to-white/30 mt-6 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHoveringName ? "80%" : "40%",
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />

          {/* Tagline with staggered word reveal */}
          <div className="flex justify-center flex-wrap mt-8 overflow-hidden">
            {["Documentary", "Filmmaker", "•", "Leadership", "Expert", "•", "Climate", "Advocate"].map(
              (word, index) => (
                <motion.span
                  key={index}
                  className="text-center text-lg font-light tracking-widest mx-1 inline-block"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 2 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {word}
                </motion.span>
              ),
            )}
          </div>

          {/* Call to action button */}
          <motion.button
            className="mt-12 px-8 py-3 bg-transparent border-2 border-white rounded-full text-white font-medium overflow-hidden relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Discover My Work
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Cursor follower */}
      <motion.div
        className="fixed w-10 h-10 rounded-full bg-white pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHoveringName || isHoveringMenu ? 1.5 : 1,
          opacity: isHoveringName || isHoveringMenu ? 0.4 : 0.15,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Social links with staggered animation */}
      <motion.div
        className="fixed bottom-8 right-8 md:right-16 flex gap-6 z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2, staggerChildren: 0.1 }}
      >
        {[
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            ),
            delay: 0,
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            ),
            delay: 0.1,
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            ),
            delay: 0.2,
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href="#"
            className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 + social.delay }}
            whileHover={{
              scale: 1.2,
              y: -5,
              filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))",
            }}
          >
            {social.icon}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        className="fixed bottom-8 left-8 md:left-16 flex flex-col items-center gap-2 z-10 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
        <motion.span
          className="text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          Explore
        </motion.span>
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

              <motion.h3
                className="text-2xl font-bold text-center mb-2 text-black"
                variants={formItemVariants}
                custom={0}
              >
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
                    className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300 text-black"
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
                    className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300 text-black"
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
                    className="w-full p-3 pl-5 bg-[#F5F5F5] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300 text-black"
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
    </div>
  )
}

export default CreativeHero
