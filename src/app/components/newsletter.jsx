'use client'
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const constraintsRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-br from-teal-50 to-sky-50 py-20 overflow-hidden ">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <motion.div 
          ref={constraintsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div 
            animate={{
              x: [0, 100, 0],
              y: [0, -30, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-teal-100 opacity-30"
          />
          
          <motion.div 
            animate={{
              x: [0, -80, 0],
              y: [0, 40, 0],
              rotate: [0, -8, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-sky-100 opacity-30"
          />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Side - Text */}
            <div className="space-y-4">
              <motion.h6 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-800"
              >
                Stay <span className="text-teal-600">Updated</span>
              </motion.h6>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg"
              >
                Join our community of professionals and receive exclusive insights, 
                industry trends, and special offers directly to your inbox.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-teal-600"
              >
                <div className="w-8 h-px bg-teal-600"/>
                <span className="text-sm font-medium">No spam, unsubscribe anytime</span>
              </motion.div>
            </div>
            
            {/* Right Side - Form */}
            <div className="flex items-center">
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full space-y-4"
              >
                <div className="relative">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your professional email"
                    className="w-full px-6 py-4 text-gray-300 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    required
                    disabled={isSubmitting}
                    whileFocus={{ scale: 1.02 }}
                  />
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-8 left-0 text-teal-600 text-sm font-medium"
                    >
                      Thank you for subscribing!
                    </motion.div>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 rounded-lg font-medium text-white transition-all ${isSubmitting ? 'bg-teal-400' : 'bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <FiSend className="ml-2" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;