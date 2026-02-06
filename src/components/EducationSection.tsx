import AnimatedSection from "./AnimatedSection";
import { education } from "@/data/portfolio";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/*Section Header */}
        {/*<AnimatedSection animation="fade-up">*/}
        <div className="mb-16">
          <span className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            05 — Education
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            ACADEMIC
            <br />
            <span className="text-stroke-thin">BACKGROUND</span>
          </h2>
        </div>
        {/*</AnimatedSection>*/}

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            // <AnimatedSection
            //   key={edu.id}
            //   animation="fade-right"
            //   delay={idx * 150}
            // >
            <div
              key={idx}
              className="group relative grid md:grid-cols-12 gap-6 p-8 md:p-10 bg-background border-2 border-border hover:border-primary transition-all hover-brutal"
            >
              {/* Number */}
              <div className="md:col-span-1 flex items-start">
                <span className="text-4xl font-bold text-muted-foreground/30">
                  0{idx + 1}
                </span>
              </div>

              {/* Period */}
              <div className="md:col-span-3">
                <span className="font-mono text-sm text-muted-foreground">
                  {edu.period}
                </span>
              </div>

              {/* Details */}
              <div className="md:col-span-8">
                <h3 className="text-xl md:text-2xl font-bold">{edu.degree}</h3>
                <p className="text-muted-foreground mt-2">{edu.institution}</p>
              </div>
            </div>
            // </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
