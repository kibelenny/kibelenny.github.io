import { ArrowUpRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-6">
        Section Header
        {/*<AnimatedSection animation="fade-up">*/}
        <div className="mb-16">
          <span className="font-mono text-sm tracking-widest text-primary-foreground/70 uppercase">
            06 — Contact
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            LET'S BUILD
            <br />
            <span className="text-stroke-thin-inverse">TOGETHER</span>
          </h2>
        </div>
        {/*</AnimatedSection>*/}
        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - CTA */}
          {/*<AnimatedSection animation="fade-right" delay={100}>*/}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-xl">
              I'm always interested in hearing about new opportunities,
              challenging projects, and ways to push the boundaries of software
              development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:wlenny20@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-bold uppercase tracking-wider text-sm hover-brutal border-2 border-primary-foreground"
              >
                Say Hello
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a
                href="/Lenny-Kibe-Resume.pdf"
                download
                className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-primary-foreground font-bold uppercase tracking-wider text-sm hover-brutal border-2 border-primary-foreground"
              >
                Download CV
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
          {/*</AnimatedSection>*/}
          {/* Right Column - Contact Details */}
          {/*<AnimatedSection animation="fade-left" delay={200}>*/}
          <div className="space-y-6">
            <a
              href="mailto:wlenny20@gmail.com"
              className="group flex items-center gap-4 p-6 border-2 border-primary-foreground/30 hover:border-primary-foreground transition-all"
            >
              <Mail className="w-6 h-6" />
              <div className="flex-1">
                <span className="font-mono text-xs text-primary-foreground/50 uppercase">
                  Email
                </span>
                <p className="font-bold mt-1">wlenny20@gmail.com</p>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="tel:+254729368250"
              className="group flex items-center gap-4 p-6 border-2 border-primary-foreground/30 hover:border-primary-foreground transition-all"
            >
              <Phone className="w-6 h-6" />
              <div className="flex-1">
                <span className="font-mono text-xs text-primary-foreground/50 uppercase">
                  Phone
                </span>
                <p className="font-bold mt-1">+254 729 368 250</p>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/lenny-k-36b8b9141"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 border-2 border-primary-foreground/30 hover:border-primary-foreground transition-all"
            >
              <Linkedin className="w-6 h-6" />
              <div className="flex-1">
                <span className="font-mono text-xs text-primary-foreground/50 uppercase">
                  LinkedIn
                </span>
                <p className="font-bold mt-1">@kibelenny</p>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="flex items-center gap-4 p-6 border-2 border-primary-foreground/30">
              <MapPin className="w-6 h-6" />
              <div className="flex-1">
                <span className="font-mono text-xs text-primary-foreground/50 uppercase">
                  Location
                </span>
                <p className="font-bold mt-1">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          {/*</AnimatedSection>*/}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
