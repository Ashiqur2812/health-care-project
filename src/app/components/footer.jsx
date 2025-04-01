'use client';

import Link from 'next/link';
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaVimeoV, FaPinterestP, FaCaretRight, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-white text-black py-12">
      {/* Footer Top */}
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-[#a0abb5]">Lorem ipsum dolor sit amet consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
            <div className="flex space-x-3 mt-4">
              {[FaFacebookF, FaGooglePlusG, FaTwitter, FaVimeoV, FaPinterestP].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Home', 'About Us', 'Services', 'Our Cases', 'Other Links'],
                ['Consulting', 'Finance', 'Testimonials', 'FAQ', 'Contact Us'],
              ].map((column, i) => (
                <ul key={i} className="space-y-2">
                  {column.map((link, j) => (
                    <li key={j}>
                      <Link href="#" className="flex items-center space-x-2 text-[#a0abb5] hover:text-[#61bece]">
                        <FaCaretRight /> <span>{link}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Open Hours */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Open Hours</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul className="mt-4 space-y-2">
              {[['Monday - Friday', '8.00-20.00'], ['Saturday', '9.00-18.30'], ['Monday - Thursday', '9.00-15.00']].map(([day, time], i) => (
                <li key={i} className="flex justify-between text-gray-400">
                  <span>{day}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <p className="text-gray-400">Subscribe to our newsletter to get all our news in your inbox.</p>
            <form className="mt-4 flex items-center border border-gray-600 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-transparent text-white focus:outline-none"
              />
              <button className="px-4 ">
                <FaPaperPlane size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} | All Rights Reserved by <Link href="/" className="text-[#61bece] hover:underline">healthcare.com</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
