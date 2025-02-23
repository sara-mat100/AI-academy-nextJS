"use client";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <section id="about" className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-gray-900 to-gray-700 p-10">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-extrabold text-white"
            >
                About us
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl text-gray-300 mt-4 max-w-3xl"
            >
                At AI Academy, we are committed to providing cutting-edge education in artificial intelligence.
                Our mission is to empower learners with the knowledge and skills required to excel in the field of AI.
            </motion.p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center"
                >
                    <h3 className="text-2xl font-semibold text-white">Expert-Led Courses</h3>
                    <p className="text-gray-300">Learn from industry professionals with real-world AI experience.</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center"
                >
                    <h3 className="text-2xl font-semibold text-white">Hands-On Projects</h3>
                    <p className="text-gray-300">Build real AI applications and gain practical skills.</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-center"
                >
                    <h3 className="text-2xl font-semibold text-white">Career Support</h3>
                    <p className="text-gray-300">Get mentorship and job placement assistance in AI fields.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
