import { ChevronLeft, ChevronRight, Droplet, Hammer, Package, Paintbrush, Scissors, Settings, SlidersHorizontal, Trees, TruckIcon, Wrench, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import { Button } from "@/components/ui/button";

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Assembly");
  const [activeSubFilter, setActiveSubFilter] = useState("Table & Chair Assembly");
  const catScrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    const el = catScrollRef.current;
    if (!el) return;
    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setShowLeft(scrollLeft > 4);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollCats = (dir: "left" | "right") => {
    const el = catScrollRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.8, 240);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const categories = [
    // From screenshot examples
    { icon: TruckIcon, label: "Moving" },
    { icon: Trees, label: "Agriculture" },
    { icon: Wrench, label: "Automotive" },
    { icon: Package, label: "Miscellaneous" },
    { icon: Trees, label: "Farm Work" },
    { icon: Package, label: "Warehouse" },
    { icon: Trees, label: "Live stock" },
    { icon: Hammer, label: "Office" },
    { icon: Package, label: "Shipping" },
    // Existing set
    { icon: Wrench, label: "Assembly" },
    { icon: Settings, label: "Mounting" },
    { icon: Droplet, label: "Cleaning" },
    { icon: Hammer, label: "Home Repair" },
    { icon: Paintbrush, label: "Painting" },
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

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`relative py-12 bg-white top-0 z-40 backdrop-blur-sm animate-on-scroll ${isVisible ? 'animate-in' : ''} overflow-hidden`}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Explore Tasks and Services<br />for Every Need
          </h2>
          
          {/* Tasks/Services Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
              <button className="px-6 py-2.5 rounded-full bg-primary text-white font-medium text-sm transition-all duration-200 flex items-center gap-2">
                Tasks
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="px-6 py-2.5 rounded-full text-gray-600 hover:text-gray-900 font-medium text-sm transition-all duration-200">
                Services
              </button>
            </div>
          </div>
          
          {/* Info Text */}
          <p className="text-primary text-sm md:text-base flex items-center justify-center gap-2">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Tasks are small, quick jobs that are often done on the spot by vetted taskers</span>
          </p>
        </div>
        {/* Airbnb-style Main Category Slider */}
        <div className="relative mb-4 pb-0">
          {/* Left gradient fade */}
          {showLeft && (
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          )}
          
          {/* Right gradient fade */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
          
          {/* Scrollable container */}
          <div 
            ref={catScrollRef} 
            className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex border-b-[1.5px] border-primary/10 pb-0 items-center gap-4 md:gap-8 pr-32">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.label;
                return (
                  <button
                    key={category.label}
                    onClick={() => setActiveCategory(category.label)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex-shrink-0 flex flex-col items-center gap-2 py-3 pb-4 px-2 transition-all duration-200 relative group min-w-[64px] border-b-2 ${
                      isActive
                        ? "opacity-100 border-primary"
                        : "opacity-60 hover:opacity-100 "
                    }`}
                  >
                    <Icon 
                      className={`h-6 w-6 transition-colors duration-200 ${
                        isActive ? "text-primary" : "text-gray-600 group-hover:text-primary"
                      }`} 
                      strokeWidth={1.5} 
                    />
                    <span className={`text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                      isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                    }`}>
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Floating Left Arrow Button */}
          {showLeft && (
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollCats("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-primary border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-105"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
          )}
          
          {/* Floating Right Arrow Button - Always Visible */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollCats("right")}
            className="absolute right-28 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-primary border border-primary shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-105"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
          
          {/* Floating Filter Button */}
          <Button
            variant="outline"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 gap-2 rounded-2xl bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="text-xs font-medium">Filters</span>
          </Button>
        </div>

        {/* Sub-category Pills */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {subFilters.map((filter) => {
            const isActive = activeSubFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveSubFilter(filter)}
                className={`flex-shrink-0 px-4 py-4 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
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
