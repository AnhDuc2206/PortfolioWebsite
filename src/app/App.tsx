import React from "react";
import { Navbar } from "@/app/components/navbar";
import { Hero } from "@/app/components/hero";
import { Projects } from "@/app/components/projects";
import { Footer } from "@/app/components/footer";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        <section id="about" className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">ABOUT</h2>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                My name is Đức. I am 20 years old.
              </p>
              <p>
                I am a student at PTIT.
                My goal is to become a Game Developer. 
                Currently learning on how to make games with Unity Game Engine.
              </p>
            </div>
          </div>
        </section>

        <Projects />
      </main>
      <Footer />
    </div>
  );
}
