"use client"

// This is a base component that will be extended for each initiative
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { ChevronLeft, ArrowRight } from "lucide-react"
import "./initiative-detail.css"

const InitiativeDetail = ({
  initiative,
  children,
  heroComponent: HeroComponent,
  contentComponent: ContentComponent,
}) => {
  const scrollRef = useRef(null)
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // Add custom cursor effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    window.scrollTo(0, 0)
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
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={scrollRef}
        className="initiative-hero relative h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {HeroComponent ? (
          <HeroComponent />
        ) : (
          <>
            <motion.div
              className="absolute inset-0 z-0 bg-cover bg-center filter grayscale hover:grayscale-0 transition-all duration-1000"
              style={{
                backgroundImage: `url(${initiative.bg})`,
                opacity,
                scale,
              }}
            />
            {/* Cinematic letterbox effect */}
            <div className="absolute top-0 left-0 right-0 h-[5vh] bg-black z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[5vh] bg-black z-10"></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
            <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl"
              >
                <div className="text-sm font-medium text-gray-300 mb-4">
                  <Link to="/initiatives" className="flex items-center gap-2 hover:text-white transition-colors">
                    <ChevronLeft size={16} />
                    <span>Back to Initiatives</span>
                  </Link>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hover:text-yellow-400 transition-colors duration-500">
                  {initiative.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">{initiative.shortDesc}</p>
              </motion.div>
            </div>
          </>
        )}
      </motion.section>

      {/* Content Section */}
      <section className="py-20  bg-white">
        <div className="container mx-auto px-6 md:px-10 lg:px-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky top-24">
                <h2 ref={titleRef} className="text-2xl font-bold mb-6 pb-6 border-b border-gray-200">
                  {initiative.name}
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-3">Services</h3>
                    <ul className="space-y-2">
                      {initiative.services.map((service, index) => (
                        <motion.li
                          key={index}
                          className="text-black transition-colors text-sm duration-300 flex items-start gap-2 group"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, delay: 0.1 * index }}
                        >
                          <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-gray-400 group-hover:bg-black transition-colors duration-300" />
                          <span>{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

               

                  <Link
                    to={`/contact?initiative=${initiative.id}`}
                    className="inline-flex items-center gap-2 text-black font-medium hover:text-gray-700 transition-colors duration-300 group"
                  >
                    Get in touch{" "}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="lg:col-span-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {ContentComponent ? (
                <ContentComponent />
              ) : (
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl leading-relaxed mb-8">{initiative.description}</p>
                  {children}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

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
    </>
  )
}

export default InitiativeDetail
