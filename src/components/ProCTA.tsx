import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const ProCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M 0 100 Q 50 50 100 100 T 200 100"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M 0 120 Q 50 70 100 120 T 200 120"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
          
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="150" cy="50" r="80" stroke="white" strokeWidth="3" fill="none" />
              <circle cx="150" cy="50" r="100" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="150" cy="50" r="120" stroke="white" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16 relative z-10">
            {/* Left: Content */}
            <div className="text-primary-foreground space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance leading-tight">
                Join as a Seller: Showcase Your Products & Services Today!
              </h2>

              <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-xl">
                Are you a supplier of construction materials, tools, or other goods? Join our platform as a seller and connect with customers seeking quality products for their tasks.
              </p>

              {/* CTA Button with Pagination */}
              <div className="flex items-center gap-6 pt-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/95 font-medium rounded-full px-8"
                >
                  Become a Seller
                </Button>
                
                <div className="flex items-center gap-3 text-primary-foreground">
                  <button className="hover:bg-white/10 p-2 rounded-full transition-colors">
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <span className="text-sm font-medium">1/3</span>
                  <button className="hover:bg-white/10 p-2 rounded-full transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Stats Card with Images */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image Grid */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 aspect-square flex items-center justify-center">
                    <div className="w-full h-full bg-white/20 rounded-2xl"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 aspect-square flex items-center justify-center">
                    <div className="w-full h-full bg-white/20 rounded-2xl"></div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 aspect-square flex items-center justify-center col-span-2">
                    <div className="w-full h-full bg-white/20 rounded-2xl"></div>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-3xl shadow-xl p-4 z-20">
                  <p className="text-xs text-muted-foreground font-medium mb-1">Number of sellers</p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">3176+</span>
                    <div className="bg-primary/10 rounded-full p-1">
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Chat Icon Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 rounded-3xl shadow-xl p-3 z-20">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3.293 3.293 3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCTA;
