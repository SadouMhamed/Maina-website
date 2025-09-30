import { Play, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    services: [
      { name: "Fabrication & Engineering", href: "#" },
      { name: "Construction & Assembly", href: "#" },
      { name: "Maintenance Services", href: "#" },
      { name: "Piping & Welding", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Values", href: "#values" },
      { name: "Our Story", href: "#story" },
      { name: "Contact", href: "#contact" },
    ],
    expertise: [
      { name: "Oil & Gas", href: "#" },
      { name: "Power Generation", href: "#" },
      { name: "Water Treatment", href: "#" },
      { name: "Industrial Equipment", href: "#" },
    ],
    certifications: [
      { name: "ISO 9001:2015", href: "#" },
      { name: "Quality Standards", href: "#" },
      { name: "Safety Protocols", href: "#" },
      { name: "Environmental Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/mylogo/logoMaina.png"
                alt="MAINA Logo"
                className="h-10 w-auto object-contain filter brightness-0 invert"
                onError={(e) => {
                  // Fallback to icon if logo fails to load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden w-8 h-8 bg-blue-600 rounded-lg items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Industrial excellence engineered for Algeria. From fabrication and
              assembly to maintenance and engineering, delivering solutions that
              combine technical mastery, safety, and reliability.
            </p>
            <div className="text-sm text-gray-400 space-y-1 mb-6">
              <p>
                Cité Ali Amrane 2, N°75, Bordj El Kiffane – Algiers, Algeria
              </p>
              <p>Phone: +213 550 54 33 44</p>
              <p>Email: mainaH@maina-company.com</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2">
              {links.expertise.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2">
              {links.certifications.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MAINA Construction & Maintenance. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Engineering excellence for Algeria's industrial future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
