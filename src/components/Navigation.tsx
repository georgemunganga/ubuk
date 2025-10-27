import { Globe, Menu, User, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import logo from "@/assets/ubukule-logo.png";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Tasks", to: "/", end: true },
    { label: "Projects", to: "/projects" },
    { label: "Suppliers", to: "/suppliers" },
    { label: "Marketplace", to: "/marketplace" },
  ];

  return (
    <>
      {/* Support Banner */}
      {/* <div className="bg-white border-b border-b-black/10 border-border/30 py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-primary/70">
            For customer service, <span className="underline font-medium cursor-pointer hover:text-foreground">please ask our support assistant</span>
          </p>
        </div>
      </div>
       */}
      <nav className=" top-0 z-50 bg-white/80 backdrop-blur-md border-b border-b-black/10 border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
           <div className="flex items-center">
            <img src={logo} alt="UBUKULE" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(({ label, to, end }) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "font-bold text-foreground"
                      : "font-medium text-foreground/70 hover:text-foreground"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary font-bold">EN</span>
              <Globe className="h-4 w-4 text-primary" />
            </div>
            <Link to="/login">
              <Button variant="outline" size="sm" className="gap-2 px-2">
                Login
                <div className="rounded-full bg-primary"><User className="h-4 m-2 w-4 text-white" /></div>
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="sm" className="gap-2 px-2">
                Sign Up
                <div className="rounded-full bg-primary"><User className="h-4 m-2 w-4 text-white" /></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
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
              {navItems.map(({ label, to, end }) => (
                <NavLink
                  key={label}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `text-sm transition-colors py-2 ${
                      isActive
                        ? "font-bold text-foreground"
                        : "font-medium text-foreground/70 hover:text-foreground"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="font-medium w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
