import AnimatedSection from "./AnimatedSection";
import { skillCategories } from "@/data/portfolio";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-16">
            <span className="font-mono text-sm tracking-widest text-primary-foreground/70 uppercase">
              03 — Skills
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              TECH
              <br />
              <span className="text-stroke-thin-inverse">ARSENAL</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <AnimatedSection
              key={category.title}
              animation="scale"
              delay={catIdx * 100}
            >
              <div className="group p-8 border-2 border-primary-foreground/30 hover:border-primary-foreground transition-all hover-brutal bg-primary h-full">
                <span className="font-mono text-xs text-primary-foreground/50">
                  0{catIdx + 1}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-mono border border-primary-foreground/50 hover:bg-primary-foreground hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-20 overflow-hidden">
          <div className="animate-marquee-reverse whitespace-nowrap opacity-20">
            <span className="text-6xl md:text-8xl font-bold tracking-widest mx-8">
              CODE • BUILD • DEPLOY • SCALE •
            </span>
            <span className="text-6xl md:text-8xl font-bold tracking-widest mx-8">
              CODE • BUILD • DEPLOY • SCALE •
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
