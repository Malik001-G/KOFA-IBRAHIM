"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProfileImage from "../../assets/images/New/18.jpg";
import Aboutimg from "../../assets/images/New/28.jpg";
import Career_Milestone from "../../components/career-milestone/Career_Milestone";
import Contact from "../../components/contact-us/Contact";
import "./About.css";

const About = () => {
  // Refs for scroll animations
  const bioSectionRef = useRef(null);
  const valuesSectionRef = useRef(null);
  const visionSectionRef = useRef(null);
  const imageSectionRef = useRef(null);

  // Check if sections are in view
  const bioInView = useInView(bioSectionRef, { once: false, amount: 0.2 });
  const valuesInView = useInView(valuesSectionRef, {
    once: false,
    amount: 0.2,
  });
  const visionInView = useInView(visionSectionRef, {
    once: false,
    amount: 0.2,
  });
  const imageInView = useInView(imageSectionRef, { once: false, amount: 0.3 });

  // Parallax scroll effect for hero section
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.1,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="bg-white pt-16 pb-12 px-6 lg:px-36 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full border border-gray-200 opacity-20"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full border border-gray-100 opacity-10"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        />

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-black text-5xl md:text-6xl font-bold uppercase relative inline-block"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            About
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-black"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.h2>
          <motion.h2
            className="text-[#939393] text-5xl md:text-6xl font-bold uppercase mt-2"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            who am i?
          </motion.h2>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          ref={bioSectionRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20"
          initial="hidden"
          animate={bioInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
<motion.div
  className="md:col-span-8 space-y-6"
  variants={sectionVariants}
>
  {[
    "I am a documentary filmmaker and researcher working at the intersection of culture, conflict, and leadership. My work examines how societies endure violence, rebuild after conflict, and negotiate meaning in places the world often misunderstands or ignores.",
    "For over fifteen years, I have travelled across Northern Nigeria not as a passing observer, but as someone embedded in its communities. I document lived realities of conflict and recovery through long-form field research, visual evidence, and sustained proximity to the people whose stories I tell.",
    "My primary focus is post-conflict reconstruction, informal leadership, and the cultural intelligence required to rebuild societies after prolonged violence. This work forms the foundation of my academic research as a PhD candidate in Leadership and Strategic Studies at the Nigerian Defence Academy, where scholarship is grounded in real communities rather than abstract theory.",
    "I believe documentaries are not just films. They are strategic tools. Evidence. Memory. They shape how societies are understood and how policy, aid, and leadership decisions are made. This belief has guided my work in displacement camps, deradicalization programmes, flood-ravaged communities, and regions rebuilding after more than a decade of insurgency.",
    "I am the founder of North Docs and the initiator of the African Lab for Cultural Intelligence and Visual Evidence, a platform dedicated to using visual documentation, research, and emerging technologies to help global audiences understand Africa beyond crisis headlines.",
    "My work increasingly explores how Africa can be interpreted globally without distortion, and how global systems can engage African realities with nuance, dignity, and strategic clarity.",
    "I am not interested in telling stories that comfort. I am interested in telling stories that explain.",
  ].map((paragraph, index) => (
    <motion.p
      key={index}
      className="text-base lg:text-lg text-gray-700 leading-relaxed"
      custom={index}
      variants={textVariants}
    >
      {paragraph}
    </motion.p>
  ))}
</motion.div>

          <motion.div className="md:col-span-4" variants={imageVariants}>
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={ProfileImage}
                className="w-full rounded-2xl shadow-lg"
                alt="Kofa Ibrahim"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 0.1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          ref={valuesSectionRef}
          className=" mb-20"
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <motion.div
            className=" flex flex-col justify-center"
            variants={titleVariants}
          >
            <motion.h2
              className="text-black mb-5 text-4xl md:text-5xl font-bold uppercase relative inline-block"
              variants={titleVariants}
            >
              Core Ethos
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-black"
                initial={{ width: 0 }}
                animate={valuesInView ? { width: "25%" } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.h2>
         
          </motion.div>

          <motion.div className="md:col-span-7" variants={textVariants}>
            <motion.p
              className="text-base lg:text-lg text-gray-700 mb-5 italic leading-relaxed"
              variants={textVariants}
              custom={0}
            >
I believe that societies do not collapse or recover by accident.
They do so through culture, leadership, memory, and the systems that shape human behavior.
My work is grounded in rigorous field evidence, long-form observation, and visual documentation
of communities navigating conflict, recovery, climate stress, and institutional failure. We prioritize
depth over speed, context over spectacle, and truth over convenience.
            </motion.p>
            <motion.p
              className="text-base lg:text-lg text-gray-700 italic leading-relaxed"
              variants={textVariants}
              custom={0}
            >
           By combining cultural intelligence, visual evidence, and strategic analysis, I aim to produce
knowledge that helps policymakers, institutions, and global audiences understand how people
actually live, adapt, and rebuild. Not in theory, but in reality.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Global Vision Section */}
        <motion.div
          ref={visionSectionRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-24"
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <motion.div
            className="md:col-span-8 md:order-1 order-2"
            variants={textVariants}
          >
            <motion.p
              className="text-base lg:text-lg mb-3 text-gray-700 italic leading-relaxed"
              variants={textVariants}
              custom={0}
            >
              To position African realities at the center of global
              understanding by producing credible visual evidence, strategic
              insight, and human-centered narratives that inform policy,
              scholarship, and public consciousness. 
            </motion.p>
            <motion.p
              className="text-base lg:text-lg text-gray-700 italic leading-relaxed"
              variants={textVariants}
              custom={0}
            >
           Through rigorous fieldwork
              and cultural intelligence, my work seeks to influence how
              conflict, recovery, leadership, and resilience in Africa are
              studied, represented, and acted upon worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            className="md:col-span-4 flex flex-col justify-center"
            variants={titleVariants}
          >
            <motion.h2
              className="text-black text-4xl md:text-5xl font-bold uppercase relative inline-block"
              variants={titleVariants}
            >
              Global
              <motion.span
                className="absolute -bottom-2 left-0 h-1 bg-black"
                initial={{ width: 0 }}
                animate={visionInView ? { width: "60%" } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </motion.h2>
            <motion.h2
              className="text-[#939393] text-4xl md:text-5xl font-bold uppercase mt-2"
              variants={titleVariants}
            >
              Vision
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          ref={imageSectionRef}
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-full md:w-10/12 overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={Aboutimg}
              className="w-full rounded-2xl shadow-xl h-64 md:h-96 object-cover"
              alt="Kofa Ibrahim"
              initial={{ scale: 1.1 }}
              animate={imageInView ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <Career_Milestone />
      <Contact />
      <Footer />
    </>
  );
};

export default About;
