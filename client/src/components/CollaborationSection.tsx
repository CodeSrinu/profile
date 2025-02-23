import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CollaborationSection() {
  const vrTourismFeatures = [
    {
      title: "Immersive VR Experience",
      description: "Revolutionary virtual reality technology for realistic tourism experiences",
    },
    {
      title: "Global Destinations",
      description: "Access to worldwide tourist spots from the comfort of home",
    },
    {
      title: "Interactive Tours",
      description: "Engaging virtual guided tours with rich cultural information",
    },
    {
      title: "Multi-Platform Support",
      description: "Compatible with various VR devices and platforms",
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
            Join me in developing an innovative VR-based tourism platform
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="#contact">Let's Collaborate</a>
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
                A revolutionary VR-based tourism platform that makes travel experiences accessible
                and immersive. Using cutting-edge virtual reality technology, we aim to transform
                how people explore and experience destinations worldwide.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {vrTourismFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
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