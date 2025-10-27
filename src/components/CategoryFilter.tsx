import { Wrench, Zap, Hammer, Paintbrush, Droplet, Trees, Settings, Scissors } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CategoryFilter = () => {
  const categories = [
    { icon: Wrench, label: "Plumbing", count: 156 },
    { icon: Zap, label: "Electrical", count: 142 },
    { icon: Hammer, label: "Carpentry", count: 98 },
    { icon: Paintbrush, label: "Painting", count: 124 },
    { icon: Droplet, label: "Cleaning", count: 87 },
    { icon: Trees, label: "Landscaping", count: 64 },
    { icon: Settings, label: "Repairs", count: 201 },
    { icon: Scissors, label: "Manufacturing", count: 45 },
  ];

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Browse by Category
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.label}
                className="flex-shrink-0 flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group min-w-[140px]"
              >
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground mb-1">
                    {category.label}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {category.count} pros
                  </Badge>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
