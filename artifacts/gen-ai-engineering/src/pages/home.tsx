import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Server, Cloud, Cpu, Code2, Shield, Database, CheckCircle2, Terminal, LayoutPanelTop, Sparkles, Zap, Key, Workflow, Box, Table, Radio, Layers } from "lucide-react";
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
            src="./assets/images/hero-bg.png"
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
              <span className="inline-block py-2 px-6 rounded-full bg-primary/10 border border-primary/20 text-base md:text-lg font-bold text-primary mb-8 shadow-[0_0_15px_rgba(0,123,255,0.2)] tracking-tight">
                Certified Google Cloud Architecture & AI Experts
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
                href="/about"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]"
              >
                Contact Us
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-10 rounded-2xl group relative overflow-hidden flex flex-col min-h-[320px] cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
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
              <pre className="text-sm font-mono overflow-x-auto">
                <code className="grid gap-1">
                  <span className="text-muted-foreground">{"// Infrastructure as Code"}</span>
                  <span>
                    <span className="text-accent">resource</span>{" "}
                    <span className="text-primary">"google_container_cluster"</span>{" "}
                    <span className="text-white">"primary"</span> {"{"}
                  </span>
                  <span className="pl-4">
                    <span className="text-primary/70">name</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-accent">"ai-production-cluster"</span>
                  </span>
                  <span className="pl-4">
                    <span className="text-primary/70">location</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-accent">"us-central1"</span>
                  </span>
                  <span className="pl-4">
                    <span className="text-primary/70">remove_default_node_pool</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-accent">true</span>
                  </span>
                  <span className="pl-4">
                    <span className="text-primary/70">initial_node_count</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-accent">1</span>
                  </span>
                  <span className="pl-4">
                    <span className="text-primary/70">private_cluster_config</span> {"{"}
                  </span>
                  <span className="pl-8">
                    <span className="text-primary/70">enable_private_nodes</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-accent">true</span>
                  </span>
                  <span className="pl-8">
                    <span className="text-primary/70">enable_private_endpoint</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-accent">false</span>
                  </span>
                  <span className="pl-4">{"}"}</span>
                  <span>{"}"}</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="bg-background relative border-y border-white/5 overflow-hidden py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Our Engineering Stack</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              We architect solutions using the industry's most robust and scalable enterprise technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Vertex AI", icon: Cpu, color: "text-accent" },
              { name: "Gemini", icon: Sparkles, color: "text-yellow-400" },
              { name: "Kubernetes (GKE)", icon: Server, color: "text-blue-400" },
              { name: "Cloud Run", icon: Zap, color: "text-blue-300" },
              { name: "Terraform", icon: Code2, color: "text-primary" },
              { name: "IAM Security", icon: Key, color: "text-green-400" },
              { name: "GitHub Actions", icon: Workflow, color: "text-white" },
              { name: "Docker", icon: Box, color: "text-blue-500" },
              { name: "BigQuery", icon: Database, color: "text-blue-600" },
              { name: "Cloud SQL", icon: Table, color: "text-blue-400" },
              { name: "Pub/Sub", icon: Radio, color: "text-orange-400" },
              { name: "LangChain", icon: Layers, color: "text-accent" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group flex flex-col items-center justify-center text-center"
              >
                <div className={`w-12 h-12 mb-4 transition-transform duration-500 group-hover:scale-110 ${tech.color}`}>
                  <tech.icon className="w-full h-full" />
                </div>
                <span className="text-white font-bold tracking-tight text-lg">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-background">
        <SectionHeader 
          title="The Engineering Lifecycle" 
          subtitle="Our systematic approach to building production-ready cloud and AI systems."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />
          
          {[
            { step: "01", title: "Discover & Architect", desc: "We analyze your requirements and design a high-availability, cost-optimized blueprint." },
            { step: "02", title: "Automate & Build", desc: "Using IaC and CI/CD, we deploy your infrastructure with precision and security." },
            { step: "03", title: "Optimize & Scale", desc: "We monitor performance and iterate to ensure your system grows with your users." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 glass-card p-8 rounded-2xl text-center"
            >
              <span className="text-4xl font-black text-primary/20 mb-4 block">{item.step}</span>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-background relative border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to architect your future?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Reach out to our engineering team to discuss your cloud and Generative AI needs.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(0,123,255,0.4)]"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
