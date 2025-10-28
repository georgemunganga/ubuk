const IntroducingUbukule = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-primary/20 to-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/15 to-primary/10 rounded-full blur-3xl" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230C3977%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight">
            Building <span className="text-primary">Zambia's</span> Future Together
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Powered by <span className="text-primary">Innovation</span>
              </h3>
              
              {/* Steps */}
              <div className="space-y-5">
                <div className="flex items-start gap-4 group transition-all hover:translate-x-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    1
                  </div>
                  <p className="text-muted-foreground leading-relaxed pt-2">Connect with verified contractors and suppliers instantly</p>
                </div>
                <div className="flex items-start gap-4 group transition-all hover:translate-x-1">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    2
                  </div>
                  <p className="text-muted-foreground leading-relaxed pt-2">Access quality building materials from trusted sources</p>
                </div>
                <div className="flex items-start gap-4 group transition-all hover:translate-x-1">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold flex-shrink-0 group-hover:scale-105 transition-transform">
                    3
                  </div>
                  <p className="text-muted-foreground leading-relaxed pt-2">Drive efficiency and sustainability in construction</p>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="mt-8 p-6 bg-white rounded-3xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Expense Tracking</span>
                  <span className="text-lg font-semibold text-foreground">K1,484</span>
                </div>
                <div className="flex items-end gap-2 h-32">
                  {[40, 60, 80, 90, 70, 85, 95, 75, 88, 92].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary rounded-t-lg transition-all hover:bg-primary/80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="AI-powered project management dashboard showing analytics and statistics"
                  className="w-full h-64 object-cover rounded-2xl mb-4"
                />
                
                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-12 bg-primary rounded-full"
                          style={{ opacity: 1 - i * 0.15 }}
                        />
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Growth</div>
                      <div className="text-lg font-bold text-primary">+38%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Lines */}
              <div className="absolute -bottom-8 -left-8 w-64 h-32">
                <svg viewBox="0 0 200 100" className="w-full h-full text-primary/20">
                  <path d="M 0 50 Q 50 20, 100 50 T 200 50" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M 0 60 Q 50 30, 100 60 T 200 60" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  <path d="M 0 70 Q 50 40, 100 70 T 200 70" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingUbukule;
