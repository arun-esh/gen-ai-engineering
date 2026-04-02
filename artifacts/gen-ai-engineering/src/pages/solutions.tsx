import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/section";
import { Store, Stethoscope, LineChart, Building2, Rocket } from "lucide-react";
import { SEO } from "@/components/seo";

export default function Solutions() {
  const industries = [
    {
      icon: Store,
      title: "Retail & E-Commerce",
      description: "Transform the shopping experience with highly scalable infrastructure and intelligent product recommendations.",
      benefits: [
        "Personalized AI-driven product discovery",
        "Demand forecasting with machine learning",
        "High-traffic event infrastructure scaling (Black Friday)",
        "Real-time inventory management systems"
      ]
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Secure, HIPAA-compliant cloud architectures that accelerate medical research and improve patient care.",
      benefits: [
        "Secure health data lakes on GCP",
        "Generative AI for clinical documentation",
        "Medical imaging analysis pipelines",
        "Compliance-first architecture design"
      ]
    },
    {
      icon: LineChart,
      title: "Finance & Fintech",
      description: "Ultra-low latency, highly secure environments for trading platforms, risk analysis, and banking applications.",
      benefits: [
        "Fraud detection using advanced ML models",
        "PCI-DSS compliant infrastructure",
        "High-frequency trading architectures",
        "Automated financial reporting systems"
      ]
    },
    {
      icon: Building2,
      title: "SaaS & Enterprise",
      description: "Multi-tenant cloud architectures built for global scale, zero downtime, and optimal unit economics.",
      benefits: [
        "Scalable multi-tenant GKE clusters",
        "Cost-per-tenant observability",
        "Global load balancing and CDN setup",
        "SaaS control plane development"
      ]
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Agile, cost-effective infrastructure that allows you to move fast and scale infinitely when product-market fit hits.",
      benefits: [
        "MVP architecture design",
        "Serverless computing (Cloud Run, Cloud Functions)",
        "Rapid AI prototype development",
        "Scalable CI/CD implementation"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <SEO title="Industry Solutions" description="Tailored cloud and AI architectures for Retail, Healthcare, Finance, Enterprise SaaS, and Startups." />
      <Section className="!py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Industry Solutions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We understand that different domains require different architectures. Our solutions are tailored to the specific security, scale, and compliance needs of your industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <industry.icon className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold">{industry.title}</h2>
              </div>
              <p className="text-muted-foreground mb-8 flex-grow">
                {industry.description}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Capabilities</h4>
                <ul className="space-y-3">
                  {industry.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
