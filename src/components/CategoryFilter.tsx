import { Wrench, Zap, Hammer, Paintbrush, Droplet, Trees, Settings, Scissors, TruckIcon, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Assembly");
  const [activeSubFilter, setActiveSubFilter] = useState("Table & Chair Assembly");

  const categories = [
    { icon: Wrench, label: "Assembly" },
    { icon: Settings, label: "Mounting" },
    { icon: Droplet, label: "Cleaning" },
    { icon: Hammer, label: "Home Repair" },
    { icon: Paintbrush, label: "Painting" },
    { icon: TruckIcon, label: "Moving" },
    { icon: Trees, label: "Outdoor" },
    { icon: Package, label: "Rehab" },
  ];

  const subFilters = [
    "Furniture Assembly",
    "Wardrobe & Dresser Assembly",
    "Table & Chair Assembly",
    "Bed Assembly",
    "Disassemble Furniture",
    "General Furniture",
  ];

  return (
    <section className="py-6 bg-white border-b border-border/40">
      <div className="container mx-auto px-4">
        {/* Main Category Icons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-hide mb-6">
          <div className="flex gap-6 flex-nowrap">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.label;
              return (
                <button
                  key={category.label}
                  onClick={() => setActiveCategory(category.label)}
                  className={`flex-shrink-0 flex flex-col items-center gap-2 py-3 px-4 transition-all relative group ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">
                    {category.label}
                  </span>
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-foreground rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Filters Button */}
          <Button
            variant="outline"
            size="sm"
            className="flex-shrink-0 ml-4 gap-2 rounded-xl border-border"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="text-sm">Filters</span>
          </Button>
        </div>

        {/* Sub-category Pills */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {subFilters.map((filter) => {
            const isActive = activeSubFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveSubFilter(filter)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-background border border-border hover:border-foreground/30"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
