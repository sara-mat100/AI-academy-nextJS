"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const VirtualAgent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log("User message:", message);
            setMessage("");
        }
    };

    return (
        <div className="fixed bottom-10 right-10 z-50">
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white text-gray-900 p-4 rounded-lg shadow-lg flex flex-col gap-3 w-80"
                >
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">🤖 Can we help you?</span>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">✖</button>
                    </div>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-2 border rounded-lg w-full text-gray-900"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition"
                    >
                        Send
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export { VirtualAgent };
