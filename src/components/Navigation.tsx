import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
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
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="UBUKULE" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe className="h-4 w-4" />
              EN
            </Button>
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="font-semibold">
              Become a Pro
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="gap-2 justify-start">
                  <Globe className="h-4 w-4" />
                  EN
                </Button>
                <Button variant="ghost" size="sm">
                  Login
                </Button>
                <Button size="sm" className="font-semibold">
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
