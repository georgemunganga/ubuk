import {
  ArrowUp,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { FaPinterest } from "react-icons/fa";
import logo from "@/assets/ubukule-logo-white.png";

const Footer = () => {
  const year = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = Math.max(scrollHeight - clientHeight, 1);
      const halfway = scrollable * 0.5;
      setShowBackToTop(scrollTop >= halfway);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceCategories = [
    {
      title: "Office Services",
      links: ["Personal Assistant", "Shopping + Delivery", "Miscellaneous"],
      icon: <ChevronDown className="h-4 w-4" />,
    },
    {
      title: "Home Repairs",
      links: ["Furniture Assembly", "Painting", "Farm Work"],
      icon: <ChevronDown className="h-4 w-4" />,
    },
    {
      title: "Mounting & Installation",
      links: ["Agriculture & Livestock", "Handyman Services", "Warehouse work"],
      icon: <ChevronDown className="h-4 w-4" />,
    },
    {
      title: "Plumbing",
      links: ["Outdoor Help", "Shipping + Freight", "Live stock"],
      icon: <ChevronDown className="h-4 w-4" />,
    },
    {
      title: "Cleaning",
      links: ["Tutoring & Rehab", "Solar Energy Work", "Automotive & Parts"],
      icon: <ChevronDown className="h-4 w-4" />,
    },
    {
      title: "Parties + Events",
      links: ["Moving Services", "Carpooling"],
      icon: <ChevronDown className="h-4 w-4" />,
    },
  ];

  const footerSections = [
    {
      title: "Company",
      links: ["About us", "Careers", "Support center", "Ubukule AI"],
    },
    {
      title: "Resources",
      links: [
        "For Taskers",
        "For Drivers",
        "For Merchants",
        "Safety Standards",
        "Community Guidelines",
      ],
    },
    {
      title: "Join us",
      links: [
        "Sell your services",
        "Get help today",
        "Become a tasker",
        "Become a Construction Supplier",
        "Sell and advertise",
      ],
    },
    {
      title: "Contacts",
      links: ["+260775636922", "hi@ubukule.com"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: FaPinterest, href: "#", label: "Pinterest", isCustom: true },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary rounded-t-[3rem] text-white mt-20">
      <div className="container mx-auto px-6 md:px-10 py-16 pb-4">
        {/* Logo and Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <img src={logo} alt="UBUKULE - Connect with trusted professionals" className="h-16 xl:h-18 w-auto" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Job well-done.</h2>
        </div>

        {/* Service Categories Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 pb-12 border-b border-white/10">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <button className="flex items-center justify-between w-full text-left mb-4 hover:text-white/80 transition-colors">
                <h3 className="font-medium text-sm">{category.title}</h3>
                {category.icon}
              </button>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-8 mb-12">
          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white text-sm transition-colors hover:underline underline-offset-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Mobile App */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Mobile app</h3>
            <div className="flex gap-2">
              <a href="#" className="block">
                <div className="hover:bg-white/20 rounded-lg p-1 transition-colors flex items-center justify-center">
                  <span className="text-xs">
                    <img className="h-14 " src="/mobile-android.svg" alt="Android" />
                  </span>
                </div>
              </a>
              <a href="#" className="block">
                <div className=" hover:bg-white/20 rounded-lg p-1 transition-colors flex items-center justify-center">
                  <span className="text-xs">
                    <img className="h-14" src="/mobile-ios.svg" alt="iOS" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Ubukule AI */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Ubukule AI</h3>
            <Button className="bg-slate-50  hover:bg-primary/90 text-primary rounded-full gap-2">
              <span className="text-lg"></span>
              Ubukule AI
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Language and Currency */}
            <div className="flex items-center gap-4 text-sm">
              <button className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <span>English</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <span className="text-white/40">|</span>
              <span>ZMW</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white/5 hover:bg-white/10 p-2.5 rounded-lg transition-colors"
                  >
                    {social.isCustom ? (
                      <Icon className="h-4 w-4 text-white/70" />
                    ) : (
                      <Icon
                        className="h-4 w-4 text-white/70"
                        strokeWidth={1.5}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Back to Top (floating) */}
            {showBackToTop && (
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="fixed right-6 bottom-6 z-50 rounded-full bg-white text-primary shadow-lg hover:shadow-xl transition-shadow p-3"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">© {year} Ubukule, © 2025 All Rights Reserved.</p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
