"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaPhoneAlt, FaMapMarkerAlt, FaUserMd, FaCheck } from "react-icons/fa";

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        doctor: "",
        comments: "",
        date: "",
        time: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeField, setActiveField] = useState(null);

    const doctors = [
        { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiologist" },
        { id: 2, name: "Dr. Michael Wilson", specialty: "Dermatologist" },
        { id: 3, name: "Dr. Emily Davis", specialty: "Pediatrician" },
        { id: 4, name: "Dr. David Brown", specialty: "Orthopedic Surgeon" },
        { id: 5, name: "Dr. Olivia Martinez", specialty: "Gynecologist" },
        { id: 6, name: "Dr. Robert Chen", specialty: "Neurologist" }
    ];

    const availableTimes = [
        "09:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Appointment Booked:", formData);
        setIsSubmitted(true);
        // Here you would typically send the data to your backend
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -3,
            transition: { duration: 0.2 }
        }
    };

    const fieldFocusVariants = {
        focused: {
            boxShadow: "0 0 0 2px rgba(56, 182, 255, 0.5)",
            borderColor: "#38b6ff"
        }
    };

    const successVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 25
            }
        }
    };

    return (
        <div className="relative py-20 bg-gradient-to-b from-teal-50 to-sky-50 overflow-hidden min-h-screen w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
            {/* Floating decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#61bece]/10 blur-3xl animate-pulse"></div>
                <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-[#8a2be2]/10 blur-3xl animate-pulse"></div>
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/20 backdrop-blur-sm"
                        initial={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: 0
                        }}
                        animate={{
                            y: [0, -100, -200],
                            x: [0, (Math.random() - 0.5) * 50],
                            opacity: [0, 0.8, 0],
                            scale: [1, 1.5, 0.5]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 15,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, margin: "-100px" }}
            >
                {isSubmitted ? (
                    <motion.div
                        className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-12 text-center max-w-2xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={successVariants}
                    >
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaCheck className="text-green-500 text-4xl" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Appointment Confirmed!
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Thank you, {formData.name}. Your appointment with {doctors.find(d => d.id == formData.doctor)?.name} on {formData.date} at {formData.time} has been scheduled.
                        </p>
                        <p className="text-gray-500 mb-8">
                            We have sent confirmation details to {formData.email}. Please arrive 15 minutes early.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#61bece] to-[#8a2be2] text-white font-semibold py-3 px-8 rounded-lg shadow-lg"
                            onClick={() => setIsSubmitted(false)}
                        >
                            Book Another Appointment
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.div
                        className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20"
                        variants={itemVariants}
                    >
                        <div className="flex flex-col lg:flex-row">
                            {/* Glassmorphism Info Panel */}
                            <motion.div
                                    className="w-full lg:w-2/5 p-8 md:p-12 bg-gradient-to-r from-teal-600 to-sky-400 text-white relative overflow-hidden"
                                variants={itemVariants}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-sm"></div>
                                <div className="relative z-10">
                                    <motion.h1
                                        className="text-3xl md:text-4xl font-bold mb-6"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        Schedule Your <span className="text-white/90">Medical Visit</span>
                                    </motion.h1>

                                    <motion.div
                                        className="space-y-8"
                                        variants={containerVariants}
                                    >
                                        <motion.div
                                            className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10"
                                            variants={itemVariants}
                                            whileHover="hover"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-full bg-white/20">
                                                    <FaMapMarkerAlt className="text-xl" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                                                    <p className="opacity-90">8863 North Deerfield Street Bronx, NY 104609</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10"
                                            variants={itemVariants}
                                            whileHover="hover"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-full bg-white/20">
                                                    <FaClock className="text-xl" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                                                    <ul className="space-y-2 opacity-90">
                                                        <li className="flex justify-between">
                                                            <span>Monday - Friday:</span>
                                                            <span className="font-medium">9:00 AM - 5:00 PM</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Saturday:</span>
                                                            <span className="font-medium">10:00 AM - 2:00 PM</span>
                                                        </li>
                                                        <li className="flex justify-between text-white/70">
                                                            <span>Sunday:</span>
                                                            <span className="font-medium">Closed</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10"
                                            variants={itemVariants}
                                            whileHover="hover"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-full bg-white/20">
                                                    <FaPhoneAlt className="text-xl" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                                                    <ul className="space-y-2 opacity-90">
                                                        <li className="flex items-center gap-2">
                                                            <span>Main:</span>
                                                            <span className="font-medium">+1 (718) 789-2345</span>
                                                        </li>
                                                        <li className="flex items-center gap-2">
                                                            <span>Emergency:</span>
                                                            <span className="font-medium">+1 (718) 134-4554</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Floating animated elements */}
                                <motion.div
                                    className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10 backdrop-blur-sm"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.2, 0.4, 0.2]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2
                                    }}
                                />
                            </motion.div>

                            {/* Form Section */}
                            <motion.div
                                className="w-full lg:w-3/5 p-8 md:p-12"
                                variants={itemVariants}
                            >
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61bece] to-[#8a2be2]">Appointment</span>
                                </motion.h2>

                                <motion.p
                                    className="text-gray-600 mb-8 text-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    Complete this form to schedule your consultation with our specialists. We will contact you to confirm your appointment.
                                </motion.p>

                                <form onSubmit={handleSubmit}>
                                    <motion.div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-gray-700"
                                        variants={containerVariants}
                                    >
                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Full Name *
                                            </label>
                                            <motion.div
                                                variants={fieldFocusVariants}
                                                animate={activeField === 'name' ? "focused" : ""}
                                            >
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => setActiveField('name')}
                                                    onBlur={() => setActiveField(null)}
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#61bece] focus:ring-2 focus:ring-[#61bece]/30 transition-all"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </motion.div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Email Address *
                                            </label>
                                            <motion.div
                                                variants={fieldFocusVariants}
                                                animate={activeField === 'email' ? "focused" : ""}
                                            >
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => setActiveField('email')}
                                                    onBlur={() => setActiveField(null)}
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#8a2be2] focus:ring-2 focus:ring-[#8a2be2]/30 transition-all"
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </motion.div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Phone Number *
                                            </label>
                                            <motion.div
                                                variants={fieldFocusVariants}
                                                animate={activeField === 'phone' ? "focused" : ""}
                                            >
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => setActiveField('phone')}
                                                    onBlur={() => setActiveField(null)}
                                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#e63946] focus:ring-2 focus:ring-[#e63946]/30 transition-all"
                                                    placeholder="(123) 456-7890"
                                                    required
                                                />
                                            </motion.div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Select Doctor *
                                            </label>
                                            <motion.div
                                                variants={fieldFocusVariants}
                                                animate={activeField === 'doctor' ? "focused" : ""}
                                                className="relative"
                                            >
                                                <FaUserMd className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <select
                                                    name="doctor"
                                                    value={formData.doctor}
                                                    onChange={handleChange}
                                                    onFocus={() => setActiveField('doctor')}
                                                    onBlur={() => setActiveField(null)}
                                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#457b9d] focus:ring-2 focus:ring-[#457b9d]/30 appearance-none transition-all"
                                                    required
                                                >
                                                    <option value="" disabled>Select a specialist</option>
                                                    {doctors.map(doctor => (
                                                        <option key={doctor.id} value={doctor.id}>
                                                            {doctor.name} - {doctor.specialty}
                                                        </option>
                                                    ))}
                                                </select>
                                            </motion.div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Appointment Date *
                                            </label>
                                            <motion.div
                                                variants={fieldFocusVariants}
                                                animate={activeField === 'date' ? "focused" : ""}
                                                className="relative"
                                            >
                                                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    onFocus={() => setActiveField('date')}
                                                    onBlur={() => setActiveField(null)}
                                                    min={new Date().toISOString().split('T')[0]}
                                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#2a9d8f] focus:ring-2 focus:ring-[#2a9d8f]/30 appearance-none transition-all"
                                                    required
                                                />
                                            </motion.div>
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                Preferred Time *
                                            </label>
                                            <motion.div
                                                variants={fieldFocusVariants}
                                                animate={activeField === 'time' ? "focused" : ""}
                                                className="relative"
                                            >
                                                <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <select
                                                    name="time"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    onFocus={() => setActiveField('time')}
                                                    onBlur={() => setActiveField(null)}
                                                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#9b5de5] focus:ring-2 focus:ring-[#9b5de5]/30 appearance-none transition-all"
                                                    required
                                                >
                                                    <option value="" disabled>Select time slot</option>
                                                    {availableTimes.map(time => (
                                                        <option key={time} value={time}>{time}</option>
                                                    ))}
                                                </select>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="mb-8"
                                        variants={itemVariants}
                                    >
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Additional Notes
                                        </label>
                                        <motion.div
                                            variants={fieldFocusVariants}
                                            animate={activeField === 'comments' ? "focused" : ""}
                                        >
                                            <textarea
                                                name="comments"
                                                value={formData.comments}
                                                onChange={handleChange}
                                                onFocus={() => setActiveField('comments')}
                                                onBlur={() => setActiveField(null)}
                                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#ff6b6b] focus:ring-2 focus:ring-[#ff6b6b]/30 transition-all text-gray-700"
                                                rows="4"
                                                placeholder="Please describe your symptoms, concerns, or special requests..."
                                            ></textarea>
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <button
                                            type="submit"
                                                className="w-full bg-gradient-to-r from-teal-600 to-sky-400 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                <FaUserMd />
                                                Book Appointment Now
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-teal-400 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                            <motion.div
                                                className="absolute -inset-1 bg-white/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                animate={{
                                                    x: [0, 10, -10, 0],
                                                    y: [0, -5, 5, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </button>
                                    </motion.div>
                                </form>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default AppointmentForm;