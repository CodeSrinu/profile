import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Laptop, Library, Brain } from "lucide-react";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "C", level: 91 },
    { name: "Python", level: 95 },
    { name: "HTML & CSS", level: 92 },
    { name: "JavaScript", level: 80 },
    { name: "C#", level: 40 },
  ];

  const softwareSkills = [
    { name: "Premiere Pro", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Visual Studio", level: 85 },
    { name: "Unity", level: 75 },
  ];

  const frameworksLibraries = [
    { name: "Node.js", level: 85 },
    { name: "Flask", level: 88 },
    { name: "Bootstrap", level: 90 },
    { name: "MongoDB", level: 82 },
  ];

  const entrepreneurialSkills = [
    { name: "Leadership", level: 85, status: "" },
    { name: "Problem-Solving", level: 88, status: "" },
    { name: "Business Strategy", level: 70, status: "(Learning)" },
    { name: "Market Research", level: 65, status: "(Learning)" },
  ];

  const renderSkillSection = (title: string, skills: any[], icon: any) => (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <CardContent className="py-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">
                  {skill.name}
                  {skill.status && (
                    <span className="text-sm text-foreground/60 ml-2">
                      {skill.status}
                    </span>
                  )}
                </span>
                <span className="text-sm text-foreground/60">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical & Entrepreneurial Skills</h2>
          <p className="text-lg text-foreground/80">
            A comprehensive overview of my technical and business capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {renderSkillSection(
              "Programming Skills",
              programmingSkills,
              <Code2 className="w-6 h-6 text-primary" />
            )}
            {renderSkillSection(
              "Software Skills",
              softwareSkills,
              <Laptop className="w-6 h-6 text-primary" />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {renderSkillSection(
              "Frameworks & Libraries",
              frameworksLibraries,
              <Library className="w-6 h-6 text-primary" />
            )}
            {renderSkillSection(
              "Entrepreneurial Skills",
              entrepreneurialSkills,
              <Brain className="w-6 h-6 text-primary" />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}