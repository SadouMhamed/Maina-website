// import { motion } from "framer-motion";

const LogoShowcase = () => {
  // Your actual client logos from public/images/logo
  const logos = [
    { name: "Client 1", logo: "/images/logo/01png.png" },
    { name: "Client 2", logo: "/images/logo/02png.png" },
    { name: "Client 3", logo: "/images/logo/03png.png" },
    { name: "Client 4", logo: "/images/logo/04png.png" },
    { name: "Client 5", logo: "/images/logo/05png.png" },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            Trusted by Algeria's Leading Companies
          </p>
        </div>

        {/* Logo Carousel - Infinite Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-16 lg:gap-24">
            {/* First set of logos */}
            {logos.map((company) => (
              <div
                key={`first-${company.name}`}
                className="flex items-center justify-center h-16 w-32 flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-12 max-w-full object-contain"
                  onError={(e) => {
                    // Fallback to placeholder if logo doesn't exist
                    e.target.src = `https://via.placeholder.com/120x60/f8f9fa/6b7280?text=${encodeURIComponent(
                      company.name
                    )}`;
                  }}
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((company) => (
              <div
                key={`second-${company.name}`}
                className="flex items-center justify-center h-16 w-32 flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-12 max-w-full object-contain"
                  onError={(e) => {
                    // Fallback to placeholder if logo doesn't exist
                    e.target.src = `https://via.placeholder.com/120x60/f8f9fa/6b7280?text=${encodeURIComponent(
                      company.name
                    )}`;
                  }}
                />
              </div>
            ))}

            {/* Third set for extra smoothness */}
            {logos.map((company) => (
              <div
                key={`third-${company.name}`}
                className="flex items-center justify-center h-16 w-32 flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-12 max-w-full object-contain"
                  onError={(e) => {
                    // Fallback to placeholder if logo doesn't exist
                    e.target.src = `https://via.placeholder.com/120x60/f8f9fa/6b7280?text=${encodeURIComponent(
                      company.name
                    )}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional subtitle */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Powering Algeria's industrial transformation since 2008
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
