import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PopularProjects = () => {
  const projects = [
    {
      title: "Construction",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      tags: ["Real-estate"],
    },
    {
      title: "Backyard Swimming Pool",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
      tags: ["Cleaning", "Home"],
    },
    {
      title: "Home Repairs",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
      tags: ["Repair", "Home"],
    },
    {
      title: "Birthday planning",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      tags: ["Event", "Birthday"],
    },
    {
      title: "Office Renovation",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      tags: ["Commercial", "Renovation"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Decorative Elements */}
        <div className="relative mb-12">
          {/* Chart Visualization */}
          {/* <div className="absolute top-0 right-0 flex gap-1">
            {[60, 70, 80, 85, 90, 95, 88, 92, 97, 100].map((height, i) => (
              <div
                key={i}
                className="w-4 bg-primary rounded-t-md"
                style={{ height: `${height}px` }}
              />
            ))}
          </div> */}

          {/* Growth Badge */}
          <div className="absolute top-0 right-32 bg-white border-2 border-dashed border-primary/30 rounded-2xl p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-12 bg-primary rounded-full"
                    style={{ opacity: 1 - i * 0.2 }}
                  />
                ))}
              </div>
              <div className="text-sm font-bold text-primary">+38%</div>
            </div>
          </div>

          {/* Decorative Curves */}
          <div className="absolute -bottom-4 right-0 w-64 h-32">
            <svg viewBox="0 0 200 100" className="w-full h-full text-primary/20">
              <path d="M 200 0 Q 150 30, 100 0 T 0 0" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M 200 15 Q 150 45, 100 15 T 0 15" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M 200 30 Q 150 60, 100 30 T 0 30" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M 200 45 Q 150 75, 100 45 T 0 45" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-10 mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Most popular projects
          </h2>
          <Button variant="outline" className="rounded-full hover:bg-primary hover:text-white transition-colors">
            Show more
          </Button>
        </div>

        {/* Projects Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 basis-[85%] sm:basis-[45%] md:basis-[32%] lg:basis-[23%]">
                <div className="group relative overflow-hidden rounded-3xl  border border-0 hover:shadow-xl transition-all duration-300 h-80 cursor-pointer">
                  {/* Image */}
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project - ${project.tags.join(', ')}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-black/30 to-transparent" />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-white/95 text-foreground hover:bg-white backdrop-blur-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-6 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
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

export default PopularProjects;

