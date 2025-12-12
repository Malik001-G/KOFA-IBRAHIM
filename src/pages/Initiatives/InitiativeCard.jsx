"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const InitiativeCard = ({ initiative, isFeatured, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const handleClick = () => navigate(initiative.path)

  if (isFeatured) {
    return (
      <motion.div
        className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 h-full"
        initial={{ opacity: 0, rotateY: 15 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}
      >
        <div className="relative h-[420px] sm:h-[480px] md:h-[520px] w-full">
          {/* Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${initiative.bg})` }}
            animate={{ scale: isHovered && !isMobile ? 1.1 : 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Badge */}
          {/* <div className="absolute top-6 left-6 bg-white/25 backdrop-blur px-4 py-2 rounded-full border border-white/40">
            <span className="text-xl font-bold text-white">{initiative.number}</span>
          </div> */}

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
            <div className="max-w-lg">
              <motion.h3
                className="text-white text-3xl md:text-4xl font-black mb-4 tracking-tight drop-shadow-2xl"
                animate={{ y: isHovered ? -6 : 0 }}
              >
                {initiative.name}
                <motion.div
                  className="h-1 bg-white/80 mt-3 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered || isMobile ? 1 : 0.2 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.h3>

              <motion.p
                className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 line-clamp-3"
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }}
              >
                {isMobile ? initiative.shortDesc : initiative.description}
              </motion.p>

              {/* Services preview */}
              {!isMobile && (
                <motion.div
                  className="flex flex-wrap gap-3 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0.7 }}
                >
                  {initiative.services.slice(0, 3).map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs text-white backdrop-blur">
                      {s}
                    </span>
                  ))}
                </motion.div>
              )}

              <motion.button
                className="px-8 text-sm py-3 bg-white text-black font-bold rounded-full shadow-xl"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
              >
                {initiative.cta} 
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Regular Card (slightly taller for balance)
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl cursor-pointer shadow-lg h-full bg-white/5 backdrop-blur border border-gray-200/50"
      whileHover={{ y: -8, shadow: "0 15px 30px rgba(0,0,0,0.15)" }}
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-[380px]">
        <motion.div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${initiative.bg})` }}
          animate={{ filter: isHovered ? "grayscale(0%)" : "grayscale(60%)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-0 p-6 w-full">
          <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">{initiative.name}</h3>
          <p className="text-gray-200 text-sm mb-4 line-clamp-2">{initiative.shortDesc}</p>
          <button className="text-white text-sm underline underline-offset-4">
            {initiative.cta} →
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default InitiativeCard