"use client"

import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import "./portfoliocategory.css"
// Import your images - update these paths to your actual images
import mmaImage from "../../assets/images/New/u.jpg"
import northDocsImage from "../../assets/images/New/g.jpg"
import gapImage from "../../assets/images/leadership.jfif"
import insightsImage from "../../assets/images/portfolio4.jfif"
import academiaImage from "../../assets/images/New/26.jpg"
import mediaResearchImage from "../../assets/images/New/24.jpg"

const PorfolioCategories = () => {
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const initiatives = [
    {
      name: "Master Methods & Advisors",
      path: "/initiatives/mma",
      bg: mmaImage,
      caption: "Leadership and strategy expertise for organizations and individuals seeking transformative growth.",
      number: "01",
      cta: "Partner with Us",
    },
    {
      name: "North Docs",
      path: "/initiatives/north-docs",
      bg: northDocsImage,
      caption: "Documentary filmmaking that brings to life the rich, diverse stories of Northern Nigeria and Africa.",
      number: "02",
      cta: "Commission a Documentary",
    },
    {
      name: "GAP: Global African Perspectives",
      path: "/initiatives/gap",
      bg: gapImage,
      caption: "Climate advocacy initiatives that connect policy work with compelling storytelling for impact.",
      number: "03",
      cta: "Get Involved",
    },
    {
      name: "Insights",
      path: "/initiatives/insights",
      bg: insightsImage,
      caption:
        "Thought leadership on strategy, storytelling, and African development through blogs and video monologues.",
      number: "04",
      cta: "Read Latest",
    },
    {
      name: "Academia & Research",
      path: "/initiatives/academia",
      bg: academiaImage,
      caption: "Ongoing research on leadership failure in Africa, mental health, and post-conflict reconstruction.",
      number: "05",
      cta: "View Research",
    },
    {
      name: "Media-Research Fusion",
      path: "/initiatives/media-research",
      bg: mediaResearchImage,
      caption: "Where academic work meets documentary filmmaking, creating powerful knowledge translation.",
      number: "06",
      cta: "Explore Projects",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  }

  // Staggered card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    }),
  }

  // Text animation for card content
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      className="bg-white py-20 px-6 lg:px-36 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="mb-16 relative" variants={titleVariants} style={{ y }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-black text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase relative inline-block">
              Featured
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-black"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </h2>
            <h2 className="text-[#939393] text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase mt-2">
              Initiatives
            </h2>
          </div>
          <div className="md:max-w-xs">
            <p className="text-sm md:text-base text-[#4B4B4B] font-medium italic">
              Explore the intersection of storytelling, leadership, and advocacy, where ideas inspire action and voices
              shape change.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={initiative.name}
            className={`relative ${
              index % 3 === 0 ? "md:col-span-8" : "md:col-span-4"
            } ${index % 2 === 0 ? "md:mt-12" : ""}`}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => navigate(initiative.path)}
          >
            <div className="group cursor-pointer h-full">
              {/* Card container with perspective */}
              <motion.div
                className="relative overflow-hidden rounded-xl h-[400px] md:h-[500px] perspective-1000 w-full"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                {/* Background image with grayscale effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center filter grayscale transition-all duration-700"
                  style={{ backgroundImage: `url(${initiative.bg})` }}
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    filter: hoveredIndex === index ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  transition={{ duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }}
                />

                {/* Darker gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 opacity-90 group-hover:opacity-80 transition-opacity duration-700"></div>

                {/* Number indicator with parallax effect - BOLDER */}
                <motion.div
                  className="absolute top-6 right-6 z-10"
                  animate={{
                    y: hoveredIndex === index ? -5 : 0,
                    opacity: hoveredIndex === index ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-white text-7xl md:text-9xl font-black opacity-50 group-hover:opacity-80 transition-opacity duration-500 drop-shadow-lg">
                    {initiative.number}
                  </span>
                </motion.div>

                {/* Content container */}
                <motion.div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20" variants={textVariants}>
                  {/* Title with line animation - BOLDER */}
                  <div className="overflow-hidden">
                    <motion.h3
                      className="text-white text-2xl md:text-3xl font-extrabold mb-3 uppercase tracking-wider drop-shadow-md"
                      animate={{
                        y: hoveredIndex === index ? 0 : 10,
                        opacity: hoveredIndex === index ? 1 : 0.9,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {initiative.name}
                      <motion.div
                        className="h-[3px] bg-white mt-2 w-0 group-hover:w-full transition-all duration-500"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      />
                    </motion.h3>
                  </div>

                  {/* Description with fade in - BOLDER */}
                  <motion.p
                    className="text-white text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-md drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {initiative.caption}
                  </motion.p>

                  {/* CTA Button with slide up animation - BOLDER */}
                  <motion.button
                    className="mt-4 px-6 py-2 border-2 border-white text-white text-sm font-bold rounded-full overflow-hidden relative group-hover:bg-white group-hover:text-black transition-all duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {initiative.cta}
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default PorfolioCategories
