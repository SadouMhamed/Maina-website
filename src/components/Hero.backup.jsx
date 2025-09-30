// import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Play,
  Shield,
  TrendingUp,
  Users,
  Award,
  Building2,
  Zap,
  Factory,
  BarChart3,
  Settings,
} from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "MAINA",
      subtitle: "Powering Your Performance",
      description:
        "Industrial expertise. Proven reliability. Lasting partnerships that drive exceptional results in manufacturing and operations.",
      image: "Manufacturing Excellence",
      bgGradient: "from-blue-600 to-blue-800",
      stats: { efficiency: "94.5%", uptime: "99.8%" },
      icon: <Factory className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "MAINA",
      subtitle: "Advanced Analytics",
      description:
        "Real-time monitoring and data-driven insights that transform your operational efficiency and drive continuous improvement.",
      image: "Analytics Dashboard",
      bgGradient: "from-emerald-600 to-emerald-800",
      stats: { efficiency: "96.2%", uptime: "99.9%" },
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "MAINA",
      subtitle: "Operational Excellence",
      description:
        "Streamlined processes and intelligent automation solutions that optimize your workflow and maximize productivity.",
      image: "Process Optimization",
      bgGradient: "from-purple-600 to-purple-800",
      stats: { efficiency: "98.1%", uptime: "99.7%" },
      icon: <Settings className="w-8 h-8" />,
    },
  ];

  const corporateFeatures = [
    {
      title: "Industrial Solutions",
      subtitle: "Advanced Manufacturing",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      delay: 0,
    },
    {
      title: "Performance Analytics",
      subtitle: "Real-time Monitoring",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600",
      delay: 0.2,
    },
    {
      title: "Team Excellence",
      subtitle: "Operational Efficiency",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      delay: 0.4,
    },
    {
      title: "Quality Assurance",
      subtitle: "Industry Standards",
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      delay: 0.6,
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Minimal clean background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Animated Slider Content */}
          <div className="text-left">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm mb-6">
                <Shield className="w-4 h-4 mr-2" />
                <span className="font-medium">
                  Trusted by Algeria's strategic industries since 2008
                </span>
              </div>
            </motion.div>

            {/* Animated Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                {/* Main Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span
                    className={`bg-gradient-to-r ${currentSlideData.bgGradient} bg-clip-text text-transparent block`}
                  >
                    {currentSlideData.title}
                  </span>
                  <span className="text-slate-900 block">
                    {currentSlideData.subtitle}
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                  {currentSlideData.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <button className="btn-primary group">
                Discover Our Expertise
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="btn-secondary group">
                <Play className="w-5 h-5 mr-2" />
                Our Projects
              </button>
            </motion.div>

            {/* Slider Controls */}
            <div className="flex items-center space-x-6 mb-6">
              <button
                onClick={prevSlide}
                className="slider-nav-button w-12 h-12 rounded-full bg-white/90 border-2 border-slate-200 flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 group"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
              </button>

              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`progress-dot w-3 h-3 rounded-full ${
                      currentSlide === index
                        ? `bg-gradient-to-r ${currentSlideData.bgGradient} shadow-lg`
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="slider-nav-button w-12 h-12 rounded-full bg-white/90 border-2 border-slate-200 flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 group"
              >
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
              </button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-6 text-sm text-slate-500"
            >
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-600" />
                <span>Industry-proven solutions</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-600" />
                <span>Reliable performance</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Dynamic Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card with Animated Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="glass-effect rounded-2xl p-8 corporate-shadow dashboard-card"
              >
                <div className="space-y-6">
                  {/* Header with Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentSlideData.bgGradient} flex items-center justify-center text-white`}
                      >
                        {currentSlideData.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {currentSlideData.image}
                      </h3>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Dynamic Metrics Grid */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div
                      className={`bg-gradient-to-r ${currentSlideData.bgGradient
                        .replace("600", "50")
                        .replace("800", "100")} p-4 rounded-lg`}
                    >
                      <div
                        className={`${currentSlideData.bgGradient
                          .replace("to-", "")
                          .replace("600", "600")
                          .replace("800", "")} text-sm font-medium`}
                      >
                        Efficiency
                      </div>
                      <div
                        className={`text-2xl font-bold ${currentSlideData.bgGradient
                          .replace("to-", "")
                          .replace("600", "700")
                          .replace("800", "")}`}
                      >
                        {currentSlideData.stats.efficiency}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-lg">
                      <div className="text-emerald-600 text-sm font-medium">
                        Uptime
                      </div>
                      <div className="text-2xl font-bold text-emerald-700">
                        {currentSlideData.stats.uptime}
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated Chart */}
                  <motion.div
                    className="h-32 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg flex items-center justify-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex space-x-2">
                      {[16, 20, 12, 24, 18].map((height, index) => (
                        <motion.div
                          key={index}
                          className={`w-4 rounded-sm bg-gradient-to-t ${currentSlideData.bgGradient}`}
                          initial={{ height: 0 }}
                          animate={{ height: `${height * 4}px` }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Progress</span>
                      <span className="text-slate-900 font-medium">
                        {currentSlideData.stats.efficiency}
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${currentSlideData.bgGradient} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: currentSlideData.stats.efficiency }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Floating Feature Cards */}
            <div className="absolute -right-4 -top-4 space-y-3">
              {corporateFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + feature.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  className="corporate-card p-4 rounded-xl w-64 cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-slate-600 text-xs">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
            <div className="text-slate-600 text-sm">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">99.9%</div>
            <div className="text-slate-600 text-sm">System Reliability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-slate-600 text-sm">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
            <div className="text-slate-600 text-sm">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
