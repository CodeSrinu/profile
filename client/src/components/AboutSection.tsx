import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Code, Briefcase } from "lucide-react";

export default function AboutSection() {
  const softSkills = [
    { icon: Award, label: "Leadership" },
    { icon: Users, label: "Communication" },
    { icon: Code, label: "Problem Solving" },
    { icon: Briefcase, label: "Business Strategy" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-foreground/80">
            I'm a passionate entrepreneur and innovator with experience in building
            cutting-edge solutions. My focus is on creating impactful technology
            that solves real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full transform transition-all duration-300 hover:shadow-lg hover:bg-accent/5">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <skill.icon className="w-12 h-12 mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-2">{skill.label}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}