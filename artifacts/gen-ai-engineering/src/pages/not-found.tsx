import { motion } from "framer-motion";
import { Link } from "wouter";
import { FileQuestion, ArrowLeft } from "lucide-react";
import { Section } from "@/components/section";
import { SEO } from "@/components/seo";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[70dvh] items-center justify-center relative overflow-hidden">
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10" />

      <Section className="w-full max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary">
            <FileQuestion className="w-10 h-10" />
          </div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-white/10 absolute -top-4 left-1/2 -translate-x-1/2 select-none"
          >
            404
          </motion.h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10">
            Lost in the <span className="text-gradient">Cloud?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto relative z-10 leading-relaxed">
            The architecture you're looking for doesn't exist or has been decommissioned.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl text-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(0,123,255,0.4)] group relative z-10"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Base
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
