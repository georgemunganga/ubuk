import { Clock, MapPin, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroCarpentry from "@/assets/hero-carpentry.jpg";
import heroElectrical from "@/assets/hero-electrical.jpg";
import heroPainting from "@/assets/hero-painting.jpg";
import heroPlumbing from "@/assets/hero-plumbing.jpg";

const Hero = () => {
  // Typewriter animation state
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
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 xl:pt-4">
      {/* Gradient accents using primary color */}
      <div aria-hidden className="pointer-events-none absolute -z-10 -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -z-10 -bottom-48 -right-40 w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-[100px]" />
      <div aria-hidden className="pointer-events-none absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-40 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl" />
      <div className="container mx-auto px-4">
        {/* Title with typewriter */}
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight leading-tight">
            Find your next<br />
            <span className="inline-block min-w-[320px]">
              <span className="inline-flex items-center">
                <span className="text-primary whitespace-nowrap">{displayText}</span>
                <span className="ml-1 inline-block w-[2px] h-[1.1em] bg-primary animate-pulse" />
              </span>
            </span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-lg border border-primary/20 hover:shadow-md transition-shadow max-w-4xl mx-auto">
          <div className="flex items-center p-1.5">
            {/* Location */}
            <div className="flex items-center gap-3 px-5 py-3 flex-1 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
              <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs font-medium text-foreground mb-0.5">Location</div>
                <Input placeholder="Where do you need help?" className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm placeholder:text-muted-foreground/60 focus:border-0" />
              </div>
            </div>
            <div className="h-8 w-px bg-border/60" />
            {/* Time */}
            <div className="flex items-center gap-3 px-5 py-3 hover:bg-muted/50 rounded-full transition-colors cursor-pointer">
              <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <div>
                <div className="text-xs font-medium text-foreground mb-0.5">Start</div>
                <Input type="time" className="border-0 ring-0 ring-white bg-transparent p-0 h-auto focus-visible:ring-0 text-sm w-20" />
              </div>
            </div>
            <div className="h-8 w-px bg-border/60" />
            {/* CTA */}
            <Button size="lg" className="rounded-full py-4 px-5 ml-1.5 flex-shrink-0 shadow-sm gap-2">
              <span className="font-medium">Find help now</span>
              <div className="bg-white rounded-full p-1.5">
                <Search className="h-4 w-4 text-primary" />
              </div>
            </Button>
          </div>
        </div>

        {/* Simple image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[{img:heroPlumbing,badge:'Service',title:'Get help now'},{img:heroCarpentry,badge:'Carpentry',title:'Handyman Services'},{img:heroElectrical,badge:'Administration',title:'Office work'},{img:heroPainting,badge:'Shipping',title:'Freight Services'}].map((c, i) => (
            <div key={i} className="relative group overflow-hidden rounded-3xl h-72">
              <img src={c.img} alt="card" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
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

export default Hero;
