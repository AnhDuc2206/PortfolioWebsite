import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
          HELLO <br /> 
          I AM LÊ ANH ĐỨC.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
          This is my portfolio.
        </p>
      </motion.div>
    </section>
  );
};
