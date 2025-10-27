import { Search, MapPin, Clock, Briefcase, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import heroCarpentry from "@/assets/hero-carpentry.jpg";
import heroElectrical from "@/assets/hero-electrical.jpg";
import heroPainting from "@/assets/hero-painting.jpg";
import heroPlumbing from "@/assets/hero-plumbing.jpg";
import joinPro from "@/assets/join-pro.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background via-secondary/30 to-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Search Bar - Airbnb Style */}
          <div className="bg-card rounded-full shadow-xl border border-border max-w-4xl mx-auto">
            <div className="flex items-center p-2">
              {/* Location */}
              <div className="flex items-center gap-3 px-6 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs font-semibold text-foreground">Location</div>
                  <Input
                    placeholder="Enter your address"
                    className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-border" />

              {/* Start Time */}
              <div className="flex items-center gap-3 px-6 py-3 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-foreground">Start time</div>
                  <Input
                    type="time"
                    placeholder="Add dates"
                    className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm w-24"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-border" />

              {/* End Time */}
              <div className="flex items-center gap-3 px-6 py-3 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-foreground">End time</div>
                  <Input
                    type="time"
                    placeholder="Add dates"
                    className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm w-24"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-border" />

              {/* Service Category */}
              <div className="flex items-center gap-3 px-6 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                <Briefcase className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs font-semibold text-foreground">Find help today</div>
                  <Select>
                    <SelectTrigger className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="carpentry">Carpentry</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="cleaning">Cleaning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search Button */}
              <Button size="lg" className="rounded-full h-14 w-14 p-0 ml-2 flex-shrink-0">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {/* Large Card - Main Hero */}
            <div className="lg:col-span-1 lg:row-span-2 relative group overflow-hidden rounded-3xl h-[400px] lg:h-full">
              <img 
                src={heroPlumbing} 
                alt="Professional service" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                    Service
                  </Badge>
                  <Badge variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                    Helperplatform
                  </Badge>
                </div>
                <div>
                  <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    A world of talent right at your fingertips.<br />
                    Get help now.
                  </h2>
                  <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90 rounded-full">
                    Get help now
                  </Button>
                </div>
                <button className="absolute top-8 right-8 bg-white rounded-full p-3 hover:scale-110 transition-transform">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Handyman Services */}
            <div className="relative group overflow-hidden rounded-3xl h-[250px]">
              <img 
                src={heroCarpentry} 
                alt="Handyman Services" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <Badge variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                    Wood
                  </Badge>
                </div>
                <h3 className="text-white text-2xl font-bold">
                  Handyman Services
                </h3>
                <button className="absolute top-6 right-6 bg-white rounded-full p-3 hover:scale-110 transition-transform">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Office Work */}
            <div className="relative group overflow-hidden rounded-3xl h-[250px]">
              <img 
                src={heroElectrical} 
                alt="Office Work" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <Badge variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                    Administration
                  </Badge>
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-1">
                    Office work
                  </h3>
                  <p className="text-white/80 text-sm">
                    // Efficiency Starts Here<br />
                    Elevate Your Office Work.
                  </p>
                  <Button size="sm" variant="secondary" className="bg-white text-foreground hover:bg-white/90 rounded-full mt-3">
                    Get help now
                  </Button>
                </div>
                <button className="absolute top-6 right-6 bg-white rounded-full p-3 hover:scale-110 transition-transform">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Shipping + Freight */}
            <div className="relative group overflow-hidden rounded-3xl h-[200px]">
              <img 
                src={heroPainting} 
                alt="Shipping" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <Badge variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                    Shipping
                  </Badge>
                </div>
                <h3 className="text-white text-xl font-bold">
                  Shipping + Freight
                </h3>
                <button className="absolute top-6 right-6 bg-white rounded-full p-3 hover:scale-110 transition-transform">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Join as Professional */}
            <div className="relative group overflow-hidden rounded-3xl h-[200px] bg-primary">
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-full">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-1">
                    Ready to turn your skills into income?
                  </h3>
                  <Button size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-full mt-2">
                    Join us
                  </Button>
                </div>
                <button className="absolute top-6 right-6 bg-white rounded-full p-3 hover:scale-110 transition-transform">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </button>
              </div>
            </div>

            {/* Hire Top Tasker */}
            <div className="relative group overflow-hidden rounded-3xl h-[200px] bg-muted">
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    Precision
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    More
                  </Badge>
                </div>
                <div className="flex gap-2 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-white" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-white -ml-4" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-white -ml-4" />
                  <div className="w-12 h-12 rounded-full bg-muted-foreground/20 border-2 border-white -ml-4 flex items-center justify-center">
                    <span className="text-xs font-semibold">...</span>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    Sandy
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    John
                  </Badge>
                </div>
                <div>
                  <h3 className="text-foreground text-xl font-bold mb-1">
                    Hire top tasker
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    // Hire the Best Taskers<br />
                    for Your Needs.
                  </p>
                </div>
                <button className="absolute top-6 right-6 bg-primary rounded-full p-3 hover:scale-110 transition-transform">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
