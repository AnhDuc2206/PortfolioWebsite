import React from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="py-8 px-6 md:px-12 flex justify-between items-center max-w-5xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg font-semibold tracking-tighter"
      >
        LÊ ANH ĐỨC
      </motion.div>
      <div className="flex gap-8 text-sm font-medium text-gray-500">
        <a href="#work" className="hover:text-black transition-colors">WORKS</a>
        <a href="#about" className="hover:text-black transition-colors">ABOUT</a>
        <a href="mailto:hello@johndoe.com" className="hover:text-black transition-colors">CONTACT</a>
      </div>
    </nav>
  );
};
