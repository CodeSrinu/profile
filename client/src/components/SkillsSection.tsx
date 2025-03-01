import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS_DATA } from "../lib/constants.ts"; // Changed to relative import
import { Code, Wrench, Box, Briefcase } from "lucide-react";

// Map icon names to components
const iconMap = {
  Code,
  Tool: Wrench, // Using Wrench for "Tool"
  Box,
  Briefcase,
};

export function SkillsSection() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center text-white"
        >
          Technical & Entrepreneurial Skills
        </motion.h2>

        <div className="grid gap-8 place-items-center">
          {Object.entries(SKILLS_DATA).map(([category, { icon, children }], index) => {
            const IconComponent = iconMap[icon as keyof typeof iconMap];
            const isExpanded = expandedSkill === category;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="w-full max-w-2xl"
              >
                <motion.div
                  className={`
                    p-6 rounded-lg cursor-pointer
                    ${isExpanded ? 'bg-teal-400/10 shadow-lg' : 'bg-card hover:bg-teal-400/5'}
                    transition-colors duration-300
                  `}
                  onClick={() => setExpandedSkill(isExpanded ? null : category)}
                >
                  <div className="flex items-center gap-3">
                    {IconComponent && <IconComponent className="h-6 w-6 text-teal-400" />}
                    <h3 className="text-xl font-semibold text-white">{category}</h3>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 grid grid-cols-2 gap-4"
                      >
                        {children.map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-3 bg-background rounded text-white"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
