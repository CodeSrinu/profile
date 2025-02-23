import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Entrepreneur, Innovator, and Tech Enthusiast";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm Kadiyam Srinivasu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/80 mb-8 min-h-[2.5rem]"
          >
            {text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}