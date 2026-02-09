import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Animated Geometric Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-primary-foreground animate-float opacity-30" />
      <div
        className="absolute bottom-40 left-10 w-24 h-24 bg-primary-foreground animate-float opacity-20"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary-foreground rotate-45 animate-pulse-slow opacity-25" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        {/* Pre-title */}
        <div className="animate-slide-up">
          <span className="font-mono text-sm md:text-base tracking-widest text-primary-foreground/70 uppercase">
            Software Engineer • Nairobi, Kenya
          </span>
        </div>

        {/* Main Title */}
        <h1 className="mt-6 animate-slide-up-delay-1">
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-primary-foreground">
            LENNY
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-stroke-thin-inverse  mt-2">
            KIBE
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-primary-foreground mt-2">
            WANJOHI
          </span>
        </h1>

        {/* Role Description */}
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-slide-up-delay-2 font-mono">
          Results-oriented Software Engineer specializing in scalable Frontend
          applications using Vue.js and TypeScript, with expertise in Cloud
          Infrastructure (AWS) and DevOps automation.
        </p>

        {/* Contact Links */}
        <div className="mt-10 flex flex-wrap gap-6 animate-slide-up-delay-3">
          <a
            href="mailto:wlenny20@gmail.com"
            className="group flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors font-mono text-sm"
          >
            <Mail className="w-4 h-4" />
            <span className="border-b border-transparent group-hover:border-primary-foreground">
              wlenny20@gmail.com
            </span>
          </a>
          <a
            href="tel:+254729368250"
            className="group flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors font-mono text-sm"
          >
            <Phone className="w-4 h-4" />
            <span className="border-b border-transparent group-hover:border-primary-foreground">
              +254 729 368 250
            </span>
          </a>
          <span className="flex items-center gap-2 text-primary-foreground/70 font-mono text-sm">
            <MapPin className="w-4 h-4" />
            <span>Nairobi, Kenya</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap gap-4 animate-slide-up-delay-3">
          <a
            href="/Lenny-Kibe-Resume.pdf"
            download
            className="group relative px-8 py-4 bg-primary-foreground text-primary font-bold uppercase tracking-wider text-sm hover-brutal border-2 border-primary-foreground"
          >
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/lenny-k-36b8b9141"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-transparent text-primary-foreground font-bold uppercase tracking-wider text-sm hover-brutal border-2 border-primary-foreground"
          >
            LinkedIn
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-foreground/50" />
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 bg-primary-foreground">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-2xl md:text-4xl font-bold text-primary tracking-wider mx-8">
            FRONTEND ENGINEER • AWS • VUE.JS • TYPESCRIPT • DEVOPS • REACT •
          </span>
          <span className="text-2xl md:text-4xl font-bold text-primary tracking-wider mx-8">
            FRONTEND ENGINEER • AWS • VUE.JS • TYPESCRIPT • DEVOPS • REACT •
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
