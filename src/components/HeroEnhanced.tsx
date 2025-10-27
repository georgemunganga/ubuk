import { Briefcase, ChevronLeft, ChevronRight, Clock, MapPin, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useEmblaCarousel from "embla-carousel-react";

const HeroEnhanced = () => {
  // Typewriter animation setup
  const phrases = [
    "construction supplies",
    "trusted contractors",
    "building materials",
    "professional services",
    "construction projects",
    "quality suppliers",
    "expert craftsmen",
    "property development",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"location" | "datetime" | "service" | "mobile" | null>(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const full = phrases[currentPhraseIndex];
    const doneTyping = displayText === full;
    const doneDeleting = displayText === "";
    let t = 0;

    if (!isDeleting && !doneTyping) {
      t = window.setTimeout(() => setDisplayText(full.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && doneTyping) {
      t = window.setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && !doneDeleting) {
      t = window.setTimeout(() => setDisplayText(full.slice(0, displayText.length - 1)), 40);
    } else if (isDeleting && doneDeleting) {
      setIsDeleting(false);
      setCurrentPhraseIndex((p) => (p + 1) % phrases.length);
    }

    return () => window.clearTimeout(t);
  }, [displayText, isDeleting, currentPhraseIndex, phrases]);

  // Card data
  const cards = [
    { img: "/plumber.jpg", badge: "Plumbing", title: "Expert plumbers" },
    { img: "/capenter.jpg", badge: "Carpentry", title: "Skilled carpenters" },
    { img: "/p1.webp", badge: "Electrical", title: "Licensed electricians" },
    { img: "/p3.webp", badge: "Painting", title: "Professional painters" },
  ];

  // Mobile slider (Embla)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, skipSnaps: false });
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="relative bg-white py-16 md:py-20 xl:pt-4 overflow-hidden">
      {/* Gradient accents */}
      <div className="pointer-events-none absolute -z-10 -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 -bottom-48 -right-40 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-40 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl" />

      <div className="container mx-auto px-4">
        {/* Title with typewriter */}
        <div className="text-center mb-10">
          <h1 className="text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight leading-tight">
            Find your next<br />
            <span className="inline-block min-w-[320px]">
              <span className="inline-flex items-center">
                <span className="text-primary whitespace-nowrap">{displayText}</span>
                <span className="ml-1 inline-block w-[2px] h-[1.1em] bg-primary animate-pulse" />
              </span>
            </span>
          </h1>
        </div>

        {/* Mobile Search (compact) */}
        <div className="md:hidden px-4 mb-8">
          <div className="bg-white rounded-full shadow-lg border border-gray-200 px-4 py-3 flex items-center gap-3 w-full hover:shadow-xl transition-shadow duration-200">
            <Search className="h-5 w-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for services..."
              className="flex-1 text-sm bg-transparent outline-none placeholder:text-gray-500"
              onClick={() => setActiveDropdown("mobile")}
              readOnly
            />
            <button className="bg-primary rounded-full p-2" aria-label="Search">
              <Search className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Desktop Search with dropdowns */}
        <div className="hidden md:block relative">
          <div className="bg-white rounded-full shadow-lg border border-primary/20 hover:shadow-md transition-shadow max-w-4xl mx-auto">
            <div className="flex items-center p-1.5">
              {/* Location */}
              <div
                className="flex items-center gap-3 px-5 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer"
                onClick={() => setActiveDropdown(activeDropdown === "location" ? null : "location")}
              >
                <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground mb-0.5">Location</div>
                  <div className="text-sm text-muted-foreground/90">
                    {selectedLocation || "Where do you need help?"}
                  </div>
                </div>
              </div>

              <div className="h-8 w-px bg-border/60" />

              {/* Date & Time */}
              <div
                className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 rounded-full transition-colors cursor-pointer"
                onClick={() => setActiveDropdown(activeDropdown === "datetime" ? null : "datetime")}
              >
                <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div>
                  <div className="text-xs font-medium text-foreground mb-0.5">When</div>
                  <div className="text-sm text-muted-foreground/90">
                    {selectedDate ? `${selectedDate}${selectedTime ? ` · ${selectedTime}` : ""}` : "Add dates"}
                  </div>
                </div>
              </div>

              <div className="h-8 w-px bg-border/60" />

              {/* Service */}
              <div
                className="flex items-center gap-3 px-5 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer"
                onClick={() => setActiveDropdown(activeDropdown === "service" ? null : "service")}
              >
                <Briefcase className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground mb-0.5">Service</div>
                  <div className="text-sm text-muted-foreground/90">
                    {selectedService || "What service?"}
                  </div>
                </div>
              </div>

              <Button size="lg" className="rounded-full py-4 px-5 ml-1.5 flex-shrink-0 shadow-sm gap-2">
                <span className="font-medium hidden lg:inline">Find help now</span>
                <span className="font-medium lg:hidden">Search</span>
                <div className="bg-white rounded-full p-1.5">
                  <Search className="h-4 w-4 text-primary" />
                </div>
              </Button>
            </div>
          </div>

          {/* Dropdown Panels */}
          {activeDropdown === "location" && (
            <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">
              <h3 className="font-semibold text-sm mb-3">Popular Locations</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Lusaka", "Kitwe", "Ndola", "Livingstone", "Kabwe", "Chingola"].map((city) => (
                  <button
                    key={city}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLocation(city);
                      setActiveDropdown(null);
                    }}
                    className="text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                  >
                    <div className="font-medium">{city}</div>
                    <div className="text-xs text-gray-500">Zambia</div>
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t">
                <Input
                  placeholder="Enter specific address..."
                  className="w-full"
                  value={selectedLocation}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                />
              </div>
            </div>
          )}

          {activeDropdown === "datetime" && (
            <div className="absolute top-full left-1/3 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">
              <h3 className="font-semibold text-sm mb-3">Select Date & Time</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">Date</label>
                  <Input type="date" className="w-full" value={selectedDate} onClick={(e) => e.stopPropagation()} onChange={(e) => setSelectedDate(e.target.value)} />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">Preferred Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Morning", "Afternoon", "Evening"].map((time) => (
                      <button
                        key={time}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTime(time);
                        }}
                        className={`px-3 py-2 rounded-lg border transition-colors text-sm ${selectedTime === time ? "bg-primary text-white border-primary" : "border-gray-200 hover:border-primary"}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <button onClick={(e) => { e.stopPropagation(); setSelectedDate(""); setSelectedTime(""); }} className="text-sm text-gray-500 hover:text-gray-700">Clear</button>
                  <button onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="text-sm font-medium text-primary hover:text-primary/80">Apply</button>
                </div>
              </div>
            </div>
          )}

          {activeDropdown === "service" && (
            <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">
              <h3 className="font-semibold text-sm mb-3">Construction Services</h3>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {["Construction", "Plumbing", "Electrical", "Carpentry", "Painting", "Roofing", "Flooring", "Masonry"].map((service) => (
                  <button
                    key={service}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-2 text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/60" />
                    <span className="font-medium">{service}</span>
                  </button>
                ))}
              </div>
              <div className="pt-3 border-t">
                <button onClick={(e) => { e.stopPropagation(); setActiveDropdown(null); }} className="text-sm text-primary hover:text-primary/80 font-medium">
                  View all services →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile dropdown sheet */}
        {activeDropdown === "mobile" && (
          <div className="md:hidden fixed inset-x-4 top-32 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50">
            <h3 className="font-semibold text-base mb-4">What are you looking for?</h3>
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-600 mb-2 block">Service Type</label>
              <div className="grid grid-cols-2 gap-2">
                {["Construction", "Plumbing", "Electrical", "Carpentry"].map((service) => (
                  <button key={service} onClick={() => { setSelectedService(service); setActiveDropdown(null); }} className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary/60" />
                    <span className="font-medium">{service}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-600 mb-2 block">Location</label>
              <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm" onChange={(e) => setSelectedLocation(e.target.value)}>
                <option value="">Select location</option>
                <option value="Lusaka">Lusaka</option>
                <option value="Kitwe">Kitwe</option>
                <option value="Ndola">Ndola</option>
                <option value="Livingstone">Livingstone</option>
              </select>
            </div>
            <Button className="w-full rounded-full" onClick={() => setActiveDropdown(null)}>Search</Button>
          </div>
        )}

        {/* Click outside to close */}
        {activeDropdown && (<div className="fixed inset-0 z-40" onClick={() => setActiveDropdown(null)} />)}

        {/* Mobile slider */}
        <div className="md:hidden mt-12">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {cards.map((c, i) => (
                  <div key={i} className="pl-4 flex-[0_0_85%] sm:flex-[0_0_60%]">
                    <div className="relative group overflow-hidden rounded-3xl h-72 cursor-pointer shadow-sm border border-border/60">
                      <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="relative h-full p-6 flex flex-col justify-between">
                        <Badge variant="secondary" className="bg-white/95 text-foreground hover:bg-white backdrop-blur-md w-fit">{c.badge}</Badge>
                        <h3 className="text-white text-xl font-semibold tracking-tight">{c.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button aria-label="Previous" onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-foreground shadow-md flex items-center justify-center border border-border">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button aria-label="Next" onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-foreground shadow-md flex items-center justify-center border border-border">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Desktop/Tablet grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {cards.map((c, i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl h-72 cursor-pointer">
              <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <Badge variant="secondary" className="bg-white/95 text-foreground hover:bg-white backdrop-blur-md w-fit">{c.badge}</Badge>
                <h3 className="text-white text-xl font-semibold tracking-tight">{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroEnhanced;
