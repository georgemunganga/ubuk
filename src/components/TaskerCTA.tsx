import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const TaskerCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Decorative Lines */}
          <div className="absolute bottom-0 left-0 w-64 h-32 opacity-20">
            <svg viewBox="0 0 200 100" className="w-full h-full text-white">
              <path d="M 0 50 Q 50 20, 100 50 T 200 50" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M 0 60 Q 50 30, 100 60 T 200 60" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              <path d="M 0 70 Q 50 40, 100 70 T 200 70" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full text-white">
              <path d="M 200 0 Q 150 50, 200 100 T 200 200" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M 180 0 Q 130 50, 180 100 T 180 200" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M 160 0 Q 110 50, 160 100 T 160 200" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M 140 0 Q 90 50, 140 100 T 140 200" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 p-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Join Zambia's Leading<br />
                Construction Network!
              </h2>
              
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Connect with property owners, access quality projects, and grow your construction business with Ubukule's trusted platform.
              </p>

              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/95 rounded-full font-medium"
                >
                  Become a Contractor
                </Button>

                {/* Pagination */}
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <ChevronLeft className="h-5 w-5 text-white" />
                  </button>
                  <span className="text-white font-medium">2/3</span>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <ChevronRight className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Join Message */}
              <div className="inline-block bg-white/95 rounded-3xl px-6 py-3 backdrop-blur-sm">
                <p className="text-foreground font-medium">
                  Over 10k contractors already joined. Join us now!
                </p>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/task.webp"
                    alt="Professional tasker working on a project, demonstrating skill and expertise"
                    className="w-full h-48 object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/guy.jpg"
                    alt="Happy tasker smiling after completing a successful job"
                    className="w-full h-32 object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="/ubu.jpg"
                    alt="Professional service provider working efficiently on client project"
                    className="w-full h-32 object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src="/man.jpg"
                    alt="Skilled tasker delivering quality workmanship to satisfied customers"
                    className="w-full h-48 object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskerCTA;
