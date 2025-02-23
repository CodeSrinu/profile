import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Headset, 
  Gamepad, 
  Palette, 
  PenTool,
  Lightbulb,
  Binary
} from "lucide-react";

export default function CollaborationSection() {
  const collaborationAreas = [
    {
      icon: Headset,
      title: "VR Development",
      description: "Expertise in virtual reality technologies and immersive experiences",
    },
    {
      icon: Gamepad,
      title: "Gaming",
      description: "Game development and interactive experience design",
    },
    {
      icon: PenTool,
      title: "3D Modeling",
      description: "Creating detailed 3D models and environments",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User interface and experience design for VR applications",
    },
    {
      icon: Binary,
      title: "ECE Subjects",
      description: "Electronics and communication engineering expertise",
    },
    {
      icon: Lightbulb,
      title: "VR Education",
      description: "Innovative ideas in educational VR applications",
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
          <h2 className="text-3xl font-bold mb-4">Collaboration Opportunity</h2>
          <p className="text-lg text-foreground/80 mb-6">
            Looking for passionate individuals in the following areas
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {collaborationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <area.icon className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold">{area.title}</h3>
                        <p className="text-foreground/70">{area.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}