import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CoFoundersSection() {
  const coFounders = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496799515-eebbb63814f2",
      description: "Expert in VR technology and software development",
    },
    {
      name: "Michael Ross",
      role: "Chief Marketing Officer",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
      description: "Digital marketing specialist with 10+ years experience",
    },
    {
      name: "David Kim",
      role: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72",
      description: "Product strategy and user experience expert",
    },
    {
      name: "Emily Taylor",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description: "Operations and business development professional",
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
          <h2 className="text-3xl font-bold mb-4">Meet the Co-Founders</h2>
          <p className="text-lg text-foreground/80">
            Our diverse team brings together expertise in technology, business, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coFounders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="aspect-square mb-4 overflow-hidden rounded-full">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                      <p className="text-sm text-foreground/60">{founder.role}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{founder.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="aspect-square w-32 mx-auto mb-4 overflow-hidden rounded-full">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{founder.role}</h4>
                    <p className="text-foreground/80">{founder.description}</p>
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
