"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import ProfileImage from "../../assets/images/New/18.jpg"
import Aboutimg from "../../assets/images/New/28.jpg"
import Career_Milestone from "../../components/career-milestone/Career_Milestone"
import Contact from "../../components/contact-us/Contact"
import "./About.css"

const About = () => {
  // Refs for scroll animations
  const bioSectionRef = useRef(null)
  const valuesSectionRef = useRef(null)
  const visionSectionRef = useRef(null)
  const imageSectionRef = useRef(null)

  // Check if sections are in view
  const bioInView = useInView(bioSectionRef, { once: false, amount: 0.2 })
  const valuesInView = useInView(valuesSectionRef, { once: false, amount: 0.2 })
  const visionInView = useInView(visionSectionRef, { once: false, amount: 0.2 })
  const imageInView = useInView(imageSectionRef, { once: false, amount: 0.3 })

  // Parallax scroll effect for hero section
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Animation variants
  const sectionVariants = {
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.1,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    }),
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="bg-white pt-16 pb-12 px-6 lg:px-36 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full border border-gray-200 opacity-20"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full border border-gray-100 opacity-10"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        />

        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-black text-5xl md:text-6xl font-bold uppercase relative inline-block"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            About
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-black"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.h2>
          <motion.h2
            className="text-[#939393] text-5xl md:text-6xl font-bold uppercase mt-2"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            who am i?
          </motion.h2>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          ref={bioSectionRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20"
          initial="hidden"
          animate={bioInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <motion.div className="md:col-span-8 space-y-6" variants={sectionVariants}>
            {[
              "James Kofa Ibrahim is a distinguished documentary filmmaker, leadership and strategy expert, climate change advocate, and an academic researcher, currently pursuing a PhD in Leadership and Strategic Studies in Nigeria. With a passion for storytelling, his work sheds light on untold stories from Northern Nigeria and Africa, focusing on themes of resilience, post-conflict reconstruction, and environmental advocacy.",
              "For over a decade, Kofa has bridged the gap between media and strategy, leveraging his expertise in social and behavioral change communication to craft impactful narratives that drive social transformation. As the founder of North Docs, he specializes in documenting Northern Nigerian content, bringing to life the rich, diverse, and often overlooked stories of the region. His documentaries, such as The Case for Boko, have not only earned critical acclaim but have also positioned him as a leading voice in African storytelling on global platforms.",
              "Beyond filmmaking, Kofa is a thought leader in leadership and strategy, particularly in post-conflict reconstruction. His work in this area has helped shape innovative solutions for rebuilding communities affected by conflict, especially in Borno State, where his research integrates leadership strategies with practical interventions.",
              "Kofa is also the co-founder of the Informed Communication Humanitarian Foundation, an NGO dedicated to fostering change through strategic communication and advocacy. His commitment to climate change advocacy led him to establish Global African Perspectives (GAP), a platform that amplifies the voices of African climate activists and champions actionable solutions to environmental challenges.",
              "As a visionary entrepreneur, Kofa is also the non-tech co-founder of a tech start-up focused on AI, VR, and AR, where he combines technology with his expertise in storytelling to push boundaries in immersive content creation.",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-base lg:text-lg text-gray-700 leading-relaxed"
                custom={index}
                variants={textVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div className="md:col-span-4" variants={imageVariants}>
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={ProfileImage}
                className="w-full rounded-2xl shadow-lg"
                alt="Kofa Ibrahim"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 0.1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          ref={valuesSectionRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20"
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <motion.div className="md:col-span-5 flex flex-col justify-center" variants={titleVariants}>
            <motion.h2
              className="text-black text-4xl md:text-5xl font-bold uppercase relative inline-block"
              variants={titleVariants}
            >
              CORE VALUES
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-black"
                initial={{ width: 0 }}
                animate={valuesInView ? { width: "60%" } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.h2>
            <motion.h2
              className="text-[#939393] text-4xl md:text-5xl font-bold uppercase mt-2"
              variants={titleVariants}
            >
              AND MISSION
            </motion.h2>
          </motion.div>

          <motion.div className="md:col-span-7" variants={textVariants}>
            <motion.p
              className="text-base lg:text-lg text-gray-700 italic leading-relaxed"
              variants={textVariants}
              custom={0}
            >
              "Kofa is deeply committed to using storytelling as a tool for change, climate action, and leadership
              development. His mission is to amplify African narratives globally, empower communities through education
              and advocacy, and create lasting solutions for post-conflict and climate-related challenges."
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Global Vision Section */}
        <motion.div
          ref={visionSectionRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-24"
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <motion.div className="md:col-span-8 md:order-1 order-2" variants={textVariants}>
            <motion.p
              className="text-base lg:text-lg text-gray-700 italic leading-relaxed"
              variants={textVariants}
              custom={0}
            >
              "Kofa is deeply committed to using storytelling as a tool for change, climate action, and leadership
              development. His mission is to amplify African narratives globally, empower communities through education
              and advocacy, and create lasting solutions for post-conflict and climate-related challenges."
            </motion.p>
          </motion.div>

          <motion.div
            className="md:col-span-4 md:order-2 order-1 flex flex-col justify-center"
            variants={titleVariants}
          >
            <motion.h2
              className="text-black text-4xl md:text-5xl font-bold uppercase relative inline-block"
              variants={titleVariants}
            >
              Global
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-black"
                initial={{ width: 0 }}
                animate={visionInView ? { width: "60%" } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.h2>
            <motion.h2
              className="text-[#939393] text-4xl md:text-5xl font-bold uppercase mt-2"
              variants={titleVariants}
            >
              Vision
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          ref={imageSectionRef}
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-full md:w-10/12 overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={Aboutimg}
              className="w-full rounded-2xl shadow-xl h-64 md:h-96 object-cover"
              alt="Kofa Ibrahim"
              initial={{ scale: 1.1 }}
              animate={imageInView ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <Career_Milestone />
      <Contact />
      <Footer />
    </>
  )
}

export default About
