import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/portfolio";

const ProjectsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-16">
            <span className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              05 — Projects
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              FEATURED
              <br />
              <span className="text-stroke-thin">WORK</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <AnimatedSection
              key={project.id}
              animation="fade-left"
              delay={idx * 150}
            >
              <div className="group grid lg:grid-cols-12 gap-8 p-8 md:p-12 border-2 border-border hover:border-primary transition-all">
                {/* Project Number */}
                <div className="lg:col-span-2">
                  <span className="text-7xl md:text-9xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-10 space-y-6">
                  <div>
                    <span className="font-mono text-sm text-muted-foreground">
                      {project.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mt-2">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-foreground/80 max-w-3xl leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-3">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-4 text-foreground/70">
                        <span className="font-mono text-primary text-sm mt-1">
                          →
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Case study */}
                  {project.caseStudy && (
                    <div className="border-t-2 border-border pt-6">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenId(openId === project.id ? null : project.id)
                        }
                        aria-expanded={openId === project.id}
                        aria-controls={`case-${project.id}`}
                        className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wider hover:underline"
                      >
                        {openId === project.id ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                        {openId === project.id
                          ? "Hide case study"
                          : "Read case study"}
                      </button>
                      {openId === project.id && (
                        <div
                          id={`case-${project.id}`}
                          className="mt-6 grid md:grid-cols-3 gap-6"
                        >
                          <div className="p-6 bg-secondary border-2 border-border">
                            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                              Problem
                            </h4>
                            <p className="mt-3 text-foreground/80 leading-relaxed">
                              {project.caseStudy.problem}
                            </p>
                          </div>
                          <div className="p-6 bg-secondary border-2 border-border">
                            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                              Approach
                            </h4>
                            <ul className="mt-3 space-y-2 text-foreground/80 leading-relaxed">
                              {project.caseStudy.approach.map((step) => (
                                <li key={step} className="flex gap-2">
                                  <span className="font-mono text-primary">·</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-6 bg-primary text-primary-foreground border-2 border-primary">
                            <h4 className="font-mono text-xs uppercase tracking-wider text-primary-foreground/70">
                              Outcome
                            </h4>
                            <p className="mt-3 leading-relaxed">
                              {project.caseStudy.outcome}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm font-mono border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
