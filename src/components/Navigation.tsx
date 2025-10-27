import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ubukule-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Tasks",
    "Projects",
    "Quick Errands",
    "Marketplace",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="UBUKULE" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-foreground/70">
              Login
            </Button>
            <Button size="sm" className="font-medium">
              Become a Pro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
                <Button size="sm" className="font-medium">
                  Become a Pro
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
