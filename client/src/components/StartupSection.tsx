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
  const founders = [
    {
      name: "Kadiyam Srinivasu",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Tech enthusiast with a vision for agricultural innovation",
    },
    {
      name: "Danayya",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      description: "Expert in agricultural technology and system architecture",
    },
  ];

  const milestones = [
    {
      icon: "✅",
      year: "Feb 2025",
      title: "WhatsApp Bot Development",
      description: "Successfully developed and deployed WhatsApp bot for service booking",
    },
    {
      icon: "🔨",
      year: "Mar 2025",
      title: "Mobile App Development",
      description: "Mobile app development initiated",
    },
    {
      icon: "☎️",
      year: "Mar 2025",
      title: "Toll-free Service",
      description: "Toll-free number setup for service booking",
    },
    {
      icon: "🌱",
      year: "Apr 2025",
      title: "Service Expansion",
      description: "Expanding agricultural service offerings",
    },
    {
      icon: "📱",
      year: "May 2025",
      title: "Mobile App Launch",
      description: "Planned release of mobile application",
    },
    {
      icon: "🔗",
      year: "Jun 2025",
      title: "Smart Integration",
      description: "Integration of real-time tracking & automation",
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
    <section id="startup" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Startup</h2>
          <h3 className="text-2xl font-semibold mb-4">Farm Service Platform</h3>
          <p className="text-lg text-foreground/80">
            Started in January 2025, our platform connects Indian farmers with essential
            agricultural services through accessible technology
          </p>
        </motion.div>

        {/* Founders Section with smaller cards */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:bg-accent/5 transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 overflow-hidden rounded-full flex-shrink-0">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold">{founder.name}</h4>
                    <p className="text-sm text-accent mb-1">{founder.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Image */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
            alt="Indian Agriculture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Features Grid */}
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
                  <feature.icon className="w-8 h-8 mb-2 text-primary/90 dark:text-accent/90" />
                  <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                  <p className="text-xs text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Milestones Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Development Milestones</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{milestone.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-foreground/60">{milestone.year}</span>
                          <h4 className="text-lg font-semibold">{milestone.title}</h4>
                        </div>
                        <p className="text-foreground/70">{milestone.description}</p>
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