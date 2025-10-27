import { Clock, DollarSign, Shield } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Find available pros and reserve in under a minute.",
      gradient: "from-blue-500/10 to-blue-600/10",
    },
    {
      icon: Shield,
      title: "Verified & Trusted",
      description: "All professionals vetted for safety and reliability.",
      gradient: "from-primary/10 to-primary/20",
    },
    {
      icon: DollarSign,
      title: "Clear Pricing",
      description: "No hidden costs, transparent upfront quotes.",
      gradient: "from-green-500/10 to-green-600/10",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3 tracking-tight">
            Why Choose UBUKULE?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The easiest way to find trusted professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center space-y-4"
              >
                <div className="mx-auto w-14 h-14 rounded-3xl bg-primary/5 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
