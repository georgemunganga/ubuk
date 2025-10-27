import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroCarpentry from "@/assets/hero-carpentry.jpg";
import heroElectrical from "@/assets/hero-electrical.jpg";
import heroPainting from "@/assets/hero-painting.jpg";
import heroPlumbing from "@/assets/hero-plumbing.jpg";
import joinPro from "@/assets/join-pro.jpg";

const ServiceCards = () => {
  const services = [
    {
      title: "Plumbing Services",
      description: "Expert plumbers for all your home needs",
      image: heroPlumbing,
      badge: "Most Popular",
      size: "large",
    },
    {
      title: "Electrical Work",
      description: "Licensed electricians you can trust",
      image: heroElectrical,
      badge: "Top Rated",
      size: "medium",
    },
    {
      title: "Carpentry",
      description: "Custom woodwork and repairs",
      image: heroCarpentry,
      badge: "Verified Pros",
      size: "medium",
    },
    {
      title: "Painting & Decorating",
      description: "Transform your space",
      image: heroPainting,
      badge: "Quick Service",
      size: "small",
    },
    {
      title: "Join as a Professional",
      description: "Grow your business with UBUKULE",
      image: joinPro,
      badge: "Start Earning",
      size: "small",
      isPro: true,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                group relative overflow-hidden rounded-3xl cursor-pointer
                transition-all duration-300 hover:shadow-xl hover:scale-[1.03]
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
                ${index === 4 ? "md:col-span-1" : ""}
              `}
            >
              <div className="relative h-full min-h-[280px] md:min-h-[320px]">
                {/* Image with overlay */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.isPro ? 'from-primary/90 via-primary/60' : 'from-foreground/80 via-foreground/40'} to-transparent`} />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-primary-foreground">
                  <Badge className="self-start mb-3 bg-background/90 text-foreground hover:bg-background">
                    {service.badge}
                  </Badge>
                  <h3 className="text-3xl md:text-3xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/90 mb-4 max-w-md">
                    {service.description}
                  </p>
                  <Button
                    variant={service.isPro ? "secondary" : "outline"}
                    className={service.isPro ? "" : "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"}
                  >
                    {service.isPro ? "Learn More" : "Get Help Now"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
