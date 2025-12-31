"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Users,
  BarChart,
  Briefcase,
  ArrowRight,
  Globe,
  Target,
  TrendingUp,
  Zap,
  Star,
  Check,
  ArrowUpRight,
  Quote,
  ArrowLeft,
  Shield,
  MessageSquare,
  Lightbulb,
} from "lucide-react"

import mmaImage from "../../assets/images/New/2.jpg"
import leadershipImage from "../../assets/images/leadership.jfif"
import InitiativeDetail from "./initiative-detail"
import Contactform from "../../components/contact-us/Contactform"
import "../../components/contact-us/contact.css"

// ==================================================================
// 1. MODAL STATE (shared)
// ==================================================================
const useContactModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return { isModalOpen, openModal, closeModal }
}

// ==================================================================
// 2. MAIN PAGE
// ==================================================================
const MMAPage = () => {
  const { isModalOpen, openModal, closeModal } = useContactModal()

  const MMAContentWithModal = () => <MMAContent openModal={openModal} />

  return (
    <>
      <InitiativeDetail
        initiative={initiative}
        heroComponent={MMAHero}
        contentComponent={MMAContentWithModal}
      />

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full mx-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Contactform closeModal={closeModal} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ==================================================================
// 3. HERO (unchanged)
// ==================================================================
const MMAHero = () => {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = heroRef.current
      if (!hero) return
      const { left, top, width, height } = hero.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      setMousePosition({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={heroRef}
      className="relative min-h-[70vh] md:min-h-[85vh] w-full overflow-hidden flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg) scale(1.05)`,
        }}
        transition={{ type: "spring", damping: 15 }}
      >
        <div
          className="w-full h-full bg-cover bg-center filter grayscale hover:grayscale-0 transition-all duration-1000"
          style={{
            backgroundImage: `url(${mmaImage})`,
            filter: "brightness(0.28)",
            backgroundPosition: "center 15%",
          }}
        />
      </motion.div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-5 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 200 + 80,
                height: Math.random() * 200 + 80,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.04,
              }}
              animate={{
                y: [0, Math.random() * 60 - 30],
                x: [0, Math.random() * 60 - 30],
              }}
              transition={{
                duration: Math.random() * 25 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full px-6 md:px-10 lg:px-36">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block mb-4 px-4 py-1.5 border border-white/25 rounded-full backdrop-blur-sm"
            >
              <span className="text-xs font-medium tracking-widest text-white uppercase">
                Strategy & Advisory
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-1 leading-snug"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="block">Master Methods</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 hover:text-yellow-300 transition-colors duration-500 leading-snug"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <span className="block">&amp; Advisors</span>
              </motion.h1>
            </div>

            <motion.div
              className="h-px bg-white/35 w-0 mb-6"
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 1.2, delay: 0.9 }}
            />

            <motion.p
              className="text-sm md:text-base text-gray-200 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Making sense of complex realities through evidence, research, and strategic communication.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <a
                href="#services"
                className="group px-7 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-yellow-400 transition-all duration-500 flex items-center gap-2.5 shadow-xl"
              >
                <span>What We Do</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </a>
              <a
                href="#approach"
                className="px-7 py-3 border border-white text-white text-sm font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
              >
                Our Approach
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="w-8 h-12 border border-white/60 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2.5 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// ==================================================================
// 4. CONTENT (refined based on owner's info)
// ==================================================================
const MMAContent = ({ openModal }) => {
  const approachRef = useRef(null)
  const isApproachInView = useInView(approachRef, { once: true, amount: 0.3 })

  const servicesRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 })

  const [hoveredService, setHoveredService] = useState(null)

  // Mouse cursor
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 700 })
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 700 })

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [cursorX, cursorY])

  // ================== DATA ==================
  const coreIdea = {
    statement: "Good decisions fail when leaders misunderstand people, context, and behavior.",
    description: "The firm translates deep field insight, research, and cultural intelligence into clear strategic direction for decision-makers operating in fragile, post-conflict, and rapidly changing environments."
  }

  const services = [
    {
      title: "Leadership & Strategy Frameworks",
      icon: Target,
      description: "Design comprehensive frameworks for navigating complex and fragile environments with clarity and confidence.",
      color: "rgb(245, 158, 11)",
      features: [
        "Context-specific strategy development",
        "Leadership decision-making models",
        "Organizational adaptability frameworks",
        "Risk assessment and mitigation"
      ],
    },
    {
      title: "Post-Conflict Support",
      icon: Shield,
      description: "Support reconstruction, rehabilitation, and reintegration efforts in post-conflict settings.",
      color: "rgb(16, 185, 129)",
      features: [
        "Reconstruction planning",
        "Community rehabilitation programs",
        "Reintegration strategies",
        "Peacebuilding initiatives"
      ],
    },
    {
      title: "Strategic Communication",
      icon: MessageSquare,
      description: "Develop evidence-based communication and narrative strategies that drive understanding and action.",
      color: "rgb(79, 70, 229)",
      features: [
        "Narrative strategy development",
        "Stakeholder engagement plans",
        "Crisis communication",
        "Public affairs advisory"
      ],
    },
    {
      title: "Policy & Institutional Reform",
      icon: BarChart,
      description: "Advise on policy development, institutional reform, and social behavior change initiatives.",
      color: "rgb(220, 38, 38)",
      features: [
        "Policy analysis and design",
        "Institutional capacity building",
        "Social behavior change programs",
        "Governance reform support"
      ],
    },
    {
      title: "Leadership Training",
      icon: Users,
      description: "Train leaders and teams on effective decision-making in high-risk and high-uncertainty contexts.",
      color: "rgb(236, 72, 153)",
      features: [
        "Executive decision-making training",
        "Crisis leadership development",
        "Team resilience building",
        "Adaptive leadership programs"
      ],
    },
  ]

  const approaches = [
    {
      title: "Evidence-Based",
      icon: BarChart,
      description: "Every recommendation is grounded in rigorous research, field data, and contextual analysis.",
      color: "rgb(245, 158, 11)",
    },
    {
      title: "Context-Aware",
      icon: Globe,
      description: "Deep understanding of local realities, cultural dynamics, and social complexities.",
      color: "rgb(16, 185, 129)",
    },
    {
      title: "Action-Oriented",
      icon: Zap,
      description: "Translating insights into clear, implementable strategies for decision-makers.",
      color: "rgb(79, 70, 229)",
    },
    {
      title: "Field-Tested",
      icon: Target,
      description: "Solutions refined through real-world application in fragile and complex environments.",
      color: "rgb(220, 38, 38)",
    },
  ]

  // ================== RENDER ==================
  return (
    <div>
      {/* Intro */}
      <div className="prose prose-lg max-w-none">
        <p className="text-base leading-relaxed mb-8">
          Master Methods & Advisors is a strategy and advisory firm that helps institutions, governments, and organizations make sense of complex social, leadership, and post-conflict realities using evidence, research, and strategic communication.
        </p>

        <div className="highlight-box bg-gradient-to-r from-gray-50 to-gray-100 border-gray-400 hover:border-black rounded-xl transition-all duration-500 ease-linear p-8 my-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 mt-1">
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 hover:text-yellow-600 transition-colors duration-300">
                Built Around One Idea
              </h3>
              <p className="text-lg font-semibold text-gray-900 mb-3 italic">
                "{coreIdea.statement}"
              </p>
              <p className="text-gray-700 leading-relaxed">
                {coreIdea.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <motion.div id="approach" ref={approachRef} className="mt-20">
        <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0, x: -20 }} animate={isApproachInView ? { opacity: 1, x: 0 } : {}}>
          <div className="w-12 h-1 bg-black" />
          <h2 className="text-3xl font-bold">Our Approach</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <motion.div
                key={approach.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-gray-400 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                  style={{
                    backgroundColor: `${approach.color}10`,
                  }}
                >
                  <Icon
                    size={28}
                    className="text-gray-700 group-hover:text-black transition-colors duration-300"
                    style={{
                      "--hover-color": approach.color,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = approach.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(55, 65, 81)")}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-2 group-hover:text-black transition-colors duration-300"
                  style={{
                    "--hover-color": approach.color,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = approach.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                >
                  {approach.title}
                </h3>
                <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {approach.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Services */}
      <motion.div id="services" ref={servicesRef} className="mt-24">
        <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0, x: -20 }} animate={isServicesInView ? { opacity: 1, x: 0 } : {}}>
          <div className="w-12 h-1 bg-black" />
          <h2 className="text-3xl font-bold">What We Do</h2>
        </motion.div>

        <p className="text-gray-700 mb-12 max-w-3xl">
          Master Methods & Advisors works with clients across institutions, governments, and organizations to:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredService === index

            return (
              <motion.div
                key={service.title}
                className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-gray-400 transition-all duration-300 group relative overflow-hidden ${isHovered ? "z-10" : "z-0"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color} 0%, transparent 70%)`,
                  }}
                />

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                  style={{
                    backgroundColor: `${service.color}10`,
                  }}
                >
                  <Icon
                    size={32}
                    className="text-gray-700 group-hover:text-black transition-colors duration-300"
                    style={{
                      "--hover-color": service.color,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = service.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(55, 65, 81)")}
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-3 group-hover:text-black transition-colors duration-300"
                  style={{
                    "--hover-color": service.color,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = service.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                >
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 mb-6">
                  {service.description}
                </p>

                <AnimatePresence>
                  {isHovered && (
                    <motion.ul
                      className="space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <div
                            className="mt-1 min-w-[16px] h-4 w-4 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${service.color}20` }}
                          >
                            <Check size={10} style={{ color: service.color }} />
                          </div>
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* CALL TO ACTION */}
      <div className="mt-24 relative">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center filter grayscale hover:grayscale-0 transition-all duration-1000"
            style={{
              backgroundImage: `url(${leadershipImage})`,
              opacity: 0.2,
            }}
          />
        </div>

        <div className="relative z-10 bg-black/80 p-12 rounded-2xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with Master Methods & Advisors to navigate complexity with evidence, insight, and strategic clarity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={openModal}
                className="inline-flex items-center text-sm gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-yellow-400 transition-all duration-300 group"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Link
          to="/initiatives"
          className="inline-flex items-center text-sm gap-2 px-6 py-3 border border-gray-600 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300"
        >
          <ArrowLeft size={18} />
          <span>Back to All Initiatives</span>
        </Link>
      </div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-white pointer-events-none mix-blend-difference z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  )
}

// ==================================================================
// 5. INITIATIVE DATA
// ==================================================================
const initiative = {
  id: "mma",
  name: "Master Methods & Advisors",
  path: "/initiatives/mma",
  bg: mmaImage,
  shortDesc: "Strategy and advisory for complex social, leadership, and post-conflict realities.",
  description:
    "Master Methods & Advisors is a strategy and advisory firm that helps institutions, governments, and organizations make sense of complex social, leadership, and post-conflict realities using evidence, research, and strategic communication.",
  number: "01",
  cta: "Learn More",
  category: "leadership",
  featured: true,
  services: [
    "Leadership & Strategy Frameworks",
    "Post-Conflict Support",
    "Strategic Communication",
    "Policy & Institutional Reform",
    "Leadership Training",
  ],
}

// ==================================================================
// 6. EXPORT
// ==================================================================
export default MMAPage