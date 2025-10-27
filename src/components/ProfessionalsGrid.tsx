import ProfessionalCard from "./ProfessionalCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Grid, List } from "lucide-react";
import heroPlumbing from "@/assets/hero-plumbing.jpg";
import heroElectrical from "@/assets/hero-electrical.jpg";
import heroCarpentry from "@/assets/hero-carpentry.jpg";
import heroPainting from "@/assets/hero-painting.jpg";

const ProfessionalsGrid = () => {
  const professionals = [
    {
      name: "John Mwansa",
      profession: "Electrician",
      rating: 4.99,
      reviews: 127,
      distance: "Lusaka",
      availability: "Available Today",
      price: 250,
      skills: ["Wiring", "Installation", "Repair", "Maintenance"],
      image: heroElectrical,
      verified: true,
    },
    {
      name: "Patrick Banda",
      profession: "Plumber",
      rating: 4.95,
      reviews: 94,
      distance: "Kitwe",
      availability: "Available Tomorrow",
      price: 280,
      skills: ["Pipe Fitting", "Drainage", "Fixtures", "Emergency"],
      image: heroPlumbing,
      verified: true,
    },
    {
      name: "Moses Phiri",
      profession: "Carpenter",
      rating: 4.98,
      reviews: 156,
      distance: "Ndola",
      availability: "Available Today",
      price: 300,
      skills: ["Custom Furniture", "Doors", "Cabinets", "Repairs"],
      image: heroCarpentry,
      verified: true,
    },
    {
      name: "David Tembo",
      profession: "Painter",
      rating: 4.89,
      reviews: 89,
      distance: "Livingstone",
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-semibold text-foreground mb-2 tracking-tight">
              Available Professionals
            </h2>
            <p className="text-muted-foreground">
              {professionals.length} trusted professionals near you
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px] rounded-lg border-border">
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

            <div className="flex gap-1 border border-border rounded-lg p-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {professionals.map((pro) => (
              <CarouselItem key={pro.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ProfessionalCard {...pro} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 rounded-full" />
            <CarouselNext className="static translate-y-0 rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProfessionalsGrid;
