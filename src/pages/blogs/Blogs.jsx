"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { blogData } from "../../utils/blogsdata"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import "./blogs.css"

const Blogs = () => {
  const [hoveredBlog, setHoveredBlog] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

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

  const titleVariants = {
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

  const blogCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    }),
  }

  return (
    <>
      <Navbar />
      <motion.section
        ref={sectionRef}
        className="py-16 px-6 lg:px-36 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Decorative background elements */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gray-100 opacity-50 -z-10"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-gray-100 opacity-40 -z-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        {/* Background decorative shapes */}
        <div className="absolute inset-0 bg-pattern -z-10"></div>
        <motion.div
          className="absolute top-40 left-[10%] w-16 h-16 rounded-full bg-gray-200 opacity-10 -z-10"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-60 right-[15%] w-24 h-24 rounded-full bg-gray-300 opacity-15 -z-10"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] right-[5%] w-32 h-32 rounded-full border border-gray-200 opacity-20 -z-10"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[20%] w-40 h-40 rounded-full border border-gray-200 opacity-10 -z-10"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[15%] left-[30%] w-12 h-12 rounded-sm bg-gray-100 opacity-20 -z-10"
          animate={{
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[25%] w-20 h-20 rounded-md bg-gray-100 opacity-15 -z-10"
          animate={{
            rotate: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="container mx-auto">
          {/* Header section */}
          <motion.div className="md:flex items-center justify-between mb-16" variants={containerVariants}>
            <motion.div className="md:w-8/12 mb-6 md:mb-0" variants={titleVariants}>
              <motion.h2
                className="text-black text-5xl md:text-6xl font-bold uppercase relative inline-block"
                variants={titleVariants}
              >
                Blog
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-black"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                />
              </motion.h2>
              <motion.h2
                className="text-[#939393] text-5xl md:text-6xl font-bold uppercase mt-2"
                variants={titleVariants}
              >
                Insights
              </motion.h2>
            </motion.div>
            <motion.div className="md:w-4/12" variants={titleVariants}>
              <p className="text-base md:text-lg text-[#4B4B4B] font-medium">
                Insights, analysis, and stories that inspire thought and action.
              </p>
            </motion.div>
          </motion.div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog, index) => (
              <motion.div
                key={blog.id}
                custom={index}
                variants={blogCardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredBlog(blog.id)}
                onHoverEnd={() => setHoveredBlog(null)}
              >
                <Link
                  to={`/blogs/${blog.id}`}
                  className="blog-card h-full flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/90"
                >
                  <div className="relative overflow-hidden h-56">
                    <motion.img
                      className="w-full h-full object-cover transition-transform duration-700"
                      src={blog.image}
                      alt={blog.title}
                      animate={{
                        scale: hoveredBlog === blog.id ? 1.05 : 1,
                        filter: hoveredBlog === blog.id ? "grayscale(0%)" : "grayscale(20%)",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
                      animate={{ opacity: hoveredBlog === blog.id ? 0.6 : 0 }}
                    />
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
                        {2 + index} min read
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <motion.h3
                      className="mb-3 text-xl font-bold text-gray-900 line-clamp-2"
                      animate={{ y: hoveredBlog === blog.id ? -3 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {blog.title}
                    </motion.h3>

                    <motion.div
                      className="h-[2px] w-12 bg-black mb-4"
                      animate={{ width: hoveredBlog === blog.id ? "30%" : "12%" }}
                      transition={{ duration: 0.5 }}
                    />

                    <p className="mb-4 text-gray-700 line-clamp-3 flex-grow">{blog.content.substring(0, 120)}...</p>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-sm text-gray-500 italic">{blog.created_date}</p>

                      <motion.div
                        className="flex items-center text-sm font-bold text-black"
                        animate={{ x: hoveredBlog === blog.id ? 3 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  )
}

export default Blogs
