"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const InitiativeHero = () => {
  const ref = useRef(null)

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Scroll to initiatives section
  const scrollToInitiatives = () => {
    const initiativesSection = document.getElementById("initiatives-section")
    if (initiativesSection) {
      initiativesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      ref={ref}
      className="relative bg-white pt-28 pb-24 px-6 lg:px-36 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Our Strategic
            </motion.span>
            <motion.span
              className="block text-[#939393]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Initiatives
            </motion.span>
          </motion.h1>

          <motion.div
            className="h-1 w-24 bg-black mb-10"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />

          <motion.p
            className="text-base md:text-xl text-gray-700 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Discover our portfolio of transformative projects spanning leadership development, documentary filmmaking,
            climate advocacy, and academic research.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToInitiatives}
            className="px-4 py-3 bg-black text-white rounded-md font-medium text-sm hover:bg-gray-900 transition-colors flex items-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Initiatives
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
          <motion.a
            href="#contact"
            className="px-4 py-3 border border-black text-black rounded-md font-medium text-base hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Abstract decorative element */}
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-3/4 opacity-5 hidden lg:block"
        style={{ y }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#000000"
            d="M39.9,-65.7C52.8,-59.6,65.2,-51.1,71.7,-39.1C78.2,-27.1,78.8,-11.5,76.8,3.1C74.8,17.8,70.2,31.5,62.4,43.2C54.6,54.9,43.6,64.6,30.8,70.1C18,75.7,3.4,77.1,-10.2,74.4C-23.9,71.7,-36.6,64.9,-47.9,55.8C-59.2,46.7,-69.1,35.3,-74.9,21.8C-80.7,8.3,-82.4,-7.3,-78.5,-21.1C-74.6,-34.9,-65.1,-46.9,-53.1,-53.3C-41.1,-59.7,-26.6,-60.5,-13.2,-62.1C0.2,-63.7,12.5,-66.1,24.1,-67.1C35.7,-68.1,46.6,-67.7,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
    </motion.section>
  )
}

export default InitiativeHero
