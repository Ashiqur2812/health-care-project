'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaChevronRight, FaPaperPlane } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovering, setIsHovering] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const socialIcons = [
    { icon: FaFacebookF, color: 'hover:text-[#3b5998]' },
    { icon: FaTwitter, color: 'hover:text-[#1da1f2]' },
    { icon: FaInstagram, color: 'hover:text-[#e1306c]' },
    { icon: FaLinkedinIn, color: 'hover:text-[#0077b5]' },
    { icon: FaYoutube, color: 'hover:text-[#ff0000]' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Departments', path: '/departments' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 6:30 PM' },
    { day: 'Sunday', time: 'Emergency Only' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a3d62] to-[#082032] text-white pt-16 pb-8">
      {/* Animated wave divider */}
      <div className="relative -top-1 h-16 w-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0iIzBhM2Q2MiIgZD0iTTAsNjRDMTAwLDk2IDIwMCwzMiAzMDAsODBDNDAwLDEyOCA1MDAsMCA2MDAsNjRDODAwLDEyOCA5MDAsMCAxMDAwLDY0QzExMDAsMTI4IDEyMDAsMzIgMTIwMCw2NEwxMjAwLDEyMEwwLDEyMFoiLz48L3N2Zz4=')] bg-cover bg-bottom"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              <span className="relative z-10">About HealthCare+</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-teal-400 z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
              />
            </h3>
            <p className="text-gray-300 mb-6">
              HealthCare+ is a leading healthcare provider dedicated to delivering exceptional medical services with compassion and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ icon: Icon, color }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`bg-white bg-opacity-10 p-2 rounded-full text-gray-300 ${color} transition-colors`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setIsHovering(index)}
                  onMouseLeave={() => setIsHovering(null)}
                  className="relative overflow-hidden"
                >
                  <Link href={link.path} className="flex items-center text-gray-300 hover:text-teal-400 transition-colors">
                    <motion.span
                      animate={{
                        x: isHovering === index ? 5 : 0,
                        color: isHovering === index ? '#4fd1c5' : '#d1d5db'
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <FaChevronRight size={12} className="mr-2" />
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Opening Hours</h3>
            <p className="text-gray-300 mb-4">We are here when you need us most.</p>
            <ul className="space-y-4">
              {hours.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center bg-white bg-opacity-5 p-3 rounded-lg"
                >
                  <span className="text-gray-300">{item.day}</span>
                  <span className="font-medium text-teal-400">{item.time}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Health Updates</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive the latest health tips, news, and special offers.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <AnimatePresence>
                {isSubscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-teal-500 bg-opacity-20 border border-teal-400 p-3 rounded-lg flex items-center"
                  >
                    <IoMdCheckmarkCircleOutline className="text-teal-400 mr-2" size={20} />
                    <span className="text-sm">Thank you for subscribing!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-gray-400"
                      required
                    />
                    <motion.button
                      type="submit"
                      className="bg-teal-500 hover:bg-teal-600 px-4 rounded-r-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPaperPlane size={18} />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} HealthCare+ Healthcare. All rights reserved. |{' '}
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;