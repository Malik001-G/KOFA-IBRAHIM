"use client"

import { useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { blogData } from "../../utils/blogsdata"
import backmenu from "../../assets/images/Menu.png"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import "./blog-detail.css"

const BlogDetail = () => {
  const { id } = useParams() // Get id from URL
  const navigate = useNavigate()
  const contentRef = useRef(null)
  const isInView = useInView(contentRef, { once: false, amount: 0.1 })

  const blog = blogData.find((b) => b.id === Number(id)) // Convert id to number

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
            <button onClick={() => navigate("/blogs")} className="px-6 py-2 bg-black text-white rounded-full">
              Return to Blogs
            </button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  // Get the other blogs excluding the current blog
  const otherBlogs = blogData.filter((b) => b.id !== blog.id).slice(0, 2)

  // Handle back button click - go to previous page
  const handleGoBack = () => {
    navigate(-1) // This will navigate to the previous page in history
  }

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
      <motion.section
        className="py-16 px-6 lg:px-36 bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        ref={contentRef}
      >
        {/* Back button */}
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleGoBack}
            className="flex items-center gap-2 mb-8 group"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={backmenu}
              className="w-10 transition-transform duration-300 group-hover:rotate-[-10deg]"
              alt="Back"
            />
            <span className="font-medium">Go Back</span>
          </motion.button>
        </motion.div>

        {/* Blog header */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" variants={itemVariants}>
            {blog.title}
          </motion.h1>

          <motion.div className="mb-8" variants={itemVariants}>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">2 min read</span>
              <p className="text-gray-500 text-sm italic">{blog.created_date}</p>
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-800">{blog.sub_heading}</h2>
          </motion.div>
        </motion.div>

        {/* Featured image */}
        <motion.div
          className="max-w-5xl mx-auto mb-12"
          variants={itemVariants}
          whileInView={{
            opacity: [0, 1],
            y: [30, 0],
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            className="rounded-2xl w-full h-auto object-cover shadow-md"
            src={blog.image}
            alt={blog.title}
            initial={{ filter: "grayscale(100%)" }}
            animate={{ filter: "grayscale(0%)" }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Blog content */}
        <motion.div className="max-w-4xl mx-auto prose prose-lg" variants={itemVariants}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
            {blog.content.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-6 text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Other blogs section */}
        <motion.div
          className="mt-24 max-w-6xl mx-auto"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-8 relative inline-block" variants={itemVariants}>
            Continue Reading
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-black"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherBlogs.map((otherBlog, index) => (
              <motion.div
                key={otherBlog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    navigate(`/blogs/${otherBlog.id}`)
                    window.scrollTo(0, 0)
                  }}
                >
                  <div className="relative overflow-hidden h-56">
                    <motion.img
                      className="w-full h-full object-cover transition-transform duration-700"
                      src={otherBlog.image}
                      alt={otherBlog.title}
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
                        2 min read
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">{otherBlog.title}</h3>
                    <div className="h-[2px] w-12 bg-black mb-4"></div>
                    <p className="mb-4 text-gray-700 line-clamp-3">{otherBlog.content.substring(0, 120)}...</p>
                    <p className="text-sm text-gray-500 italic">{otherBlog.created_date}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  )
}

export default BlogDetail
