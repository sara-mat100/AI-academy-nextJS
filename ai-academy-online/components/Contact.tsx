"use client";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 p-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <h2 className="text-5xl font-bold text-blue-400 tracking-wide">Get in Touch</h2>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                    Contact AI Academy for inquiries, collaborations, and support.
                </p>
            </motion.div>
            <div className="mt-10 w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
                <form className="flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        rows={4}
                        placeholder="Your Message"
                        className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                        Send Message
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;