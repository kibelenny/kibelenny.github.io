import { ArrowDown, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { integrations, systemNodes } from "@/data/portfolio";

const SystemsSection = () => {
  return (
    <section id="systems" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="mb-16">
            <span className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              03 — Systems
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              WHAT I
              <br />
              <span className="text-stroke-thin">BUILD ON</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-foreground/70">
              The path one loan request takes through the platform. I've
              shipped code in every layer.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={150}>
          <ol className="flex flex-col lg:flex-row lg:items-stretch gap-3">
            {systemNodes.map((node, idx) => (
              <li
                key={node.id}
                className="flex flex-col lg:flex-row lg:flex-1 items-center gap-3"
              >
                <div className="w-full h-full p-6 bg-background border-2 border-border hover-brutal">
                  <span className="font-mono text-xs text-muted-foreground">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{node.name}</h3>
                  <p className="text-sm text-foreground/70 mt-2 leading-relaxed">
                    {node.role}
                  </p>
                  <p className="font-mono text-xs mt-4 pt-4 border-t-2 border-border">
                    {node.stack}
                  </p>
                </div>
                {idx < systemNodes.length - 1 && (
                  <>
                    <ArrowDown
                      aria-hidden
                      className="lg:hidden w-6 h-6 shrink-0"
                    />
                    <ArrowRight
                      aria-hidden
                      className="hidden lg:block w-6 h-6 shrink-0"
                    />
                  </>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-3 p-6 bg-primary text-primary-foreground border-2 border-primary">
            <span className="font-mono text-xs uppercase tracking-wider text-primary-foreground/70">
              Integrations I've built or maintained
            </span>
            <ul className="mt-4 flex flex-wrap gap-2">
              {integrations.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 font-mono text-sm border-2 border-primary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 font-mono text-sm text-muted-foreground">
            Runs on Kubernetes (Helm, canary releases) and AWS, with Keycloak
            for identity across tenants.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SystemsSection;
