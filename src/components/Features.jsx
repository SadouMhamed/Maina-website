// import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  Zap,
  Handshake,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Image Carousel Component
const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Generate array of image paths from 01.png to 13.png
  const images = Array.from({ length: 13 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return {
      src: `/${num}.png`,
      alt: `MAINA Industrial Project ${num}`,
      title: `Industrial Excellence Project ${i + 1}`,
    };
  });

  return (
    <div className="relative">
      <div className="overflow-hidden embla" ref={emblaRef}>
        <div className="flex embla__container">
          {images.map((image, index) => (
            <div className="flex-shrink-0 w-full embla__slide" key={index}>
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-96"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/1800ad/ffffff?text=Project+${
                      index + 1
                    }`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="flex absolute left-4 top-1/2 justify-center items-center w-10 h-10 rounded-full shadow-lg transition-all duration-200 transform -translate-y-1/2 bg-white/90 hover:bg-white hover:scale-110"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-5 h-5 text-slate-700" />
      </button>

      <button
        className="flex absolute right-4 top-1/2 justify-center items-center w-10 h-10 rounded-full shadow-lg transition-all duration-200 transform -translate-y-1/2 bg-white/90 hover:bg-white hover:scale-110"
        onClick={scrollNext}
      >
        <ChevronRight className="w-5 h-5 text-slate-700" />
      </button>
    </div>
  );
};

const OurValues = () => {
  const [isInView, setIsInView] = useState(false);
  const [isFirstSectionInView, setIsFirstSectionInView] = useState(false);
  const sectionRef = useRef(null);
  const firstSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -20% 0px", // Adjust when animation triggers
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const VALUES = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description:
        "Protecting our employees, partners, and the environment is our top priority in every project.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality & Reliability",
      description:
        "Ensuring compliance with international standards and delivering consistent, reliable results.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Commitment",
      description:
        "Listening to our clients, adapting to their needs, and delivering exceptional value.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation & Performance",
      description:
        "Transforming challenges into measurable results through innovative solutions and performance excellence.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Partnership & Trust",
      description:
        "Building lasting relationships based on transparency, trust, and mutual success.",
    },
  ];

  const CONTAINER_VARIANTS = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const ITEM_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <section className="py-16" style={{ backgroundColor: "#1800ad" }}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Side - Text Content */}
            <div className="pl-8 text-left">
              <p
                className="mb-4 text-lg text-white/80"
                style={{ fontWeight: 300 }}
              >
                Our Foundation
              </p>
              <h1
                className="mb-8 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontWeight: 300 }}
              >
                Our Values
                <span className="block mt-2 text-blue-300">
                  Foundations of Excellence
                </span>
              </h1>
              <p
                className="max-w-lg text-lg leading-relaxed text-white/90"
                style={{ fontWeight: 300 }}
              >
                At MAINA, our values guide our actions and ensure long-term
                success. We pinpoint opportunities where our industrial
                excellence delivers relevant, accurate, and secure solutions,
                uncovering opportunities for continuous improvement.
              </p>
            </div>

            {/* Center Divider Line */}
            <div className="hidden absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 lg:flex">
              <div className="flex relative flex-col items-center">
                <div className="w-px h-48 bg-white/30"></div>
                {/* Orange Circle */}
                <div className="flex justify-center items-center w-12 h-12 bg-orange-500 rounded-full">
                  <div className="w-2 h-8 bg-white rounded-full"></div>
                </div>
                {/* Dotted line continuation */}
                <div className="w-px h-48 border-l-2 border-dotted border-white/30"></div>
              </div>
            </div>

            {/* Right Side - Values Image */}
            <div className="relative mx-auto max-w-lg">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/logo/values.jpeg"
                  alt="MAINA Values - Industrial Excellence"
                  className="w-full h-80 lg:h-[400px] object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x420/1800ad/ffffff?text=MAINA+Values`;
                  }}
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/20"></div>

                {/* Image Badge */}
                <div className="absolute right-6 bottom-6 max-w-sm">
                  <div className="p-3 rounded-lg backdrop-blur-sm bg-white/90">
                    <h3 className="mb-1 text-base font-semibold text-slate-900">
                      Our Values in Action
                    </h3>
                    <p className="text-xs text-slate-600">
                      Excellence, safety, and reliability in every project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Values Section - Detailed Values */}
      <section
        ref={sectionRef}
        className={`py-10 transition-all duration-1000 ease-in-out ${
          isInView ? "bg-white" : ""}`}
        style={{ backgroundColor: isInView ? "white" : "#1800ad" }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Side - Detailed Values Text */}
            <div className="pl-8 text-left">
              <p
                className={`mb-4 text-lg transition-colors duration-1000 ${
                  isInView ? "text-slate-600" : "text-white/80"
                }`}
                style={{ fontWeight: 300 }}
              >
                Our Core Principles
              </p>
              <h1
                className={`mb-8 text-4xl leading-tight sm:text-5xl lg:text-6xl transition-colors duration-1000 ${
                  isInView ? "text-slate-900" : "text-white"
                }`}
                style={{ fontWeight: 300 }}
              >
                Values That Drive Us
                <span
                  className={`block mt-2 transition-colors duration-1000 ${
                    isInView ? "text-blue-600" : "text-blue-300"
                  }`}
                >
                  Every Day, Every Project
                </span>
              </h1>
              <div
                className={`space-y-6 max-w-lg text-lg leading-relaxed transition-colors duration-1000 ${
                  isInView ? "text-slate-700" : "text-white/90"
                }`}
              >
                <div>
                  <h3
                    className={`mb-2 font-semibold transition-colors duration-1000 ${
                      isInView ? "text-[#1800ad]" : "text-blue-300"
                    }`}
                  >
                    Safety First
                  </h3>
                  <p>
                    Protecting our employees, partners, and the environment.
                  </p>
                </div>
                <div>
                  <h3
                    className={`mb-2 font-semibold transition-colors duration-1000 ${
                      isInView ? "text-[#1800ad]" : "text-blue-300"
                    }`}
                  >
                    Quality & Reliability
                  </h3>
                  <p>Ensuring compliance with international standards.</p>
                </div>
                <div>
                  <h3
                    className={`mb-2 font-semibold transition-colors duration-1000 ${
                      isInView ? "text-[#1800ad]" : "text-blue-300"
                    }`}
                  >
                    Customer Commitment
                  </h3>
                  <p>Listening, adapting, delivering.</p>
                </div>
                <div>
                  <h3
                    className={`mb-2 font-semibold transition-colors duration-1000 ${
                      isInView ? "text-[#1800ad]" : "text-blue-300"
                    }`}
                  >
                    Innovation & Performance
                  </h3>
                  <p>Transforming challenges into measurable results.</p>
                </div>
                <div>
                  <h3
                    className={`mb-2 font-semibold transition-colors duration-1000 ${
                      isInView ? "text-[#1800ad]" : "text-blue-300"
                    }`}
                  >
                    Partnership & Trust
                  </h3>
                  <p>Building relationships that last.</p>
                </div>
              </div>

              {/* CTA Button */}
            </div>

            {/* Center Divider Line - Animated */}
            <div className="hidden absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 lg:flex">
              <div className="flex relative flex-col items-center">
                <div
                  className={`w-px h-48 transition-colors duration-1000 ${
                    isInView ? "bg-slate-300" : "bg-white/30"
                  }`}
                ></div>
                {/* Orange Circle */}
                <div
                  className={`flex justify-center items-center w-12 h-12 rounded-full transition-colors duration-1000 ${
                    isInView ? "bg-[#1800ad]" : "bg-orange-500"
                  }`}
                >
                  <div className="w-2 h-8 bg-white rounded-full"></div>
                </div>
                {/* Dotted line continuation */}
                <div
                  className={`w-px h-48 border-l-2 border-dotted transition-colors duration-1000 ${
                    isInView ? "border-slate-300" : "border-white/30"
                  }`}
                ></div>
              </div>
            </div>

            {/* Right Side - Same Image as Above */}
            <div className="relative mx-auto max-w-lg">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/logo/values.jpeg"
                  alt="MAINA Values - Our Core Principles"
                  className="w-full h-80 lg:h-[400px] object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x420/1800ad/ffffff?text=MAINA+Core+Values`;
                  }}
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/20"></div>
                {/* Image Badge */}
                /*
                <div className="absolute right-6 bottom-6 max-w-sm">
                  <div className="p-3 rounded-lg backdrop-blur-sm bg-white/90">
                    <h3 className="mb-1 text-base font-semibold text-slate-900">
                      Values in Practice
                    </h3>
                    <p className="text-xs text-slate-600">
                      Guiding every decision and action we take
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Our Story */}
      <section className="py-24 bg-slate-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-lg font-light text-slate-600">
              Our Journey
            </p>
            <h2 className="mb-8 text-4xl font-light leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Our Story
              <span className="block mt-2 text-[#1800ad]">
                From Maintenance to Industrial Leadership
              </span>
            </h2>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-700">
              Founded with a clear ambition to provide reliable industrial
              services to the Oil & Gas sector MAINA has grown into a
              multidisciplinary partner recognized for its ability to deliver
              complex projects with precision and excellence.
            </p>
          </div>

          <div className="grid gap-16 items-center lg:grid-cols-2">
            {/* Left Side - Story Content */}
            <div className="space-y-8">
              <div className="p-8 bg-white rounded-2xl border shadow-lg border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1800ad] rounded-lg flex items-center justify-center text-white font-bold">
                    2008
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">
                      The Foundation
                    </h3>
                    <p className="leading-relaxed text-slate-700">
                      Founded with a clear ambition to provide reliable
                      industrial services to the Oil & Gas sector. Our journey
                      began with a commitment to excellence and safety in every
                      project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-2xl border shadow-lg border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 font-bold text-white bg-blue-600 rounded-lg">
                    2015
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">
                      Expanding Horizons
                    </h3>
                    <p className="leading-relaxed text-slate-700">
                      Expanded our expertise into welding, piping, fabrication
                      of specialized equipment, structural steelwork, water
                      treatment, hydraulics, and civil engineering.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-2xl border shadow-lg border-slate-200">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 font-bold text-white bg-green-600 rounded-lg">
                    2020
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">
                      Quality Certification
                    </h3>
                    <p className="leading-relaxed text-slate-700">
                      Achieved ISO 9001:2015 certification, demonstrating our
                      commitment to quality management excellence and continuous
                      improvement in all our operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#1800ad] to-purple-600 p-8 rounded-2xl text-white">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 font-bold text-white rounded-lg bg-white/20">
                    2024
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      Industrial Leadership
                    </h3>
                    <p className="leading-relaxed text-white/90">
                      Today, with a 3,000 m² workshop, a team of 115
                      professionals, and renewed ISO certification through 2028,
                      MAINA continues to shape Algeria's industrial landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Content */}
            <div className="space-y-8">
              {/* Image Carousel */}
              <div className="overflow-hidden relative rounded-2xl shadow-2xl">
                <ImageCarousel />
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 text-center bg-white rounded-xl border shadow-lg border-slate-200">
                  <div className="text-3xl font-bold text-[#1800ad] mb-2">
                    115
                  </div>
                  <div className="text-sm text-slate-600">Professionals</div>
                </div>
                <div className="p-6 text-center bg-white rounded-xl border shadow-lg border-slate-200">
                  <div className="text-3xl font-bold text-[#1800ad] mb-2">
                    3,000m²
                  </div>
                  <div className="text-sm text-slate-600">Workshop</div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="p-8 bg-white rounded-2xl border shadow-lg border-slate-200">
                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  Our Mission
                </h3>
                <p className="mb-4 leading-relaxed text-slate-700">
                  "Our story is one of resilience, responsibility, and progress
                  — always being present where challenges are greatest, and
                  delivering where reliability matters most."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#1800ad] rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">M</span>
                  </div>
                  <span className="text-sm font-medium text-slate-600">
                    MAINA Leadership Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValues;
