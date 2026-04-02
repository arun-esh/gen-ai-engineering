import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Award } from "lucide-react";
import { SEO } from "@/components/seo";

export default function Certifications() {
  const certs = [
    {
      title: "Professional Cloud Architect",
      image: "/src/assets/images/cert-architect.png",
      description: "Demonstrates expertise in designing, building, and managing dynamic, secure, and highly available solutions on Google Cloud."
    },
    {
      title: "Professional Data Engineer",
      image: "/src/assets/images/cert-data.png",
      description: "Validates ability to design, build, operationalize, secure, and monitor data processing systems with emphasis on security and compliance."
    },
    {
      title: "Professional AI Engineer",
      image: "/src/assets/images/cert-ai.png",
      description: "Certifies skills in building, managing, and deploying AI models using Vertex AI and generative AI technologies on GCP."
    },
    {
      title: "Professional Cloud DevOps Engineer",
      image: "/src/assets/images/cert-devops.png",
      description: "Demonstrates proficiency in building software delivery pipelines, deploying and monitoring services, and managing incidents."
    },
    {
      title: "Professional Cloud Security Engineer",
      image: "/src/assets/images/cert-security.png",
      description: "Validates ability to design, implement, and manage secure infrastructures on Google Cloud Platform."
    }
  ];

  return (
    <div className="pt-24 pb-24 min-h-[100dvh] bg-background relative overflow-hidden">
      <SEO title="Certifications" description="Our engineering team holds the highest level of Google Cloud certifications, ensuring your infrastructure is built to industry best practices." />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <Section className="!py-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 border border-white/10">
            <Award className="w-6 h-6 text-primary mr-2" />
            <span className="text-sm font-medium tracking-wider uppercase">Google Cloud Certified</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Verified Expertise</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our engineering team holds the highest level of Google Cloud certifications, ensuring your infrastructure is built to industry best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-48 h-48 mb-8 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{cert.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
