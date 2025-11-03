"use client"

import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import InitiativeHero from "./InitiativeHero"
import InitiativeCard from "./InitiativeCard"
import Contact from "../../components/contact-us/Contact"
import "./initiatives.css"

// Import your images
import mmaImage from "../../assets/images/New/u.jpg"
import northDocsImage from "../../assets/images/New/g.jpg"
import gapImage from "../../assets/images/leadership.jfif"
import academiaImage from "../../assets/images/New/26.jpg"
import mediaResearchImage from "../../assets/images/New/24.jpg"
import afroGlobalImage from "../../assets/images/New/k.jpg"

const Initiatives = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Full initiative data restored
  const initiatives = [
    {
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
    },
    {
      id: "north-docs",
      name: "North Docs",
      path: "/initiatives/north-docs",
      bg: northDocsImage,
      shortDesc: "Documentary filmmaking that brings to life the rich, diverse stories of Northern Nigeria and Africa.",
      description:
        "North Docs is dedicated to documenting and preserving the rich cultural heritage and contemporary stories of Northern Nigeria and Africa. Through compelling visual narratives, we shine a light on untold stories, amplifying voices that deserve to be heard on the global stage.",
      number: "02",
      cta: "Discover Our Documentaries",
      category: "media",
      featured: false,
      services: [
        "Documentary Film Production",
        "Cultural Heritage Documentation",
        "Visual Storytelling Workshops",
        "Film Distribution and Promotion",
        "Community Engagement Projects",
      ],
    },
    {
      id: "gap",
      name: "GAP: Global African Perspectives",
      path: "/initiatives/gap",
      bg: gapImage,
      shortDesc: "Climate advocacy initiatives that connect policy work with compelling storytelling for impact.",
      description:
        "Global African Perspectives (GAP) bridges the divide between climate policy and public engagement through powerful storytelling. We amplify African voices in the global climate conversation, advocate for sustainable solutions, and create compelling narratives that drive meaningful action on climate change.",
      number: "03",
      cta: "Join Climate Advocacy",
      category: "advocacy",
      featured: false,
      services: [
        "Climate Policy Advocacy",
        "Environmental Storytelling",
        "Sustainability Workshops",
        "Community Climate Action Programs",
        "Climate Communication Strategies",
      ],
    },
    {
      id: "academia",
      name: "Academia & Research",
      path: "/initiatives/academia",
      bg: academiaImage,
      shortDesc: "Ongoing research on leadership failure in Africa, mental health, and post-conflict reconstruction.",
      description:
        "Our academic research focuses on critical areas including leadership challenges in Africa, mental health in post-conflict settings, and effective reconstruction strategies. We bridge theory and practice, producing rigorous research that informs policy and drives positive change in communities across the continent.",
      number: "04",
      cta: "Access Research Insights",
      category: "research",
      featured: false,
      services: [
        "Academic Research Projects",
        "Policy Papers and Publications",
        "Research Collaborations",
        "Academic Conferences and Presentations",
        "Research-Based Consulting",
      ],
    },
    {
      id: "media-research",
      name: "Media-Research Fusion",
      path: "/initiatives/media-research",
      bg: mediaResearchImage,
      shortDesc: "Where academic work meets documentary filmmaking, creating powerful knowledge translation.",
      description:
        "Media-Research Fusion represents the innovative intersection of academic research and documentary filmmaking. We translate complex research findings into accessible, compelling visual narratives that engage diverse audiences and bridge the gap between academic knowledge and public understanding.",
      number: "05",
      cta: "See Media-Research Projects",
      category: "media",
      featured: false,
      services: [
        "Research-Based Documentary Production",
        "Knowledge Translation Services",
        "Academic-Media Partnerships",
        "Educational Content Development",
        "Impact Assessment Studies",
      ],
    },
    {
      id: "afro-global-festival",
      name: "AFRO-GLOBAL FESTIVAL OF ARTS AND CULTURE",
      path: "/initiatives/afro-global-festival",
      bg: afroGlobalImage,
      shortDesc: "A celebration of African arts, culture, and creative expression across the global diaspora.",
      description:
        "The Afro-Global Festival of Arts and Culture is a vibrant celebration that showcases the rich diversity of African artistic and cultural expressions. This festival brings together artists, performers, and cultural practitioners from across Africa and its diaspora, creating a platform for cultural exchange, creative collaboration, and the promotion of African heritage on the global stage.",
      number: "06",
      cta: "Experience the Festival",
      category: "media",
      featured: true,
      services: [
        "Cultural Exhibitions and Performances",
        "Artist Workshops and Masterclasses",
        "Film Screenings and Visual Arts",
        "Music and Dance Showcases",
        "Cultural Exchange Programs",
      ],
    },
  ]

  const categories = [
    { id: "all", name: "All Initiatives" },
    { id: "leadership", name: "Leadership" },
    { id: "media", name: "Media" },
    { id: "advocacy", name: "Advocacy" },
    { id: "research", name: "Research" },
  ]

  const filteredInitiatives = activeFilter === "all" ? initiatives : initiatives.filter(i => i.category === activeFilter)
  const featuredInitiatives = initiatives.filter(i => i.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <InitiativeHero />

      <motion.section
        ref={sectionRef}
        id="initiatives-section"
        className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-6 lg:px-32"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Decorative orbs */}
        <motion.div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-20 blur-3xl" style={{ y }} />
        <motion.div className="absolute bottom-56 -right-40 w-80 h-80 rounded-full bg-gradient-to-tl from-teal-100 to-cyan-100 opacity-15 blur-3xl" style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }} />

        {/* Filters */}
        <motion.div className="max-w-7xl mx-auto mb-16" variants={itemVariants}>
          <div className="flex flex-wrap justify-center gap-5">
            {categories.map(cat => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-7 py-3 rounded-full font-medium text-base shadow-lg transition-all ${
                  activeFilter === cat.id ? "bg-black text-white" : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Scrollable Featured Carousel */}
        {activeFilter === "all" && featuredInitiatives.length > 0 && (
          <motion.div className="max-w-7xl mx-auto mb-28" variants={itemVariants}>
            <motion.h2
              className="text-center text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Spotlight Initiatives
            </motion.h2>

            {/* Tiny custom scrollbar */}
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              <motion.div
                className="flex gap-8 pb-8"
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {featuredInitiatives.map((initiative, idx) => (
                  <div key={initiative.id} className="flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[38vw]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <InitiativeCard initiative={initiative} isFeatured={true} index={idx} />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <p className="text-center text-gray-500 mt-6 text-sm">← Scroll horizontally to explore →</p>
          </motion.div>
        )}

        {/* Regular Grid */}
        <motion.div className="max-w-7xl mx-auto" variants={itemVariants}>
          {(activeFilter !== "all" || filteredInitiatives.some(i => !i.featured)) && (
            <motion.h2
              className="text-center text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {activeFilter === "all" ? "Explore All" : categories.find(c => c.id === activeFilter)?.name}
            </motion.h2>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInitiatives
              .filter(i => activeFilter !== "all" || !i.featured)
              .map((initiative, idx) => (
                <motion.div
                  key={initiative.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <InitiativeCard initiative={initiative} isFeatured={false} index={idx} />
                </motion.div>
              ))}
          </div>

          {filteredInitiatives.filter(i => activeFilter !== "all" || !i.featured).length === 0 && (
            <motion.p
              className="text-center text-2xl text-gray-500 py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              No initiatives found in this category.
            </motion.p>
          )}
        </motion.div>
      </motion.section>

      <Contact />
      <Footer />
    </div>
  )
}

export default Initiatives