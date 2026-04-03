import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/section";
import { Mail, Linkedin, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/seo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24">
      <SEO title="Contact Us" description="Book a free consultation with our principal engineers to discuss your cloud and AI architecture needs." />
      <Section className="!py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Build Together</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ready to architect your cloud infrastructure or integrate Generative AI? Reach out to schedule a technical consultation with our engineering team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-6">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">arunesh@genaieng.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mr-6">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Connect on LinkedIn</h3>
                  <a href="https://www.linkedin.com/company/gen-ai-engineering" className="text-muted-foreground hover:text-white transition-colors">https://www.linkedin.com/company/gen-ai-engineering</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white shrink-0 mr-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">Montreal, QC<br />Global Remote Team</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8 lg:p-10 border border-white/10">
              <h2 className="text-2xl font-bold mb-8">Book a Consultation</h2>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. One of our engineers will be in touch shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-primary hover:underline text-sm font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="john@acme.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                      placeholder="Tell us about your cloud or AI architecture needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 rounded-md transition-all flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
