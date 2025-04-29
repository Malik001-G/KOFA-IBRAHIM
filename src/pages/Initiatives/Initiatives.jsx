"use client"

import { useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import InitiativeHero from "./InitiativeHero"
import InitiativeCard from "./InitiativeCard"
import Contact from "../../components/contact-us/Contact"
import "./initiatives.css"

// Import your images - update these paths to your actual images
import mmaImage from "../../assets/images/New/u.jpg"
import northDocsImage from "../../assets/images/New/g.jpg"
import gapImage from "../../assets/images/leadership.jfif"
import insightsImage from "../../assets/images/portfolio4.jfif"
import academiaImage from "../../assets/images/New/26.jpg"
import mediaResearchImage from "../../assets/images/New/24.jpg"

const Initiatives = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0.6, 1, 1, 0.8])

  // Initiative data
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
      cta: "Partner with Us",
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
      cta: "Commission a Documentary",
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
      cta: "Get Involved",
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
      id: "insights",
      name: "Insights",
      path: "/initiatives/insights",
      bg: insightsImage,
      shortDesc:
        "Thought leadership on strategy, storytelling, and African development through blogs and video monologues.",
      description:
        "Insights offers thought-provoking perspectives on leadership, strategy, storytelling, and African development. Through blogs, video monologues, and analytical pieces, we explore complex issues, share innovative ideas, and contribute to meaningful conversations about Africa's present and future.",
      number: "04",
      cta: "Read Latest",
      category: "thought-leadership",
      featured: true,
      services: [
        "Analytical Blog Posts",
        "Video Monologues and Interviews",
        "Research Publications",
        "Speaking Engagements",
        "Digital Content Creation",
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
      number: "05",
      cta: "View Research",
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
      number: "06",
      cta: "Explore Projects",
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
  ]

  // Filter categories
  const categories = [
    { id: "all", name: "All Initiatives" },
    { id: "leadership", name: "Leadership" },
    { id: "media", name: "Media" },
    { id: "advocacy", name: "Advocacy" },
    { id: "research", name: "Research" },
    { id: "thought-leadership", name: "Thought Leadership" },
  ]

  // Filter initiatives based on active filter
  const filteredInitiatives =
    activeFilter === "all" ? initiatives : initiatives.filter((initiative) => initiative.category === activeFilter)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  }

  return (
    <>
      <Navbar />

      <InitiativeHero />

      {/* Initiatives Section */}
      <motion.section
        id="initiatives-section"
        ref={sectionRef}
        className="bg-white py-24 px-6 lg:px-36 overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full border border-gray-200 opacity-20"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-60 h-60 rounded-full border border-gray-100 opacity-10"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        />

        {/* Filter tabs */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Initiatives (if any) */}
        {activeFilter === "all" && (
          <motion.div className="mb-20" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured Initiatives
            </motion.h2>

            <div className="grid grid-cols-1 gap-8">
              {initiatives
                .filter((initiative) => initiative.featured)
                .map((initiative, index) => (
                  <InitiativeCard key={initiative.id} initiative={initiative} isFeatured={true} index={index} />
                ))}
            </div>
          </motion.div>
        )}

        {/* All Initiatives Grid */}
        <motion.div variants={itemVariants}>
          {activeFilter !== "all" && (
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.find((cat) => cat.id === activeFilter)?.name}
            </motion.h2>
          )}

          {activeFilter === "all" && filteredInitiatives.some((initiative) => !initiative.featured) && (
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              All Initiatives
            </motion.h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInitiatives
              .filter((initiative) => activeFilter !== "all" || !initiative.featured)
              .map((initiative, index) => (
                <InitiativeCard key={initiative.id} initiative={initiative} isFeatured={false} index={index} />
              ))}
          </div>
        </motion.div>

        {/* No results message */}
        {filteredInitiatives.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-gray-500">No initiatives found in this category.</p>
          </motion.div>
        )}
      </motion.section>

      <Contact />
      <Footer />
    </>
  )
}

export default Initiatives
