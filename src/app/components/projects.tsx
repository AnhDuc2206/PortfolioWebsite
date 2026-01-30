import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const projects = [
  {
    title: "Survival FPS Game",
    description: "A game where you try to survive an endless horde of enemies.",
    image: "https://www.exitlag.com/blog/wp-content/uploads/2024/07/fps-game.webp",
    year: "Coming 2026"
  },
  {
    title: "Round-Based Zombie Survival Game",
    description: "Shoot zombies and survive.",
    image: "https://insider-gaming.com/wp-content/uploads/2023/11/world-at-war-zombies-order-of-release-1024x576.jpeg",
    year: "Coming Soon (Hopefully)"
  }
];

export const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-gray-100">
      <div className="flex justify-between items-baseline mb-16">
        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Upcoming Games</h2>
        <span className="text-sm text-gray-400">Images courtesy of Escape from Tarkov and Call of Duty.</span>
      </div>
      
      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block cursor-pointer"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 mb-8 rounded-sm">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 max-w-md">{project.description}</p>
              </div>
              <span className="text-sm font-medium text-gray-400">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
