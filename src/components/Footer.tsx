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
    <footer className="bg-foreground text-background rounded-t-3xl">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="UBUKULE" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Connecting skilled professionals with customers who need them.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-background/5 hover:bg-background/10 p-2.5 rounded-lg transition-colors"
                  >
                    <Icon className="h-4 w-4 text-background/70" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-background mb-4 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-background text-sm transition-colors"
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
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {year} UBUKULE. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
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
