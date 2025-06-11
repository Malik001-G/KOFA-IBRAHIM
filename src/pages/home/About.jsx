"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion"
import "./About.css"
import ProfileImage from "../../assets/images/New/24.jpg"
import arrow from "../../assets/images/read_more.svg"
import aboutimg1 from "../../assets/images/New/y.jpg"
import aboutimg2 from "../../assets/images/New/26.jpg"
import { Link } from "react-router-dom"

const About = () => {
  const controls = useAnimation()
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, threshold: 0.2 })
  const imageInView = useInView(imageRef, { once: false, threshold: 0.5 })
  const [isGrayscale, setIsGrayscale] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0.6, 1, 1, 0.8])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      // Delay the grayscale effect slightly
      setTimeout(() => setIsGrayscale(true), 800)
    } else {
      controls.start("hidden")
      setIsGrayscale(false)
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.2,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    }),
  }

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.04, 0.62, 0.23, 0.98] },
    },
  }

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="bg-white py-20 px-6 lg:px-36 overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full border border-gray-200 opacity-20"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full border border-gray-300 opacity-10"
          style={{ y: y2 }}
        />

        {/* Title section with creative typography */}
        <motion.div className="mb-16 relative" style={{ opacity }}>
          <motion.h2
            className="text-black text-5xl md:text-7xl font-bold uppercase relative inline-block"
            variants={titleVariants}
          >
            About
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-black"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.h2>
          <motion.h2 className="text-[#939393] text-5xl md:text-7xl font-bold uppercase mt-2" variants={titleVariants}>
            who am i?
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Text content with simple paragraph animations */}
          <motion.div className="lg:col-span-8 text-[#4B4B4B] text-lg lg:text-xl space-y-6">
            <motion.p className="leading-relaxed" custom={0} variants={paragraphVariants}>
              James Kofa Ibrahim is a distinguished documentary filmmaker, leadership and strategy expert, climate
              change advocate, and an academic researcher, currently pursuing a PhD in Leadership and Strategic Studies
              in Nigeria. With a passion for storytelling, his work sheds light on untold stories from Northern Nigeria
              and Africa, focusing on themes of resilience, post-conflict reconstruction, and environmental advocacy.
            </motion.p>

            <motion.p className="leading-relaxed" custom={1} variants={paragraphVariants}>
              For over a decade, Kofa has bridged the gap between media and strategy, leveraging his expertise in social
              and behavioral change communication to craft impactful narratives that drive social transformation. As the
              founder of North Docs, he specializes in documenting Northern Nigerian content, bringing to life the rich,
              diverse, and often overlooked stories of the region. His documentaries, such as...
            </motion.p>
          </motion.div>

          {/* Image and button with enhanced animations */}
          <motion.div className="lg:col-span-4" ref={imageRef}>
            <motion.div
              className="relative overflow-hidden rounded-3xl"
              variants={imageVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.img
                src={ProfileImage}
                className="w-full rounded-3xl mb-5 transform"
                alt="Professional Image"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  filter: isGrayscale ? "grayscale(100%)" : "grayscale(0%)",
                }}
                transition={{
                  scale: { duration: 0.7, ease: "easeOut" },
                  filter: { duration: 1.2, ease: "easeInOut" },
                }}
              />

              {/* Image overlay with reveal effect */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-20"
                animate={{
                  opacity: isHovered ? 0 : 0.2,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-white rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 0.98 : 1,
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: imageInView ? 1 : 0,
                y: imageInView ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to={"/about"}
                className="group relative overflow-hidden hover:bg-black transition-all ease-linear  duration-300 rounded-full w-full lg:w-72 border border-[#4B4B4B] text-[#4B4B4B] focus:ring-0 inline-flex font-medium text-sm px-6 py-3 justify-center items-center"
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />

                {/* Button text */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Read more</span>

                {/* Arrow animation */}
                <motion.img
                  src={arrow}
                  className="relative z-10 ml-2 w-4 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  alt=""
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery section with enhanced animations */}
      <motion.section
        className="pb-24 px-6 lg:px-36 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First image with creative hover effect */}
          <motion.div
            className="relative overflow-hidden rounded-xl aspect-[4/3]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover="hover"
          >
            <motion.img
              src={aboutimg1}
              alt="About Image 1"
              className="w-full h-full object-cover filter transition-all duration-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />

            {/* Image overlay with reveal effect */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Animated corner accents */}
            <motion.div
              className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-white opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.div
              className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-white opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </motion.div>

          {/* Second image with creative hover effect */}
          <motion.div
            className="relative overflow-hidden rounded-xl aspect-[4/3]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover="hover"
          >
            <motion.img
              src={aboutimg2}
              alt="About Image 2"
              className="w-full h-full object-cover filter transition-all duration-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />

            {/* Image overlay with reveal effect */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-30"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Animated corner accents */}
            <motion.div
              className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-white opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.div
              className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-white opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default About
