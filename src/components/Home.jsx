import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-[#2E2828] text-white px-6 md:px-16"
      >
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Dipak Singh
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-[#D97706]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome To My Portfolio
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a Passionate Web Developer creating modern, interactive
            websites.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/DipakSingh0111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl hover:text-[#d97706]" />
            </a>
            <a
              href="https://www.linkedin.com/in/dipak-singh-91bbbb226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-[#d97706]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl hover:text-[#d97706]" />
            </a>
          </motion.div>
        </div>

        {/* Right Side - Image Section */}
        <div className="flex-1 flex items-center justify-center w-full relative">
          {/* Centered Orange Shadow */}
          <div className="absolute w-[500px] h-[500px] bg-[#d97706] rounded-full blur-[150px] opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="z-10 flex items-center justify-center w-full"
          >
            <img
              src="dipak.jpg"
              alt="Dipak Singh"
              className="w-96 h-auto object-contain relative rounded-3xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
