import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, MessageSquare, Phone, Cloud, Users, LineChart, Zap, Globe } from "lucide-react";

export default function CollaborationSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "WhatsApp Chatbot & Toll-Free",
      description: "Multi-language support for service requests via WhatsApp and phone calls",
    },
    {
      icon: Users,
      title: "Equipment & Labor Booking",
      description: "Easy booking system for farm equipment and skilled labor",
    },
    {
      icon: Cpu,
      title: "AI-Powered Advisory",
      description: "Smart recommendations for optimal farming practices",
    },
    {
      icon: LineChart,
      title: "Market Price Tracking",
      description: "Real-time agricultural market price updates",
    },
    {
      icon: Cloud,
      title: "Weather Integration",
      description: "Accurate weather forecasts for better planning",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Access in various regional languages",
    },
    {
      icon: Zap,
      title: "Modern Tech Stack",
      description: "Built with Python, FastAPI, Make.com, and BotPress",
    },
    {
      icon: Phone,
      title: "24/7 Accessibility",
      description: "Always available through WhatsApp and toll-free number",
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
            Join me in developing a revolutionary Farm Service Platform for Indian farmers
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="#contact">Collaborate With Me</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardContent className="p-6">
              <p className="text-foreground/80">
                A comprehensive Farm Service Providing Platform designed for Indian farmers,
                offering essential agricultural services through a WhatsApp chatbot and
                toll-free number. The platform streamlines farm-related services, including
                equipment booking, labor hiring, government scheme access, and real-time
                weather updates.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
