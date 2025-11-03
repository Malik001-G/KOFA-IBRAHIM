"use client"

import { useRef, useState, useEffect } from "react"
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
} from "lucide-react"
import mmaImage from "../../assets/images/New/u.jpg"
import leadershipImage from "../../assets/images/leadership.jfif"
import InitiativeDetail from "./initiative-detail"

// MMA data
const initiative = {
  id: "mma",
  name: "Master Methods & Advisors",
  path: "/initiatives/mma",
  bg: mmaImage,
  shortDesc: "Leadership and strategy expertise for organizations and individuals seeking transformative growth.",
  description:
    "Master Methods & Advisors provides comprehensive leadership and strategy consulting services to organizations and individuals across Africa. With a focus on transformative growth, we help clients navigate complex challenges, develop robust strategies, and build leadership capacity that drives sustainable success.",
  number: "01",
  cta: "Explore Leadership Solutions",
  category: "leadership",
  featured: true,
  services: [
    "Executive Leadership Coaching",
    "Organizational Strategy Development",
    "Change Management Consulting",
    "Leadership Training Programs",
    "Strategic Planning Workshops",
  ],
}

// Custom Hero Component
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
          backgroundPosition: "center 15%", // Subtle crop for balance
        }}
      />
    </motion.div>

    {/* Animated patterns - reduced count & size */}
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

    {/* Content Container - Compact & balanced */}
    <div className="relative z-20 w-full px-6 md:px-10 lg:px-36">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl" // Reduced from max-w-3xl
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block mb-4 px-4 py-1.5 border border-white/25 rounded-full backdrop-blur-sm overflow-hidden"
          >
            <span className="text-xs font-medium tracking-widest text-white uppercase">
              Leadership & Strategy
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
            animate={{ width: "80%" }} // Shorter line
            transition={{ duration: 1.2, delay: 0.9 }}
          />

          <motion.p
            className="text-sm md:text-base text-gray-200 mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Transforming leadership potential into exceptional performance across Africa.
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
              <span>Explore Services</span>
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

    {/* Scroll indicator - Smaller & subtler */}
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

// Custom Content Component
const MMAContent = () => {
  const approachRef = useRef(null)
  const isApproachInView = useInView(approachRef, { once: true, amount: 0.3 })

  const servicesRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 })

  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 })

  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [hoveredService, setHoveredService] = useState(null)

  // Mouse cursor effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Leadership approach cards
  const approaches = [
    {
      title: "Authentic Leadership",
      icon: Users,
      description:
        "Developing leaders who lead with integrity, self-awareness, and genuine connection to their teams and mission.",
      color: "rgb(245, 158, 11)", // Amber
      keyPoints: [
        "Self-awareness development",
        "Values-based decision making",
        "Emotional intelligence training",
        "Transparent communication",
      ],
    },
    {
      title: "Strategic Vision",
      icon: Target,
      description:
        "Crafting clear, compelling visions that align organizational capabilities with market opportunities.",
      color: "rgb(16, 185, 129)", // Emerald
      keyPoints: [
        "Future-focused planning",
        "Stakeholder alignment",
        "Opportunity identification",
        "Resource optimization",
      ],
    },
    {
      title: "Adaptive Capacity",
      icon: TrendingUp,
      description:
        "Building resilient leadership that thrives in uncertainty and navigates complex challenges effectively.",
      color: "rgb(79, 70, 229)", // Indigo
      keyPoints: [
        "Change management expertise",
        "Crisis leadership training",
        "Agile methodology adoption",
        "Scenario planning",
      ],
    },
    {
      title: "Transformative Impact",
      icon: Zap,
      description:
        "Creating lasting change that extends beyond immediate results to transform organizations and communities.",
      color: "rgb(220, 38, 38)", // Red
      keyPoints: [
        "Sustainable development focus",
        "Organizational culture change",
        "Leadership pipeline building",
        "Community engagement",
      ],
    },
  ]

  // Services
  const services = [
    {
      title: "Executive Coaching",
      icon: Briefcase,
      description:
        "Personalized coaching for senior leaders to enhance self-awareness, decision-making, and strategic thinking capabilities.",
      color: "rgb(245, 158, 11)", // Amber
      features: [
        "One-on-one coaching sessions",
        "360° leadership assessments",
        "Personalized development plans",
        "Ongoing performance support",
      ],
    },
    {
      title: "Strategic Planning",
      icon: BarChart,
      description:
        "Comprehensive strategy development that aligns organizational vision with actionable roadmaps for sustainable growth.",
      color: "rgb(16, 185, 129)", // Emerald
      features: [
        "Market analysis and positioning",
        "Vision and mission refinement",
        "Strategic objective setting",
        "Implementation roadmapping",
      ],
    },
    {
      title: "Leadership Programs",
      icon: Users,
      description:
        "Transformative training programs that develop leadership capabilities at all organizational levels.",
      color: "rgb(79, 70, 229)", // Indigo
      features: [
        "Emerging leaders development",
        "Executive team alignment",
        "Leadership competency building",
        "Succession planning",
      ],
    },
    {
      title: "Change Management",
      icon: Globe,
      description:
        "Guiding organizations through transitions with strategies that minimize disruption and maximize adoption.",
      color: "rgb(220, 38, 38)", // Red
      features: [
        "Change readiness assessment",
        "Stakeholder engagement planning",
        "Communication strategy development",
        "Resistance management",
      ],
    },
  ]

  // Case studies
  const caseStudies = [
    {
      title: "National Healthcare System Transformation",
      challenge: "A national healthcare provider faced declining performance metrics and employee engagement.",
      approach:
        "Implemented a comprehensive leadership development program for 120 executives and middle managers, coupled with organizational restructuring.",
      results:
        "42% improvement in patient satisfaction scores, 28% reduction in staff turnover, and successful implementation of digital health initiatives.",
      image: mmaImage,
      metrics: [
        { value: "42%", label: "Improved Satisfaction" },
        { value: "28%", label: "Reduced Turnover" },
        { value: "120", label: "Leaders Trained" },
      ],
    },
    {
      title: "Tech Startup Scale-up Strategy",
      challenge:
        "A promising fintech startup struggled with scaling operations while maintaining its innovative culture.",
      approach:
        "Developed a strategic growth roadmap, leadership coaching for the founding team, and implementation of agile management practices.",
      results:
        "Successful expansion to three new markets, 300% revenue growth over 18 months, and secured Series B funding of $12M.",
      image: mmaImage,
      metrics: [
        { value: "300%", label: "Revenue Growth" },
        { value: "$12M", label: "Funding Secured" },
        { value: "3", label: "New Markets" },
      ],
    },
  ]

  // Testimonials
  const testimonials = [
    {
      quote:
        "The leadership program delivered by Master Methods & Advisors transformed how I approach my role as CEO. The insights were practical, the coaching was personalized, and the results have been remarkable for both myself and my organization.",
      author: "Amina Okafor",
      position: "CEO, TechInnovate Africa",
      initials: "AO",
      color: "rgb(245, 158, 11)", // Amber
    },
    {
      quote:
        "The strategic planning facilitation provided clarity and direction during a critical growth phase. The MMA team's ability to understand our unique challenges and opportunities was impressive.",
      author: "David Mensah",
      position: "Director, Pan-African Health Initiative",
      initials: "DM",
      color: "rgb(16, 185, 129)", // Emerald
    },
    {
      quote:
        "Working with MMA has been transformative for our leadership team. Their approach combines global best practices with deep understanding of African contexts, creating solutions that truly work for our organization.",
      author: "Sarah Nkosi",
      position: "HR Director, Continental Bank",
      initials: "SN",
      color: "rgb(79, 70, 229)", // Indigo
    },
  ]

  // Stats
  const stats = [
    { value: "250+", label: "Organizations Served", icon: Briefcase },
    { value: "1,200+", label: "Leaders Developed", icon: Users },
    { value: "18", label: "African Countries", icon: Globe },
    { value: "92%", label: "Client Satisfaction", icon: Star },
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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

  // Global map to track which counters have completed animation
  const completedCounters = new Map()

  // Counter animation for stats
  const CounterAnimation = ({ value, isInView }) => {
    const [count, setCount] = useState("0")
    const hasAnimated = useRef(false)

    useEffect(() => {
      // Only run the animation once when the element comes into view
      // and if it hasn't been animated before
      if (!isInView || hasAnimated.current) return

      // Extract numeric part and any non-numeric suffix
      const numericValue = Number.parseInt(value.replace(/\D/g, "")) || 0
      const suffix = value.replace(/\d+/g, "")

      // Mark that we've started the animation
      hasAnimated.current = true

      const start = 0
      const duration = 2000
      const startTime = performance.now()

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)

        // Calculate current count value with easing
        const easedProgress = progress * (2 - progress) // Ease out quad
        const currentCount = Math.floor(easedProgress * numericValue)

        // Update state with current count + any suffix
        setCount(`${currentCount}${suffix}`)

        // Continue animation until complete
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          // Ensure we end with the exact target value
          setCount(value)
        }
      }

      // Start the animation
      requestAnimationFrame(animate)
    }, [isInView, value])

    return <span>{count}</span>
  }

  return (
    <div>
      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-base leading-relaxed mb-8">
          Master Methods & Advisors (MMA) stands at the forefront of leadership development and strategic consulting
          across Africa. The initiative is built on the understanding that effective leadership is the cornerstone of
          organizational success and societal progress. Through tailored approaches that combine global best practices
          with contextual understanding, MMA transforms how leaders think, act, and inspire.
        </p>

        {/* Mission Statement */}
        <div className="highlight-box bg-gray-50 border-gray-400 hover:border-black  rounded-l-xl transition-all duration-500 ease-linear">
          <h3 className="hover:text-yellow-600 transition-colors duration-300 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              <Target size={16} />
            </span>
            The Mission
          </h3>
          <p>
            To cultivate a new generation of African leaders equipped with the mindset, skills, and strategies needed to
            drive sustainable growth and meaningful impact in their organizations and communities.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      {/* <motion.div
        ref={statsRef}
        className="mt-16 py-12 px-8 bg-gray-50 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 group-hover:bg-black transition-all duration-300">
                  <Icon size={24} className="text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold mb-1 group-hover:text-yellow-600 transition-colors duration-300">
                  <CounterAnimation value={stat.value} isInView={isStatsInView} />
                </div>
                <div className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div> */}

      {/* Leadership Approach */}
      <motion.div
        id="approach"
        ref={approachRef}
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={isApproachInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isApproachInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-1 bg-black"></div>
          <h2 className="text-3xl font-bold">Our Leadership Approach</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <motion.div
                key={approach.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-gray-400 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                  style={{
                    backgroundColor: `${approach.color}10`,
                  }}
                >
                  <Icon
                    size={32}
                    className="text-gray-700 group-hover:text-black transition-colors duration-300"
                    style={{
                      "--hover-color": approach.color,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = approach.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(55, 65, 81)")}
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-3 group-hover:text-black transition-colors duration-300"
                  style={{
                    "--hover-color": approach.color,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = approach.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                >
                  {approach.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 mb-6">
                  {approach.description}
                </p>
                <ul className="space-y-2">
                  {approach.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div
                        className="mt-1 min-w-[16px] h-4 w-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${approach.color}20` }}
                      >
                        <Check size={10} style={{ color: approach.color }} />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Services */}
      <motion.div
        id="services"
        ref={servicesRef}
        className="mt-24"
        initial={{ opacity: 0 }}
        animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isServicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-1 bg-black"></div>
          <h2 className="text-3xl font-bold">Our Services</h2>
        </motion.div>

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
                {/* Background gradient that appears on hover */}
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

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 text-gray-700 font-medium group-hover:text-black transition-colors duration-300"
                  >
                    Learn more
                    <ArrowUpRight
                      size={16}
                      className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Case Studies */}
      <div className="mt-24">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-1 bg-black"></div>
          <h2 className="text-3xl font-bold">Impact Stories</h2>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-gray-400 transition-all duration-300">
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 mb-6">
                    Case Study {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 hover:text-yellow-600 transition-colors duration-300">
                    {study.title}
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Challenge</h4>
                      <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Approach</h4>
                      <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{study.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Results</h4>
                      <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{study.results}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                      >
                        <div className="text-2xl font-bold text-black">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* <a
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-2 text-black font-medium hover:text-gray-700 transition-colors duration-300 group"
                  >
                    Read full case study{" "}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a> */}
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden group">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-24 bg-gray-50 p-12 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <Quote size={300} className="absolute -top-20 -left-20 text-black" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-1 bg-black"></div>
            <h2 className="text-3xl font-bold">Client Testimonials</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: testimonials[activeTestimonial].color }}
                >
                  {testimonials[activeTestimonial].initials}
                </div>
                <p className="text-xl italic text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="font-bold text-lg mb-1">{testimonials[activeTestimonial].author}</div>
                <div className="text-gray-600">{testimonials[activeTestimonial].position}</div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? "bg-black w-8" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-24 relative">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center filter grayscale hover:grayscale-0 transition-all duration-1000"
            style={{
              backgroundImage: `url(${leadershipImage || "/placeholder.svg?key=yd7jr"})`,
              opacity: 0.2,
            }}
          />
        </div>

        <div className="relative z-10 bg-black/80 p-12 rounded-2xl text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold mb-6">Ready to Transform Your Leadership?</h2>
            <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step toward developing the leadership capabilities that will drive sustainable success for
              your organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center text-sm gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-yellow-400 transition-all duration-300 group"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            
            </div>
          </div>
        </div>
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
    </div>
  )
}

const MMAPage = () => {
  return <InitiativeDetail initiative={initiative} heroComponent={MMAHero} contentComponent={MMAContent} />
}

export default MMAPage
