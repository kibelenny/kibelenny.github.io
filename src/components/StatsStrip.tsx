import { stats } from "@/data/portfolio";

const StatsStrip = () => {
  return (
    <section aria-label="Highlights" className="bg-background border-b-2 border-border">
      <div className="container mx-auto px-6">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`py-10 md:py-14 px-4 md:px-8 border-border ${
                idx % 2 === 1 ? "border-l-2" : ""
              } ${idx > 1 ? "border-t-2 lg:border-t-0" : ""} ${
                idx === 2 ? "lg:border-l-2" : ""
              }`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl md:text-6xl font-bold tracking-tighter">
                {stat.value}
              </dd>
              <dd className="mt-2 font-mono text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatsStrip;
