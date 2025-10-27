import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Grid, Heading1, List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import ProfessionalCard from "./ProfessionalCard";
import heroCarpentry from "@/assets/p3.webp";
import heroElectrical from "@/assets/p5.webp";
import heroPainting from "@/assets/p6.webp";
import heroPlumbing from "@/assets/p1.webp";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
      name: "John Mwansa",
      profession: "Electrician",
      rating: 4.99,
      reviews: 127,
      distance: "Lusaka",
      availability: "Available Today",
      price: 250,
      skills: ["Wiring", "Installation", "Repair", "Maintenance"],
      image: "./public/p4.webp",
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
    {
      name: "Grace Zulu",
      profession: "Electrician",
      rating: 4.92,
      reviews: 103,
      distance: "Lusaka",
      availability: "Available Today",
      price: 260,
      skills: ["Solar Installation", "Wiring", "Repair", "Consultation"],
      image: heroElectrical,
      verified: true,
    },
    {
      name: "Samuel Mulenga",
      profession: "Plumber",
      rating: 4.97,
      reviews: 145,
      distance: "Ndola",
      availability: "Available Tomorrow",
      price: 290,
      skills: ["Installation", "Water Heating", "Drainage", "Maintenance"],
      image: heroPlumbing,
      verified: true,
    },
    {
      name: "Joseph Lungu",
      profession: "Carpenter",
      rating: 4.94,
      reviews: 112,
      distance: "Kitwe",
      availability: "Available Today",
      price: 310,
      skills: ["Roofing", "Furniture", "Flooring", "Renovation"],
      image: heroCarpentry,
      verified: true,
    },
    {
      name: "Michael Chanda",
      profession: "Painter",
      rating: 4.91,
      reviews: 78,
      distance: "Lusaka",
      availability: "Available This Week",
      price: 230,
      skills: ["Residential", "Commercial", "Spray Painting", "Wallpaper"],
      image: heroPainting,
      verified: true,
    },
    {
      name: "Elizabeth Mwape",
      profession: "Electrician",
      rating: 4.96,
      reviews: 134,
      distance: "Livingstone",
      availability: "Available Today",
      price: 270,
      skills: ["Industrial", "Residential", "Emergency", "Installation"],
      image: heroElectrical,
      verified: true,
    },
    {
      name: "Peter Kabwe",
      profession: "Plumber",
      rating: 4.88,
      reviews: 96,
      distance: "Lusaka",
      availability: "Available Tomorrow",
      price: 275,
      skills: ["Bathroom Fitting", "Kitchen", "Pipes", "Water Systems"],
      image: heroPlumbing,
      verified: true,
    },
    {
      name: "Frank Mutale",
      profession: "Carpenter",
      rating: 4.93,
      reviews: 121,
      distance: "Kitwe",
      availability: "Available Today",
      price: 295,
      skills: ["Decking", "Joinery", "Furniture", "Fencing"],
      image: heroCarpentry,
      verified: true,
    },
    {
      name: "Brian Siame",
      profession: "Painter",
      rating: 4.87,
      reviews: 85,
      distance: "Ndola",
      availability: "Available Next Week",
      price: 215,
      skills: ["Interior Design", "Color Consultation", "Finishing", "Texture"],
      image: heroPainting,
      verified: true,
    },
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className={`relative py-16 bg-white animate-on-scroll ${isVisible ? 'animate-in' : ''} overflow-hidden`}>
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-primary/5 rounded-full blur-3xl opacity-60" />
        {/* Decorative stripes */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Available Professionals
            </h2>
            <p className="text-muted-foreground text-base">
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
      </div>

      {/* Carousel - extends beyond container on right */}
      <div className="container mx-auto pl-4">
        <Carousel
          opts={{
            align: "start",
            loop: false,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {professionals.map((pro) => (
              <CarouselItem key={pro.name} className="pl-4 py-2 basis-[75%] sm:basis-[35%] md:basis-[32%] lg:basis-[23%] xl:basis-[22.5%]">
                <ProfessionalCard {...pro} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <div className="flex items-center justify-start gap-3 mt-8 ml-4">
            <CarouselPrevious className="static translate-y-0 rounded-full" />
            <CarouselNext className="static  translate-y-0 rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProfessionalsGrid;
