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
