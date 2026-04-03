import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Cloud, Cpu, Server, Code2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import serviceArchitecture from "@/assets/images/service-architecture.png";
import serviceMigration from "@/assets/images/service-migration.png";
import serviceGenai from "@/assets/images/service-genai.png";
import serviceDevops from "@/assets/images/service-devops.png";

export default function Services() {
  const services = [
    {
      id: "architecture",
      icon: Cloud,
      image: serviceArchitecture,
      imageAlt: "Cloud architecture network topology visualization",
      title: "Cloud Architecture",
      description: "We design robust, scalable, and secure cloud environments on Google Cloud Platform tailored to your specific enterprise needs.",
      features: [
        "High Availability & Disaster Recovery Design",
        "Cost Optimization & FinOps",
        "Multi-region & Hybrid Cloud Setups",
        "Security & Compliance Architecture (SOC2, HIPAA, PCI)"
      ]
    },
    {
      id: "migration",
      icon: Server,
      image: serviceMigration,
      imageAlt: "Cloud migration data streams visualization",
      title: "Cloud Migration",
      description: "Seamlessly transition your workloads to GCP with zero downtime. We handle complex migrations from on-premise datacenters or other cloud providers.",
      features: [
        "On-Premise to GCP Migration",
        "AWS / Azure to GCP Transition",
        "Legacy Application Modernization",
        "Database & Storage Migration"
      ]
    },
    {
      id: "genai",
      icon: Cpu,
      image: serviceGenai,
      imageAlt: "Generative AI neural network visualization",
      title: "Generative AI Solutions",
      description: "Leverage the power of Vertex AI and Gemini to build intelligent applications that transform your business operations and customer experiences.",
      features: [
        "Custom LLM Applications & Chatbots",
        "Retrieval-Augmented Generation (RAG) Systems",
        "AI Workflow Automation & Agents",
        "Model Fine-tuning & Prompt Engineering"
      ]
    },
    {
      id: "devops",
      icon: Code2,
      image: serviceDevops,
      imageAlt: "DevOps CI/CD pipeline and Kubernetes visualization",
      title: "DevOps & Automation",
      description: "Accelerate your software delivery lifecycle with modern DevOps practices, Infrastructure as Code, and container orchestration.",
      features: [
        "CI/CD Pipeline Design & Implementation",
        "Kubernetes (GKE) Orchestration",
        "Infrastructure as Code (Terraform)",
        "Observability, Monitoring & Alerting"
      ]
    }
  ];

  return (
    <div className="flex flex-col pt-24 pb-16">
      <SEO title="Services" description="Comprehensive cloud and AI engineering services designed for enterprise scale on Google Cloud Platform." />
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Specialized engineering services to build, scale, and secure your cloud and AI infrastructure.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary border border-primary/20">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/90">
                      <div className="w-2 h-2 rounded-full bg-accent mr-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl aspect-video relative overflow-hidden group border border-white/10">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Section className="mt-24 bg-card border-y border-white/5">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every enterprise has unique challenges. Let's discuss how we can architect a solution specifically for your business.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]"
          >
            Contact our engineering team
          </Link>
        </div>
      </Section>
    </div>
  );
}
