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
  const [isStoryInView, setIsStoryInView] = useState(false);
  const [isCardsInView, setIsCardsInView] = useState(false);
  const sectionRef = useRef(null);
  const firstSectionRef = useRef(null);
  const storySectionRef = useRef(null);
  const cardsRef = useRef(null);

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

    // Observer for the story section
    const storyObserver = new IntersectionObserver(
      ([entry]) => {
        setIsStoryInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (storySectionRef.current) {
      storyObserver.observe(storySectionRef.current);
    }

    // Simple cards observer for expansion effect
    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        console.log("Cards in view:", entry.isIntersecting); // Debug log
        setIsCardsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Lower threshold for easier triggering
        rootMargin: "0px 0px 0px 0px", // No margin for clearer trigger
      }
    );

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (storySectionRef.current) {
        storyObserver.unobserve(storySectionRef.current);
      }
      if (cardsRef.current) {
        cardsObserver.unobserve(cardsRef.current);
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
      <section
        ref={storySectionRef}
        className={`py-24 transition-all duration-1000 ease-in-out ${
          isStoryInView ? "":"bg-slate-50"}`}
        style={{ backgroundColor: isStoryInView ? "#1800ad" : "" }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p
              className={`mb-4 text-lg font-light transition-colors duration-1000 ${
                isStoryInView ? "text-white/80" : "text-slate-600"
              }`}
            >
              Our Journey
            </p>
            <h2
              className={`mb-8 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl transition-colors duration-1000 ${
                isStoryInView ? "text-white" : "text-slate-900"
              }`}
            >
              Our Story
              <span
                className={`block mt-2 transition-colors duration-1000 ${
                  isStoryInView ? "text-blue-300" : "text-[#1800ad]"
                }`}
              >
                From Maintenance to Industrial Leadership
              </span>
            </h2>
            <p
              className={`mx-auto max-w-4xl text-xl leading-relaxed transition-colors duration-1000 ${
                isStoryInView ? "text-white/90" : "text-slate-700"
              }`}
            >
              Founded with a clear ambition to provide reliable industrial
              services to the Oil & Gas sector MAINA has grown into a
              multidisciplinary partner recognized for its ability to deliver
              complex projects with precision and excellence.
            </p>
          </div>

          <div className="grid gap-16 items-center lg:grid-cols-2">
            {/* Left Side - Story Content */}
            <div className="space-y-8">
              <div
                className={`p-8 rounded-2xl border shadow-lg transition-colors duration-1000 ${
                  isStoryInView
                    ? "bg-white/10 border-white/20"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1800ad] rounded-lg flex items-center justify-center text-white font-bold">
                    2008
                  </div>
                  <div>
                    <h3
                      className={`mb-2 text-xl font-semibold transition-colors duration-1000 ${
                        isStoryInView ? "text-white" : "text-slate-900"
                      }`}
                    >
                      The Foundation
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-1000 ${
                        isStoryInView ? "text-white/90" : "text-slate-700"
                      }`}
                    >
                      Founded with a clear ambition to provide reliable
                      industrial services to the Oil & Gas sector. Our journey
                      began with a commitment to excellence and safety in every
                      project.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-8 rounded-2xl border shadow-lg transition-colors duration-1000 ${
                  isStoryInView
                    ? "bg-white/10 border-white/20"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 font-bold text-white bg-blue-600 rounded-lg">
                    2015
                  </div>
                  <div>
                    <h3
                      className={`mb-2 text-xl font-semibold transition-colors duration-1000 ${
                        isStoryInView ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Expanding Horizons
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-1000 ${
                        isStoryInView ? "text-white/90" : "text-slate-700"
                      }`}
                    >
                      Expanded our expertise into welding, piping, fabrication
                      of specialized equipment, structural steelwork, water
                      treatment, hydraulics, and civil engineering.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-8 rounded-2xl border shadow-lg transition-colors duration-1000 ${
                  isStoryInView
                    ? "bg-white/10 border-white/20"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 font-bold text-white bg-green-600 rounded-lg">
                    2020
                  </div>
                  <div>
                    <h3
                      className={`mb-2 text-xl font-semibold transition-colors duration-1000 ${
                        isStoryInView ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Quality Certification
                    </h3>
                    <p
                      className={`leading-relaxed transition-colors duration-1000 ${
                        isStoryInView ? "text-white/90" : "text-slate-700"
                      }`}
                    >
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
                <div
                  className={`p-6 text-center rounded-xl border shadow-lg transition-colors duration-1000 ${
                    isStoryInView
                      ? "bg-white/10 border-white/20"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div
                    className={`text-3xl font-bold mb-2 transition-colors duration-1000 ${
                      isStoryInView ? "text-white" : "text-[#1800ad]"
                    }`}
                  >
                    115
                  </div>
                  <div
                    className={`text-sm transition-colors duration-1000 ${
                      isStoryInView ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    Professionals
                  </div>
                </div>
                <div
                  className={`p-6 text-center rounded-xl border shadow-lg transition-colors duration-1000 ${
                    isStoryInView
                      ? "bg-white/10 border-white/20"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div
                    className={`text-3xl font-bold mb-2 transition-colors duration-1000 ${
                      isStoryInView ? "text-white" : "text-[#1800ad]"
                    }`}
                  >
                    3,000m²
                  </div>
                  <div
                    className={`text-sm transition-colors duration-1000 ${
                      isStoryInView ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    Workshop
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div
                className={`p-8 rounded-2xl border shadow-lg transition-colors duration-1000 ${
                  isStoryInView
                    ? "bg-white/10 border-white/20"
                    : "bg-white border-slate-200"
                }`}
              >
                <h3
                  className={`mb-4 text-xl font-semibold transition-colors duration-1000 ${
                    isStoryInView ? "text-white" : "text-slate-900"
                  }`}
                >
                  Our Mission
                </h3>
                <p
                  className={`mb-4 leading-relaxed transition-colors duration-1000 ${
                    isStoryInView ? "text-white/90" : "text-slate-700"
                  }`}
                >
                  "Our story is one of resilience, responsibility, and progress
                  — always being present where challenges are greatest, and
                  delivering where reliability matters most."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#1800ad] rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-white">M</span>
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors duration-1000 ${
                      isStoryInView ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    MAINA Leadership Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - Case Study/Testimonial */}
      <section
        className="overflow-hidden relative py-24 text-white"
        style={{
          background:
            "linear-gradient(135deg, #1800ad 0%, #3b82f6 50%, #e5e7eb 100%)",
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-blue-500/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-white/10"></div>
          <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full blur-3xl bg-white/10"></div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-16 items-center lg:grid-cols-2">
            {/* Left Side - Visual/Brand Content */}
            <div className="relative">
              {/* Industrial Background Image */}
              <div className="overflow-hidden relative rounded-3xl shadow-2xl">
                <img
                  src="/images/logo/background.png"
                  alt="MAINA Industrial Excellence"
                  className="w-full h-96 lg:h-[500px] object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x500/1800ad/ffffff?text=MAINA+Excellence`;
                  }}
                />
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1800ad]/80 via-blue-600/60 to-blue-400/40"></div>

                {/* Company Logo Overlay */}
                <div className="flex absolute inset-0 justify-center items-center">
                  <div className="text-center">
                    <img
                      src="/mylogo/logoMaina.png"
                      alt="MAINA Logo"
                      className="mx-auto mb-4 w-auto h-20 filter brightness-0 invert lg:h-24"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <div className="hidden text-4xl font-bold text-white lg:text-5xl">
                      MAINA
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="flex absolute -top-6 -right-6 justify-center items-center w-24 h-24 rounded-full backdrop-blur-sm bg-white/20">
                <span className="text-2xl font-bold">15+</span>
              </div>
              <div className="flex absolute -bottom-6 -left-6 justify-center items-center w-32 h-16 rounded-2xl backdrop-blur-sm bg-white/20">
                <span className="text-sm font-semibold">ISO 9001:2015</span>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Main Headline */}
              <div>
                <h2
                  className="mb-8 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
                  style={{ fontWeight: 300 }}
                >
                  Our Expertise
                  <span className="block mt-2 text-blue-300">
                    Industrial Solutions You Can Rely On
                  </span>
                </h2>

                {/* Description */}
                <div className="mb-8">
                  <p
                    className="max-w-lg text-lg leading-relaxed text-white/90"
                    style={{ fontWeight: 300 }}
                  >
                    At MAINA, expertise goes beyond technical skills — it is the
                    ability to transform complex challenges into sustainable
                    results.
                  </p>
                </div>
              </div>

              {/* Expertise Services List */}
              <div className="space-y-4">
                {/* Service 1 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      Fabrication & Engineering
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      Certified welded structures, skid-mounted gas systems, and
                      tailor-made industrial equipment.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      Construction & Assembly
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      Turnkey industrial plants, rehabilitation of existing
                      facilities, and large-scale steel structures.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      Maintenance Services
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      Preventive and corrective interventions that minimize
                      downtime and extend equipment life.
                    </p>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      Piping & Welding
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      TIG, MIG, ARC welding, high-pressure piping networks,
                      performed under strict international standards.
                    </p>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      Electrical & Instrumentation
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      Installation and commissioning of industrial electrical
                      systems and automation solutions.
                    </p>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      Commissioning & Project Management
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      From FAT to start-up, full-cycle support ensuring safe and
                      efficient operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="inline-flex items-center px-8 py-4 font-semibold text-[#1800ad] bg-white rounded-full shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl group">
                  <span>Explore Our Services</span>
                  <div className="flex justify-center items-center ml-3 w-8 h-8 bg-[#1800ad] rounded-full transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - Enhanced Sticky Cards */}
      <section className="py-24 bg-slate-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2
              className="mb-8 text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
              style={{ fontWeight: 300 }}
            >
              Our Projects
              <span className="block mt-2 text-[#1800ad]">
                Excellence in Every Industry
              </span>
            </h2>
            <p
              className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-700"
              style={{ fontWeight: 300 }}
            >
              Discover how MAINA delivers exceptional results across diverse
              industrial sectors
            </p>
          </div>

          {/* Enhanced Animated Cards Section */}
          <div ref={cardsRef} className="space-y-32">
            {/* Card 1 - Key Achievements */}
            <div className="sticky top-16">
              <div
                className={`mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ease-in-out ${
                  isCardsInView ? "w-full scale-105" : "w-[70%] scale-95"
                }`}
              >
                <div className="grid min-h-screen lg:grid-cols-2">
                  {/* Left Side - Image */}
                  <div className="overflow-hidden relative">
                    <img
                      src="/01.png"
                      alt="MAINA Key Achievements"
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x500/1800ad/ffffff?text=Key+Achievements`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r to-transparent from-blue-900/50"></div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex flex-col justify-center p-12 text-white">
                    <div className="mb-4">
                      <span className="px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm bg-white/20">
                        Track Record
                      </span>
                    </div>
                    <h3 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                      Key Achievements
                      <span className="block mt-2 text-3xl font-light text-blue-200 lg:text-4xl">
                        A Proven Track Record
                      </span>
                    </h3>
                    <p className="mb-8 text-lg leading-relaxed text-white/90">
                      Each project we deliver is a demonstration of technical
                      rigor, safety, and collaboration. A few representative
                      achievements include:
                    </p>

                    {/* Achievement List */}
                    <div className="mb-8 space-y-4">
                      {/* Achievement 1 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Cryogenic Exchangers – GL1/Z Complex
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            (Sonatrach/SOMIZ) – Prefabrication, welding, and
                            testing for four cryogenic exchangers in a
                            high-stakes Oil & Gas facility.
                          </p>
                        </div>
                      </div>

                      {/* Achievement 2 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            MTBE Production Plant – Arzew
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            (CNTIC-SINOPEC / SOMIZ) – Construction of strategic
                            storage tanks, ensuring the reliability of
                            petrochemical infrastructure.
                          </p>
                        </div>
                      </div>

                      {/* Achievement 3 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Gas Regulation & Heating Stations
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            SONELGAZ/GRTG – Design, fabrication, and supply of
                            35 skid-mounted units.
                          </p>
                        </div>
                      </div>

                      {/* Achievement 4 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Storage Tank Rehabilitation
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            SONATRACH (Transport & Refining) – Structural
                            repairs under strict safety conditions, safeguarding
                            strategic assets.
                          </p>
                        </div>
                      </div>

                      {/* Achievement 5 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Multi-Sector Maintenance
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Ongoing support for power plants, Oil & Gas units,
                            and water treatment facilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Our Clients */}
            <div className="sticky top-16">
              <div
                className={`mx-auto bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ease-in-out ${
                  isCardsInView ? "w-full scale-105" : "w-[70%] scale-95"
                }`}
              >
                <div className="grid min-h-screen lg:grid-cols-2">
                  {/* Left Side - Image */}
                  <div className="overflow-hidden relative">
                    <img
                      src="/02.png"
                      alt="MAINA Clients"
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x500/059669/ffffff?text=Our+Clients`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r to-transparent from-green-900/50"></div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex flex-col justify-center p-12 text-white">
                    <div className="mb-4">
                      <span className="px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm bg-white/20">
                        Partnerships
                      </span>
                    </div>
                    <h3 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                      Our Clients
                      <span className="block mt-2 text-3xl font-light text-green-200 lg:text-4xl">
                        Trusted by Industry Leaders
                      </span>
                    </h3>
                    <p className="mb-8 text-lg leading-relaxed text-white/90">
                      MAINA builds long-term partnerships based on transparency
                      and performance. The following examples illustrate the
                      diversity of industries we support:
                    </p>

                    {/* Client List */}
                    <div className="mb-8 space-y-4">
                      {/* Client 1 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Sonatrach
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            National oil & gas leader.
                          </p>
                        </div>
                      </div>

                      {/* Client 2 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Sonelgaz
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Power and gas transmission.
                          </p>
                        </div>
                      </div>

                      {/* Client 3 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Somiz (Sonatrach Group)
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Industrial maintenance.
                          </p>
                        </div>
                      </div>

                      {/* Client 4 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            ENCC (Imetal Group)
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Steel structures and boiler-making.
                          </p>
                        </div>
                      </div>

                      {/* Client 5 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            International EPC contractors
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Global leaders relying on MAINA for turnkey projects
                            in Algeria.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed text-white/90">
                      These collaborations reflect our ability to adapt to
                      diverse challenges while consistently delivering value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Our Vision */}
            <div className="sticky top-16">
              <div
                className={`mx-auto bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ease-in-out ${
                  isCardsInView ? "w-full scale-105" : "w-[70%] scale-95"
                }`}
              >
                <div className="grid min-h-screen lg:grid-cols-2">
                  {/* Left Side - Image */}
                  <div className="overflow-hidden relative">
                    <img
                      src="/03.png"
                      alt="MAINA Vision"
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/600x500/0891b2/ffffff?text=Our+Vision`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r to-transparent from-cyan-900/50"></div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex flex-col justify-center p-12 text-white">
                    <div className="mb-4">
                      <span className="px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm bg-white/20">
                        Future Focus
                      </span>
                    </div>
                    <h3 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
                      Our Vision
                      <span className="block mt-2 text-3xl font-light text-cyan-200 lg:text-4xl">
                        Shaping the Future of Industry
                      </span>
                    </h3>
                    <p className="mb-8 text-lg leading-relaxed text-white/90">
                      MAINA is committed to being more than a service provider.
                      We aspire to be a catalyst for industrial progress,
                      contributing to Algeria's development and to the global
                      energy transition.
                    </p>

                    <p className="mb-6 text-lg leading-relaxed text-white/90">
                      Our ambition is anchored in:
                    </p>

                    {/* Vision Pillars */}
                    <div className="mb-8 space-y-4">
                      {/* Pillar 1 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Innovation
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Integrating new technologies and advanced processes.
                          </p>
                        </div>
                      </div>

                      {/* Pillar 2 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Diversification
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Expanding expertise into hydraulics, civil
                            engineering, and emerging industries.
                          </p>
                        </div>
                      </div>

                      {/* Pillar 3 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Sustainability
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Supporting the modernization of infrastructure and
                            promoting safe, responsible operations.
                          </p>
                        </div>
                      </div>

                      {/* Pillar 4 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Human Capital
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Developing skills and fostering a culture of
                            excellence within our teams.
                          </p>
                        </div>
                      </div>

                      {/* Pillar 5 */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-3 w-2 h-2 bg-white rounded-full"></div>
                        <div>
                          <h4 className="mb-1 font-semibold text-white">
                            Partnerships
                          </h4>
                          <p className="text-sm leading-relaxed text-white/80">
                            Growing together with our clients through long-term
                            collaboration and trust.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed text-white/90">
                      By combining these pillars, MAINA is determined to shape
                      the future of Algeria's industry while positioning itself
                      as a regional and international benchmark.
                    </p>
                  </div>
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
