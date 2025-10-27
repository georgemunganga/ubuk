import { Award, Headphones, Smile } from "lucide-react";

import { Button } from "@/components/ui/button";

const SatisfactionGuarantee = () => {
  const features = [
    {
      icon: Smile,
      title: "Happiness Pledge",
      description: "If you're not satisfied, we'll work to make it right.",
    },
    {
      icon: Award,
      title: "Vetted Taskers",
      description: "Taskers are always background checked before joining the platform.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Friendly service when you need us - every day of the week.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Decorative Top Wave */}
        <div className="w-full h-24 mb-8">
          <svg viewBox="0 0 1200 100" className="w-full h-full text-primary/10">
            <path
              d="M 0 50 Q 150 20, 300 50 T 600 50 T 900 50 T 1200 50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 1200 50 L 1200 0 Q 1100 20, 1000 0 T 800 0 T 600 0 T 400 0 T 200 0 T 0 0 L 0 50"
              fill="currentColor"
              opacity="0.1"
            />
          </svg>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Features */}
          <div className="bg-primary rounded-3xl p-10 text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

            <div className="relative space-y-8">
              {/* Title */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center">
                  <span className="text-3xl">😊</span>
                </div>
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center -ml-4">
                  <span className="text-3xl">👨</span>
                </div>
                <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center -ml-4">
                  <span className="text-3xl">👩</span>
                </div>
              </div>

              <h2 className="text-3xl font-semibold leading-tight">
                Your satisfaction, guaranteed, as a{" "}
                <span className="underline decoration-wavy decoration-white/50">customer!</span>
              </h2>

              <p className="text-white/90">
                Discover the thrill of innovation with us.<br />
                Unleash your potential today!
              </p>

              {/* Features List */}
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                        <p className="text-white/80 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/95 rounded-full font-medium mt-4"
              >
                Join Now
              </Button>
            </div>
          </div>

          {/* Right Side - Customer Success */}
          <div className="bg-primary/10 rounded-3xl p-10 space-y-6">
            <h2 className="text-3xl font-semibold text-foreground">
              We are here to to get started 24/7
            </h2>

            <p className="text-muted-foreground text-lg">
              You focus on the project goals when we find you proper taskers.
            </p>

            {/* Image with Stats */}
            <div className="relative">
              <img
                src="/team.png"
                alt="Happy customer"
                className="w-full h-64 object-cover rounded-3xl"
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-2 right-4 bg-white rounded-2xl shadow-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">
                  Around / 100,000 /people get{" "}
                  <span className="inline-flex gap-1">
                    <span className="w-6 h-6 rounded-full bg-gray-200" />
                    <span className="w-6 h-6 rounded-full bg-gray-300" />
                    <span className="w-6 h-6 rounded-full bg-gray-400" />
                  </span>{" "}
                  help in platform.
                </p>
                <Button size="sm" variant="outline" className="mt-2 rounded-full text-xs">
                  read more
                </Button>
              </div>
            </div>

            {/* Happy Customers Badge */}
            <div className="flex items-center gap-4">
              <img
                src="/ubukule-logo.png"
                alt="Happy team"
                className="w-62 h-32 object-cover rounded-3xl"
              />
              <div className="bg-primary text-white rounded-3xl px-6 py-4 flex items-center gap-3">
                <div>
                  <p className="text-sm opacity-90">Happy customers</p>
                  <p className="text-3xl font-bold">97%</p>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Smile className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <Button size="lg" className="rounded-full font-medium w-full sm:w-auto">
              Start your own project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionGuarantee;
