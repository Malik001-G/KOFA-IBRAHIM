"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { ArrowLeft, ChevronDown, Users, BarChart2, Briefcase, Award, Zap } from 'lucide-react'
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

const MasterMethodsAdvisors = () => {
  const [activeSection, setActiveSection] = useState("overview")
  const [isExpanded, setIsExpanded] = useState(false)
  
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const approachRef = useRef(null)
  const servicesRef = useRef(null)
  const impactRef = useRef(null)
  
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])
  
  const isOverviewInView = useInView(overviewRef, { once: false, amount: 0.5 })
  const isApproachInView = useInView(approachRef, { once: false, amount: 0.5 })
  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.5 })
  const isImpactInView = useInView(impactRef, { once: false, amount: 0.5 })
  
  useEffect(() => {
    if (isOverviewInView) setActiveSection("overview")
    else if (isApproachInView) setActiveSection("approach")
    else if (isServicesInView) setActiveSection("services")
    else if (isImpactInView) setActiveSection("impact")
  }, [isOverviewInView, isApproachInView, isServicesInView, isImpactInView])

  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Executive Leadership Coaching",
      description: "Personalized coaching for executives to enhance leadership capabilities and drive organizational success."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Organizational Strategy Development",
      description: "Comprehensive strategy formulation to align vision, mission, and execution for sustainable growth."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Change Management Consulting",
      description: "Expert guidance through organizational transitions to minimize disruption and maximize adoption."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Leadership Training Programs",
      description: "Structured training programs designed to build leadership capacity at all organizational levels."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Strategic Planning Workshops",
      description: "Facilitated workshops that drive collaborative strategic thinking and actionable outcomes."
    }
  ]

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "approach", label: "Approach" },
    { id: "services", label: "Services" },
    { id: "impact", label: "Impact" }
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
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50"></div>
          <img 
            src="/assets/images/New/u.jpg" 
            alt="Leadership" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Master Methods & Advisors</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
              Transformative leadership and strategy expertise for organizations and individuals seeking growth.
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
                  overviewRef.current.scrollIntoView({ behavior: 'smooth' })
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
            <span className="font-semibold">Master Methods & Advisors</span>
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
                            overview: overviewRef,
                            approach: approachRef,
                            services: servicesRef,
                            impact: impactRef
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
                            className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-full"
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
        {/* Overview Section */}
        <section 
          ref={overviewRef}
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
                Overview
                <span className="absolute -bottom-4 left-0 w-20 h-1 bg-black"></span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    Master Methods & Advisors delivers comprehensive leadership and strategy consulting services to organizations and individuals across Africa. The focus is on transformative growth, helping clients navigate complex challenges, develop robust strategies, and build leadership capacity that drives sustainable success.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With a deep understanding of the African business landscape and global best practices, Master Methods & Advisors bridges the gap between vision and execution, empowering leaders to create lasting impact.
                  </p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 p-8 rounded-xl"
                >
                  <h3 className="text-2xl font-semibold mb-4">Key Differentiators</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-black text-white p-1 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Contextually relevant solutions for African challenges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-black text-white p-1 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Integration of global best practices with local insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-black text-white p-1 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Results-oriented approach with measurable outcomes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-black text-white p-1 rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Long-term partnership mindset focused on sustainable growth</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Approach Section */}
        <section 
          ref={approachRef}
          className="py-20 px-6 bg-gray-50"
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-12 relative">
                Approach
                <span className="absolute -bottom-4 left-0 w-20 h-1 bg-black"></span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    number: "01",
                    title: "Diagnose",
                    description: "Thorough assessment of current state, challenges, and opportunities through data-driven analysis and stakeholder engagement."
                  },
                  {
                    number: "02",
                    title: "Design",
                    description: "Collaborative creation of tailored strategies and solutions that address specific needs and align with organizational vision."
                  },
                  {
                    number: "03",
                    title: "Develop",
                    description: "Building capabilities and implementing solutions through structured programs, coaching, and knowledge transfer."
                  },
                  {
                    number: "04",
                    title: "Deploy",
                    description: "Executing strategies with clear milestones, accountability frameworks, and adaptive implementation approaches."
                  },
                  {
                    number: "05",
                    title: "Deliver",
                    description: "Measuring outcomes, refining approaches, and ensuring sustainable impact beyond the engagement period."
                  },
                  {
                    number: "06",
                    title: "Debrief",
                    description: "Comprehensive review of results, lessons learned, and establishing frameworks for continued success."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-5xl font-bold text-gray-200 mb-4">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Services Section */}
        <section 
          ref={servicesRef}
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
                Services
                <span className="absolute -bottom-4 left-0 w-20 h-1 bg-black"></span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="bg-black text-white p-3 rounded-full h-fit">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section 
          ref={impactRef}
          className="py-20 px-6 bg-gray-900 text-white"
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-12 relative">
                Impact
                <span className="absolute -bottom-4 left-0 w-20 h-1 bg-white"></span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    Master Methods & Advisors has transformed organizations across Africa, from startups to established corporations. The impact extends beyond metrics to creating lasting cultural change and sustainable growth trajectories.
                  </p>
                  <p className="text-lg leading-relaxed">
                    By focusing on building internal capabilities rather than creating dependencies, clients develop the resilience and adaptability needed to thrive in rapidly changing environments.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "500+", label: "Leaders Coached" },
                    { number: "50+", label: "Organizations Transformed" },
                    { number: "12", label: "African Countries" },
                    { number: "95%", label: "Client Retention" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
                    >
                      <div className="text-4xl font-bold mb-2">{stat.number}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-semibold mb-8 text-center">Ready to transform your leadership approach?</h3>
                <div className="flex justify-center">
                  <a 
                    href="#contact" 
                    className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    Start the Conversation
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default MasterMethodsAdvisors
