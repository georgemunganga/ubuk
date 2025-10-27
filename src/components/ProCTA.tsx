import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Users, Briefcase } from "lucide-react";
import joinPro from "@/assets/join-pro.jpg";

const ProCTA = () => {
  const benefits = [
    {
      icon: TrendingUp,
      text: "Steady local jobs",
    },
    {
      icon: CheckCircle2,
      text: "Low commission rates",
    },
    {
      icon: Briefcase,
      text: "Built-in tools for quotes & messaging",
    },
    {
      icon: Users,
      text: "Verified profile visibility boost",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-primary-foreground space-y-6">
            <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-primary-foreground">
                For Professionals
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Are you a professional?
            </h2>

            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join UBUKULE and grow your income with verified, local clients.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.text} className="flex items-start gap-3">
                    <div className="bg-primary-foreground/20 p-2 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-primary-foreground/95 font-medium">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
              >
                Become a Pro
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Learn More
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70 pt-2">
              Join over 5,000+ professionals already growing their business on UBUKULE
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={joinPro}
                alt="Join as a Professional"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCTA;
