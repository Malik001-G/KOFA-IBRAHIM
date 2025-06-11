"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { blogData } from "../../utils/blogsdata"
import "./blog-section.css"

// Featured Blog Card with large image and prominent display
const FeaturedBlogCard = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="col-span-2 mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        to={`/blogs/${blog.id}`}
        className="group grid md:grid-cols-2 gap-6 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 border border-gray-200 hover:border-gray-300"
      >
        <div className="overflow-hidden rounded-xl h-full m-3">
          <motion.div
            className="h-full w-full relative"
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.img
              className="w-full h-full object-cover rounded-xl"
              src={blog.image}
              alt={blog.title}
              style={{ filter: isHovered ? "grayscale(0%)" : "grayscale(40%)" }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.6 : 0 }}
            />
          </motion.div>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-gray-500 text-sm">4 min read</span>
          </div>

          <motion.h3
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight group-hover:text-black transition-colors duration-300"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {blog.title}
          </motion.h3>

          <motion.div
            className="h-[2px] w-20 bg-black mb-6"
            animate={{ width: isHovered ? "40%" : "20%" }}
            transition={{ duration: 0.5 }}
          />

          <motion.p
            className="text-gray-700 font-medium mb-6 line-clamp-3"
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.4 }}
          >
            {blog.content.substring(0, 180)}...
          </motion.p>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <p className="text-sm font-bold">Kofa Ibrahim</p>
                <p className="text-xs text-gray-500">{blog.created_date}</p>
              </div>
            </div>

            <motion.div
              className="flex items-center font-bold text-black"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.4 }}
            >
              Read Article
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: isHovered ? 3 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Regular Blog Card with enhanced design
const BlogCard = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.04, 0.62, 0.23, 0.98] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        to={`/blogs/${blog.id}`}
        className="group flex flex-col h-full bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 border border-gray-200 hover:border-gray-300"
      >
        <div className="overflow-hidden h-56 relative m-3 rounded-xl">
          <motion.img
            className="w-full h-full object-cover transition-all duration-700 rounded-xl"
            src={blog.image}
            alt={blog.title}
            animate={{
              scale: isHovered ? 1.08 : 1,
              filter: isHovered ? "grayscale(0%)" : "grayscale(40%)",
            }}
            transition={{ duration: 0.7 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.6 : 0 }}
          />

          {/* Reading time */}
          <div className="absolute bottom-4 right-4">
            <span className="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
              {2 + index} min read
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <motion.h3
            className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-black transition-colors duration-300"
            animate={{ y: isHovered ? -3 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {blog.title}
          </motion.h3>

          <motion.div
            className="h-[2px] w-12 bg-black mb-4"
            animate={{ width: isHovered ? "30%" : "12%" }}
            transition={{ duration: 0.5 }}
          />

          <motion.p
            className="text-gray-700 font-medium mb-4 line-clamp-3 flex-grow"
            animate={{ opacity: isHovered ? 1 : 0.9 }}
            transition={{ duration: 0.4 }}
          >
            {blog.content.substring(0, 120)}...
          </motion.p>

          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-500 italic">{blog.created_date}</p>

            <motion.div
              className="flex items-center text-sm font-bold text-black"
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.4 }}
            >
              Read More
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: isHovered ? 2 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

const BlogSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0.6, 1, 1, 0.8])

  // Get all blogs
  const allBlogs = blogData.slice(0, 5)
  const featuredBlog = allBlogs[0]
  const regularBlogs = allBlogs.slice(1, 5)

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

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  }

  return (
    <motion.section
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

      <motion.div className="mb-16 relative" style={{ opacity }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="mb-8 md:mb-0">
            <motion.h2
              className="text-black text-5xl md:text-6xl font-extrabold uppercase relative inline-block"
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
              className="text-[#939393] text-5xl md:text-6xl font-extrabold uppercase mt-2"
              variants={titleVariants}
            >
              Insights
            </motion.h2>
          </div>
          <motion.div className="md:max-w-xs" variants={titleVariants}>
            <p className="text-base md:text-lg text-[#4B4B4B] font-medium">
              Insights, analysis, and stories that inspire thought and action.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured blog */}
      <FeaturedBlogCard blog={featuredBlog} />

      {/* Regular blogs grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularBlogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>


      {/* View all button */}
      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link to="/blogs">
          <motion.button
            className="group relative overflow-hidden px-10 py-4 hover:bg-black transition-all ease-linear duration-300 text-sm uppercase font-bold text-center text-[#4B4B4B] border-2 border-gray-800 bg-white rounded-full
            items-center inline-flex focus:ring-0 focus:outline-none"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Button background animation */}
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Button text */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              View All Articles
            </span>

            {/* Arrow animation */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 h-5 w-5 ml-3 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: [0, 3, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  )
}

export default BlogSection
