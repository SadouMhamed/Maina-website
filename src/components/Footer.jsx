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
    <footer className="text-white bg-black border-t border-gray-800">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              <img
                src="/mylogo/logoMaina.png"
                alt="MAINA Logo"
                className="object-contain w-auto h-10 filter brightness-0 invert"
                onError={(e) => {
                  // Fallback to icon if logo fails to load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden justify-center items-center w-8 h-8 bg-blue-600 rounded-lg">
                <Play className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="mb-6 max-w-md text-gray-400">
              Industrial excellence engineered for Algeria. From fabrication and
              assembly to maintenance and engineering, delivering solutions that
              combine technical mastery, safety, and reliability.
            </p>
            <div className="mb-6 space-y-1 text-sm text-gray-400">
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
                  className="flex justify-center items-center w-10 h-10 bg-gray-900 rounded-lg transition-colors hover:bg-white hover:text-black"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Expertise</h3>
            <ul className="space-y-2">
              {links.expertise.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Certifications</h3>
            <ul className="space-y-2">
              {links.certifications.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center pt-8 mt-12 border-t border-gray-800 md:flex-row">
          <p className="text-sm text-gray-400">
            © 2024 MAINA Construction & Maintenance. All rights reserved.
          </p>
          <p className="mt-4 text-sm text-gray-400 md:mt-0">
            Crafted with care by Blossom & Partners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
