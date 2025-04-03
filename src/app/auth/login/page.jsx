'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLock, FiAlertCircle, FiUser, FiArrowRight } from 'react-icons/fi';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { signIn, useSession } from "next-auth/react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'animate.css';

const MySwal = withReactContent(Swal);

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        setIsVisible(true);

        // Redirect if already logged in
        // if (status === 'authenticated') {
        //     router.push('/');
        // }
    }, []);

    const showSuccessAlert = () => {
        return MySwal.fire({
            title: <p className="text-2xl font-bold">Welcome back!</p>,
            html: (
                <div className="text-center">
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        className="mx-auto mb-4"
                    >
                        <FiUser className="w-16 h-16 text-green-400 mx-auto" />
                    </motion.div>
                    <p className="text-lg text-gray-100">You have successfully logged in!</p>
                </div>
            ),
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            background: '#1e293b',
            color: '#ffffff',
            backdrop: `
                rgba(0,0,0,0.7)
                url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")
                left top
                no-repeat
            `,
            customClass: {
                popup: 'border-2 border-green-500 rounded-xl shadow-2xl',
                title: 'text-green-400',
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });

            if (result?.error) {
                setError(result.error || 'Login failed');
            } else {
                await showSuccessAlert();
                router.push('/');
            }
        } catch (err) {
            setError('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = async (provider) => {
        setLoading(true);
        setError('');

        try {
            const result = await signIn(provider, {
                callbackUrl: '/',
                redirect: false
            });

            if (result?.error) {
                setError(result.error || 'Authentication failed');
            } else {
                await showSuccessAlert();
                router.push('/');
            }
        } catch (error) {
            setError('Authentication failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-900 to-sky-900 relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2 }}
            >
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, Math.random() * 100 - 50],
                            x: [0, Math.random() * 100 - 50],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </motion.div>

            {/* Main content with glassmorphism effect */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="relative z-10 w-full max-w-md px-8 py-12 mx-4"
                    >
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden p-10"
                        >
                            {/* Logo/Header */}
                            <motion.div variants={itemVariants} className="text-center mb-10">
                                <div className="flex justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6"
                                    >
                                        <FiUser className="w-10 h-10 text-white" />
                                    </motion.div>
                                </div>
                                <motion.h2 className="text-3xl font-bold text-white mb-2">
                                    Welcome Back
                                </motion.h2>
                                <motion.p className="text-white/70">
                                    Sign in to access this website
                                </motion.p>
                            </motion.div>

                            {/* Error message */}
                            <AnimatePresence>
                                {error && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="mb-6 bg-red-500/10 border-l-4 border-red-500 p-4 rounded-lg"
                                    >
                                        <div className="flex items-center">
                                            <FiAlertCircle className="h-5 w-5 text-red-500 mr-2" />
                                            <span className="text-sm text-red-100">{error}</span>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Login form */}
                            <motion.form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                variants={containerVariants}
                            >
                                <motion.div variants={itemVariants}>
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full pl-10 pr-3 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
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
                                            autoComplete="current-password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full pl-10 pr-3 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 ${loading ? 'opacity-75 cursor-not-allowed' : ''
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
                                                Signing in...
                                            </>
                                        ) : (
                                            <>
                                                Sign in <FiArrowRight className="ml-2" />
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            </motion.form>

                            {/* Divider */}
                            <motion.div className="relative my-8" variants={itemVariants}>
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-white/20"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="px-2 text-sm text-white/50 bg-transparent">
                                        Or continue with
                                    </span>
                                </div>
                            </motion.div>

                            {/* Social login buttons */}
                            <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
                                <motion.button
                                    onClick={() => handleSocialLogin('google')}
                                    disabled={loading}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    variants={itemVariants}
                                    className="flex items-center justify-center gap-2 py-2.5 px-4 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 disabled:opacity-50"
                                >
                                    <FaGoogle className="text-pink-600 hover:text-sky-600 transition-all duration-300" size={30} />
                                    <span className="text-sm font-medium text-white">Google</span>
                                </motion.button>

                                <motion.button
                                    onClick={() => handleSocialLogin('github')}
                                    disabled={loading}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    variants={itemVariants}
                                    className="flex items-center justify-center gap-2 py-2.5 px-4 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 disabled:opacity-50"
                                >
                                    <FaGithub className="text-gray-900 hover:text-purple-600 transition-all duration-300" size={30} />
                                    <span className="text-sm font-medium text-white">GitHub</span>
                                </motion.button>
                            </motion.div>

                            {/* Sign up link */}
                            <motion.div className="mt-8 text-center" variants={itemVariants}>
                                <p className="text-sm text-white/70">
                                    Do not have an account?{' '}
                                    <Link
                                        href="/register"
                                        className="font-medium text-white hover:text-sky-300 transition-colors"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}