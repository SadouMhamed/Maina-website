// import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { Shield, Award, Users, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Mouse tracking for gradient effect
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);

  return (
    <section
      className="overflow-hidden relative py-24 bg-gradient-to-br via-blue-50 to-purple-100 from-slate-100 cursor-none"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive mouse-following gradient background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br via-white to-blue-50 from-slate-50"></div>

        {/* Mouse-following gradient */}
        <div
          className="absolute inset-0 opacity-40 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, #1800ad30 0%, transparent 60%)`,
          }}
        ></div>

        {/* Secondary mouse effect */}
        <div
          className="absolute inset-0 opacity-20 transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, #1800ad50 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl text-slate-900">
              About Us
              <span className="block text-[#1800ad] mt-2">
                A Commitment to Excellence
              </span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-700">
              Since 2008, MAINA Construction & Maintenance has stood as a
              trusted partner for Algeria's most strategic industries. From
              fabrication and assembly to maintenance and engineering, our
              mission is to deliver solutions that combine technical mastery,
              safety, and reliability.
            </p>

            <p className="mb-8 text-base leading-relaxed text-slate-600">
              Our teams of engineers, technicians, and project managers bring
              together expertise and dedication, ensuring every project meets
              the highest international standards. This approach has earned us
              the trust of national champions such as Sonatrach and Sonelgaz, as
              well as international EPC contractors.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1800ad] mb-1">
                  15+
                </div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1800ad] mb-1">
                  115
                </div>
                <div className="text-sm text-slate-600">Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1800ad] mb-1">
                  3,000m²
                </div>
                <div className="text-sm text-slate-600">Workshop</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1800ad] to-purple-600 hover:from-[#1800ad]/90 hover:to-purple-600/90 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl group">
              Read the CEO’s Full Message
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="overflow-hidden relative rounded-2xl shadow-2xl">
              <img
                src="/images/logo/aboutus.jpeg"
                alt="MAINA About Us - Industrial Excellence"
                className="w-full h-96 lg:h-[500px] object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x500/1e40af/ffffff?text=MAINA+Industrial+Facility`;
                }}
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/20"></div>

              {/* Image Badge */}
              <div className="absolute right-6 bottom-6 left-6">
                <div className="p-4 rounded-lg shadow-lg backdrop-blur-sm bg-white/90">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#1800ad] to-purple-600 flex items-center justify-center text-white">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        ISO 9001:2015 Certified
                      </h3>
                      <p className="text-sm text-slate-600">
                        Quality management excellence since 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
