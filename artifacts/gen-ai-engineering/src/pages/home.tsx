import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Server, Cloud, Cpu, Code2, Shield, Database, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";
import { SEO } from "@/components/seo";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEO title="Cloud & Generative AI Engineering" description="Enterprise-grade cloud infrastructure meets cutting-edge AI. We build scalable, secure, and intelligent solutions on Google Cloud Platform." />
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero-bg.png"
            alt="Hero background"
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6">
                Google Cloud Premier Partner
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              Cloud & <span className="text-gradient">Generative AI</span> Engineering
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              We build scalable, secure, and intelligent enterprise infrastructure on Google Cloud Platform. Move fast without breaking things.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section className="bg-background relative border-t border-white/5">
        <SectionHeader
          title="Architecting the Future"
          subtitle="Comprehensive cloud and AI engineering services designed for enterprise scale."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Cloud,
              title: "Cloud Architecture",
              desc: "High-availability, cost-optimized infrastructure design on GCP."
            },
            {
              icon: Cpu,
              title: "Generative AI Solutions",
              desc: "Custom LLM applications, RAG systems, and AI automation."
            },
            {
              icon: Server,
              title: "Cloud Migration",
              desc: "Seamless, zero-downtime migrations from on-prem, AWS, or Azure."
            },
            {
              icon: Code2,
              title: "DevOps & Automation",
              desc: "CI/CD pipelines, Kubernetes orchestration, and IaC."
            },
            {
              icon: Database,
              title: "Data Engineering",
              desc: "Scalable data lakes, real-time streaming, and analytics on BigQuery."
            },
            {
              icon: Shield,
              title: "Cloud Security",
              desc: "Zero-trust architecture, identity management, and compliance."
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 rounded-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.desc}</p>
              <Link href="/services" className="text-primary font-medium inline-flex items-center text-sm hover:underline">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-card relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Enterprise-Grade Execution
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just build proof-of-concepts. We build production-ready systems that scale, secure your data, and deliver tangible business value.
            </p>
            
            <ul className="space-y-4">
              {[
                "Deep GCP Expertise across infrastructure, data, and AI.",
                "Security-first approach with zero-trust principles.",
                "Cost optimization baked into every architecture.",
                "Agile delivery with robust CI/CD and automation."
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-3 mt-0.5" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-accent rounded-2xl blur opacity-20" />
            <div className="relative glass-card rounded-2xl p-8 border border-white/10 bg-background/80">
               <pre className="text-sm text-primary/80 font-mono overflow-x-auto">
                 <code>
{`// Infrastructure as Code
resource "google_container_cluster" "primary" {
  name     = "ai-production-cluster"
  location = "us-central1"

  remove_default_node_pool = true
  initial_node_count       = 1

  private_cluster_config {
    enable_private_nodes    = true
    enable_private_endpoint = false
    master_ipv4_cidr_block  = "172.16.0.0/28"
  }
}`}
                 </code>
               </pre>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-background relative border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to architect your future?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Schedule a free architecture review or Generative AI workshop with our principal engineers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
