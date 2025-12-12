"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import {
  Play,
  Film,
  Award,
  Calendar,
  Clock,
  User,
  X,
  ArrowLeft,
  Eye,
  ArrowRight,
} from "lucide-react";
import Contactform from "../../components/contact-us/Contactform"; // ← SAME FORM AS CONTACT PAGE
import "../../components/contact-us/contact.css";
// Import real images
// import northDocsHeroImage from "../../assets/images/New/g.jpg"
// import documentaryImage1 from "../../assets/images/documentary1.jpg"
// import documentaryImage2 from "../../assets/images/documentary2.jpg"
// import documentaryImage3 from "../../assets/images/documentary3.jpg"
import directorImage from "../../assets/images/New/m.jpg";
// import behindScenes1 from "../../assets/images/behind-scenes1.jpg"
// import behindScenes2 from "../../assets/images/behind-scenes2.jpg"
// import behindScenes3 from "../../assets/images/behind-scenes3.jpg"

const useContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
};

const NorthDocs = () => {
  const [selectedDocumentary, setSelectedDocumentary] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const {
    isOpen: isContactModalOpen,
    open: openContactModal,
    close: closeContactModal,
  } = useContactModal();
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const documentaries = [
    {
      id: "voices-of-kano",
      title: "Voices of Kano",
      year: "2023",
      duration: "45 min",
      director: "Amina Ibrahim",
      description:
        "An intimate portrait of Kano's ancient city walls and the communities that have lived within them for centuries. This documentary explores the rich cultural heritage, traditional crafts, and oral histories that continue to thrive in Nigeria's second-largest city.",
      image:
        "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1000&auto=format&fit=crop",
      awards: [
        "Best Documentary - Lagos Film Festival",
        "Cultural Heritage Award - Pan-African Film Festival",
      ],
      videoUrl: "#",
      color: "rgb(245, 158, 11)", // Amber color for hover
    },
    {
      id: "desert-guardians",
      title: "Desert Guardians",
      year: "2022",
      duration: "52 min",
      director: "Ibrahim Musa",
      description:
        "Following the lives of nomadic communities in Northern Nigeria as they adapt to climate change and desertification. This documentary highlights traditional knowledge systems and innovative approaches to environmental conservation in one of Africa's most challenging landscapes.",
      image:
        "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?q=80&w=1000&auto=format&fit=crop",
      awards: [
        "Environmental Documentary Award - Climate Film Festival",
        "Audience Choice - Sahel Documentary Festival",
      ],
      videoUrl: "#",
      color: "rgb(16, 185, 129)", // Emerald color for hover
    },
    {
      id: "forgotten-kingdoms",
      title: "Forgotten Kingdoms",
      year: "2021",
      duration: "60 min",
      director: "Fatima Abdullahi",
      description:
        "Exploring the pre-colonial history of Northern Nigeria's kingdoms and empires, this documentary uncovers archaeological findings and historical narratives that challenge conventional understandings of African history and governance systems.",
      image:
        "https://images.unsplash.com/photo-1533662635785-9050eeb7a9be?q=80&w=1000&auto=format&fit=crop",
      awards: [
        "Historical Research Excellence - African Heritage Awards",
        "Best Cinematography - Documentary Film Awards",
      ],
      videoUrl: "#",
      color: "rgb(79, 70, 229)", // Indigo color for hover
    },
  ];

  // Behind the scenes images
  const behindScenesImages = [
    "https://images.unsplash.com/photo-1604920715021-99152f0874ac?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1632186683159-cf88c5ce62ed?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1632187981988-40f3cbaeef5f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000&auto=format&fit=crop",
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Handle gallery navigation
  const handleGalleryNavigation = (direction) => {
    if (direction === "next") {
      setCurrentGalleryIndex((prev) => (prev + 1) % behindScenesImages.length);
    } else {
      setCurrentGalleryIndex(
        (prev) =>
          (prev - 1 + behindScenesImages.length) % behindScenesImages.length
      );
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Prevent scrolling when modals are open
    if (isVideoModalOpen || isGalleryModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVideoModalOpen, isGalleryModalOpen]);

  // Mouse cursor effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div className="" ref={containerRef}>
      <Navbar />

      {/* Hero Section with Cinematic Parallax */}
      <motion.section
        ref={heroRef}
        className="relative h-[90vh] overflow-hidden flex items-center justify-center"
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: parallaxY, opacity }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="w-full h-full bg-cover bg-center filter grayscale hover:grayscale-0 transition-all duration-1000"
            style={{
              backgroundImage: `url("/images/northern-nigeria-durbar.jpg")`,
              filter: "brightness(0.23)",
            }}
          />
          {/* Cinematic letterbox effect */}
          {/* <div className="absolute top-0 left-0 right-0 h-[5vh] bg-black z-10"></div> */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-[5vh] bg-black z-10"></div> */}
        </motion.div>

        <motion.div
          className="container mx-auto px-6 md:px-10 lg:px-36 relative z-20 text-white"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeIn}
            className="inline-block mb-4 px-4 py-1 border border-white/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-sm font-medium tracking-wider">
              DOCUMENTARY INITIATIVE
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-4xl font-bold mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="block">Documenting Northern Nigeria's</span>
            <span className="block text-white hover:text-yellow-400 transition-colors duration-500">
              Untold Stories
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-lg max-w-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Authentic visual narratives that preserve cultural heritage and
            amplify voices from across Northern Nigeria.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#documentaries"
              className="px-8 py-3 border text-sm border-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-500"
            >
              Explore Documentaries
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-5 left-0 right-0 flex justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="animate-bounce">
            <ArrowDown className="text-white" size={32} />
          </div>
        </motion.div>
      </motion.section>

      {/* Mission Statement */}
      <section className="py-24 px-6 md:px-10 lg:px-36 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl text-white font-bold mb-6">
                The Mission
              </h2>
              <p className="text-base text-gray-300 mb-6">
                North Docs is dedicated to documenting and preserving the rich
                cultural heritage and contemporary stories of Northern Nigeria
                and Africa through compelling visual narratives.
              </p>
              <p className="text-base text-gray-300 mb-6">
                Each documentary shines a light on untold stories, amplifying
                voices that deserve to be heard on the global stage while
                creating a visual archive of traditions, histories, and lived
                experiences that might otherwise be lost to time.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 text-white">
                <div className="flex items-center text-sm gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <Film
                    size={18}
                    className="group-hover:text-yellow-400 transition-colors duration-300"
                  />
                  <span>Cultural Preservation</span>
                </div>
                <div className="flex items-center text-sm gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <Award
                    size={18}
                    className="group-hover:text-green-400 transition-colors duration-300"
                  />
                  <span>Award-winning</span>
                </div>
                <div className="flex items-center text-sm gap-2 px-4 py-2 bg-white/10 rounded-full group hover:bg-white/20 transition-all duration-300">
                  <Calendar
                    size={18}
                    className="group-hover:text-blue-400 transition-colors duration-300"
                  />
                  <span>Since 2018</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Light subtle overlay (optional – removes darkness) */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent z-10" />

              {/* Decorative border */}
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-white/30 rounded-xl z-20 pointer-events-none" />

              {/* Background Image – Bright & Colorful by Default */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${directorImage}")`,
                }}
              />

              {/* Quote Card – Always Visible */}
              <div className="absolute inset-0 flex items-end p-2">
                <div className="bg-black/80 backdrop-blur-md p-7 rounded-xl max-w-md transform translate-y-0 opacity-100">
                  <h3 className="text-xl font-bold text-white mb-3">
                    From the Director
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    "These documentaries are more than films—they're a bridge
                    between generations, preserving stories that might otherwise
                    fade into history."
                  </p>
                  <p className="mt-4 text-sm text-gray-400 font-medium">
                    — Ibrahim Musa, Founder
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Documentaries */}
      <section
        id="documentaries"
        className="py-24 px-6 md:px-10 lg:px-36 bg-gray-900"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Documentaries
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore award-winning documentaries that capture the essence of
              Northern Nigeria's rich cultural tapestry.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-24"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {documentaries.map((doc, index) => (
              <motion.div
                key={doc.id}
                className={`grid grid-cols-1 ${
                  index % 2 === 0
                    ? "lg:grid-cols-[1fr_1.5fr]"
                    : "lg:grid-cols-[1.5fr_1fr]"
                } gap-12 items-center`}
                variants={fadeIn}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {doc.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-1 text-gray-300">
                      <Calendar size={16} />
                      <span>{doc.year}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300">
                      <Clock size={16} />
                      <span>{doc.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300">
                      <User size={16} />
                      <span>{doc.director}</span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 mb-6">
                    {doc.description}
                  </p>

                  <div className="mb-8 text-white">
                    <h4 className="text-lg font-semibold mb-3">Awards</h4>
                    <div className="flex flex-wrap gap-2">
                      {doc.awards.map((award, i) => (
                        <div
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
                        >
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => {
                        setSelectedDocumentary(doc);
                        setIsVideoModalOpen(true);
                      }}
                      className="flex items-center text-sm gap-2 px-6 py-2 bg-white text-black rounded-full hover:text-white transition-all duration-500"
                      style={{
                        "--hover-color": doc.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = doc.color;
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.color = "black";
                      }}
                    >
                      <Play size={18} fill="currentColor" />
                      <span>Watch</span>
                    </button>
                  </div>
                </div>

                <motion.div
                  className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => {
                    setSelectedDocumentary(doc);
                    setIsVideoModalOpen(true);
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/20 transition-all duration-700"></div>
                  <img
                    src={doc.image || "/placeholder.svg"}
                    alt={doc.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                      style={{
                        "--hover-color": doc.color,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = `${doc.color}40`)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.2)")
                      }
                    >
                      <Play
                        size={32}
                        className="text-white group-hover:text-white transition-colors duration-500"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-36 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl text-white font-bold mb-4">
              Documentary Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              North Docs films have reached audiences worldwide, preserving
              cultural heritage and changing perceptions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "500K+",
                label: "Global Viewers",
                description:
                  "Documentaries have been viewed by audiences across 45+ countries",
              },
              {
                number: "12",
                label: "International Awards",
                description:
                  "Recognition from prestigious film festivals and cultural institutions",
              },
              {
                number: "8",
                label: "Cultural Archives",
                description:
                  "Preservation of endangered cultural practices and oral histories",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-white transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-4xl font-bold mb-2 text-white group-hover:text-yellow-400">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold mb-4 text-gray-200">
                  {stat.label}
                </div>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      {/* <section className="py-24  bg-gray-900">
        <div className="container mx-auto px-6 md:px-10 lg:px-36 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Behind the Scenes</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the filmmaking process and the stories behind the documentaries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {behindScenesImages.map((image, i) => (
              <motion.div
                key={i}
                className="aspect-square bg-gray-800 rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => {
                  setSelectedImage(image)
                  setCurrentGalleryIndex(i)
                  setIsGalleryModalOpen(true)
                }}
              >
                <div
                  className="w-full h-full bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                  <div className="px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <Eye size={16} className="text-white" />
                    <span className="text-white text-sm font-medium">View Details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>View Full Gallery</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Get Involved */}
      <section className="py-24 lg:px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 md:px-10 lg:px-36 max-w-7xl">
          <div className="bg-gray-800 rounded-3xl p-5 border border-gray-700 hover:border-white transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl text-white font-bold mb-4">
                  Get Involved
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  North Docs welcomes collaboration with filmmakers,
                  researchers, cultural institutions, and communities interested
                  in preserving Northern Nigeria's rich heritage.
                </p>
                <button
                  onClick={openContactModal}
                  className="inline-flex text-sm items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-yellow-400 transition-all duration-500 font-medium"
                >
                  <span>Contact the Team</span>
                  <ArrowRight size={18} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-black p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">
                    Collaboration Opportunities
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Documentary co-production",
                      "Research partnerships",
                      "Community storytelling workshops",
                      "Film festival submissions",
                      "Distribution partnerships",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 group">
                        <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-white group-hover:bg-yellow-400 transition-colors duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/15 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            onClick={closeContactModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">Get in Touch</h3>
                  <button
                    onClick={closeContactModal}
                    className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <Contactform closeModal={closeContactModal} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Initiatives */}
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-36 py-12">
        <Link
          to="/initiatives"
          className="inline-flex items-center text-sm gap-2 px-6 py-3 border border-gray-600 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300"
        >
          <ArrowLeft size={18} />
          <span>Back to All Initiatives</span>
        </Link>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && selectedDocumentary && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-16 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-all duration-300"
                onClick={() => setIsVideoModalOpen(false)}
              >
                <X size={20} />
              </button>

              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="text-center p-8">
                  <Play size={48} className="mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-bold mb-2">
                    {selectedDocumentary.title} - Trailer
                  </h3>
                  <p className="text-gray-400">
                    Video would play here in a real implementation
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-all duration-300"
                onClick={() => setIsGalleryModalOpen(false)}
              >
                <X size={20} />
              </button>

              <div className="relative h-[80vh]">
                <img
                  src={
                    behindScenesImages[currentGalleryIndex] ||
                    "/placeholder.svg"
                  }
                  alt={`Gallery image ${currentGalleryIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-all duration-300"
                  onClick={() => handleGalleryNavigation("prev")}
                >
                  <ArrowLeft size={24} />
                </button>

                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black transition-all duration-300"
                  onClick={() => handleGalleryNavigation("next")}
                >
                  <ArrowRight size={24} />
                </button>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {behindScenesImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentGalleryIndex === index
                          ? "bg-white w-4"
                          : "bg-white/50"
                      }`}
                      onClick={() => setCurrentGalleryIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  );
};

// Helper components
const ArrowDown = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

export default NorthDocs;
