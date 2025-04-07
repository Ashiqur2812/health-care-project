'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserMd, FaStethoscope, FaHospital, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaStar, FaRegStar, FaArrowLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const DoctorDetails = ({ params }) => {
    const [doctor, setDoctor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('about');
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const router = useRouter();
    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    // Set your medical center's coordinates
    const center = {
        lat: 37.7749,  // Replace with your latitude
        lng: -122.4194 // Replace with your longitude
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`http://localhost:3000/api/doctors/${params.id}`);
                const data = await res.json();
                setDoctor(data);
                console.log(data)
            } catch (error) {
                console.error("Failed to fetch doctor data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [params.id]);

    // Generate rating stars
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaStar key={i} className="text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-sky-50 to-teal-50 flex items-center justify-center">
                <motion.div
                    animate={{
                        rotate: 360,
                        transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    }}
                    className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    if (!doctor) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-teal-50 to-sky-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Doctor Not Found</h2>
                    <p className="text-gray-600 mb-6">The requested doctor profile could not be loaded.</p>
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                    >
                        Return to Doctors
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-50 to-sky-50">
            {/* Floating background particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-sky-400/10"
                        initial={{
                            x: Math.random() * 100,
                            y: Math.random() * 100,
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            x: [0, Math.random() * 200 - 100],
                            y: [0, Math.random() * 200 - 100],
                            opacity: [0, 0.3, 0],
                            scale: [0, 1, 0],
                            transition: {
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear"
                            }
                        }}
                        style={{
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            {/* Back button */}
            <motion.button
                onClick={() => router.back()}
                className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: -5 }}
            >
                <FaArrowLeft className="text-teal-500" />
                <span className="font-medium text-teal-600">Back</span>
            </motion.button>

            <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto py-20 relative">
                {/* Doctor Profile Header */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Doctor Image */}
                        <div className="relative w-full md:w-1/3 h-96 md:h-auto">
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"></div>
                            {!isImageLoaded && (
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse"></div>
                            )}
                            <Image
                                src={doctor.image || '/default-doctor.jpg'}
                                alt={doctor.name}
                                fill
                                className="object-cover"
                                onLoadingComplete={() => setIsImageLoaded(true)}
                            />

                            {/* Specialty Badge */}
                            <motion.div
                                className="absolute top-6 left-6 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg bg-gradient-to-r from-sky-500 to-cyan-400"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {doctor.category || 'Medical Specialist'}
                            </motion.div>
                        </div>

                        {/* Doctor Info */}
                        <div className="p-8 md:p-10 flex-1">
                            <motion.h1
                                className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {doctor.name}
                            </motion.h1>

                            <motion.div
                                className="flex items-center gap-2 mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="flex">
                                    {renderStars(doctor.rating || 4.8)}
                                </div>
                                <span className="text-gray-600">({doctor.reviews || 124} reviews)</span>
                            </motion.div>

                            <motion.p
                                className="text-gray-600 mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {doctor.descriptions || 'Board-certified physician with extensive experience providing exceptional patient care.'}
                            </motion.p>

                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-full bg-sky-100 text-sky-500">
                                        <FaHospital />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-500">{doctor.experience || 10}+ Years</h4>
                                        <p className="text-sm text-gray-500">Experience</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-full bg-green-100 text-green-500">
                                        <FaStethoscope />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-500">{doctor.category || 'General'}</h4>
                                        <p className="text-sm text-gray-500">Specialty</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-full bg-purple-100 text-purple-500">
                                        <FaUserMd />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-500">{doctor.patients || 5000}+</h4>
                                        <p className="text-sm text-gray-500">Patients</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-full bg-amber-100 text-amber-500">
                                        <FaStar />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-500">{doctor.successRate || 95}%</h4>
                                        <p className="text-sm text-gray-500">Success Rate</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                                >
                                    <div className="flex items-center gap-2">
                                        <FaPhone />
                                        <span>Book Appointment</span>
                                    </div>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium shadow hover:shadow-md transition-all"
                                >
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt />
                                        <span>View Availability</span>
                                    </div>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Doctor Details Tabs */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200">
                        <nav className="flex overflow-x-auto">
                            {['about', 'services', 'reviews', 'location'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? 'border-sky-500 text-sky-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeTab === 'about' && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">  About Dr. {doctor?.name?.split(' ')[1] || doctor?.name || 'Name'}</h3>
                                        <p className="text-gray-600 mb-4">
                                            {doctor?.bio ||
                                                `Dr. ${doctor?.name?.split(' ')[1] || doctor?.name || 'Name'} is a board-certified physician with extensive experience in ${doctor?.category || 'various medical fields'}. With a patient-centered approach, Dr. ${doctor?.name?.split(' ')[1] || doctor?.name || 'Name'} combines cutting-edge medical knowledge with compassionate care.`
                                            }
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-sky-600 mt-1">•</span>
                                                        <span className='text-teal-500'>MD, {doctor.medicalSchool || 'Harvard Medical School'}</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-sky-500 mt-1">•</span>
                                                        <span className='text-teal-500'>Residency at {doctor.residency || 'Massachusetts General Hospital'}</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-sky-500 mt-1">•</span>
                                                        <span className='text-teal-500'>Fellowship in {doctor.fellowship || doctor.category || 'Cardiology'}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Certifications</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-sky-500 mt-1">•</span>
                                                        <span className='text-teal-500'>Board Certified in {doctor.category || 'Internal Medicine'}</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-sky-500 mt-1">•</span>
                                                        <span className='text-teal-500'>{doctor.certifications || 'American Board of Medical Specialties'}</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-sky-500 mt-1">•</span>
                                                        <span className='text-teal-500'>{doctor.licenses || 'State Medical License'}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'services' && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Services & Treatments</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-teal-600">
                                            {[
                                                'General Consultation',
                                                'Diagnostic Tests',
                                                'Preventive Care',
                                                'Chronic Disease Management',
                                                'Minor Procedures',
                                                'Health Screenings'
                                            ].map((service, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="p-4 border border-gray-200 rounded-lg hover:border-sky-300 hover:shadow-md transition-all"
                                                    whileHover={{ y: -5 }}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 rounded-full bg-sky-100 text-sky-500">
                                                            <FaStethoscope />
                                                        </div>
                                                        <h4 className="font-medium">{service}</h4>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'reviews' && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Patient Reviews</h3>
                                        <div className="space-y-6">
                                            {[1, 2, 3].map((review) => (
                                                <motion.div
                                                    key={review}
                                                    className="p-6 bg-gray-50 rounded-lg"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: review * 0.1 }}
                                                >
                                                    <div className="flex items-center gap-4 mb-3">
                                                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                                            {review === 1 ? 'JD' : review === 2 ? 'AS' : 'MK'}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-teal-600">
                                                                {review === 1 ? 'John D.' : review === 2 ? 'Amanda S.' : 'Michael K.'}
                                                            </h4>
                                                            <div className="flex">
                                                                {renderStars(review === 1 ? 5 : review === 2 ? 4 : 5)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600">
                                                        {review === 1
                                                            ? "Dr. " + doctor?.name?.split(' ')[1] + " provided exceptional care during my recent visit. The attention to detail and clear explanations made me feel completely at ease."
                                                            : review === 2
                                                                ? "Very professional and knowledgeable. The office staff was also very friendly and helpful. Would definitely recommend!"
                                                                : "I've been seeing Dr. " + doctor?.name?.split(' ')[1] + " for years and couldn't be happier with the care I've received."}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'location' && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Location & Contact</h3>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            <div>
                                                <div className="flex items-start gap-4 mb-6">
                                                    <div className="p-3 rounded-full bg-sky-100 text-sky-500 mt-1">
                                                        <FaMapMarkerAlt />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-1">Medical Center</h4>
                                                        <p className="text-gray-600">
                                                            {doctor.address || '123 Medical Drive, Suite 456'}
                                                            <br />
                                                            {doctor.city || 'Boston'}, {doctor.state || 'MA'} {doctor.zip || '02115'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4 mb-6">
                                                    <div className="p-3 rounded-full bg-green-100 text-green-500 mt-1">
                                                        <FaPhone />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-1">Contact</h4>
                                                        <p className="text-gray-600">
                                                            Phone: {doctor.phoneNumber || '(555) 123-4567'}
                                                            <br />
                                                            Fax: {doctor.fax || '(555) 123-4568'}
                                                            <br />
                                                            Email: {doctor.email || 'contact@medicalcenter.com'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4">
                                                    <div className="p-3 rounded-full bg-purple-100 text-purple-500 mt-1">
                                                        <FaCalendarAlt />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                                                        <p className="text-gray-600">
                                                            Monday - Friday: 8:00 AM - 5:00 PM
                                                            <br />
                                                            Saturday: 9:00 AM - 1:00 PM
                                                            <br />
                                                            Sunday: Closed
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-lg overflow-hidden h-64">
                                                <LoadScript
                                                    googleMapsApiKey="AIzaSyB8TQFKhD2gdq5VNp4d3uG4JJ-fNnM1i4U" // Replace with your actual API key
                                                >
                                                    <GoogleMap
                                                        mapContainerStyle={containerStyle}
                                                        center={center}
                                                        zoom={15} // Adjust zoom level as needed
                                                    >
                                                        {/* Marker for your medical center */}
                                                        <Marker position={center} />
                                                    </GoogleMap>
                                                </LoadScript>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DoctorDetails;