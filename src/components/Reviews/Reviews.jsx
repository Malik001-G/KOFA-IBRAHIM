
import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import ProfileImage from "../../assets/images/Bukola.svg"
import "./Reviews.css"

const testimonials = [
  {
    quote:
      "Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.",
    name: "Prof. John Festus",
    title: "Director of College and Art",
    img: ProfileImage,
  },
  {
    quote:
      "Working with this team was an absolute pleasure. Their expertise and attention to detail exceeded my expectations.",
    name: "Dr. Aisha Bello",
    title: "Research Scientist",
    img: ProfileImage,
  },
  {
    quote: "Highly recommended! The quality of work and dedication displayed by this team is unmatched.",
    name: "Mr. Samuel Ade",
    title: "CEO, Tech Solutions",
    img: ProfileImage,
  },
  {
    quote: "A top-notch service with an exceptional level of professionalism and creativity.",
    name: "Mrs. Oluchi Nnamdi",
    title: "Marketing Director",
    img: ProfileImage,
  },
  {
    quote: "A great experience from start to finish. The attention to detail was truly impressive.",
    name: "Engr. Musa Ibrahim",
    title: "Project Manager",
    img: ProfileImage,
  },
  {
    quote: "Their innovative approach sets them apart. Highly recommended!",
    name: "Dr. Emeka Ugo",
    title: "Software Engineer",
    img: ProfileImage,
  },
]

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-full transition-all duration-300 hover:shadow-md hover:border-gray-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Quote icon */}
      <motion.div
        className="absolute -top-4 -left-4 text-8xl text-gray-200 font-serif z-0 select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
      >
        "
      </motion.div>

      {/* Quote text */}
      <motion.p
        className="text-gray-700 mb-6 relative z-10 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      >
        "{testimonial.quote}"
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-12 h-1 bg-gray-200 mb-6 mx-auto"
        initial={{ width: 0 }}
        animate={{ width: "3rem" }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      />

      {/* Author info */}
      <div className="flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        >
          <div className="mb-3">
            <motion.img
              src={testimonial.img}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              alt={`${testimonial.name}'s photo`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.title}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Reviews = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0.6, 1, 1, 0.8])

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
              Expert
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
              Feedbacks
            </motion.h2>
          </div>
          <motion.div className="md:max-w-xs" variants={titleVariants}>
            <p className="text-base md:text-lg text-[#4B4B4B] font-medium">
              Valuable perspectives and constructive assessments from industry experts.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="h-full">
                <TestimonialCard testimonial={testimonial} index={index} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Navigation dots */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex space-x-2">
          {[0, 1, 2].map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
              whileHover={{ scale: 1.5, backgroundColor: "#000" }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Reviews
