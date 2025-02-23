import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Award, Cloud, Terminal, Palette } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      year: "2024",
      title: "Advanced Web Development",
      issuer: "NxtWave",
      description: "Full-stack web development with modern technologies",
      Icon: Terminal,
    },
    {
      year: "2023",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      description: "Cloud computing fundamentals and AWS services",
      Icon: Cloud,
    },
    {
      year: "2023",
      title: "AI & Machine Learning",
      issuer: "NxtWave",
      description: "Comprehensive AI and ML concepts and applications",
      Icon: Award,
    },
    {
      year: "2022",
      title: "Digital Marketing",
      issuer: "Google",
      description: "Digital marketing strategies and analytics",
      Icon: Palette,
    },
  ];

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-foreground/80">
            Professional certifications and achievements
          </p>
        </motion.div>

        <ScrollArea className="max-w-4xl mx-auto h-[400px] rounded-lg">
          <div className="relative p-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 relative"
              >
                <div className="absolute left-0 w-2 h-full bg-primary/20 rounded-full" />
                <Card className="ml-6">
                  <CardContent className="p-6">
                    <div className="absolute -left-3 w-4 h-4 bg-primary rounded-full" />
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold">
                        {cert.year}
                      </span>
                      <cert.Icon className="w-6 h-6 text-primary dark:text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-foreground/60 text-sm mb-2">
                      Issued by {cert.issuer}
                    </p>
                    <p className="text-foreground/80">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}