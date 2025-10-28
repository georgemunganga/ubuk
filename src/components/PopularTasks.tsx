import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PopularTasks = () => {
  const tasks = [
    {
      title: "Furniture Assembly",
      price: 38.99,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
      tags: ["Installation", "Assembly"],
    },
    {
      title: "Home & Apartment Cleaning",
      price: 83.99,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
      tags: ["HomeCleaning", "House"],
    },
    {
      title: "Minor plumbing repairs",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
      tags: ["PipeFix", "PlumbingFix"],
    },
    {
      title: "Light installations",
      price: 43.99,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
      tags: ["LEDInstallation", "WallLights"],
    },
    {
      title: "Home Cleaning",
      price: 65.99,
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
      tags: ["HomeCleaning", "DeepClean"],
    },
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`py-16 bg-primary animate-on-scroll ${isVisible ? 'animate-in' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Most popular tasks
          </h2>
          <Button variant="outline" className="rounded-full hover:bg-white hover:text-primary transition-colors">
            Show more
          </Button>
        </div>

        {/* Tasks Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {tasks.map((task, index) => (
              <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-[45%] md:basis-[32%] lg:basis-[23%]">
                {/* Tall, modern card */}
                <div className="group relative overflow-hidden rounded-[28px] bg-primary border border-primary shadow-sm transition-all duration-300 will-change-transform origin-left hover:shadow-xl hover:border-primary/40 hover:z-10 hover:scale-x-[1.02] cursor-pointer">
                  {/* Image area */}
                  <div className="relative h-[420px] sm:h-[460px] overflow-hidden">
                    <img
                      src={task.image}
                      alt={`${task.title} service starting at $${task.price} - ${task.tags.join(', ')}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Blue tint + gradient */}
                    <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {task.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-white/95 text-foreground hover:bg-white backdrop-blur-md"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Corner arrow */}
                    <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="h-4 w-4 text-foreground" />
                    </div>

                    {/* Bottom content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-2xl font-semibold tracking-tight mb-1 drop-shadow-sm">
                        {task.title}
                      </h3>
                      <p className="text-white/85 text-sm mb-4">// Starting at K{task.price}</p>

                      <Button className="w-full rounded-full font-medium bg-white text-foreground hover:bg-white/95">
                        Get help now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="flex items-center justify-start gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 rounded-full" />
            <CarouselNext className="static translate-y-0 rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default PopularTasks;
