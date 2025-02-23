"use client";
import { motion } from "framer-motion";

const Features: React.FC = () => {
    return (
        <section id="features" className="min-h-screen bg-gray-900 p-10 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-12"
            >
                <h1 className="text-6xl font-extrabold text-blue-400 tracking-wide uppercase"> Features</h1>
                <p className="text-lg text-gray-300 mt-4 max-w-3xl">
                    Discover our innovative AI courses designed to enhance your skills and open new career opportunities in AI and Machine Learning.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center border-l-4 border-blue-500"
                >
                    <h3 className="text-2xl font-semibold text-blue-400">Live AI Simulations</h3>
                    <p className="text-gray-300 mt-3">Engage in hands-on AI projects with real-world datasets.</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center border-l-4 border-green-500"
                >
                    <h3 className="text-2xl font-semibold text-green-400">Industry Partnerships</h3>
                    <p className="text-gray-300 mt-3">Learn from AI leaders and gain access to exclusive networking opportunities.</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center border-l-4 border-yellow-500"
                >
                    <h3 className="text-2xl font-semibold text-yellow-400">AI Certifications</h3>
                    <p className="text-gray-300 mt-3">Earn globally recognized AI certificates to boost your career prospects.</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center border-l-4 border-red-500"
                >
                    <h3 className="text-2xl font-semibold text-red-400">Project-Based Learning</h3>
                    <p className="text-gray-300 mt-3">Apply AI concepts to solve real-world business problems.</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center border-l-4 border-purple-500"
                >
                    <h3 className="text-2xl font-semibold text-purple-400">Expert-Led Workshops</h3>
                    <p className="text-gray-300 mt-3">Engage in AI training sessions led by industry pioneers.</p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center text-center border-l-4 border-teal-500"
                >
                    <h3 className="text-2xl font-semibold text-teal-400">AI Career Support</h3>
                    <p className="text-gray-300 mt-3">Get personalized mentorship and AI job placement assistance.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;