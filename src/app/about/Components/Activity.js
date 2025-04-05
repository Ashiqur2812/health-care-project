"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Activity = () => {
    const activities = [
        {
            id: 1,
            title: "Medical Outreach",
            description: "Our team providing free health screenings in underserved communities",
            image: "https://i.ibb.co.com/rRNqFpvj/portfolio-1-lg.jpg",
            accent: "from-sky-500 to-cyan-400"
        },
        {
            id: 2,
            title: "Surgical Innovation",
            description: "Pioneering minimally invasive techniques for faster recovery",
            image: "https://i.ibb.co.com/nNbCTGxb/portfolio-2-lg-1.jpg",
            accent: "from-purple-500 to-fuchsia-500"
        },
        {
            id: 3,
            title: "Pediatric Care",
            description: "Creating joyful environments for our youngest patients",
            image: "https://i.ibb.co.com/3mLvSmFk/portfolio-3-lg-1.jpg",
            accent: "from-emerald-500 to-teal-400"
        },
        {
            id: 4,
            title: "Emergency Response",
            description: "24/7 critical care with state-of-the-art facilities",
            image: "https://i.ibb.co.com/yFLYLNrv/portfolio-4-lg.jpg",
            accent: "from-red-500 to-pink-500"
        },
        {
            id: 5,
            title: "Research Breakthroughs",
            description: "Advancing medical science through clinical trials",
            image: "https://i.ibb.co.com/d44tqJCv/portfolio-5-lg.jpg",
            accent: "from-amber-500 to-orange-400"
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

    const itemVariants = {
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

    return (
        <section className="relative py-10 bg-gradient-to-b from-teal-50 to-sky-50 overflow-hidden w-11/12 mx-auto">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-sky-400/10 blur-3xl"></div>
                <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-purple-400/10 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">Our Impact</span> in Action
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        Witness our commitment to healthcare excellence through these transformative initiatives and medical breakthroughs.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Text Card */}
                    <motion.div
                        className="md:col-span-2 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20"
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            HAVE A LOOK AT
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">Innovative</span> Healthcare Activities
                        </h2>
                        <p className="text-gray-600 text-lg">
                            From community outreach to cutting-edge research, we're pushing boundaries in medical care to deliver exceptional results for our patients.
                        </p>
                    </motion.div>

                    {/* Activity Cards */}
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            className={`relative group ${index === 0 ? 'md:row-span-2' : ''}`}
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            <motion.div
                                className={`h-full bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-lg ${index === 0 ? 'md:row-span-2' : ''}`}
                                variants={itemVariants}
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        src={activity.image}
                                        alt={activity.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-bold text-white mb-1">{activity.title}</h3>
                                        <p className="text-white/90 text-sm">{activity.description}</p>
                                    </div>
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${activity.accent} text-white backdrop-blur-sm`}>
                                        {index === 0 ? "Featured" : "Activity"}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Neon glow effect */}
                            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${activity.accent} blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
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
                        View All Activities
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Activity;