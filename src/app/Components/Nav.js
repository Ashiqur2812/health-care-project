"use client";
'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Nav = () => {
  
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  if (pathname.startsWith("/auth")) return null;

  if (status === "loading") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-100 shadow-sm"
      >
        <div className="navbar w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
          <div className="navbar-start">
            <Link href='/' className="btn btn-ghost text-xl font-bold text-gray-900">NORDIS</Link>
          </div>
          <div className="navbar-end">
            <div className="btn btn-ghost loading"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "FIND DOCTOR", href: "/find-doctor" },
    { name: "BLOGS", href: "/blogs" },
  ];

  

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.3 }}
        className={`sticky top-0 z-50 backdrop-blur-lg `}
      >
        <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <div className="navbar-start lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-ghost p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <Link href='/' className="btn btn-ghost text-xl font-bold text-gray-900 mx-auto lg:mx-0">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-sky-600 to-green-500 bg-clip-text text-transparent"
            >
              NORDIS
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth Section */}
          <div className="navbar-end">
            {session ? (
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="hidden md:flex items-center gap-3 cursor-pointer"
                >
                  {session.user?.image && (
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={session?.user?.image}
                      alt="User avatar"
                      className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                    />
                  )}
                  <span className="font-medium text-gray-700">{session.user?.name}</span>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="btn bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white border-none shadow-sm"
                >
                  Log Out
                </motion.button>
              </div>
            ) : (
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href='/auth/register'
                    className="btn bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white border-none shadow-sm"
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
              <ul className="menu gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-700 hover:bg-gray-50 font-medium px-4 py-3 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                {session ? (
                  <>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.1 }}
                    >
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        {session.user?.image && (
                          <motion.img
                            src={session.user.image}
                            alt="User avatar"
                            className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          />
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{session.user?.name}</p>
                        </div>
                      </div>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + 1) * 0.1 }}
                      className="w-full"
                    >
                      <motion.button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          signOut({ callbackUrl: '/' });
                        }}
                        className="relative w-full group"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="px-6 py-3 rounded-xl border border-rose-300/50 bg-gradient-to-br from-rose-600/90 to-rose-700 shadow-lg overflow-hidden"
                          initial={{ backgroundPosition: "0% 50%" }}
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            boxShadow: "0 4px 20px rgba(220, 38, 38, 0.3)"
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {/* Animated shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                            initial={{ x: "-100%" }}
                            whileHover={{
                              x: "100%",
                              opacity: 0.4,
                              transition: { duration: 0.8 }
                            }}
                          />

                          <div className="relative flex items-center justify-center gap-2">
                            <motion.span
                              className="text-white font-semibold text-[15px] tracking-wide"
                              whileHover={{ letterSpacing: "0.05em" }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              Log Out
                            </motion.span>
                            <motion.div
                              animate={{
                                x: [0, 4, 0],
                                transition: {
                                  duration: 1.6,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <path d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9" />
                              </svg>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.button>
                    </motion.li>

                    {/* Sign Up Button Alternative */}
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.1 }}
                      className="w-full"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full"
                      >
                        <Link
                          href='/auth/register'
                          onClick={() => setMobileMenuOpen(false)}
                          className="block"
                        >
                          <motion.div
                            className="px-6 py-3 rounded-xl border border-emerald-300/50 bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg overflow-hidden"
                            initial={{ backgroundPosition: "0% 50%" }}
                            animate={{
                              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                              boxShadow: "0 4px 20px rgba(5, 150, 105, 0.3)"
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {/* Animated shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                              initial={{ x: "-100%" }}
                              whileHover={{
                                x: "100%",
                                opacity: 0.4,
                                transition: { duration: 0.8 }
                              }}
                            />

                            <div className="relative flex items-center justify-center gap-2">
                              <motion.span
                                className="text-white font-semibold text-[15px] tracking-wide"
                                whileHover={{ letterSpacing: "0.05em" }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                Sign Up
                              </motion.span>
                              <motion.div
                                animate={{
                                  y: [0, -2, 0],
                                  transition: {
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-white"
                                >
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                  <circle cx="9" cy="7" r="4" />
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                              </motion.div>
                            </div>
                          </motion.div>
                        </Link>
                      </motion.div>
                    </motion.li>
                  </>
                ) : (
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="pt-2 w-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full"
                    >
                      <Link
                        href='/auth/register'
                        onClick={() => setMobileMenuOpen(false)}
                        className="block"
                      >
                        <motion.div
                          className="px-6 py-4 rounded-xl backdrop-blur-md border border-emerald-400/30 bg-gradient-to-r from-emerald-400/10 to-teal-500/20 shadow-lg"
                          style={{
                            boxShadow: "0 0 15px rgba(52, 211, 153, 0.5)"
                          }}
                          animate={{
                            background: [
                              "linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, rgba(16, 185, 129, 0.2) 100%)",
                              "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(52, 211, 153, 0.1) 100%)"
                            ],
                            boxShadow: [
                              "0 0 15px rgba(52, 211, 153, 0.5)",
                              "0 0 25px rgba(52, 211, 153, 0.7)",
                              "0 0 15px rgba(52, 211, 153, 0.5)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                        >
                          <div className="flex items-center justify-center gap-3">
                            <motion.span
                              className="text-white font-semibold text-lg"
                              animate={{
                                textShadow: [
                                  "0 0 5px rgba(255,255,255,0.3)",
                                  "0 0 10px rgba(255,255,255,0.5)",
                                  "0 0 5px rgba(255,255,255,0.3)"
                                ]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }}
                            >
                              Sign Up
                            </motion.span>
                            <motion.div
                              animate={{
                                y: [0, -3, 0],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "mirror"
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                              >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                              </svg>
                            </motion.div>
                          </div>
                          <motion.div
                            className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none"
                            animate={{
                              opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity
                            }}
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </motion.li>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;