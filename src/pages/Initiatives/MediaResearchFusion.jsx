"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Film, BookOpen, Play, ChevronRight, Users, FileText, Lightbulb, Share2, ArrowLeft, X } from "lucide-react"

// Import images
import mediaResearchHeroImage from "../../assets/images/New/24.jpg"

const MediaResearchFusion = () => {
  const [activeTab, setActiveTab] = useState("mental-health")
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const processRef = useRef(null)
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 })

  const projectsRef = useRef(null)
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.2 })

  const impactRef = useRef(null)
  const isImpactInView = useInView(impactRef, { once: true, amount: 0.2 })

  // Projects data
  const projects = {
    "mental-health": {
      title: "Mental Health After Conflict",
      subtitle: "Translating trauma research into human stories",
      description:
        "This documentary series transforms three years of field research on post-conflict trauma recovery into accessible narratives that highlight community-based approaches to mental health support.",
      researchPartner: "Institute for Peace Psychology",
      researchMethods: "Longitudinal studies, interviews with 200+ participants, clinical assessments",
      impact: "Informed UN peacekeeping training protocols, reached 1.2M viewers",
      image: "/placeholder.svg?height=600&width=800",
      video: "#",
      publications: [
        "Community-Based Trauma Recovery in Post-Conflict Settings (Journal of Peace Psychology)",
        "Measuring Resilience Factors in War-Affected Communities (Clinical Psychology Review)",
      ],
    },
    leadership: {
      title: "Leadership Narratives",
      subtitle: "Visualizing governance research",
      description:
        "Short-form videos translating research on effective leadership models in African contexts into accessible case studies for educational use and policy influence.",
      researchPartner: "African Governance Institute",
      researchMethods: "Comparative case studies, elite interviews, institutional analysis",
      impact: "Adopted by 12 universities, featured in policy workshops across 5 countries",
      image: "/placeholder.svg?height=600&width=800",
      video: "#",
      publications: [
        "Institutional Constraints on Leadership Effectiveness (Journal of African Politics)",
        "Emerging Models of Transformative Leadership in Post-Colonial Contexts (Leadership Quarterly)",
      ],
    },
    climate: {
      title: "Climate Stories",
      subtitle: "Data-driven environmental storytelling",
      description:
        "Interactive documentary combining climate research data with personal stories from communities experiencing climate change impacts, creating an emotionally resonant presentation of scientific findings.",
      researchPartner: "Climate Adaptation Research Consortium",
      researchMethods: "Mixed methods research, longitudinal climate data, participatory community mapping",
      impact: "Presented at COP27, influenced regional adaptation funding priorities",
      image: "/placeholder.svg?height=600&width=800",
      video: "#",
      publications: [
        "Local Knowledge Systems in Climate Adaptation (Nature Climate Change)",
        "Measuring Community Resilience to Climate Shocks (Environmental Research Letters)",
      ],
    },
  }

  // Process steps
  const processSteps = [
    {
      icon: BookOpen,
      title: "Research Integration",
      description:
        "We begin by identifying compelling research with visual potential. Our team works closely with researchers to understand methodologies, findings, and implications.",
    },
    {
      icon: Lightbulb,
      title: "Narrative Development",
      description:
        "Complex findings are transformed into story structures that maintain scientific integrity while creating emotional connection through character and narrative.",
    },
    {
      icon: Film,
      title: "Visual Production",
      description:
        "Professional documentary techniques bring research to life through cinematography, interviews, data visualization, and immersive storytelling approaches.",
    },
    {
      icon: Share2,
      title: "Impact Strategy",
      description:
        "Strategic distribution ensures research reaches target audiences across policy, education, and public spheres, with impact measurement throughout.",
    },
  ]

  // Testimonials
  const testimonials = [
    {
      quote:
        "Media-Research Fusion transformed our three years of field research into a documentary that reached audiences we never could have accessed through academic channels alone.",
      author: "Dr. Amina Osei",
      role: "Lead Researcher, Mental Health After Conflict",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The documentary based on our climate research provided exactly what policymakers needed - clear evidence presented in a way that built emotional connection to the issues.",
      author: "Prof. Ibrahim Ndiaye",
      role: "Climate Adaptation Research Consortium",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Working with this team helped us translate years of governance research into compelling stories that are now used in university classrooms across the continent.",
      author: "Dr. Sarah Mensah",
      role: "African Governance Institute",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gray-900 py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                KNOWLEDGE TRANSLATION INITIATIVE
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Media-Research <span className="text-gray-300">Fusion</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At the intersection of academic research and documentary filmmaking lies a powerful space for knowledge
                translation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Transforming Research into Visual Narratives</h2>
                <p className="text-gray-300 mb-6">
                  Media-Research Fusion is a creative platform where rigorous academic research converges with the power
                  of documentary storytelling. We specialize in transforming complex social, political, and
                  developmental research into compelling visual narratives that are accessible, emotionally resonant,
                  and action-oriented.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      setSelectedProject(projects[activeTab])
                      setIsVideoModalOpen(true)
                    }}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Play size={18} />
                    <span>Watch Showreel</span>
                  </button>
                  <a
                    href="#projects"
                    className="px-6 py-3 border border-gray-500 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Explore Projects
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/5 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={
                      mediaResearchHeroImage ||
                      "/placeholder.svg?height=400&width=600&query=documentary filming with researchers" ||
                      "/placeholder.svg"
                    }
                    alt="Media-Research Fusion"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFFFFF"
              d="M47.5,-61.2C59.9,-52.8,67.6,-37.4,71.5,-21.6C75.5,-5.8,75.7,10.4,70.8,25.3C65.8,40.3,55.7,53.9,42.2,62.2C28.8,70.5,14.4,73.5,-0.2,73.7C-14.8,74,-29.5,71.5,-41.4,63.5C-53.2,55.5,-62.1,42.1,-67.7,27.3C-73.3,12.5,-75.5,-3.7,-71.8,-18.5C-68.1,-33.3,-58.5,-46.7,-45.8,-54.9C-33.1,-63.1,-16.6,-66.1,-0.1,-65.9C16.3,-65.8,35.1,-69.5,47.5,-61.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFFFFF"
              d="M47.7,-57.2C59,-47.3,63.6,-29.7,65.2,-12.9C66.8,3.9,65.4,20,57.9,32.4C50.4,44.8,36.8,53.5,22.5,57.8C8.1,62.1,-7,62,-20.8,57.4C-34.6,52.8,-47.1,43.7,-54.6,31.1C-62.1,18.5,-64.6,2.4,-61.8,-12.7C-59,-27.8,-50.9,-41.9,-39.4,-51.8C-27.9,-61.7,-14,-67.4,1.9,-69.7C17.7,-72,35.4,-70.9,47.7,-57.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 mb-4">
                  By bridging the gap between knowledge production and public engagement, Media-Research Fusion turns
                  static data into dynamic advocacy tools. Our documentaries and visual content serve as vehicles for
                  change, translating evidence into empathy, insight into influence, and research into real-world
                  impact.
                </p>
                <p className="text-gray-300">
                  Whether addressing conflict, climate, leadership, or social justice, we amplify research with a human
                  face and a global voice.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-900 border-l-4 border-white/30 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Approach</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-gray-300">
                        <BookOpen size={18} />
                      </div>
                      <span className="text-gray-300">Rigorous academic foundation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-gray-300">
                        <Film size={18} />
                      </div>
                      <span className="text-gray-300">Compelling visual storytelling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-gray-300">
                        <Users size={18} />
                      </div>
                      <span className="text-gray-300">Human-centered narratives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-gray-300">
                        <FileText size={18} />
                      </div>
                      <span className="text-gray-300">Evidence-based advocacy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                OUR METHODOLOGY
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">The Fusion Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our systematic approach transforms academic research into compelling visual narratives while maintaining
                intellectual integrity.
              </p>
            </motion.div>

            <div className="relative">
              {/* Process Timeline Line */}
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 md:-ml-0.5"></div>

              {/* Process Steps */}
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-gray-900 flex items-center justify-center text-gray-900 md:-ml-4 z-10">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className={`md:text-right ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <div
                        className={`inline-flex items-center gap-2 mb-2 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                      >
                        <div className="p-2 bg-white/10 rounded-full text-white">
                          <Icon size={18} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 pl-10 md:pl-0">{step.description}</p>
                    </div>

                    <div className={index % 2 === 1 ? "md:order-1" : ""}>{/* Empty div for layout */}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                FEATURED WORK
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">Research to Documentary</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore how we've transformed academic research into compelling documentaries that drive understanding
                and change.
              </p>
            </motion.div>

            {/* Project Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.keys(projects).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === key ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {projects[key].title}
                </button>
              ))}
            </div>

            {/* Active Project */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div
                  className="relative h-64 lg:h-auto cursor-pointer"
                  onClick={() => {
                    setSelectedProject(projects[activeTab])
                    setIsVideoModalOpen(true)
                  }}
                >
                  <img
                    src={projects[activeTab].image || "/placeholder.svg"}
                    alt={projects[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center hover:bg-opacity-20 transition-all">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                      <Play size={24} className="text-black ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white">{projects[activeTab].title}</h3>
                    <p className="text-gray-400">{projects[activeTab].subtitle}</p>
                  </div>

                  <p className="text-gray-300 mb-6">{projects[activeTab].description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase">Research Partner</h4>
                      <p className="text-gray-200">{projects[activeTab].researchPartner}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase">Research Methods</h4>
                      <p className="text-gray-200">{projects[activeTab].researchMethods}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase">Impact</h4>
                      <p className="text-gray-200">{projects[activeTab].impact}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">Related Publications</h4>
                    <ul className="space-y-2">
                      {projects[activeTab].publications.map((pub, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight size={16} className="mt-1 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                RESEARCHER PERSPECTIVES
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">From Our Partners</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Hear from the researchers who have collaborated with us to transform their work into visual narratives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-black p-6 rounded-lg shadow-md border border-gray-800">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={impactRef} className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                MEASURING SUCCESS
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We measure success not just by views, but by tangible influence on policy, education, and public
                understanding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Policy Influence</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-gray-400">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-gray-300">Documentaries cited in 8 policy briefs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-gray-400">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-gray-300">Screened at 12 government and UN events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-gray-400">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-gray-300">Influenced funding priorities in 3 sectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-gray-400">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-gray-300">Contributed to 2 national policy frameworks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Educational Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-gray-400">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-gray-300">Used in 25+ university courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-gray-400">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-gray-300">Reached 15,000+ students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-gray-400">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-gray-300">Developed 8 educational guides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-gray-400">
                      <ChevronRight size={16} />
                    </div>
                    <span className="text-gray-300">Facilitated 30+ academic workshops</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Research?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with us to turn your academic findings into compelling documentaries that reach global audiences
              and drive real-world impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors">
                Start a Collaboration
              </button>
              {/* <button className="px-8 py-3 border border-white rounded-md font-medium hover:bg-gray-800 transition-colors">
                View Our Portfolio
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Initiatives */}
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <Link
          to="/initiatives"
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to All Initiatives</span>
        </Link>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-opacity-70 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="aspect-video bg-black flex items-center justify-center">
              <div className="text-center p-8">
                <Play size={48} className="mx-auto mb-4 text-white opacity-50" />
                <h3 className="text-xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-gray-400">Video would play here in a real implementation</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default MediaResearchFusion
