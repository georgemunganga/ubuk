import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/ubukule-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerSections = [
    {
      title: "About UBUKULE",
      links: [
        "Our Mission",
        "How It Works",
        "Careers",
        "Press",
        "Contact Us",
      ],
    },
    {
      title: "For Clients",
      links: [
        "Browse Services",
        "Pricing",
        "How to Book",
        "Safety Guidelines",
        "FAQs",
      ],
    },
    {
      title: "For Pros",
      links: [
        "Become a Pro",
        "Pro Dashboard",
        "Support Center",
        "Pro Benefits",
        "Help Center",
      ],
    },
    {
      title: "Legal",
      links: [
        "Terms of Service",
        "Privacy Policy",
        "Cookie Policy",
        "Refund Policy",
        "Community Guidelines",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="UBUKULE" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Connecting skilled professionals with customers who need them.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
                  >
                    <Icon className="h-4 w-4 text-background" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-background mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm text-center md:text-left">
              © {year} UBUKULE. All rights reserved. Build. Fix. Connect.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Cookie Preferences
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
