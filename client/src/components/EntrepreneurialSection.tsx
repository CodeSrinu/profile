import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  LineChart, 
  LightbulbIcon, 
  Target,
  Network,
  Presentation,
  PiggyBank,
  Handshake
} from "lucide-react";

export default function EntrepreneurialSection() {
  const skills = [
    {
      icon: Users,
      name: "Leadership",
      level: 95,
      description: "Team management and motivation",
    },
    {
      icon: LineChart,
      name: "Market Research",
      level: 90,
      description: "Data-driven market analysis",
    },
    {
      icon: LightbulbIcon,
      name: "Innovation",
      level: 92,
      description: "Creative problem-solving",
    },
    {
      icon: Target,
      name: "Strategic Planning",
      level: 88,
      description: "Business strategy development",
    },
    {
      icon: Network,
      name: "Networking",
      level: 94,
      description: "Building valuable connections",
    },
    {
      icon: Presentation,
      name: "Pitch Development",
      level: 91,
      description: "Compelling presentation skills",
    },
    {
      icon: PiggyBank,
      name: "Fundraising",
      level: 85,
      description: "Capital acquisition strategies",
    },
    {
      icon: Handshake,
      name: "Negotiation",
      level: 89,
      description: "Deal-making and partnerships",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Entrepreneurial Skills</h2>
          <p className="text-lg text-foreground/80">
            Key business competencies and leadership abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <p className="text-sm text-foreground/80 mb-4">
                    {skill.description}
                  </p>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground/60">Proficiency</span>
                      <span className="text-sm font-medium">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
