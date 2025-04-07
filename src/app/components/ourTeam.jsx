"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";

const teamMembers = [
  {
    id: 1,
    image: "/img/doctor1.jpg",
    name: "Dr. Will Smith",
    designation: "Neurologist",
    specialty: "Epilepsy & Movement Disorders",
    experience: "15+ years",
    accent: "from-purple-500 to-indigo-600"
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/8n1sTHCr/stock-photo-portrait-of-handsome-male-doctor-with-stethoscope-over-neck-working-while-looking-at-cam.jpg",
    name: "Dr. Sarah Johnson",
    designation: "Cardiologist",
    specialty: "Interventional Cardiology",
    experience: "12+ years",
    accent: "from-red-500 to-pink-600"
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/d0TzGzNF/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg",
    name: "Dr. David Brown",
    designation: "Orthopedic Surgeon",
    specialty: "Joint Replacement Specialist",
    experience: "18+ years",
    accent: "from-sky-500 to-cyan-500"
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/R1mgrck/premium-photo-1658506671316-0b293df7c72b-fm-jpg-q-60-w-3000-ixlib-rb-4-0.jpg",
    name: "Dr. Emily Davis",
    designation: "Pediatrician",
    specialty: "Neonatal Care",
    experience: "10+ years",
    accent: "from-emerald-500 to-teal-600"
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/7JnQyrhr/young-male-doctor-close-up-happy-looking-camera-56751540.jpg",
    name: "Dr. Michael Wilson",
    designation: "Dermatologist",
    specialty: "Cosmetic Dermatology",
    experience: "14+ years",
    accent: "from-amber-500 to-orange-500"
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/m5GR1LXc/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
    name: "Dr. Olivia Martinez",
    designation: "Gynecologist",
    specialty: "High-Risk Pregnancies",
    experience: "16+ years",
    accent: "from-rose-500 to-fuchsia-600"
  },
  {
    id: 7,
    image: "https://i.ibb.co.com/jPBHvmMQ/360-F-260040900-o-O6-YW1s-HTn-Kxby4-Gcj-Cvtyp-UCWjn-QRg5.jpg",
    name: "Dr. James Anderson",
    designation: "Oncologist",
    specialty: "Hematologic Malignancies",
    experience: "20+ years",
    accent: "from-green-500 to-lime-500"
  },
  {
    id: 8,
    image: "https://i.ibb.co.com/T6Hx6cy/2a0e8cb609405d9ca87bc81154b9c443.jpg",
    name: "Dr. Sophia Lee",
    designation: "Psychiatrist",
    specialty: "Cognitive Behavioral Therapy",
    experience: "11+ years",
    accent: "from-violet-500 to-purple-600"
  },
];

const OurTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hover: {
      y: -5,
      scale: 1.2,
      transition: { type: "spring", stiffness: 500 }
    }
  };

  return (
    <section className="relative py-10 bg-gradient-to-b from-sky-50 to-teal-50 overflow-hidden ">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-sky-400/10 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-purple-400/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">Medical Specialists</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our board-certified physicians dedicated to providing exceptional care with cutting-edge treatments and compassionate service.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  className="h-full bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg"
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-sm z-0"></div>

                  {/* Image with gradient overlay */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                    {/* Specialty badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${member.accent} text-white backdrop-blur-sm`}>
                        <RiMedicineBottleLine className="mr-2" />
                        {member.specialty}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>

                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.accent} font-semibold mb-3`}>
                      {member.designation}
                    </p>

                    <p className="text-sm text-gray-600 mb-4">
                      {member.experience} experience
                    </p>

                    <motion.div
                      className="flex justify-center gap-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                        <motion.a
                          key={index}
                          href="#"
                          className="p-2 rounded-full bg-gray-100 text-gray-700 hover:text-white"
                          variants={iconVariants}
                          whileHover="hover"
                          style={{
                            background: `linear-gradient(135deg, rgba(0, 77, 77, 0.8) 0%, rgba(0, 128, 128, 0.5) 100%)`
                          }}
                        >
                          <Icon className="text-sm" />
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Neon glow effect */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${member.accent} blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              View All Specialists
              <FaLinkedinIn className="ml-2" />
            </a>
          </motion.div>
        </div>
     </div>
    </section>
  );
};

export default OurTeam;