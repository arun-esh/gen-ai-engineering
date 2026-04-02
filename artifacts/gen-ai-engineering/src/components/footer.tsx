import { Link } from "wouter";
import { Cpu, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Cpu className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Gen AI <span className="text-primary font-normal">Engineering</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Enterprise-grade cloud infrastructure meets cutting-edge Generative AI. 
              We architect scalable, secure, and intelligent solutions on Google Cloud Platform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Architecture</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Migration</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Generative AI Solutions</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">DevOps & Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Industry Solutions</Link></li>
              <li><Link href="/certifications" className="hover:text-primary transition-colors">Certifications</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Gen AI Engineering. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
