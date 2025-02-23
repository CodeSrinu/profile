import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function StartupSection() {
  const milestones = [
    {
      year: "2023",
      title: "VR Tourism Platform Launch",
      description: "Successfully launched our innovative VR-based tourism platform",
    },
    {
      year: "2023",
      title: "First Major Partnership",
      description: "Partnered with leading tourism operators",
    },
    {
      year: "2024",
      title: "Market Expansion",
      description: "Expanded operations to multiple cities",
    },
  ];

  const coFounders = [
    {
      name: "Raj Kumar",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      expertise: "VR Technology & Software Architecture",
    },
    {
      name: "Priya Singh",
      role: "CMO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      expertise: "Digital Marketing & Business Strategy",
    },
    {
      name: "Arun Patel",
      role: "COO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      expertise: "Operations & Business Development",
    }
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
          <h2 className="text-3xl font-bold mb-4">VR Tourism Startup</h2>
          <p className="text-lg text-foreground/80">
            Revolutionizing the tourism industry through immersive virtual reality
            experiences, making travel more accessible and engaging.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coFounders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{founder.name}</h4>
                    <p className="text-primary mb-2">{founder.role}</p>
                    <p className="text-sm text-foreground/70">{founder.expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Milestones</h3>
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