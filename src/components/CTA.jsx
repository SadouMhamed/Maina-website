// import { motion } from 'framer-motion';
import {
  ArrowRight,
  Wrench,
  Building,
  Zap,
  Settings,
  Cpu,
  CheckCircle,
} from "lucide-react";

const OurExpertise = () => {
  const expertiseAreas = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Fabrication & Engineering",
      description:
        "Certified welded structures, skid-mounted gas systems, and tailor-made industrial equipment.",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Construction & Assembly",
      description:
        "Turnkey industrial plants, rehabilitation of existing facilities, and large-scale steel structures.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Maintenance Services",
      description:
        "Preventive and corrective interventions that minimize downtime and extend equipment life.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Piping & Welding",
      description:
        "TIG, MIG, ARC welding, high-pressure piping networks, performed under strict international standards.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Electrical & Instrumentation",
      description:
        "Installation and commissioning of industrial electrical systems and automation solutions.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Commissioning & Project Management",
      description:
        "From FAT to start-up, full-cycle support ensuring safe and efficient operations.",
    },
  ];

  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Expertise
            <span className="block text-blue-400">
              Industrial Solutions You Can Rely On
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            At MAINA, expertise goes beyond technical skills — it is the ability
            to transform complex challenges into sustainable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-slate-700/50 border border-slate-600/30 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-slate-600/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 text-blue-400 rounded-xl mb-4">
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {area.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary group text-lg px-8 py-4 mb-6">
            Explore Our Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From concept to commissioning, MAINA delivers comprehensive
            industrial solutions that meet the highest international standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
