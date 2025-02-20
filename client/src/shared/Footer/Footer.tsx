/** @format */

import { Facebook, Globe, Mail } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms and Condition", href: "/terms" },
    { title: "FAQ", href: "/faq" },
    { title: "About Us", href: "/about" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Globe, href: "#", label: "Website" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-cyan-950 text-white py-4 sm:py-6 md:py-8">
      <div className="max-w-4xl mx-auto px-4">
        <nav
          className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center 
                       gap-1 sm:gap-4 md:gap-6 mb-4 md:mb-8 
                       py-2 sm:py-3 px-6 sm:px-4 md:px-6 
                       rounded-lg sm:rounded-full mx-auto w-fit
                       text-sm sm:text-base sm:bg-white/10">
          {navigationLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="py-1 sm:py-0 p-2 rounded transition-all duration-200 hover:font-bold hover:opacity-80 hover:shadow-md hover:bg-white/10 sm:hover:opacity-100 sm:hover:shadow-none sm:hover:bg-transparent">
              {link.title}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="p-2 sm:p-3 rounded-full hover:opacity-80 transition-all duration-200 
                         flex items-center justify-center bg-white/10"
              aria-label={link.label}>
              <link.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
          ))}
        </div>
        <hr></hr>

        {/* Copyright */}
        <div className="text-center text-sm sm:text-base">
          <p>© 2025 - halal-biye.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
