
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-16 px-6 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-blue-400">AI Academy</h3>
                    <p className="text-gray-400 mt-2">Empowering the future with AI & Innovation.</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">Quick Links</h4>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#home" className="text-gray-300 hover:text-blue-400">Home</a></li>
                        <li><a href="#features" className="text-gray-300 hover:text-blue-400">Features</a></li>
                        <li><a href="#testimonials" className="text-gray-300 hover:text-blue-400">Testimonials</a></li>
                        <li><a href="#contact" className="text-gray-300 hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">Resources</h4>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="text-gray-300 hover:text-blue-400">Blog</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-blue-400">Courses</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-blue-400">AI Trends</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold">Contact Us</h4>
                    <p className="text-gray-400 mt-2">support@aiacademy.com</p>
                    <p className="text-gray-400">+1 234 567 890</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">🌐</a>
                        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">📘</a>
                        <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">🐦</a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
                © {new Date().getFullYear()} AI Academy. All rights reserved.
            </div>
        </footer>
    );
};

export { Footer };
