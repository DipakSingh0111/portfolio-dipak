import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#1E1E1E] text-white py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-left">
            <h2 className="text-2xl font-semibold">Dipak Singh</h2>
            <p className="text-gray-400">MERN Stack Developer</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/dipak-singh-91bbbb226/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-2xl transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://github.com/DipakSingh0111" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-2xl transition-transform transform hover:scale-110">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400 text-sm">
          <p className="flex items-center justify-center md:justify-start"><FaPhone className="mr-2" /> +91 7986139661</p>
          <p className="flex items-center justify-center md:justify-center"><FaMapMarkerAlt className="mr-2" /> New Delhi, India</p>
          <p className="flex items-center justify-center md:justify-end"><FaEnvelope className="mr-2" /> dipaksingh3323@gmail.com</p>
        </div>
        <p className="mt-6 text-gray-500 text-xs">© 2025 Dipak Singh. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
