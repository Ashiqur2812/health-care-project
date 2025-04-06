import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaUserMd, FaStethoscope, FaRegCalendarAlt, FaArrowRight } from 'react-icons/fa';

const Card = ({ data }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group w-full mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky-400/20"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              transition: {
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3
              }
            }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}
      </div>

      {/* Image Section */}
      <motion.div
        className="relative w-full h-96 lg:h-[35rem] overflow-hidden object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={data?.image}
          alt={data?.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        {/* Specialty Badge */}
        <motion.div
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium shadow-lg"
          style={{
            backgroundColor: data?.category === 'Cardiologist' ? '#e63946' :
              data?.category === 'Neurologist' ? '#457b9d' :
                data?.category === 'Pediatrician' ? '#2a9d8f' : '#61bece'
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          {data?.category}
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6">
        <motion.h2
          className="text-xl sm:text-2xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {data?.name}
        </motion.h2>

        <motion.div
          className="flex items-center text-gray-500 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <FaUserMd className="mr-2" />
          <span className="text-sm">{data?.category || 'Medical Specialist'}</span>
        </motion.div>

        <motion.div
          className="flex items-center text-gray-500 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <FaRegCalendarAlt className="mr-2" />
          <span className="text-sm">{data?.experience || '10+'} years experience</span>
        </motion.div>

        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-5 line-clamp-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {data?.descriptions || 'Board-certified specialist providing exceptional patient care with cutting-edge treatments.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href={`/find-doctor/${data._id}`}
            className="inline-flex items-center justify-between w-full px-5 py-3 rounded-lg text-white font-medium transition-all duration-300 overflow-hidden text-sm sm:text-base"
            style={{
              background: `linear-gradient(135deg, ${data?.category === 'Cardiologist' ? '#e63946' :
                data?.category === 'Neurologist' ? '#457b9d' :
                  data?.category === 'Pediatrician' ? '#2a9d8f' : '#61bece'}, 
                                              ${data?.category === 'Cardiologist' ? '#c1121f' :
                  data?.category === 'Neurologist' ? '#315d7a' :
                    data?.category === 'Pediatrician' ? '#1a7a6d' : '#4a9ca9'})`,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}
            whileHover={{
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
            }}
          >
            <span>View Full Profile</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowRight />
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: `0 0 30px ${data?.category === 'Cardiologist' ? '#e6394640' :
            data?.category === 'Neurologist' ? '#457b9d40' :
              data?.category === 'Pediatrician' ? '#2a9d8f40' : '#61bece40'}`,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Card;
