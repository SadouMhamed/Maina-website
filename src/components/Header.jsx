// import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Building2,
  ChevronDown,
  User,
  ArrowRight,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", hasDropdown: true },
    { name: "About Us", href: "#about", hasDropdown: false },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Certifications", href: "#certification", hasDropdown: true },
    { name: "Projects", href: "#project", hasDropdown: false },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      {/* Main Navigation */}
      <div
        className={`px-4 py-3 transition-all duration-300 ${
          isScrolled
            ? "border-b shadow-md backdrop-blur-lg bg-white/95 border-slate-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          {/* Navigation Container */}
          <div
            className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-white border shadow-lg border-slate-200/30"
                : "border backdrop-blur-sm bg-white/10 border-white/20"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/mylogo/logoMaina.png"
                alt="MAINA Logo"
                className="object-contain w-auto h-10"
                onError={(e) => {
                  // Fallback to icon if logo fails to load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hidden justify-center items-center w-8 h-8 bg-gradient-to-r from-[#1800ad] to-purple-600 rounded-lg shadow-md">
                <Building2 className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 font-medium transition-colors ${
                    isScrolled
                      ? "text-slate-700 hover:text-[#1800ad]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-colors ${
                        isScrolled ? "text-slate-500" : "text-white/70"
                      }`}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Right Side Elements */}
            <div className="flex items-center space-x-4">
              {/* User Icon */}
              <button
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? "hover:bg-slate-100" : "hover:bg-white/20"
                }`}
              >
                <User
                  className={`w-5 h-5 transition-colors ${
                    isScrolled ? "text-slate-600" : "text-white/80"
                  }`}
                />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-colors lg:hidden ${
                  isScrolled ? "hover:bg-slate-100" : "hover:bg-white/20"
                }`}
              >
                {isMenuOpen ? (
                  <X
                    className={`w-5 h-5 transition-colors ${
                      isScrolled ? "text-slate-600" : "text-white/80"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-5 h-5 transition-colors ${
                      isScrolled ? "text-slate-600" : "text-white/80"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white border-t shadow-lg lg:hidden border-slate-200">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between py-3 font-medium text-slate-700 hover:text-[#1800ad] border-b border-slate-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                )}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <button className="w-full bg-gradient-to-r from-[#1800ad] to-purple-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
                <span>Consult an expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
