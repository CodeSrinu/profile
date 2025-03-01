import { motion } from "framer-motion";
import  ParticleBackground   from "./ParticleBackground.tsx";
import { TypewriterEffect } from "./TypewriterEffect.tsx";
import { Button } from "@/components/ui/button"; // Adjust alias if needed

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <ParticleBackground />

      {/* Glowing orb effect similar to the reference */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl" />

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative inline-block">
              Srinivasu Kadiyam
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-3xl text-gray-400"
          >
            <TypewriterEffect />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6 pt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-90 text-white text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 text-sm tracking-widest uppercase"
        >
          Keep Scrolling
          <div className="w-6 h-6 mx-auto mt-2 border-b-2 border-r-2 border-gray-400 rotate-45 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
