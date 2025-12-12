"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const InitiativeHero = () => {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const scrollToInitiatives = () => {
    const initiativesSection = document.getElementById("initiatives-section")
    if (initiativesSection) {
      initiativesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const categories = [
    {
      id: "leadership",
      title: "Leadership",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      id: "documentary",
      title: "Documentary",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    },
    {
      id: "climate",
      title: "Climate",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      id: "research",
      title: "Research",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    },
  ]

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full min-h-[80vh] bg-black text-white flex items-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Simple background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
      </div>

      {/* Centered content */}
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kofa Ibrahim
          </motion.p>
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Focus Areas
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Strategic <span className="font-semibold">Initiatives</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Comprehensive programs designed to drive meaningful change and create lasting impact across multiple sectors.
          </motion.p>

          {/* Category badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`px-5 py-2 border pointer-events-none rounded-full text-sm transition-all ${
                  activeCategory === index
                    ? "border-white bg-white/10 text-white"
                    : "border-white/20 bg-transparent text-gray-400"
                }`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.button
            onClick={scrollToInitiatives}
            className="px-8 py-3 bg-white text-black text-sm uppercase tracking-wider hover:bg-gray-100 ease-linear duration-300 rounded-3xl transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Initiatives
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default InitiativeHero