import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Cloud, Cpu, Server, Code2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";

export default function Services() {
  const services = [
    {
      id: "architecture",
      icon: Cloud,
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
                <div className="glass-card rounded-2xl p-1 aspect-video relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     {/* Abstract visual representation based on service */}
                     {index === 0 && <div className="w-32 h-32 border-4 border-primary/50 rounded-full animate-[spin_10s_linear_infinite]" />}
                     {index === 1 && <div className="flex gap-4"><div className="w-16 h-32 bg-primary/30 rounded" /><div className="w-16 h-32 bg-accent/30 rounded" /></div>}
                     {index === 2 && <div className="grid grid-cols-3 gap-2"><div className="w-10 h-10 bg-primary/40 rounded-full"/><div className="w-10 h-10 bg-accent/40 rounded-full"/><div className="w-10 h-10 bg-white/20 rounded-full"/></div>}
                     {index === 3 && <div className="w-40 h-10 bg-primary/20 rounded-full overflow-hidden"><div className="w-1/2 h-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" /></div>}
                  </div>
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
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-md text-base font-semibold hover:bg-gray-200 transition-colors"
          >
            Contact our engineering team
          </Link>
        </div>
      </Section>
    </div>
  );
}
