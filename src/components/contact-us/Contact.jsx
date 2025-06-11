"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Contactform from "./Contactform"
import "./contact.css"

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  }

  return (
    <motion.div
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-24 bg-white px-6 lg:px-36 relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full border border-gray-200 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-60 h-60 rounded-full border border-gray-100 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-black uppercase text-center mb-5 relative"
        variants={itemVariants}
      >
        LET'S DISCOVER <br /> TOGETHER
        <motion.span
          className="absolute -bottom-2 left-1/2 h-1 bg-black transform -translate-x-1/2"
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        />
      </motion.h2>

      <motion.p className="text-base md:text-lg max-w-md text-center mb-10 text-[#4B4B4B]" variants={itemVariants}>
        Have a project in mind, a question, or just want to connect? Reach out and let's discuss how we can bring ideas
        to life.
      </motion.p>

      {/* Button to trigger the modal */}
      <motion.button
        onClick={openModal}
        className="group relative overflow-hidden px-8 py-3 text-sm uppercase font-medium text-center text-white bg-black rounded-full
        items-center inline-flex focus:ring-0 focus:outline-none"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Button background animation */}
        <motion.div
          className="absolute inset-0 bg-gray-800"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Button text */}
        <span className="relative z-10">Contact Me</span>

        {/* Arrow animation */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 h-4 w-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ x: [0, 3, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </motion.svg>
      </motion.button>

      {/* Modal Component with AnimatePresence for enter/exit animations */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full mx-auto overflow-hidden"
            >
              <Contactform closeModal={closeModal} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Contact
