import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  const [activeExp, setActiveExp] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-16">
            <span className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              02 — Experience
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              WHERE I'VE
              <br />
              <span className="text-stroke-thin">WORKED</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Experience Grid */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Company List */}
            <div className="lg:col-span-4 space-y-2">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(exp.id)}
                  className={`w-full text-left p-6 border-2 transition-all hover-brutal ${
                    activeExp === exp.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary"
                  }`}
                >
                  <span className="font-mono text-xs opacity-60">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{exp.company}</h3>
                  <p
                    className={`text-sm mt-1 ${activeExp === exp.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                  >
                    {exp.role}
                  </p>
                </button>
              ))}
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className={`${
                    activeExp === exp.id ? "block" : "hidden"
                  } border-2 border-border p-8 md:p-12`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-muted-foreground mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground bg-secondary px-4 py-2 border border-border">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-4 text-foreground/80">
                        <span className="font-mono text-primary text-sm mt-1">
                          →
                        </span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
