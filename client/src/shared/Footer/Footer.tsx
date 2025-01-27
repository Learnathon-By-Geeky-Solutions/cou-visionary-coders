import { Facebook, Globe, Mail } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms and Condition', href: '/terms' },
    { title: 'FAQ', href: '/faq' },
    { title: 'About Us', href: '/about' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-cyan-950 text-white py-4 sm:py-6 md:py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navigation - Vertical on mobile, horizontal on larger screens */}
        <nav className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center 
                       gap-4 sm:gap-4 md:gap-6 mb-6 md:mb-8 
                       py-4 sm:py-3 px-6 sm:px-4 md:px-6 
                       rounded-lg sm:rounded-full mx-auto w-fit
                       text-sm sm:text-base bg-white/10">
          {navigationLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="hover:opacity-80 transition-all duration-200 py-1 sm:py-0"
            >
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
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm sm:text-base lg:mt-16 md:mt-14 sm:mt-12">
          <p>© 2025 - websitename.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;