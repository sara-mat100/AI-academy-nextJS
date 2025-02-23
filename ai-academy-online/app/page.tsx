import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";


import Contact from "@/components/Contact";
import { Testimonial } from "../components/Testimonials";

export default function Home() {
    return (
        <div className="bg-gray-900 text-white">
            <Hero />
            <Features />
            <About />
            <Testimonial />
            <Contact />
        </div>
    );
}

