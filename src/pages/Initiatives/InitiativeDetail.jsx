"use client"

import { useRef, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Contact from "../../components/contact-us/Contact"

// Import your images - update these paths to your actual images
import mmaImage from "../../assets/images/New/u.jpg"
import northDocsImage from "../../assets/images/New/g.jpg"
import gapImage from "../../assets/images/leadership.jfif"
import insightsImage from "../../assets/images/portfolio4.jfif"
import academiaImage from "../../assets/images/New/26.jpg"
import mediaResearchImage from "../../assets/images/New/24.jpg"

const InitiativeDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [initiative, setInitiative] = useState(null)
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const isContentInView = useInView(contentRef, { once: false, amount: 0.2 })

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

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
      approach:
        "Our approach combines rigorous analysis with practical implementation strategies. We work closely with clients to understand their unique challenges, develop tailored solutions, and provide ongoing support to ensure lasting impact.",
      impact:
        "Our work has helped organizations across various sectors improve their leadership effectiveness, navigate complex transitions, and achieve sustainable growth. We've trained over 500 leaders and worked with more than 50 organizations throughout Africa.",
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
      approach:
        "We approach each project with deep respect for the communities and stories we document. Our process involves extensive research, community collaboration, and ethical storytelling practices that honor the voices and perspectives of our subjects.",
      impact:
        "Our documentaries have been screened at international film festivals, used in educational settings, and have helped preserve cultural practices and historical narratives that might otherwise be lost. We've produced over 15 documentaries reaching audiences across the globe.",
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
      approach:
        "We combine rigorous policy analysis with innovative storytelling techniques to make climate issues accessible and actionable. Our work centers African perspectives and solutions, ensuring that global climate conversations include diverse voices and approaches.",
      impact:
        "Our advocacy has influenced climate policy discussions at national and international levels, while our storytelling projects have reached millions of people, changing perceptions and inspiring action on climate issues across Africa and beyond.",
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
      approach:
        "Our content combines academic rigor with accessible language and compelling presentation. We draw on diverse perspectives and disciplines to offer nuanced analysis of complex issues, always with an eye toward practical applications and real-world impact.",
      impact:
        "Our thought leadership has reached hundreds of thousands of readers and viewers, influencing discourse on African development, leadership, and storytelling. Our content has been cited in academic publications, featured in major media outlets, and used in educational settings.",
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
      approach:
        "Our research methodology combines rigorous academic standards with community-based participatory approaches. We prioritize ethical research practices, local knowledge, and interdisciplinary perspectives to develop comprehensive understandings of complex issues.",
      impact:
        "Our research has been published in peer-reviewed journals, presented at international conferences, and used to inform policy decisions. Our findings have contributed to improved post-conflict interventions, mental health services, and leadership development programs across Africa.",
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
      approach:
        "We work at the intersection of rigorous research and compelling storytelling, developing innovative methods to translate complex findings into accessible formats without sacrificing accuracy or nuance. Our interdisciplinary team brings together expertise in research, filmmaking, and communication.",
      impact:
        "Our media-research projects have helped make complex research accessible to policymakers, practitioners, and communities, leading to improved understanding and implementation of evidence-based approaches. Our work has been used in educational settings, policy briefings, and public engagement initiatives.",
    },
  ]

  // Find the current initiative based on the URL parameter
  useEffect(() => {
    const currentInitiative = initiatives.find((item) => item.id === id)
    if (currentInitiative) {
      setInitiative(currentInitiative)
    } else {
      // Redirect to initiatives page if not found
      navigate("/initiatives")
    }
  }, [id, navigate])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  if (!initiative) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-xl">Loading initiative details...</p>
          </motion.div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-[60vh] md:h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background image with parallax effect */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center filter grayscale"
          style={{
            backgroundImage: `url(${initiative.bg})`,
            y,
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 opacity-90"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-6 lg:px-36 text-center z-10">
          <motion.div
            className="absolute top-10 right-10 text-white text-[12rem] font-black opacity-20 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.2, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {initiative.number}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {initiative.name}
          </motion.h1>

          <motion.div
            className="w-20 h-1 bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />

          <motion.p
            className="text-lg md:text-xl text-white mb-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {initiative.shortDesc}
          </motion.p>

          <motion.button
            className="px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {initiative.cta}
          </motion.button>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        ref={contentRef}
        className="bg-white py-24 px-6 lg:px-36"
        initial="hidden"
        animate={isContentInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          {/* About */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}>
              About This Initiative
            </motion.h2>
            <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed" variants={itemVariants}>
              {initiative.description}
            </motion.p>
          </motion.div>

          {/* Services */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}>
              Our Services
            </motion.h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={itemVariants}>
              {initiative.services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -5, backgroundColor: "#f9f9f9" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-2">{service}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Approach */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}>
              Our Approach
            </motion.h2>
            <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed" variants={itemVariants}>
              {initiative.approach}
            </motion.p>
          </motion.div>

          {/* Impact */}
          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}>
              Impact
            </motion.h2>
            <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed" variants={itemVariants}>
              {initiative.impact}
            </motion.p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="bg-gray-50 p-10 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 className="text-3xl font-bold mb-4" variants={itemVariants}>
              Ready to Get Started?
            </motion.h2>
            <motion.p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
              Whether you're looking to collaborate, learn more, or support our work, we'd love to hear from you.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4 justify-center" variants={itemVariants}>
              <motion.button
                className="px-8 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {initiative.cta}
              </motion.button>
              <motion.a
                href="#contact"
                className="px-8 py-3 border border-black text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Contact />
      <Footer />
    </>
  )
}

export default InitiativeDetail
