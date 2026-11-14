import AnimatedSection from "./AnimatedSection";
import { principles } from "@/data/portfolio";

const ApproachSection = () => {
  return (
    <section
      id="approach"
      className="py-24 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="mb-16">
            <span className="font-mono text-sm tracking-widest text-primary-foreground/70 uppercase">
              06 — Approach
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              HOW I
              <br />
              <span className="text-stroke-thin-inverse">WORK</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((p, idx) => (
            <AnimatedSection key={p.title} animation="fade-up" delay={idx * 100}>
              <div className="h-full p-8 border-2 border-primary-foreground">
                <span className="font-mono text-sm text-primary-foreground/50">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold mt-2">{p.title}</h3>
                <p className="mt-4 text-primary-foreground/75 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
