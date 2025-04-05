<<<<<<< HEAD
"use client";
=======
// this is just demo design page to get data real ldesign will made by frontend side developer
import Card from "../Components/Card";
import Image from "next/image";
>>>>>>> ad21d0725fe5e88f93ec593a4ec7ffc04ecf74bd

import { motion } from "framer-motion";
import Card from "../Components/Card";
import { useEffect, useState } from "react";

const fetchDoctors = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/doctors/get", {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch (Status ${res.status})`);
    }
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
<<<<<<< HEAD
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
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
          Discover compassionate care from certified specialists dedicated to your health journey.
          Personalized expertise in one place, tailored to meet your every need.
        </motion.p>
      </div>

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
    </motion.div>
=======
    <div className="mb-8 text-center space-y-3 ">
      <div className="relative flex flex-col md:flex-row items-center justify-between container mx-auto px-4 lg:px-24  bg-gradient-to-r from-[#d2eaef] to-[#ABD1F2] ">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Introduce You to
            <br className="hidden md:block" />
            Our Experts
          </h1>
          <p className="text-gray-600 mt-4">
            The list of certified doctors with years of professional experiences
          </p>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/img/banner_img3.png"
            alt="Doctor"
            width={800}
            height={800}
            className="rounded-lg max-w-sm lg:max-w-2xl"
          />
        </div>
      </div>
      <div>
        <p className="text-gray-600 my-10">
          sort by category</p>
        <div className="px-4 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas?.map((doctor, index) => (
          <Card key={index} data={doctor}>
            {" "}
          </Card>
        ))}
      </div>
      </div>
      
    </div>
>>>>>>> ad21d0725fe5e88f93ec593a4ec7ffc04ecf74bd
  );
};

export default Page;
