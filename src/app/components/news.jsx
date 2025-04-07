"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "The Future of Telemedicine",
    description: "Discover how telemedicine is revolutionizing patient care with virtual consultations, remote monitoring, and AI-assisted diagnostics that bring healthcare to your fingertips.",
    date: "March 26, 2025",
    image: "https://i.ibb.co.com/v6LMM0B6/Getty-Images-2027653518.jpg",
    category: "Technology",
    accent: "bg-sky-500/10 border-sky-500/30 text-sky-500"
  },
  {
    id: 2,
    title: "AI in Healthcare: A Game Changer",
    description: "Explore how machine learning algorithms are enhancing diagnostic accuracy, predicting patient outcomes, and personalizing treatment plans for better healthcare delivery.",
    date: "March 20, 2025",
    image: "https://i.ibb.co.com/YBq9JyJ8/493216423-56a46de65f9b58b7d0d6f3a2.jpg",
    category: "Innovation",
    accent: "bg-purple-500/10 border-purple-500/30 text-purple-500"
  },
  {
    id: 3,
    title: "Holistic Health Strategies",
    description: "Evidence-based approaches combining nutrition, exercise, and mindfulness to optimize your wellbeing and prevent chronic diseases before they start.",
    date: "March 15, 2025",
    image: "https://i.ibb.co.com/b5vq1ydG/Medical-doctors-and-nurse-practitioners-discuss-paperwork-in-a-hallway.jpg",
    category: "Wellness",
    accent: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500"
  },
];

const NewsSection = () => {
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-sky-50 relative overflow-hidden">
      <div className='w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto'>
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-sky-400/10 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-purple-400/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">Medical</span> Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with cutting-edge research, innovative treatments, and wellness strategies from our healthcare experts.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  className="h-full bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg"
                  variants={hoverVariants}
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-sm z-0"></div>

                  {/* Image with gradient overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${blog.accent} backdrop-blur-sm`}>
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6 relative z-10">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FaCalendarAlt className="mr-2" />
                      {blog.date}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mb-5">
                      {blog.description}
                    </p>

                    <motion.a
                      href="#"
                      className="inline-flex items-center font-medium text-sky-600 group-hover:text-sky-700 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Read article
                      <motion.span
                        className="ml-2"
                        animate={{
                          x: [0, 5, 0],
                          transition: {
                            duration: 1.5,
                            repeat: Infinity
                          }
                        }}
                      >
                        <FaArrowRight />
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Neon glow effect */}
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/30 to-cyan-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
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
              View All Articles
              <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;