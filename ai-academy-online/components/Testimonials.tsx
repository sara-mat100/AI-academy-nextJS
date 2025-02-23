"use client";
import { motion } from "framer-motion";

const Testimonial: React.FC = () => {
    return (
        <section id="testimonials" className="min-h-screen bg-gray-900 text-white py-20 px-5">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold text-blue-400 tracking-wide"
                >
                    What Our Students Say
                </motion.h2>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                    Hear from our students who have transformed their careers through our AI courses.
                </p>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
                {[1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md text-center"
                    >
                        <p className="text-gray-300 italic">"AI Academy has completely changed my career. The courses are top-notch, and the mentorship was invaluable."</p>
                        <h4 className="text-lg font-semibold mt-4">- Student {index}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export { Testimonial };
