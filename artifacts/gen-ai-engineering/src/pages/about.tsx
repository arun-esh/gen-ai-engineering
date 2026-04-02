import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { SEO } from "@/components/seo";

export default function About() {
  return (
    <div className="pt-24 pb-24">
      <SEO title="About Us" description="Engineering the AI-Native future. We are a specialized consulting firm focused on enterprise-grade cloud and Generative AI solutions." />
      <Section className="!py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Engineering the AI-Native Future
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-16">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">The Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We saw a gap in the market. Many agencies know cloud infrastructure. A few know AI. Almost none know how to securely, scalably integrate Generative AI into enterprise cloud environments. Gen AI Engineering was founded to bridge that gap.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-accent">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize enterprise-grade cloud and AI technology. We believe that powerful, intelligent infrastructure shouldn't be limited to big tech companies. Every enterprise deserves a robust foundation to build their future upon.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Our Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We are engineers first. We don't believe in buzzwords or selling technology you don't need. We believe in:
              </p>
              <ul className="space-y-3 text-muted-foreground list-disc list-inside pl-4">
                <li><strong className="text-white font-medium">Precision:</strong> Doing it right the first time.</li>
                <li><strong className="text-white font-medium">Security:</strong> Baking protection into every layer.</li>
                <li><strong className="text-white font-medium">Scalability:</strong> Building systems that grow with you.</li>
                <li><strong className="text-white font-medium">Simplicity:</strong> Complex problems, elegant solutions.</li>
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 sticky top-32 border-t-4 border-t-primary"
            >
              <h3 className="text-xl font-bold mb-6">Why Partner With Us?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-3xl font-extrabold text-white mb-1">100%</h4>
                  <p className="text-sm text-muted-foreground">Certified Engineering Team</p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <h4 className="text-3xl font-extrabold text-white mb-1">GCP</h4>
                  <p className="text-sm text-muted-foreground">Exclusive Focus & Partnership</p>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <h4 className="text-3xl font-extrabold text-white mb-1">Zero</h4>
                  <p className="text-sm text-muted-foreground">Compromise on Security</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
