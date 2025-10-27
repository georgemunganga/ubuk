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
    <section className="py-20 bg-gradient-to-br from-primary via-primary/96 to-primary/92">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div className="text-primary-foreground space-y-6">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-primary-foreground">
                For Professionals
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-balance tracking-tight">
              Ready to grow your business?
            </h2>

            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join UBUKULE and connect with verified local clients looking for your expertise.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.text} className="flex items-start gap-3">
                    <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary-foreground" strokeWidth={2} />
                    </div>
                    <span className="text-primary-foreground/95 font-normal text-sm">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/95 font-medium rounded-full"
              >
                Become a Pro
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full font-medium"
              >
                Learn More
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70 pt-2">
              Join 5,000+ professionals growing their business
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative lg:order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={joinPro}
                alt="Join as a Professional"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCTA;
