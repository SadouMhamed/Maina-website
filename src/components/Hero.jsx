// import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { ChevronRight, Play, Shield, Zap } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isScrolled, setIsScrolled] = useState(false);

  // Mouse tracking for gradient effect
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);

  // Handle scroll effect for color change
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex relative min-h-screen">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/logo/background.png"
          alt="MAINA Industrial Background"
          className="object-cover w-full h-full"
          onError={(e) => {
            // Fallback to gradient if background image fails to load
            e.target.style.display = "none";
            e.target.parentElement.style.background =
              "linear-gradient(to bottom right, #f8fafc, #e2e8f0, #cbd5e1)";
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content - Text Content with Interactive Gradient Background */}
      <div
        className="flex overflow-hidden relative z-10 justify-start items-center w-full cursor-none"
        onMouseMove={handleMouseMove}
      >
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r to-transparent from-black/50 via-black/30"></div>

        {/* Interactive mouse-following gradient */}
        <div
          className="absolute inset-0 opacity-30 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, #1800ad40 0%, transparent 50%)`,
          }}
        ></div>

        {/* Secondary mouse effect for more depth */}
        <div
          className="absolute inset-0 opacity-20 transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, #1800ad60 0%, transparent 40%)`,
          }}
        ></div>

        <div className="relative z-10 px-8 max-w-2xl text-left lg:px-16">
          {/* Trust Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 text-sm text-white rounded-full border backdrop-blur-sm bg-white/10 border-white/20">
              <Shield className="mr-2 w-4 h-4" />
              <span className="font-medium">
                Industrial expertise. Proven reliability. Lasting partnerships.
              </span>
            </div>
          </div>

          {/* Main Title - Static */}
          <div>
            <div className="mb-6">
              {/* Company Logo */}
              <div className="mb-4">
                <img
                  src="/mylogo/logoMaina.png"
                  alt="MAINA Logo"
                  className={`object-contain w-auto h-16 sm:h-20 lg:h-24 transition-all duration-300 ${
                    isScrolled ? "filter brightness-0 invert" : ""
                  }`}
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <h1 className="hidden text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-[#1800ad] to-purple-600 bg-clip-text text-transparent block">
                    MAINA
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <h2
                className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl transition-colors duration-300 ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Powering Your Performance
              </h2>
            </div>

            {/* Subtitle */}
            <p
              className={`mb-8 max-w-lg text-lg leading-relaxed transition-colors duration-300 ${
                isScrolled ? "text-white/90" : "text-white/90"
              }`}
            >
              Powering Algeria's industrial future with proven expertise,
              reliable solutions, and lasting partnerships since 2008.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 items-start mb-10 sm:flex-row">
              <button className="btn-primary group bg-gradient-to-r from-[#1800ad] to-purple-600 hover:from-[#1800ad]/90 hover:to-purple-600/90">
                Discover Our Expertise
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="text-white backdrop-blur-sm btn-secondary group bg-white/10 border-white/30 hover:bg-white/20">
                <Play className="mr-2 w-5 h-5" />
                Our Projects
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <div className="flex items-center">
                <Zap className="mr-2 w-4 h-4 text-blue-400" />
                <span>Industry-proven solutions</span>
              </div>
              <div className="flex items-center">
                <Shield className="mr-2 w-4 h-4 text-blue-400" />
                <span>Reliable performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
