'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserMd, FaStethoscope, FaHospital, FaArrowRight, FaAward } from 'react-icons/fa';
import Image from 'next/image';

const Expert = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson, MD",
      specialty: "Cardiologist",
      experience: 15,
      image: "https://i.ibb.co.com/b5GQGSck/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
      accent: "#FF4D4D",
      description: "Harvard-trained interventional cardiologist specializing in complex coronary procedures with 98% success rate.",
      stats: [
        { icon: <FaUserMd />, value: "5200+", label: "Patients" },
        { icon: <FaStethoscope />, value: "1250", label: "Procedures" },
        { icon: <FaAward />, value: "8", label: "Awards" }
      ]
    },
    {
      id: 2,
      name: "Dr. James Lee, MD",
      specialty: "Neurologist",
      experience: 12,
      image: "https://i.ibb.co.com/8n1sTHCr/stock-photo-portrait-of-handsome-male-doctor-with-stethoscope-over-neck-working-while-looking-at-cam.jpg",
      accent: "#4D79FF",
      description: "Pioneer in minimally invasive neurosurgical techniques with publications in 15 peer-reviewed journals.",
      stats: [
        { icon: <FaUserMd />, value: "3800+", label: "Patients" },
        { icon: <FaStethoscope />, value: "980", label: "Procedures" },
        { icon: <FaAward />, value: "5", label: "Awards" }
      ]
    },
    {
      id: 3,
      name: "Dr. Maryam Yusuf, MD",
      specialty: "Orthopedic Surgeon",
      experience: 18,
      image: "https://i.ibb.co.com/d0TzGzNF/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg",
      accent: "#2ECC71",
      description: "Developer of innovative joint preservation techniques with international recognition in sports medicine.",
      stats: [
        { icon: <FaUserMd />, value: "7500+", label: "Patients" },
        { icon: <FaStethoscope />, value: "2100", label: "Procedures" },
        { icon: <FaAward />, value: "12", label: "Awards" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.4,
      scale: 1,
      transition: {
        duration: 0.6
      }
    },
    exit: { opacity: 0 }
  };

  return (
    <div className="relative py-24 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#61bece]/10 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#8a2be2]/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-lg font-semibold text-gray-500 mb-3 tracking-widest"
            variants={textVariants}
          >
            MEET OUR SPECIALISTS
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            variants={textVariants}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61bece] to-[#8a2be2]">Expert </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61bece] to-[#8a2be2]">Physicians</span> 
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Board-certified specialists combining cutting-edge expertise with compassionate, personalized care.
          </motion.p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              className="relative group"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(doctor.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Glassmorphism Card */}
              <div className="h-full bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-300 flex flex-col">
                {/* Image with gradient overlay */}
                <div className="relative overflow-hidden h-80">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div
                    className={`absolute top-4 right-4 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg`}
                    style={{ backgroundColor: doctor.accent }}
                  >
                    {doctor.specialty}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-gray-600 mb-6">{doctor.description}</p>

                  {/* Doctor Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {doctor.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center text-lg mb-1" style={{ color: doctor.accent }}>
                          {stat.icon}
                          <span className="ml-2 font-bold">{stat.value}</span>
                        </div>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="#"
                    className={`mt-auto inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all`}
                    style={{
                      backgroundColor: doctor.accent,
                      color: 'white'
                    }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: `0 10px 25px -5px ${doctor.accent}80`
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Consultation
                    <FaArrowRight className="ml-2" />
                  </motion.a>
                </div>
              </div>

              {/* Neon glow effect */}
              <AnimatePresence>
                {hoveredCard === doctor.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
                    style={{
                      background: `radial-gradient(circle at center, ${doctor.accent}40 0%, transparent 70%)`
                    }}
                    variants={glowVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Expert;