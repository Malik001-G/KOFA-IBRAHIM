"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { ArrowLeft, ChevronDown, Globe, Leaf, MessageSquare, Users, ChevronRight } from 'lucide-react'
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

const GlobalAfricanPerspectives = () => {
  const [activeSection, setActiveSection] = useState("about")
  const [isExpanded, setIsExpanded] = useState(false)
  
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const initiativesRef = useRef(null)
  const storiesRef = useRef(null)
  const joinRef = useRef(null)
  
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])
  
  const isAboutInView = useInView(aboutRef, { once: false, amount: 0.5 })
  const isInitiativesInView = useInView(initiativesRef, { once: false, amount: 0.5 })
  const isStoriesInView = useInView(storiesRef, { once: false, amount: 0.5 })
  const isJoinInView = useInView(joinRef, { once: false, amount: 0.5 })
  
  useEffect(() => {
    if (isAboutInView) setActiveSection("about")
    else if (isInitiativesInView) setActiveSection("initiatives")
    else if (isStoriesInView) setActiveSection("stories")
    else if (isJoinInView) setActiveSection("join")
  }, [isAboutInView, isInitiativesInView, isStoriesInView, isJoinInView])

  const initiatives = [
    {
      title: "Climate Policy Advocacy",
      description: "Engaging with policymakers to promote climate-friendly policies and regulations that address Africa's unique challenges and opportunities.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Environmental Storytelling",
      description: "Creating compelling narratives that highlight climate impacts, solutions, and the lived experiences of communities across Africa.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Sustainability Workshops",
      description: "Conducting educational programs that build capacity for sustainable practices in communities, schools, and organizations.",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Community Climate Action",
      description: "Supporting grassroots initiatives that implement local climate solutions and build community resilience to climate impacts.",
      icon: <Users className="w-6 h-6" />
    }
  ]

  const stories = [
    {
      title: "The Last Fishermen of Lake Chad",
      excerpt: "Documenting the lives of fishing communities adapting to the dramatic shrinking of Lake Chad due to climate change.",
      image: "/assets/images/story1.jpg",
      category: "Documentary",
      date: "June 2023"
    },
    {
      title: "Green Innovation in Urban Africa",
      excerpt: "Exploring how African cities are pioneering sustainable urban development solutions in the face of rapid growth and climate challenges.",
      image: "/assets/images/story2.jpg",
      category: "Feature",
      date: "August 2023"
    },
    {
      title: "Voices from the Drought",
      excerpt: "Amplifying the stories of pastoralist communities navigating increasingly severe drought conditions in the Horn of Africa.",
      image: "/assets/images/story3.jpg",
      category: "Podcast Series",
      date: "October 2023"
    }
  ]

  const navItems = [
    { id: "about", label: "About" },
    { id: "initiatives", label: "Initiatives" },
    { id: "stories", label: "Stories" },
    { id: "join", label: "Join" }
  ]

  return (
    <>
      <Navbar />
      
      {/* Back button */}
      <motion.div 
        className="fixed top-24 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link to="/initiatives" className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:bg-white transition-all duration-300">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Initiatives</span>
        </Link>
      </motion.div>
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 to-green-800 text-white"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <img 
            src="/assets/images/leadership.jfif" 
            alt="Climate advocacy" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Global African Perspectives</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
              Connecting climate policy work with compelling storytelling for meaningful impact across Africa.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-center"
            >
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="cursor-pointer"
                onClick={() => {
                  aboutRef.current.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <ChevronDown className="w-10 h-10" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Navigation */}
      <div className="sticky top-20 z-40 bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4 md:hidden">
            <span className="font-semibold">Global African Perspectives</span>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2"
            >
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <AnimatePresence>
            {(isExpanded || window.innerWidth >= 768) && (
              <motion.nav 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:h-auto overflow-hidden"
              >
                <ul className="flex flex-col md:flex-row justify-center gap-1 md:gap-8 py-2">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          const ref = {
                            about: aboutRef,
                            initiatives: initiativesRef,
                            stories: storiesRef,
                            join: joinRef
                          }[item.id]
                          
                          ref.current.scrollIntoView({ behavior: 'smooth' })
                          setIsExpanded(false)
                        }}
                        className={`px-4 py-2 relative ${
                          activeSection === item.id 
                            ? 'text-black font-semibold' 
                            : 'text-gray-500 hover:text-gray-800'
                        }`}
                      >
                        {item.label}
                        {activeSection === item.id && (
                          <motion.div 
                            layoutId="activeSection"
                            className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 rounded-full"
                          />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Content Sections */}
      <main className="bg-white">
        {/* About Section */}
        <section 
          ref={aboutRef}
          className="py-20 px-6"
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-12 relative">
                About GAP
                <span className="absolute -bottom-4 left-0 w-20 h-1 bg-green-600 rounded-full">&lt;</span>


