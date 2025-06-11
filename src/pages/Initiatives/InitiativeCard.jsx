"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import './initiatives.css'
const InitiativeCard = ({ initiative, isFeatured, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  }

  // Handle card click
  const handleCardClick = () => {
    navigate(initiative.path)
  }

  return isFeatured ? (
    // Featured initiative card (full width)
    <motion.div
      className="relative overflow-hidden rounded-xl cursor-pointer"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-[400px] md:h-[550px] w-full">
        {/* Background image with grayscale effect */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center filter grayscale transition-all duration-700"
          style={{ backgroundImage: `url(${initiative.bg})` }}
          animate={{
            scale: isHovered || isMobile ? 1.05 : 1,
            filter: isHovered || isMobile ? "grayscale(0%)" : "grayscale(100%)",
          }}
          transition={{ duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }}
        />

        {/* Gradient overlay - darker for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 opacity-90 transition-opacity duration-700"></div>

        {/* Content container */}
        <motion.div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 lg:p-12 z-20 max-w-full md:max-w-3xl">
          {/* Title with line animation */}
          <div className="overflow-hidden">
            <motion.h3
              className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold mb-3 md:mb-4 uppercase tracking-wider drop-shadow-md line-clamp-2 md:line-clamp-none"
              animate={{
                y: isHovered ? 0 : 10,
                opacity: isHovered || isMobile ? 1 : 0.9,
              }}
              transition={{ duration: 0.4 }}
            >
              {initiative.name}
              <motion.div
                className="h-[3px] bg-white mt-2 md:mt-3 w-0 transition-all duration-500"
                initial={{ width: 0 }}
                animate={{
                  width: isHovered || isMobile ? "100%" : "0%",
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </motion.h3>
          </div>

          {/* Description - always visible on mobile */}
          <motion.p
            className="text-white text-sm md:text-base lg:text-xl font-medium max-w-full md:max-w-2xl drop-shadow-md line-clamp-3 md:line-clamp-none"
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            animate={{
              opacity: isHovered || isMobile ? 1 : 0,
              y: isHovered || isMobile ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isMobile ? initiative.shortDesc : initiative.description}
          </motion.p>

          {/* Services list - hidden on mobile to save space */}
          {!isMobile && (
            <motion.ul
              className="mt-4 md:mt-6 space-y-1 md:space-y-2 text-white text-xs md:text-sm lg:text-base opacity-0 transition-opacity duration-500 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 0.9 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {initiative.services.slice(0, 3).map((service, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">•</span>
                  {service}
                </li>
              ))}
            </motion.ul>
          )}

          {/* CTA Button - always visible on mobile */}
          <motion.button
            className="mt-4 md:mt-6 px-4 py-2 md:px-8 md:py-3 border-2 border-white text-white text-xs md:text-sm lg:text-base font-bold rounded-full overflow-hidden relative transition-all duration-500"
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            animate={{
              opacity: isHovered || isMobile ? 1 : 0,
              y: isHovered || isMobile ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {initiative.cta}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  ) : (
    // Regular initiative card
    <motion.div
      className="relative overflow-hidden rounded-xl cursor-pointer h-full"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-[300px] sm:h-[350px] w-full">
        {/* Background image with grayscale effect */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center filter grayscale transition-all duration-700"
          style={{ backgroundImage: `url(${initiative.bg})` }}
          animate={{
            scale: isHovered || isMobile ? 1.05 : 1,
            filter: isHovered || isMobile ? "grayscale(0%)" : "grayscale(100%)",
          }}
          transition={{ duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }}
        />

        {/* Gradient overlay - darker for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 opacity-90 transition-opacity duration-700"></div>

        {/* Content container */}
        <motion.div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
          {/* Title with line animation */}
          <div className="overflow-hidden">
            <motion.h3
              className="text-white text-lg sm:text-xl font-extrabold mb-2 uppercase tracking-wider drop-shadow-md line-clamp-2"
              animate={{
                y: isHovered ? 0 : 10,
                opacity: isHovered || isMobile ? 1 : 0.9,
              }}
              transition={{ duration: 0.4 }}
            >
              {initiative.name}
              <motion.div
                className="h-[2px] bg-white mt-2 w-0 transition-all duration-500"
                initial={{ width: 0 }}
                animate={{
                  width: isHovered || isMobile ? "100%" : "0%",
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </motion.h3>
          </div>

          {/* Short description - always visible on mobile */}
          <motion.p
            className="text-white text-xs sm:text-sm opacity-0 max-w-full line-clamp-3"
            initial={{ opacity: isMobile ? 0.9 : 0, y: isMobile ? 0 : 10 }}
            animate={{
              opacity: isHovered || isMobile ? 0.9 : 0,
              y: isHovered || isMobile ? 0 : 10,
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {initiative.shortDesc}
          </motion.p>

          {/* CTA Button - always visible on mobile */}
          <motion.button
            className="mt-3 px-3 py-1 sm:px-4 sm:py-1.5 border-2 border-white text-white text-xs font-bold rounded-full overflow-hidden relative transition-all duration-500"
            initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
            animate={{
              opacity: isHovered || isMobile ? 1 : 0,
              y: isHovered || isMobile ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {initiative.cta}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default InitiativeCard
