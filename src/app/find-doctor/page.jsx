"use client";

import Card from "../Components/Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fetchDoctors = async () => {
  try {
    const res = await fetch("/api/doctors/get", {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Failed to fetch (Status ${res.status})`);
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

const Page = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors().then(setDoctors);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-b from-teal-50 to-sky-50 py-12"
    >
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-sky-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Meet Our Elite Medical Team
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover compassionate care from certified specialists dedicated to
            your health journey. Personalized expertise in one place, tailored to
            meet your every need.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card data={doctor} />
            </motion.div>
          ))}
        </motion.div>
     </div>
    </motion.div>
  );
};

export default Page;
