import { Clock, Shield, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose UBUKULE?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make it easy to find, book, and work with trusted professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                  >
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
