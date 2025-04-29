"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import arrow from "../../assets/images/schedule_arrow.svg"
import hero from "../../assets/images/newimg1.jpg"
import "./hero.css"
import Contactform from "../../components/contact-us/Contactform"

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section className="bg-white pb-3">
        <div className="container mx-auto px-6 md:px-10 lg:px-36">
          <div className="py-8 mx-auto max-w-screen-lg lg:py-16 text-center">
            <motion.h1
              className="mb-6 text-6xl md:text-8xl font-black animated-text tracking-tight leading-none lg:text-9xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="name-wrapper">
                <span className="name-part">KOFA</span> <span className="name-part">IBRAHIM</span>
              </span>
            </motion.h1>
            <div className="md:flex justify-between items-center">
              <motion.div
                className="md:w-7/12 mb-5 md:mb-0 text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <p className="leading-8 text-md md:text-xl">
                  A visionary Documentary Filmmaker, Leadership and Strategy Expert, and passionate Climate Advocate.
                </p>
              </motion.div>
              <motion.div
                className="md:w-5/12 text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <motion.button
                  type="button"
                  onClick={openModal}
                  className="px-5 py-3 text-sm capitalize font-medium text-center text-white bg-[#1E1E1E] rounded-full
                  hover:bg-black items-center transition-all hover:ease-in-out 
                  inline-flex hover:scale-105 duration-700 focus:ring-0 
                  focus:outline-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  schedule a meeting
                  <motion.img
                    src={arrow}
                    className="ml-2 w-3 pt-1"
                    alt=""
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <motion.img
            src={hero}
            alt="Kofa Ibrahim"
            className="h-96 object-cover md:shadow-md w-full"
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Modal Component with AnimatePresence for enter/exit animations */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="modal-wrapper"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Contactform closeModal={closeModal} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}

export default Hero
