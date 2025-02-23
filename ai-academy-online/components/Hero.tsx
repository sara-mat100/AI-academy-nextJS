"use client";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center bg-black p-10 overflow-hidden">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-30">
                <source src="/Vid1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 px-6"
            >
                <h1 className="text-6xl font-extrabold text-white tracking-wide uppercase drop-shadow-lg">
                    Let's Innovate Together
                </h1>
                <p className="text-xl text-gray-300 mt-4 max-w-3xl drop-shadow-md">
                    Empowering the future with AI & Innovation. Join us to become a leader in artificial intelligence.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-xl hover:bg-blue-600 transition"
                >
                    Get Started
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;
