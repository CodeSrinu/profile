import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageSquare, Phone, Cloud, Users, LineChart, Zap, Globe, Cpu } from "lucide-react";

export default function StartupSection() {
  const milestones = [
    {
      year: "2024",
      title: "Platform Launch",
      description: "Successfully launched the Farm Service Platform with WhatsApp integration",
    },
    {
      year: "2024",
      title: "Regional Expansion",
      description: "Extended services to multiple states with local language support",
    },
    {
      year: "2024",
      title: "Tech Integration",
      description: "Implemented AI-powered crop advisory and weather forecasting",
    },
  ];

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
    <section id="startup" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Farm Service Platform</h2>
          <p className="text-lg text-foreground/80">
            A comprehensive agricultural services platform connecting Indian farmers with essential
            resources through accessible technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        <h3 className="text-2xl font-bold text-center mb-8">Development Milestones</h3>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {milestones.map((milestone, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold mb-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-foreground/80">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}