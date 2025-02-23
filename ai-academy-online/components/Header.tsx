"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center"
                >
                    <span className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text uppercase drop-shadow-md">
                        AI Academy
                    </span>  </motion.div>
                <nav>
                    <ul className="hidden md:flex space-x-6">
                        {[
                            { name: "Home", path: "#hero" },
                            { name: "Features", path: "#features" },
                            { name: "Testimonials", path: "#testimonials" },
                            { name: "About us", path: "#about" },
                            { name: "Contact us", path: "#contact" }
                           
                        ].map((link, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="text-gray-300 hover:text-blue-400 transition font-semibold"
                            >
                                <a href={link.path}>{link.name}</a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="hidden md:block px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition"
                >
                    Join Now
                </motion.button>
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button className="text-white text-2xl">☰</button>
                </div>
            </div>
        </header>
    );
};

export { Header };

