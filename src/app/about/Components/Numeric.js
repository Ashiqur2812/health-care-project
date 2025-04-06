'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaUserMd, FaHeartbeat, FaMapMarkerAlt, FaThumbsUp } from 'react-icons/fa';
import CountUp from 'react-countup';

const Numeric = () => {
    const [startCount, setStartCount] = useState(false);
    const stats = [
        {
            value: 20,
            suffix: "+",
            label: "Years of Excellence",
            description: "Two decades of trusted medical care and innovation",
            icon: <FaHospital className="text-4xl" />,
            color: "from-blue-500 to-cyan-400"
        },
        {
            value: 95,
            suffix: "%",
            label: "Patient Satisfaction",
            description: "Consistently high ratings from our patients",
            icon: <FaThumbsUp className="text-4xl" />,
            color: "from-purple-500 to-fuchsia-500"
        },
        {
            value: 5000,
            suffix: "+",
            label: "Patients Served",
            description: "Annual patient visits across our network",
            icon: <FaUserMd className="text-4xl" />,
            color: "from-emerald-500 to-teal-400"
        },
        {
            value: 10,
            suffix: "+",
            label: "Specialty Centers",
            description: "Comprehensive healthcare facilities",
            icon: <FaHeartbeat className="text-4xl" />,
            color: "from-amber-500 to-orange-400"
        },
        {
            value: 20,
            suffix: "+",
            label: "Convenient Locations",
            description: "Accessible care across the region",
            icon: <FaMapMarkerAlt className="text-4xl" />,
            color: "from-rose-500 to-pink-500"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setStartCount(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(document.querySelector('.stats-container'));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative py-20 overflow-hidden w-11/12 mx-auto">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/4n63MsK9/fun-fact-bg.jpg')] bg-cover bg-center bg-no-repeat "></div>
            <div className="absolute inset-0 backdrop-blur-sm"></div>

            {/* Neon glow elements */}
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="stats-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20 flex flex-col items-center text-center"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }
                            }}
                            whileHover={{
                                y: -10,
                                transition: { type: "spring", stiffness: 300, damping: 10 }
                            }}
                        >
                            {/* Icon with gradient background */}
                            <div className={`mb-4 p-4 rounded-full bg-gradient-to-r ${stat.color} text-white shadow-lg`}>
                                {stat.icon}
                            </div>

                            {/* Animated counter */}
                            <h3 className="text-4xl text-teal-600 md:text-5xl font-bold mb-2">
                                {startCount && (
                                    <CountUp
                                        end={stat.value}
                                        duration={4.5}
                                        suffix={stat.suffix}
                                    />
                                )}
                            </h3>

                            {/* Stat label */}
                            <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>

                            {/* Description with subtle animation */}
                            <motion.p
                                className="text-gray-600 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {stat.description}
                            </motion.p>

                            {/* Neon glow effect on hover */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl -z-10"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 0.3,
                                    background: `radial-gradient(circle at center, var(--tw-gradient-from) 0%, transparent 70%)`
                                }}
                                style={{
                                    // Dynamically set gradient colors based on stat.color
                                    // This requires custom CSS variables or Tailwind config
                                    // For simplicity, we're using the first color from the gradient
                                    background: `radial-gradient(circle at center, #3b82f6 0%, transparent 70%)`
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Numeric;