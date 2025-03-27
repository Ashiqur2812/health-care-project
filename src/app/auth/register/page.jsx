// app/auth/register/page.js
'use client';
import { signIn } from "next-auth/react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiUser, FiArrowRight, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const router = useRouter();

    useEffect(() => {
        setIsVisible(true);
        const strength = calculatePasswordStrength(formData.password);
        setPasswordStrength(strength);
    }, [formData.password]);

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length > 5) strength += 1;
        if (password.length > 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        return Math.min(strength, 5);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        if (passwordStrength < 3) {
            setError('Password should be at least 8 characters with numbers and symbols');
            setLoading(false);
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSuccess(true);
            setTimeout(() => {
                router.push('/');
            }, 2000);
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // New animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const scaleIn = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 }
    };

    const passwordStrengthColors = [
        'bg-red-400',
        'bg-amber-400',
        'bg-yellow-400',
        'bg-lime-400',
        'bg-green-400'
    ];

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-900 to-teal-900 relative overflow-hidden">
                {/* Floating bubbles background */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                            style={{
                                width: Math.random() * 120 + 30,
                                height: Math.random() * 120 + 30,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0.1, 0.2, 0.1],
                                scale: [0, 1, 0],
                                y: [0, Math.random() * 200 - 100],
                                x: [0, Math.random() * 200 - 100],
                            }}
                            transition={{
                                duration: Math.random() * 15 + 10,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </div>

                {/* Geometric shapes */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2 }}
                >
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-teal-400/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-1/4 w-48 h-48 border-4 border-cyan-400/30 rotate-45"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>

                {/* Main content */}
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={scaleIn}
                            transition={{ duration: 0.5, type: 'spring', damping: 10 }}
                            className="relative z-10 w-full max-w-md px-6 py-8 mx-4"
                        >
                            {success ? (
                                <motion.div
                                    variants={fadeInUp}
                                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden p-8 text-center"
                                >
                                    <motion.div
                                        className="w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <FiCheck className="w-12 h-12 text-white" />
                                    </motion.div>
                                    <h2 className="text-3xl font-bold text-white mb-4">Welcome protectHealth!</h2>
                                    <p className="text-white/80 mb-6">Your account has been created successfully.</p>
                                    <motion.div
                                        className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-2"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 2 }}
                                    >
                                        <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-500"></div>
                                    </motion.div>
                                    <p className="text-sm text-white/60">Redirecting to home...</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    variants={staggerContainer}
                                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden p-8"
                                >
                                    {/* Header */}
                                    <motion.div variants={fadeInUp} className="text-center mb-8">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg flex items-center justify-center mx-auto mb-4"
                                        >
                                            <FiUser className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <motion.h2
                                            className="text-3xl font-bold text-white mb-1"
                                        >
                                            Join protectHealth
                                        </motion.h2>
                                        <motion.p className="text-white/70 text-sm">
                                            Start your journey with us today
                                        </motion.p>
                                    </motion.div>

                                    {/* Error message */}
                                    <AnimatePresence>
                                        {error && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="mb-6 bg-red-500/20 border border-red-500/30 p-3 rounded-lg"
                                            >
                                                <div className="flex items-center">
                                                    <FiAlertCircle className="h-5 w-5 text-red-300 mr-2" />
                                                    <span className="text-sm text-red-100">{error}</span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Registration form */}
                                    <motion.form
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                        variants={staggerContainer}
                                    >
                                        <motion.div variants={fadeInUp}>
                                            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiUser className="h-5 w-5 text-white/50" />
                                                </div>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    autoComplete="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/30 transition-all duration-200"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={fadeInUp}>
                                            <label className="block text-sm font-medium text-white/80 mb-2">
                                                Email address
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiMail className="h-5 w-5 text-white/50" />
                                                </div>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/30 transition-all duration-200"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={fadeInUp}>
                                            <label className="block text-sm font-medium text-white/80 mb-2">
                                                Password
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiLock className="h-5 w-5 text-white/50" />
                                                </div>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="new-password"
                                                    required
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/30 transition-all duration-200"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                            {formData.password && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    className="mt-2 space-y-1"
                                                >
                                                    <div className="flex gap-1.5">
                                                        {[...Array(5)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ scaleX: 0, originX: 0 }}
                                                                animate={{ scaleX: i < passwordStrength ? 1 : 0 }}
                                                                transition={{ delay: i * 0.1 }}
                                                                className={`h-1.5 flex-1 rounded-full ${passwordStrengthColors[i]}`}
                                                            ></motion.div>
                                                        ))}
                                                    </div>
                                                    <p className="text-xs text-white/50">
                                                        {passwordStrength < 2 ? 'Very weak' :
                                                            passwordStrength < 3 ? 'Weak' :
                                                                passwordStrength < 4 ? 'Moderate' :
                                                                    passwordStrength < 5 ? 'Strong' : 'Very strong'}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        <motion.div variants={fadeInUp}>
                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-2">
                                                Confirm Password
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FiLock className="h-5 w-5 text-white/50" />
                                                </div>
                                                <input
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    type="password"
                                                    autoComplete="new-password"
                                                    required
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    className="block w-full pl-10 pr-3 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/30 transition-all duration-200"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={fadeInUp}>
                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className={`w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200 ${loading ? 'opacity-80 cursor-not-allowed' : ''
                                                    }`}
                                            >
                                                {loading ? (
                                                    <>
                                                        <svg
                                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                            ></circle>
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            ></path>
                                                        </svg>
                                                        Creating your account...
                                                    </>
                                                ) : (
                                                    <>
                                                        Get Started <FiArrowRight className="ml-2" />
                                                    </>
                                                )}
                                            </button>
                                        </motion.div>
                                    </motion.form>

                                    {/* Divider */}
                                    <motion.div
                                        className="relative my-6"
                                        variants={fadeInUp}
                                    >
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-white/10"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="px-3 text-xs text-white/50 bg-white/5 rounded-full">
                                                Or continue with
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Social login buttons */}
                                    <motion.div
                                        className="grid grid-cols-3 gap-3"
                                        variants={staggerContainer}
                                    >
                                        <motion.button
                                            onClick={() => signIn('google')}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            variants={fadeInUp}
                                            className="flex items-center justify-center gap-2 py-2.5 px-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200"
                                        >
                                            <FaGoogle className="w-4 h-4 text-white" />
                                        </motion.button>

                                        <motion.button
                                            onClick={() => signIn('github')}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            variants={fadeInUp}
                                            className="flex items-center justify-center gap-2 py-2.5 px-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200"
                                        >
                                            <FaGithub className="w-4 h-4 text-white" />
                                        </motion.button>

                                        <motion.button
                                            onClick={() => signIn('twitter')}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            variants={fadeInUp}
                                            className="flex items-center justify-center gap-2 py-2.5 px-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200"
                                        >
                                            <FaTwitter className="w-4 h-4 text-white" />
                                        </motion.button>
                                    </motion.div>

                                    {/* Login link */}
                                    <motion.div
                                        className="mt-6 text-center"
                                        variants={fadeInUp}
                                    >
                                        <p className="text-sm text-white/60">
                                            Already have an account?{' '}
                                            <Link
                                                href="/login"
                                                className="font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
                                            >
                                                Sign in
                                            </Link>
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}