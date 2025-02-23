import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AWS MEGA WS",
      description: "Comprehensive AWS workshop series covering cloud architecture and deployment",
      image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
      details: "An intensive workshop series focused on AWS services, cloud architecture, and best practices for deployment and scaling.",
    },
    {
      title: "AI MEGA WS",
      description: "Advanced AI and machine learning workshop series",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      details: "Hands-on workshop covering artificial intelligence fundamentals, machine learning algorithms, and practical applications.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/80">
            Showcasing some of my most impactful technical workshops and projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-foreground/80">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-foreground/80">{project.details}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
