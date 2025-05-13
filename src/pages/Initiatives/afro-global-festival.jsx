"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

// import CountdownTimer from "./countdown-timer"
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Film,
  Paintbrush,
  Mic,
  Users,
  Camera,
  ArrowRight,
  ArrowLeft,
  X,
  Plus,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Ticket,
} from "lucide-react"

// Import festival images
// import festivalHeroImage from "../../assets/images/festival-hero.jpg"
// import artistImage1 from "../../assets/images/artist1.jpg"
// import artistImage2 from "../../assets/images/artist2.jpg"
// import artistImage3 from "../../assets/images/artist3.jpg"
// import eventImage1 from "../../assets/images/event1.jpg"
// import eventImage2 from "../../assets/images/event2.jpg"
// import eventImage3 from "../../assets/images/event3.jpg"
// import galleryImage1 from "../../assets/images/gallery1.jpg"
// import galleryImage2 from "../../assets/images/gallery2.jpg"
// import galleryImage3 from "../../assets/images/gallery3.jpg"
// import galleryImage4 from "../../assets/images/gallery4.jpg"
// import galleryImage5 from "../../assets/images/gallery5.jpg"
// import galleryImage6 from "../../assets/images/gallery6.jpg"

const AfroGlobalFestival = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [activeEvent, setActiveEvent] = useState(null)
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Festival date - set to a future date
  const festivalDate = new Date("2025-07-15T00:00:00")

  // Festival events
  const events = [
    {
      id: "opening-ceremony",
      title: "Opening Ceremony",
      date: "July 15, 2025",
      time: "18:00 - 22:00",
      location: "National Arts Theatre",
      description:
        "The grand opening of the Afro-Global Festival featuring performances from renowned artists across Africa and its diaspora, showcasing the rich diversity of African cultural expressions.",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop",
      category: "performance",
      color: "rgb(245, 158, 11)", // Amber
    },
    {
      id: "film-showcase",
      title: "African Cinema Showcase",
      date: "July 16-18, 2025",
      time: "10:00 - 20:00",
      location: "Cultural Center",
      description:
        "A three-day showcase of groundbreaking films from across Africa, featuring documentaries, short films, and feature-length productions that highlight the continent's diverse storytelling traditions.",
      image:
     "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop",
      category: "film",
      color: "rgb(16, 185, 129)", // Emerald
    },
    {
      id: "art-exhibition",
      title: "Contemporary African Art Exhibition",
      date: "July 15-22, 2025",
      time: "09:00 - 17:00",
      location: "Modern Art Gallery",
      description:
        "An exhibition featuring works from emerging and established African artists, exploring themes of identity, heritage, and contemporary African experiences through various mediums.",
      image:
      "https://images.unsplash.com/photo-1594784108790-8f2c9a8772fb?q=80&w=1000&auto=format&fit=crop",
      category: "exhibition",
      color: "rgb(79, 70, 229)", // Indigo
    },
    {
      id: "music-concert",
      title: "Pan-African Music Concert",
      date: "July 19, 2025",
      time: "19:00 - 23:00",
      location: "Freedom Park",
      description:
        "A night of musical performances celebrating the diverse sounds of Africa, from traditional rhythms to contemporary fusion, featuring artists from across the continent and diaspora.",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000&auto=format&fit=crop",
      category: "performance",
      color: "rgb(220, 38, 38)", // Red
    },
    {
      id: "dance-workshop",
      title: "Traditional Dance Workshops",
      date: "July 17-20, 2025",
      time: "10:00 - 16:00",
      location: "Community Center",
      description:
        "Interactive workshops led by master dancers, teaching traditional dance forms from different African regions, exploring their cultural significance and contemporary relevance.",
      image: "https://images.unsplash.com/photo-1545959570-a94084071b5d?q=80&w=1000&auto=format&fit=crop",
      category: "workshop",
      color: "rgb(217, 70, 239)", // Fuchsia
    },
    {
      id: "closing-ceremony",
      title: "Closing Ceremony & Fashion Show",
      date: "July 22, 2025",
      time: "18:00 - 22:00",
      location: "National Arts Theatre",
      description:
        "The festival culminates in a spectacular fashion show featuring designers who blend traditional African textiles and techniques with contemporary styles, followed by closing performances.",
      image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1000&auto=format&fit=crop",
      category: "performance",
      color: "rgb(234, 179, 8)", // Yellow
    },
  ]

  // Featured artists
  const artists = [
    {
      name: "Amara Diallo",
      discipline: "Visual Artist",
      origin: "Senegal",
      image:
       "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
      bio: "Amara Diallo's work explores the intersection of traditional West African symbolism and contemporary global issues, creating powerful visual narratives that bridge past and present.",
      color: "rgb(245, 158, 11)", // Amber
    },
    {
      name: "Kwame Osei",
      discipline: "Musician & Composer",
      origin: "Ghana",
      image:
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
      bio: "A pioneer in Afrofusion music, Kwame Osei blends traditional Ghanaian rhythms with jazz, electronic, and classical influences to create a distinctive sound that has garnered international acclaim.",
      color: "rgb(16, 185, 129)", // Emerald
    },
    {
      name: "Zainab Njeri",
      discipline: "Filmmaker",
      origin: "Kenya",
      image:
     "https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=1000&auto=format&fit=crop",
      bio: "Award-winning filmmaker whose documentaries and narrative films highlight untold stories from East Africa, focusing on environmental conservation, cultural preservation, and women's experiences.",
      color: "rgb(79, 70, 229)", // Indigo
    },
  ]

  // Gallery images
  const galleryImages = [
    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533662635785-9050eeb7a9be?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533662324352-7a3701c1a0b9?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504633273314-18a6a89b5e55?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547637589-f54c34f5d7a4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547637916-48ceb6f8d505?q=80&w=1000&auto=format&fit=crop",
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

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  // Filter events by category
  const filterEvents = (category) => {
    if (category === "all") return events
    return events.filter((event) => event.category === category)
  }

  // Handle gallery navigation
  const handleGalleryNavigation = (direction) => {
    if (direction === "next") {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length)
    } else {
      setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Prevent scrolling when gallery modal is open
    if (isGalleryModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isGalleryModalOpen])

  return (
    <div className="bg-black" ref={containerRef}>
      <Navbar />

      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        className="relative h-[90vh] overflow-hidden flex items-center justify-center"
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
            className="w-full h-[100%] bg-cover bg-center filter grayscale hover:grayscale-0 transition-all duration-1000"
            style={{
              backgroundImage: `url(${"https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop"})`,
              filter: "brightness(0.25)",
            }}
          />
          {/* Cinematic letterbox effect */}
          {/* <div className="absolute top-0 left-0 right-0 h-[5vh] bg-black z-10"></div> */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-[5vh] bg-black z-10"></div> */}
        </motion.div>

        <motion.div className="container mx-auto px-6 md:px-10 lg:px-36 relative z-20 text-white" variants={staggerContainer}>
          <motion.div
            variants={fadeIn}
            className="inline-block mb-4 px-4 py-1 border border-white/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-xs font-medium tracking-wider">JULY 15-22, 2025</span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-5xl font-bold mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="block">AFRO-GLOBAL</span>
            <span className="block text-white hover:text-yellow-400 transition-colors duration-500">
              FESTIVAL OF ARTS & CULTURE
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-base md:text-lg max-w-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A celebration of African artistic expressions, cultural heritage, and creative innovation across the
            continent and its diaspora.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#events"
              className="flex items-center text-sm gap-3 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-black hover:text-white hover:border border-white transition-all duration-500"
            >
              <Calendar size={20} />
              <span>Explore Events</span>
            </a>
          
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        {/* <motion.div
          className="absolute bottom-20 left-0 right-0 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
              <h2 className="text-center text-xl font-medium mb-4">Festival Begins In</h2>
              <CountdownTimer targetDate={festivalDate} />
            </div>
          </div>
        </motion.div> */}
      </motion.section>

      {/* Festival Overview */}
      <section className="py-24 px-6 md:px-10 lg:px-36 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl text-white font-bold mb-6">About The Festival</h2>
              <p className="text-lg text-gray-300 mb-6">
                The Afro-Global Festival of Arts and Culture is a week-long celebration that brings together artists,
                performers, filmmakers, and cultural practitioners from across Africa and its diaspora.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Through exhibitions, performances, screenings, workshops, and discussions, the festival creates a
                platform for cultural exchange, artistic innovation, and the celebration of Africa's rich and diverse
                creative expressions.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 text-white">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <Music size={18} className="group-hover:text-yellow-400 transition-colors duration-300" />
                  <span>Music</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <Film size={18} className="group-hover:text-green-400 transition-colors duration-300" />
                  <span>Film</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <Paintbrush size={18} className="group-hover:text-blue-400 transition-colors duration-300" />
                  <span>Visual Arts</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <Mic size={18} className="group-hover:text-purple-400 transition-colors duration-300" />
                  <span>Performance</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-black/20 z-10 opacity-0 hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-10 left-10 right-10 bottom-10 border border-white/20 rounded-xl z-20" />
              <div
                className="absolute inset-0 bg-cover bg-center filter grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage: `url(${"https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop"})`,
                }}
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="bg-black/80 backdrop-blur-sm p-6 rounded-xl max-w-xs transform translate-y-10 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-2">A Global Celebration</h3>
                  <p className="text-gray-300">
                    "The festival represents a unique opportunity to showcase the richness and diversity of African
                    artistic expressions on a global stage."
                  </p>
                  <p className="mt-2 text-sm text-gray-400">— Festival Director</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section id="events" className="py-24 px-6 md:px-10 lg:px-36 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl text-white font-bold mb-4">Festival Events</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse program of performances, exhibitions, screenings, and workshops.
            </p>

            {/* Event Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["all", "performance", "film", "exhibition", "workshop"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === category ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filterEvents(activeTab === "all" ? "all" : activeTab).map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-gray-800 rounded-xl text-white overflow-hidden group hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
                    style={{
                      background: `linear-gradient(to top, black, transparent 70%, transparent)`,
                    }}
                  />
                  <div
                    className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${event.color}80`
                      e.currentTarget.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
                      e.currentTarget.style.color = "white"
                    }}
                  >
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <Calendar size={16} className="group-hover:text-white transition-colors duration-300" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <Clock size={16} className="group-hover:text-white transition-colors duration-300" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <MapPin size={16} className="group-hover:text-white transition-colors duration-300" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveEvent(event)}
                    className="inline-flex items-center gap-2 text-white font-medium group-hover:text-white transition-colors duration-300"
                    style={{
                      "--hover-color": event.color,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = event.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    View Details
                    <ArrowRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Event Details Modal */}
          <AnimatePresence>
            {activeEvent && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-all duration-300"
                    onClick={() => setActiveEvent(null)}
                  >
                    <X size={20} />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-full">
                      <img
                        src={activeEvent.image || "/placeholder.svg"}
                        alt={activeEvent.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                        style={{ backgroundColor: activeEvent.color, color: "white" }}
                      >
                        {activeEvent.category.charAt(0).toUpperCase() + activeEvent.category.slice(1)}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{activeEvent.title}</h3>

                      <div className="flex flex-col gap-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar size={18} className="text-white" />
                          <span>{activeEvent.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Clock size={18} className="text-white" />
                          <span>{activeEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin size={18} className="text-white" />
                          <span>{activeEvent.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-8">{activeEvent.description}</p>

                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-24 px-6 md:px-10 lg:px-36 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Artists</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet some of the extraordinary talents showcasing their work at this year's festival.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full aspect-[3/4] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${artist.color}80, transparent)`,
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors duration-300">
                  {artist.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="h-px flex-grow bg-gray-700 group-hover:bg-white transition-colors duration-300"
                    style={{
                      "--hover-color": artist.color,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = artist.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgb(55, 65, 81)")}
                  />
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {artist.discipline}
                  </span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    |
                  </span>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {artist.origin}
                  </span>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{artist.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 md:px-10 lg:px-36 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl text-white font-bold mb-4">Festival Gallery</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A glimpse of the vibrant experiences from previous editions of the festival.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
                onClick={() => {
                  setSelectedImage(image)
                  setCurrentGalleryIndex(index)
                  setIsGalleryModalOpen(true)
                }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Festival moment ${index + 1}`}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                  <div className="p-3 bg-black/70 backdrop-blur-sm rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500">
                    <Plus size={24} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gallery Modal */}
          <AnimatePresence>
            {isGalleryModalOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative w-full max-w-5xl aspect-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-all duration-300"
                    onClick={() => setIsGalleryModalOpen(false)}
                  >
                    <X size={20} />
                  </button>

                  <div className="relative h-[80vh]">
                    <img
                      src={galleryImages[currentGalleryIndex] || "/placeholder.svg"}
                      alt={`Gallery image ${currentGalleryIndex + 1}`}
                      className="w-full h-full object-contain"
                    />

                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-all duration-300"
                      onClick={() => handleGalleryNavigation("prev")}
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-all duration-300"
                      onClick={() => handleGalleryNavigation("next")}
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentGalleryIndex === index ? "bg-white w-4" : "bg-white/50"
                          }`}
                          onClick={() => setCurrentGalleryIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Registration */}
      {/* <section id="register" className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-900 rounded-3xl p-12 border border-gray-700 hover:border-white transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4">Join the Festival</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Secure your place at the Afro-Global Festival of Arts and Culture. Early registration ensures access
                  to all events, workshops, and special performances.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Ticket size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Full Festival Pass</h3>
                      <p className="text-gray-400">Access to all events for the entire week</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Users size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Workshop Registration</h3>
                      <p className="text-gray-400">Participate in interactive sessions with master artists</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <Camera size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">VIP Experience</h3>
                      <p className="text-gray-400">Premium seating and exclusive artist meet-and-greets</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-yellow-400 transition-all duration-500"
                  >
                    <span>Register Now</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-center"
              >
                <div className="bg-black p-8 rounded-xl w-full">
                  <h3 className="text-xl font-bold mb-6">Festival Information</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Dates</h4>
                      <p className="text-white">July 15-22, 2025</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Location</h4>
                      <p className="text-white">Multiple venues across the city</p>
                      <p className="text-gray-400">National Arts Theatre (Main Venue)</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Registration Deadline</h4>
                      <p className="text-white">June 30, 2025</p>
                      <p className="text-gray-400">Early bird pricing ends April 15, 2025</p>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300"
                      >
                        <span>Download Festival Guide</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Back to Initiatives */}
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-36 py-12">
        <Link
          to="/initiatives"
          className="inline-flex items-center gap-2 px-6 py-3 text-white border border-gray-600 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          <ArrowLeft size={18} />
          <span>Back to All Initiatives</span>
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default AfroGlobalFestival
