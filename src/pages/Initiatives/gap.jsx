"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import {
  Camera,
  Globe,
  Users,
  Building,
  Leaf,
  BarChart3,
  ArrowLeft,
  Play,
  ChevronDown,
  MapPin,
  Calendar,
  Zap,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Import images - you can replace these with your actual Niger project images
import gapHeroImage from "../../assets/images/leadership.jfif"

const GAP = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [selectedFloodCategory, setSelectedFloodCategory] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // Mouse cursor effects
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Gallery images - replace with your actual Niger project images
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      caption: "Flood-damaged homes in Niger State communities",
      location: "Minna, Niger State",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      caption: "Displaced families seeking shelter",
      location: "Bida, Niger State",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      caption: "Agricultural lands submerged by floodwaters",
      location: "Kontagora, Niger State",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      caption: "Infrastructure damage - roads and bridges",
      location: "Suleja, Niger State",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      caption: "Community rescue and relief efforts",
      location: "Various locations",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      caption: "Communities beginning recovery efforts",
      location: "Niger State",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      caption: "Children affected by the floods",
      location: "Niger State",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      caption: "Livestock losses due to flooding",
      location: "Rural Niger State",
    },
  ]

  // Flood impact data with calmer colors
  const floodImpactData = [
    {
      category: "Human Impact",
      icon: Users,
      color: "#64748B",
      bgColor: "bg-slate-100",
      borderColor: "border-slate-300",
      stats: [
        { label: "Households Affected", value: "6,300", icon: "🏠" },
        { label: "People Displaced", value: "35,042", icon: "👥" },
        { label: "Males Affected", value: "16,090", icon: "👨" },
        { label: "Females Affected", value: "18,952", icon: "👩" },
        { label: "Lives Lost", value: "10", icon: "💔" },
      ],
      totalCost: "6,124,500,000",
      description:
        "The human toll of the floods was devastating, displacing thousands and affecting entire communities.",
    },
    {
      category: "Livelihood Impact",
      icon: Leaf,
      color: "#059669",
      bgColor: "bg-emerald-100",
      borderColor: "border-emerald-300",
      stats: [
        { label: "Farmers Affected", value: "37,066", icon: "👨‍🌾" },
        { label: "Hectares Destroyed", value: "118,692", icon: "🌾" },
        { label: "Livestock Lost", value: "12,071", icon: "🐄" },
      ],
      totalCost: "35,656,546,734",
      description: "Agricultural livelihoods were severely impacted, threatening food security for the region.",
    },
    {
      category: "Infrastructure Damage",
      icon: Building,
      color: "#DC2626",
      bgColor: "bg-red-100",
      borderColor: "border-red-300",
      stats: [
        { label: "Schools Affected", value: "246", icon: "🏫" },
        { label: "Roads Destroyed (km)", value: "308", icon: "🛣️" },
        { label: "Roads Partially Damaged (km)", value: "250", icon: "⚠️" },
        { label: "Bridges Lost", value: "15", icon: "🌉" },
        { label: "Medical Facilities", value: "9", icon: "🏥" },
      ],
      totalCost: "54,545,000,000",
      description: "Critical infrastructure was devastated, cutting off communities and disrupting essential services.",
    },
    {
      category: "Economic Impact",
      icon: BarChart3,
      color: "#D97706",
      bgColor: "bg-amber-100",
      borderColor: "border-amber-300",
      stats: [
        { label: "Markets Affected", value: "21", icon: "🏪" },
        { label: "Shops Destroyed", value: "680", icon: "🏬" },
        { label: "Traders Affected", value: "258", icon: "👨‍💼" },
        { label: "MSMEs Affected", value: "62", icon: "🏢" },
        { label: "Employees Affected", value: "320", icon: "👷" },
      ],
      totalCost: "1,607,530,000",
      description: "Local businesses and markets were devastated, affecting the economic backbone of communities.",
    },
  ]

  // Story sections for the narrative approach
  const storySections = [
    {
      title: "The Storm Arrives",
      subtitle: "September 2024 - Niger State",
      content:
        "In September 2024, devastating floods swept through Niger State, Nigeria, leaving widespread destruction in their wake. What started as heavy rains quickly became a catastrophe that would reshape entire communities.",
      image: "/placeholder.svg?height=600&width=800",
      stats: "35,042 people displaced",
    },
    {
      title: "Lives Disrupted",
      subtitle: "Human Stories Behind the Numbers",
      content:
        "Behind every statistic is a human story. Families lost their homes, children couldn't attend school, and entire communities were forced to start over. The floods didn't just destroy property - they disrupted dreams and futures.",
      image: "/placeholder.svg?height=600&width=800",
      stats: "6,300 households affected",
    },
    {
      title: "Livelihoods Lost",
      subtitle: "The Agricultural Heartland Underwater",
      content:
        "Niger State's farmers watched helplessly as floodwaters consumed their crops and livestock. Years of hard work disappeared overnight, threatening food security for the entire region.",
      image: "/placeholder.svg?height=600&width=800",
      stats: "118,692 hectares destroyed",
    },
    {
      title: "Infrastructure Collapse",
      subtitle: "Cutting the Lifelines",
      content:
        "Schools, roads, bridges, and hospitals - the infrastructure that connects communities and provides essential services - was severely damaged or completely destroyed, isolating communities when they needed help most.",
      image: "/placeholder.svg?height=600&width=800",
      stats: "308 km of roads destroyed",
    },
  ]

  // Gallery navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY])

  // Auto-rotate flood categories
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFloodCategory((prev) => (prev + 1) % floodImpactData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Prevent body scroll when gallery is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isGalleryOpen])

  return (
    <div className="bg-black overflow-hidden text-white" ref={containerRef}>
      <Navbar />

      {/* Hero Section with Calmer Design */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[500px] overflow-hidden flex items-center justify-center"
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
      >
        <motion.div className="absolute inset-0 z-0" style={{ y: parallaxY, opacity, scale }}>
          <div
            className="w-full min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${gapHeroImage})`,
              filter: "brightness(0.3) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-block mb-6 px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-xs font-medium tracking-wider">CLIMATE STORYTELLING & ADVOCACY</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <span className="block text-white">Global African               <span className=" text-slate-300 hover:text-white transition-colors duration-500">Perspectives</span>
</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-xl mb-8 text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Advocating for Africa through powerful storytelling
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              {/* <button
                onClick={() => setIsVideoPlaying(true)}
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-all duration-500 transform hover:scale-105"
              >
                <Play size={20} fill="black" />
                <span>Watch Our Story</span>
              </button> */}
              <a
                href="#niger-floods"
                className="px-5 py-3 text-sm border border-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105"
              >
                Niger Floods Documentation
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer"
            onClick={() => document.getElementById("mission").scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown size={32} className="text-white" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mission Section with Calmer Colors */}
      <section id="mission" className="py-24 px-6 md:px-10 lg:px-36 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Our Mission</h2>

              <div className="space-y-6 text-base text-gray-300 leading-relaxed">
                <p>
                  Global African Perspectives (GAP) is a storytelling and advocacy initiative dedicated to reshaping the
                  global narrative on Africa's climate realities. We harness the power of visual storytelling —
                  documentaries, photography, and immersive media — to spotlight the lived experiences, resilience, and
                  local innovations of African communities affected by climate change.
                </p>
                <p>
                  At GAP, we believe stories are not just for awareness — they are instruments of influence. Our work
                  amplifies voices often left unheard, challenges stereotypes, and mobilizes action across policy,
                  philanthropy, and civil society.
                </p>
              </div>

              <motion.div
                className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-3 text-white">Our Approach</h3>
                <p className="text-gray-300">
                  To use documentary storytelling as a form of advocacy, spotlighting African communities on the
                  frontlines of climate change, elevating local innovations, and influencing global policy and
                  perception.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Camera, label: "Visual Storytelling", color: "white" },
                  { icon: Globe, label: "Global Advocacy", color: "white" },
                  { icon: Users, label: "Community Voices", color: "white" },
                  { icon: Zap, label: "Policy Impact", color: "white" },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      className={`p-6 bg-${item.color}/30 rounded-xl text-${item.color}-800 relative overflow-hidden group hover:bg-${item.color}-200 transition-colors duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={32} className="mb-3" />
                      <h4 className="font-bold">{item.label}</h4>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Niger Floods Story Section */}
      <section id="niger-floods" className="py-24 px-6 md:px-10 lg:px-36 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Niger State Floods</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive documentation of the devastating September 2024 floods and the resilient communities
              working to rebuild their lives.
            </p>
          </motion.div>

          {/* Story Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {storySections.map((section, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === index ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.title}
              </motion.button>
            ))}
          </div>

          {/* Story Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{storySections[activeSection].title}</h3>
                  <p className="text-slate-400 font-medium">{storySections[activeSection].subtitle}</p>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">{storySections[activeSection].content}</p>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-red-900/30 border border-red-700/50 rounded-full">
                    <span className="text-red-300 font-bold">{storySections[activeSection].stats}</span>
                  </div>
                </div>
              </div>

              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={storySections[activeSection].image || "/placeholder.svg"}
                  alt={storySections[activeSection].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">Niger State, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">September 2024</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 md:px-10 lg:px-36 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Photo Documentation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visual evidence of the flood's impact and the resilience of Niger State communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                onClick={() => {
                  setCurrentImageIndex(index)
                  setIsGalleryOpen(true)
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.caption}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Camera size={24} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                  <p className="text-gray-300 text-xs">{image.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Flood Impact Data with Calmer Colors */}
      <section className="py-24 px-6 md:px-10 lg:px-36 bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Impact Assessment</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive breakdown of the flood's devastating impact across multiple sectors
            </p>
          </motion.div>

          {/* Category Selector */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {floodImpactData.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedFloodCategory(index)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    selectedFloodCategory === index
                      ? `border-slate-400 ${category.bgColor} text-slate-800`
                      : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-600"
                  }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={32} className="mb-3 mx-auto" />
                  <h3 className="font-bold text-lg">{category.category}</h3>
                </motion.button>
              )
            })}
          </div>

          {/* Selected Category Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFloodCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${floodImpactData[selectedFloodCategory].bgColor}`}>
                      {React.createElement(floodImpactData[selectedFloodCategory].icon, {
                        size: 32,
                        className: "text-slate-700",
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {floodImpactData[selectedFloodCategory].category}
                      </h3>
                      <p className="text-gray-400">{floodImpactData[selectedFloodCategory].description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {floodImpactData[selectedFloodCategory].stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-700 p-4 rounded-lg border border-gray-600 hover:border-gray-500 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                            <p className="text-2xl font-bold text-white">{stat.value}</p>
                          </div>
                          <span className="text-2xl">{stat.icon}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-700 p-6 rounded-xl border border-gray-600">
                  <h4 className="text-xl font-bold text-white mb-4">Financial Impact</h4>
                  <div className="text-center">
                    <p className="text-3xl font-bold mb-2 text-slate-300">
                      ₦{floodImpactData[selectedFloodCategory].totalCost}
                    </p>
                    <p className="text-gray-400 text-sm">Total estimated cost</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <h5 className="font-bold text-white mb-3">Recovery Status</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Assessment</span>
                        <span className="text-emerald-400">Complete</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Documentation</span>
                        <span className="text-amber-400">In Progress</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Reconstruction</span>
                        <span className="text-red-400">Planning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Total Impact Summary */}
          <motion.div
            className="mt-12 bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Total Financial Impact</h3>
            <p className="text-5xl font-bold text-slate-300 mb-4">₦97,933,576,734</p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The Niger State community now faces the challenging path to rebuilding lives and restoring critical
              infrastructure. Our documentation helps tell their story and advocate for support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 md:px-10 lg:px-36 bg-black">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Join the Movement</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Be part of reshaping the global narrative on Africa's climate realities. Help us amplify voices, challenge
              stereotypes, and drive meaningful action.
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <motion.button
                className="px-8 py-4 bg-slate-700 text-white font-bold rounded-full hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Work
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Climate Storyteller
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Initiatives */}
      <div className="container px-6 md:px-10 lg:px-36 py-12">
        <Link
          to="/initiatives"
          className="inline-flex items-center text-white gap-2 px-6 py-3 border border-gray-600 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          <ArrowLeft size={18} />
          <span>Back to All Initiatives</span>
        </Link>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsGalleryOpen(false)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-colors"
              >
                <X size={20} className="text-white" />
              </button>

              <div className="relative">
                <img
                  src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={galleryImages[currentImageIndex].caption}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-colors"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-colors"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white font-bold mb-1">{galleryImages[currentImageIndex].caption}</h3>
                  <p className="text-gray-300 text-sm">{galleryImages[currentImageIndex].location}</p>
                  <div className="flex justify-center mt-3 gap-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex === index ? "bg-white w-6" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <Play size={64} className="mx-auto mb-4 text-white opacity-50" />
                  <h3 className="text-2xl font-bold mb-2">GAP Documentary</h3>
                  <p className="text-gray-400">Video would play here in a real implementation</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-colors"
              >
                <X size={20} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

      <Footer />
    </div>
  )
}

export default GAP
