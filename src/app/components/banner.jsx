"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Parallax } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "/img/slider.jpg",
      title: "Advanced Healthcare",
      highlight: "Tailored For You",
      description: "Our board-certified specialists provide personalized treatment plans using the latest medical technologies for optimal health outcomes.",
      button1: "Book Appointment",
      button2: "Our Services",
      accent: "#61bece"
    },
    {
      id: 2,
      image: "/img/slider2.jpg",
      title: "Compassionate",
      highlight: "Patient Care",
      description: "Experience healthcare with a human touch - where your comfort and wellbeing are our top priorities at every visit.",
      button1: "Meet Our Team",
      button2: "Patient Stories",
      accent: "#4f8a8b"
    },
    {
      id: 3,
      image: "/img/slider3.jpg",
      title: "24/7 Emergency",
      highlight: "Medical Services",
      description: "Immediate care when you need it most. Our emergency department is staffed round-the-clock with trauma specialists.",
      button1: "Emergency Info",
      button2: "Locations",
      accent: "#3a7bd5"
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.6 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="relative w-full h-screen max-h-[900px] min-h-[600px] overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Parallax]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        loop={true}
        parallax={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background with Parallax Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: "scale(1.1)"
                }}
                data-swiper-parallax="-30%"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/20 backdrop-blur-sm"
                  initial={{
                    width: `${Math.random() * 6 + 4}px`,
                    height: `${Math.random() * 6 + 4}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0
                  }}
                  animate={{
                    y: [0, -100, -200],
                    x: [0, (Math.random() - 0.5) * 40],
                    opacity: [0, 0.8, 0],
                    scale: [1, 1.5, 0.5]
                  }}
                  transition={{
                    duration: Math.random() * 8 + 8,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "linear"
                  }}
                />
              ))}

              {/* Content */}
              <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-24 relative z-10">
                <motion.div
                  className="max-w-2xl text-white"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                >
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    variants={textVariants}
                    data-swiper-parallax="-200"
                  >
                    {slide.title} <span
                      className="text-[${slide.accent}] drop-shadow-[0_0_10px_rgba(97,190,206,0.5)]"
                      style={{ color: slide.accent }}
                    >
                      {slide.highlight}
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg leading-relaxed"
                    variants={textVariants}
                    data-swiper-parallax="-150"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.1 }
                      }
                    }}
                    data-swiper-parallax="-100"
                  >
                    <motion.a
                      href="#"
                      className="relative overflow-hidden px-8 py-4 rounded-xl font-semibold text-sm md:text-base shadow-lg"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        backgroundColor: slide.accent,
                        color: 'white'
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {slide.button1}
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{ backgroundColor: slide.accent }}
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.a>

                    <motion.a
                      href="#"
                      className="relative overflow-hidden bg-transparent border-2 border-white/30 hover:border-white/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-sm md:text-base"
                      variants={buttonVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                      }}
                      whileTap="tap"
                    >
                      <span className="relative z-10">
                        {slide.button2}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-next group !w-14 !h-14 !rounded-full !bg-white/10 !backdrop-blur-md !border !border-white/20 after:!text-[#61bece] after:!text-2xl hover:!bg-white/20 transition-all">
          <div className="absolute inset-0 rounded-full bg-[#61bece]/10 group-hover:bg-[#61bece]/20 transition-all"></div>
        </div>
        <div className="swiper-button-prev group !w-14 !h-14 !rounded-full !bg-white/10 !backdrop-blur-md !border !border-white/20 after:!text-[#61bece] after:!text-2xl hover:!bg-white/20 transition-all">
          <div className="absolute inset-0 rounded-full bg-[#61bece]/10 group-hover:bg-[#61bece]/20 transition-all"></div>
        </div>

        {/* Animated Pagination */}
        <div className="swiper-pagination !bottom-8 [--swiper-pagination-color:theme(colors.accent)] [--swiper-pagination-bullet-size:10px] [--swiper-pagination-bullet-horizontal-gap:6px] [--swiper-pagination-bullet-inactive-color:white] [--swiper-pagination-bullet-inactive-opacity:0.4]"></div>
      </Swiper>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          className="flex flex-col items-center"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="text-white text-xs mb-2 font-medium tracking-widest opacity-80">EXPLORE MORE</div>
          <div className="relative w-6 h-10 rounded-full border-2 border-white/40 flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{
                y: [0, 8, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;