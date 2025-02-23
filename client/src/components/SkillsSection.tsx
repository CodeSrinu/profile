import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "C", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "Bootstrap", level: 90 },
  ];

  const softwareSkills = [
    { name: "Premiere Pro", level: 80 },
    { name: "Photopea", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-foreground/80">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Programming Skills</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <TooltipProvider key={skill.name}>
                  <Tooltip>
                    <TooltipTrigger className="w-full">
                      <Card>
                        <CardContent className="py-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-foreground/60">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Proficiency: {skill.level}%</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Software Skills</h3>
            <div className="space-y-6">
              {softwareSkills.map((skill) => (
                <TooltipProvider key={skill.name}>
                  <Tooltip>
                    <TooltipTrigger className="w-full">
                      <Card>
                        <CardContent className="py-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-foreground/60">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Proficiency: {skill.level}%</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
