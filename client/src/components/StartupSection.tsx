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
      title: "WhatsApp Chatbot",
      description: "Multi-language support",
    },
    {
      icon: Users,
      title: "Equipment Booking",
      description: "Easy resource access",
    },
    {
      icon: Cpu,
      title: "AI Advisory",
      description: "Smart recommendations",
    },
    {
      icon: LineChart,
      title: "Market Prices",
      description: "Real-time updates",
    },
    {
      icon: Cloud,
      title: "Weather Updates",
      description: "Accurate forecasts",
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Local accessibility",
    },
    {
      icon: Zap,
      title: "Modern Stack",
      description: "Advanced technology",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Always available",
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
              alt="Indian Agriculture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:bg-accent/5 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <feature.icon className="w-8 h-8 mb-2 text-accent" />
                    <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                    <p className="text-xs text-foreground/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                      <span className="inline-block bg-accent text-accent-foreground rounded-full px-3 py-1 text-sm font-semibold mb-4">
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