import ProfessionalCard from "./ProfessionalCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid, List } from "lucide-react";
import heroPlumbing from "@/assets/hero-plumbing.jpg";
import heroElectrical from "@/assets/hero-electrical.jpg";
import heroCarpentry from "@/assets/hero-carpentry.jpg";
import heroPainting from "@/assets/hero-painting.jpg";

const ProfessionalsGrid = () => {
  const professionals = [
    {
      name: "John Mwansa",
      profession: "Certified Electrician",
      rating: 4.9,
      reviews: 127,
      distance: "2.3 km",
      availability: "Available Today",
      price: 250,
      skills: ["Wiring", "Installation", "Repair", "Maintenance"],
      image: heroElectrical,
      verified: true,
    },
    {
      name: "Patrick Banda",
      profession: "Master Plumber",
      rating: 4.8,
      reviews: 94,
      distance: "1.8 km",
      availability: "Available Tomorrow",
      price: 280,
      skills: ["Pipe Fitting", "Drainage", "Fixtures", "Emergency"],
      image: heroPlumbing,
      verified: true,
    },
    {
      name: "Moses Phiri",
      profession: "Professional Carpenter",
      rating: 4.9,
      reviews: 156,
      distance: "3.5 km",
      availability: "Available Today",
      price: 300,
      skills: ["Custom Furniture", "Doors", "Cabinets", "Repairs"],
      image: heroCarpentry,
      verified: true,
    },
    {
      name: "David Tembo",
      profession: "Expert Painter",
      rating: 4.7,
      reviews: 89,
      distance: "2.1 km",
      availability: "Available Next Week",
      price: 220,
      skills: ["Interior", "Exterior", "Decorative", "Commercial"],
      image: heroPainting,
      verified: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Available Professionals
            </h2>
            <p className="text-muted-foreground">
              {professionals.length} trusted professionals ready to help
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="nearest">Nearest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2 border border-border rounded-lg p-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {professionals.map((pro) => (
            <ProfessionalCard key={pro.name} {...pro} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Professionals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsGrid;
