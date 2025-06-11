"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import arrow from "../../assets/images/social-arrow.png"
import "./footer.css"

export default function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: false, amount: 0.3 })

  // Social media links data
  const socialLinks = [
    {
      name: "Twitter",
      icon: <FaTwitter className="text-lg" />,
      url: "https://twitter.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-lg" />,
      url: "https://www.linkedin.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-lg" />,
      url: "https://www.instagram.com",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF className="text-lg" />,
      url: "https://www.facebook.com",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  }

  return (
    <motion.footer
      ref={footerRef}
      className="bg-white px-6 md:px-10 lg:px-36 py-12 md:py-16 border-t border-gray-100"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Logo and info section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h2
              className="uppercase text-2xl md:text-3xl text-black  font-bold relative inline-block"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Kofa Ibrahim
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-black"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.h2>
            <motion.p className="text-gray-600 max-w-md" variants={itemVariants}>
              Documentary Filmmaker, Leadership Expert, and Climate Advocate dedicated to telling impactful stories and
              driving positive change.
            </motion.p>
          </motion.div>

          {/* Social links section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3 className="text-lg font-semibold mb-4" variants={itemVariants}>
              Connect With Me
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 border-b border-gray-300 pb-1 transition-all duration-300 hover:border-black"
                    aria-label={`Visit ${social.name}`}
                  >
                    <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
                      {social.icon}
                    </span>
                    <span className="font-medium text-sm md:text-base">{social.name}</span>
                    <motion.img
                      src={arrow}
                      alt=""
                      className="w-3 h-3 flex-shrink-0"
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 1.5,
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section with copyright */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>© {new Date().getFullYear()} Kofa Ibrahim. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-black transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-black transition-colors duration-300">
              Terms of Use
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
