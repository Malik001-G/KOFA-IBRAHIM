"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { ArrowLeft, ArrowRight, BookOpen, Brain, FileText, Users, Globe } from "lucide-react"

// Import images - update paths as needed
import academiaHeroImage from "../../assets/images/New/26.jpg"
import researchImage1 from "../../assets/images/New/26.jpg"
import researchImage2 from "../../assets/images/New/26.jpg"
import researchImage3 from "../../assets/images/New/26.jpg"
const Academia = () => {
  const [activeResearchArea, setActiveResearchArea] = useState(0)
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Mouse cursor effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const researchAreas = [
    {
      id: "leadership",
      title: "Leadership Challenges in Africa",
      icon: <Users size={24} />,
      description:
        "Examining the root causes of leadership failures across African institutions and governments, with a focus on identifying patterns, systemic issues, and potential solutions that can transform governance across the continent.",
      image: researchImage1,
      stats: [
        { value: "12+", label: "Countries Studied" },
        { value: "35", label: "Research Papers" },
        { value: "8", label: "Policy Frameworks" },
      ],
      keyFindings: [
        "Institutional weaknesses contribute significantly to leadership failures",
        "Colonial legacies continue to shape governance structures",
        "Innovative leadership models emerging from grassroots movements",
      ],
      color: "rgb(245, 158, 11)", // Amber color for hover
    },
    {
      id: "mental-health",
      title: "Mental Health in Post-Conflict Settings",
      icon: <Brain size={24} />,
      description:
        "Investigating the psychological impacts of conflict on communities, with particular attention to trauma recovery, resilience building, and the development of culturally appropriate mental health interventions in resource-limited environments.",
      image: researchImage2,
      stats: [
        { value: "1,200+", label: "Participants" },
        { value: "18", label: "Research Sites" },
        { value: "6", label: "Treatment Protocols" },
      ],
      keyFindings: [
        "Community-based interventions show higher efficacy than individual approaches",
        "Cultural context significantly impacts treatment outcomes",
        "Intergenerational trauma requires specialized approaches",
      ],
      color: "rgb(16, 185, 129)", // Emerald color for hover
    },
    {
      id: "reconstruction",
      title: "Post-Conflict Reconstruction Strategies",
      icon: <Globe size={24} />,
      description:
        "Analyzing effective approaches to rebuilding societies after conflict, focusing on infrastructure development, social cohesion, economic revitalization, and governance restoration that leads to sustainable peace and development.",
      image: researchImage3,
      stats: [
        { value: "9", label: "Case Studies" },
        { value: "24", label: "Publications" },
        { value: "4", label: "Framework Models" },
      ],
      keyFindings: [
        "Economic recovery must precede political reconstruction",
        "Local ownership of reconstruction processes increases sustainability",
        "Digital technologies accelerate reconstruction timelines",
      ],
      color: "rgb(79, 70, 229)", // Indigo color for hover
    },
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Auto-rotate research areas every 8 seconds
    const interval = setInterval(() => {
      setActiveResearchArea((prev) => (prev + 1) % researchAreas.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY])

  return (
    <div ref={containerRef}>
      <Navbar />

      {/* Hero Section with Cinematic Parallax */}
      <motion.section
        ref={heroRef}
        className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-black text-white"
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: parallaxY, opacity }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="w-full h-[110%] bg-cover bg-center filter grayscale hover:grayscale-0 transition-all duration-1000"
            style={{
              backgroundImage: `url(${academiaHeroImage})`,
              filter: "brightness(0.4)",
            }}
          />
          {/* Cinematic letterbox effect */}
          <div className="absolute top-0 left-0 right-0 h-[5vh] bg-black z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[5vh] bg-black z-10"></div>
        </motion.div>

        <motion.div className="container mx-auto px-6 relative z-20 text-white" variants={staggerContainer}>
          <motion.div
            variants={fadeIn}
            className="inline-block mb-4 px-4 py-1 border border-white/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-sm font-medium tracking-wider">ACADEMIA & RESEARCH</span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="block">Transforming Knowledge</span>
            <span className="block text-white hover:text-yellow-400 transition-colors duration-500">into Impact</span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Rigorous research addressing critical challenges facing African societies, from leadership to post-conflict
            reconstruction.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#research-areas"
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-yellow-400 transition-all duration-500"
            >
              Explore Research Areas
            </a>
            <a
              href="#publications"
              className="px-8 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-500"
            >
              View Publications
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </motion.section>

      {/* Research Philosophy */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Research Philosophy</h2>
              <p className="text-lg text-gray-300 mb-6">
                The Academia & Research initiative bridges theory and practice, producing rigorous research that
                directly informs policy and drives positive change in communities across the continent.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Rather than research for its own sake, this work focuses on actionable insights that can be translated
                into real-world solutions for pressing challenges facing African societies.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <BookOpen size={18} className="group-hover:text-yellow-400 transition-colors duration-300" />
                  <span>Evidence-based</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <FileText size={18} className="group-hover:text-green-400 transition-colors duration-300" />
                  <span>Policy-oriented</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <Users size={18} className="group-hover:text-blue-400 transition-colors duration-300" />
                  <span>Community-focused</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-10 left-10 right-10 bottom-10 border border-white/20 rounded-xl z-20" />
              <div
                className="absolute inset-0 bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url(${academiaHeroImage})` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/80 backdrop-blur-sm p-8 rounded-xl max-w-xs transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-2 text-white">Research Impact</h3>
                  <p className="text-gray-300">
                    Research findings have influenced policy decisions in 7 African countries and contributed to
                    community development programs reaching over 50,000 people.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research-areas" className="py-24 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Research Focus Areas</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The research agenda focuses on three interconnected areas critical to Africa's development and future
              prosperity.
            </p>
          </motion.div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {researchAreas.map((area, index) => (
                <motion.button
                  key={area.id}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all ${
                    activeResearchArea === index ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveResearchArea(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {area.icon}
                  <span>{area.title}</span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeResearchArea}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-white">{researchAreas[activeResearchArea].title}</h3>
                  <p className="text-lg text-gray-300 mb-8">{researchAreas[activeResearchArea].description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {researchAreas[activeResearchArea].stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-white transition-all duration-300"
                      >
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-3 text-white">Key Findings</h4>
                    <ul className="space-y-2">
                      {researchAreas[activeResearchArea].keyFindings.map((finding, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1 min-w-[8px] h-2 w-2 rounded-full bg-white" />
                          <span className="text-gray-300">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/research/${researchAreas[activeResearchArea].id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300"
                  >
                    <span>View Research Details</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>

                <motion.div
                  className="relative h-[400px] rounded-2xl overflow-hidden group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={researchAreas[activeResearchArea].image || "/placeholder.svg"}
                    alt={researchAreas[activeResearchArea].title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Publications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Research findings are published in academic journals, policy briefs, and public-facing reports to maximize
              impact and accessibility.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              {
                title: "Reimagining Leadership in Post-Colonial African States",
                journal: "Journal of African Governance",
                year: "2023",
                type: "Academic Paper",
                link: "#",
              },
              {
                title: "Mental Health Interventions in Refugee Camps: A Comparative Analysis",
                journal: "International Journal of Humanitarian Studies",
                year: "2022",
                type: "Research Report",
                link: "#",
              },
              {
                title: "Digital Technologies in Post-Conflict Reconstruction",
                journal: "Development in Practice",
                year: "2023",
                type: "Policy Brief",
                link: "#",
              },
              {
                title: "Traditional Governance Systems and Modern State Structures",
                journal: "African Affairs",
                year: "2021",
                type: "Academic Paper",
                link: "#",
              },
              {
                title: "Community-Based Approaches to Trauma Healing",
                journal: "Journal of Peace Psychology",
                year: "2022",
                type: "Case Study",
                link: "#",
              },
              {
                title: "Economic Recovery Strategies After Civil Conflict",
                journal: "World Development",
                year: "2023",
                type: "Research Report",
                link: "#",
              },
            ].map((pub, index) => (
              <motion.a
                key={index}
                href={pub.link}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-white transition-all group"
                variants={scaleUp}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-700 text-white rounded-full">{pub.type}</span>
                  <span className="text-gray-400">{pub.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {pub.title}
                </h3>
                <p className="text-gray-400 mb-4">{pub.journal}</p>
                <div className="flex items-center text-white font-medium group-hover:text-yellow-400 transition-colors duration-300">
                  <span>Read publication</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="/publications"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>View All Publications</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold mb-4">Research Collaborations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partnerships with leading institutions across Africa and globally enhance research quality and impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-sm h-24 rounded-lg flex items-center justify-center group hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="text-xl font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                  Partner {i}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Research */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-900 rounded-3xl p-12 border border-gray-700 hover:border-white transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-white">Interested in Research Collaboration?</h2>
                <p className="text-lg text-gray-300 mb-6">
                  The Academia & Research initiative welcomes collaboration opportunities with researchers,
                  institutions, and organizations working on similar issues.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-500"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-white">Research Areas Open for Collaboration</h3>
                  <ul className="space-y-3">
                    {[
                      "Leadership development in public institutions",
                      "Trauma-informed approaches to community healing",
                      "Technology in post-conflict reconstruction",
                      "Indigenous knowledge systems in governance",
                      "Mental health policy development",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 group">
                        <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-white group-hover:bg-yellow-400 transition-colors duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Initiatives */}
      <div className="container mx-auto max-w-6xl px-6 py-12 bg-black text-white">
        <Link
          to="/initiatives"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          <ArrowLeft size={18} />
          <span>Back to All Initiatives</span>
        </Link>
      </div>

      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-white pointer-events-none mix-blend-difference z-50 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <Footer />
    </div>
  )
}

export default Academia
