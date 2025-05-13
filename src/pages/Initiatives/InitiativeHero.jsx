"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from "framer-motion"

const InitiativeHero = () => {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoverState, setHoverState] = useState(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Parallax effect values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])

  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Cycle through categories
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length)
    }, 4000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [mouseX, mouseY])

  // Scroll to initiatives section
  const scrollToInitiatives = () => {
    const initiativesSection = document.getElementById("initiatives-section")
    if (initiativesSection) {
      initiativesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Categories with minimal data requirements
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
      className="relative w-screen h-[1200px] sm:h-[1000px] md:h-[800px] lg:h-[610px] overflow-hidden bg-black text-white flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elegant grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Monochromatic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111] to-black opacity-80" />

        {/* Elegant accent lines with parallax */}
        <motion.div className="absolute h-[1px] bg-white/10 w-full" style={{ top: "25%", y: y1 }} />
        <motion.div className="absolute h-[1px] bg-white/10 w-full" style={{ top: "50%", y: y2 }} />
        <motion.div className="absolute h-[1px] bg-white/10 w-full" style={{ top: "75%", y: y1 }} />

        {/* Sophisticated monochromatic depth elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl"
            style={{ top: "-20%", right: "-20%" }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="absolute left-0 bottom-0 w-1/2 h-full overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-white/5 to-transparent blur-3xl"
            style={{ bottom: "-20%", left: "-10%" }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </div>
      </div>

      {/* Main content container */}
      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-36 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left column - sophisticated heading and content */}
        <motion.div
          className="w-full md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12"
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Refined heading with elegant animation */}
          <div className="overflow-hidden mb-2">
            <motion.p
              className="text-sm uppercase tracking-[0.2em] text-[#999] mb-3 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Transforming Vision Into Reality
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span
                className="block font-light"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Strategic
              </motion.span>

              <motion.span
                className="block font-semibold mt-1"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Initiatives
              </motion.span>
            </motion.h1>
          </div>

          {/* Sophisticated separator */}
          <motion.div
            className="my-8 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.div
              className="w-12 h-[1px] bg-white"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-white mx-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            />
            <motion.div
              className="w-24 h-[1px] bg-white/20"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 1.1 }}
            />
          </motion.div>

          {/* Elegant paragraph with refined typography */}
          <motion.p
            className="text-base text-[#CCC] max-w-md leading-relaxed mb-10 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          >
            These strategic initiatives represent my commitment to excellence and innovation. Through thoughtful planning
            and execution, we develop comprehensive programs that drive meaningful change and create lasting impact.
          </motion.p>

          {/* Sophisticated button group */}
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            <motion.button
              onClick={scrollToInitiatives}
              className="px-8 py-3 bg-white text-black rounded-none font-light text-sm tracking-wider uppercase relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoverState("view")}
              onHoverEnd={() => setHoverState(null)}
            >
              <motion.span
                className="absolute inset-0 bg-black/10"
                initial={{ x: "-100%" }}
                animate={{
                  x: hoverState === "view" ? "0%" : "-100%",
                }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center">
                Explore Initiatives
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </motion.button>

            <motion.a
              href="#contact"
              className="px-8 py-3 border border-white/20 text-white rounded-none font-light text-sm tracking-wider uppercase relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoverState("contact")}
              onHoverEnd={() => setHoverState(null)}
            >
              <motion.span
                className="absolute inset-0 bg-white/5"
                initial={{ y: "100%" }}
                animate={{
                  y: hoverState === "contact" ? "0%" : "100%",
                }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center">
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right column - minimal initiative categories */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          {/* Elegant category display */}
          <div className="relative">
            {/* Category grid - minimal data requirements */}
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className={`border border-white/10 backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden ${
                    activeCategory === index ? "bg-white/5" : "bg-white/[0.02]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    borderColor: activeCategory === index ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 1.8 + index * 0.1,
                    borderColor: { duration: 0.3 },
                  }}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  onClick={() => setActiveCategory(index)}
                >
                  {/* Animated highlight for active category */}
                  {activeCategory === index && (
                    <motion.div
                      className="absolute inset-0 bg-white/5"
                      layoutId="activeHighlight"
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${activeCategory === index ? "text-white" : "text-[#999]"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                      </svg>
                    </div>
                    <h3 className={`text-lg font-light ${activeCategory === index ? "text-white" : "text-[#CCC]"}`}>
                      {category.title}
                    </h3>

                    {/* Minimal indicator */}
                    <motion.div
                      className="w-8 h-[1px] mx-auto mt-3"
                      style={{
                        backgroundColor:
                          activeCategory === index ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.2)",
                      }}
                      animate={{
                        width: activeCategory === index ? 40 : 32,
                        backgroundColor:
                          activeCategory === index ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Elegant decorative elements */}
          <motion.div
            className="absolute w-24 h-24 border border-white/10 -top-6 -right-6 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          />
          <motion.div
            className="absolute w-16 h-16 border border-white/10 -bottom-4 -left-4 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          />
        </motion.div>
      </div>

      {/* Sophisticated cursor effect */}
      <AnimatePresence>
        {hoverState && (
          <motion.div
            className="fixed w-12 h-12 rounded-full border border-white/30 pointer-events-none z-50 hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.6,
              scale: 1,
              x: mouseX.get() - 24,
              y: mouseY.get() - 24,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default InitiativeHero
