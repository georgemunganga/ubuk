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
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Search Bar - Modern Minimalist */}
          <div className="bg-white rounded-full shadow-sm border border-border hover:shadow-md transition-shadow max-w-4xl mx-auto">
            <div className="flex items-center p-1.5">
              {/* Location */}
              <div className="flex items-center gap-3 px-5 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground mb-0.5">Location</div>
                  <Input
                    placeholder="Where do you need help?"
                    className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-border/60" />

              {/* Start Time */}
              <div className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div>
                  <div className="text-xs font-medium text-foreground mb-0.5">Start</div>
                  <Input
                    type="time"
                    className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm w-20"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="h-8 w-px bg-border/60" />

              {/* Service Category */}
              <div className="flex items-center gap-3 px-5 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
                <Briefcase className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground mb-0.5">Service</div>
                  <Select>
                    <SelectTrigger className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm">
                      <SelectValue placeholder="What service?" />
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
              <Button size="lg" className="rounded-full h-12 px-5 ml-1.5 flex-shrink-0 shadow-sm gap-2">
                <span className="font-medium">Find help now</span>
                <div className="bg-white rounded-full p-1.5">
                  <Search className="h-4 w-4 text-primary" />
                </div>
              </Button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-5 gap-4 mt-12 h-[680px]">
            {/* c1 - Big Feature Card (Top-Left) */}
            <div className="xl:col-span-2 xl:row-span-3 relative group overflow-hidden rounded-2xl h-full">
              <img 
                src={heroPlumbing} 
                alt="Professional service" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-white/95 text-foreground hover:bg-white backdrop-blur-sm">
                    Service
                  </Badge>
                </div>
                <div>
                  <h2 className="text-white text-3xl lg:text-4xl font-semibold mb-4 leading-tight tracking-tight">
                    Find trusted professionals<br />
                    for any task
                  </h2>
                  <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/95 rounded-full font-medium">
                    Get started
                  </Button>
                </div>
              </div>
            </div>

            {/* c4 - Handyman Services (Middle-Top) */}
            <div className="xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-4 relative group overflow-hidden rounded-2xl h-full">
              <img 
                src={heroCarpentry} 
                alt="Handyman Services" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <Badge variant="secondary" className="bg-white/95 text-foreground hover:bg-white backdrop-blur-sm w-fit">
                  Carpentry
                </Badge>
                <h3 className="text-white text-xl font-semibold tracking-tight">
                  Handyman Services
                </h3>
              </div>
            </div>

            {/* c6 - Office Work (Tall Right - Full Height) */}
            <div className="xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-6 relative group overflow-hidden rounded-2xl h-full">
              <img 
                src={heroElectrical} 
                alt="Office Work" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <Badge variant="secondary" className="bg-white/95 text-foreground hover:bg-white backdrop-blur-sm w-fit">
                  Administration
                </Badge>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2 tracking-tight">
                    Office work
                  </h3>
                  <p className="text-white/80 text-sm">
                    Efficiency starts here
                  </p>
                </div>
              </div>
            </div>

            {/* c2 - Shipping + Freight (Bottom-Left 1) */}
            <div className="xl:col-start-1 xl:col-end-2 xl:row-start-4 xl:row-end-6 relative group overflow-hidden rounded-2xl h-full">
              <img 
                src={heroPainting} 
                alt="Shipping" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <Badge variant="secondary" className="bg-white/95 text-foreground hover:bg-white backdrop-blur-sm w-fit">
                  Shipping
                </Badge>
                <h3 className="text-white text-lg font-semibold tracking-tight">
                  Freight Services
                </h3>
              </div>
            </div>

            {/* c3 - Join as Professional (Bottom-Left 2) */}
            <div className="xl:col-start-2 xl:col-end-3 xl:row-start-4 xl:row-end-6 relative group overflow-hidden rounded-2xl h-full bg-primary">
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="bg-white/10 p-3 rounded-xl w-fit backdrop-blur-sm">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2 tracking-tight">
                    Ready to earn?
                  </h3>
                  <Button size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/95 rounded-full font-medium">
                    Join us
                  </Button>
                </div>
              </div>
            </div>

            {/* c5 - Hire Top Tasker (Middle-Bottom) */}
            <div className="xl:col-start-3 xl:col-end-4 xl:row-start-4 xl:row-end-6 relative group overflow-hidden rounded-2xl h-full bg-muted">
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/15">
                    Preston
                  </Badge>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/15">
                    Marry
                  </Badge>
                </div>
                <div className="flex gap-2 my-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-white -ml-3" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-white -ml-3" />
                </div>
                <div>
                  <h3 className="text-foreground text-lg font-semibold mb-1 tracking-tight">
                    Hire top professionals
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Verified and trusted taskers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
