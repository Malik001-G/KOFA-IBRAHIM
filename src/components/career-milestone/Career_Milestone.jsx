"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import "./career-milestone.css"
import arrow from "../../assets/images/download-arrow.png"

const ExperienceCard = ({ title, duration, role, description, index }) => {
  // Custom animation for each card based on its index
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  }

  return (
    <motion.div
      className="bg-white rounded-lg p-6 border-l-4 shadow-sm border-gray-400 hover:border-black duration-300 ease-out hover:shadow-md relative overflow-hidden group"
      variants={cardVariants}
      whileHover={{
        x: 5,
        transition: { duration: 0.3 },
      }}
    >
      {/* Subtle background animation on hover */}
      <motion.div
        className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.02] -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.02 }}
        transition={{ duration: 0.3 }}
      />

      <div className="sm:flex justify-between mb-5">
        <div className="mb-2 sm:mb-0">
          <motion.h2
            className="text-xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-sm font-semibold text-[#7D7D7D]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
          >
            {role}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
        >
          <p className="text-[#7D7D7D] text-sm">{duration}</p>
        </motion.div>
      </div>
      <motion.p
        className="text-gray-700 max-w-lg mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
      >
        {description}
      </motion.p>

      {/* Animated line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-black"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

const CareerMilestone = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0.6, 1, 1, 0.8])

  const experiences = [
    {
      title: "North Docs",
      duration: "2013 - Present",
      role: "Founder",
      description:
        "A platform dedicated to documenting and preserving Northern Nigerian culture and stories through compelling visual narratives and documentary filmmaking.",
    },
    {
      title: "Climate Advocacy Initiative",
      duration: "2015 - Present",
      role: "Lead Advocate",
      description:
        "Driving awareness and policy discussions on climate change in Nigeria through research, community engagement, and strategic partnerships with key stakeholders.",
    },
    {
      title: "Leadership and Strategy Consultancy",
      duration: "2018 - Present",
      role: "Strategic Consultant",
      description:
        "Guiding organizations on impactful decision-making and sustainable growth strategies, with a focus on post-conflict reconstruction and development in Northern Nigeria.",
    },
  ]

  const handleDownload = () => {
    const resumeUrl = "/path-to-your-resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Kofa_Ibrahim_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  return (
    <motion.section
      ref={sectionRef}
      className="bg-white py-20 px-6 lg:px-36 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Decorative element */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full border border-gray-200 opacity-20"
        style={{ y }}
      />

      <motion.div className="mb-16 relative" style={{ opacity }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="mb-8 md:mb-0">
            <motion.h2
              className="text-black text-5xl md:text-6xl font-bold uppercase relative inline-block"
              variants={titleVariants}
            >
              Career
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-black"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.h2>
            <motion.h2
              className="text-[#939393] text-5xl md:text-6xl font-bold uppercase mt-2"
              variants={titleVariants}
            >
              Milestones
            </motion.h2>
          </div>
          <motion.div className="md:max-w-xs" variants={titleVariants}>
            <p className="text-sm md:text-base text-[#4B4B4B] font-medium">
              Significant achievements and defining moments along the professional journey.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} index={index} />
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button
          type="button"
          onClick={handleDownload}
          className="group relative overflow-hidden hover:bg-black transition-all ease-linear duration-300 px-8 py-3 text-sm uppercase font-medium text-center text-[#4B4B4B] border border-gray-600 bg-white rounded-full
          items-center inline-flex focus:ring-0 focus:outline-none"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Button background animation */}
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />

          {/* Button text */}
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Download My Resume
          </span>

          {/* Arrow animation */}
          <motion.img
            src={arrow}
            className="relative z-10 ml-2 w-3 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
            alt=""
            animate={{ y: [0, -2, 0, -2, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
              duration: 1,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default CareerMilestone
