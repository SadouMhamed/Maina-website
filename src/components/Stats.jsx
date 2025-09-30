// import { motion } from "framer-motion";
import { History, Building, Award, Target } from "lucide-react";

const OurStory = () => {
  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description:
        "Founded with a clear ambition to provide reliable industrial services to the Oil & Gas sector.",
      icon: <Building className="w-6 h-6" />,
    },
    {
      year: "2015",
      title: "Expansion",
      description:
        "Expanded expertise into welding, piping, fabrication of specialized equipment, and structural steelwork.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: "2020",
      title: "ISO Certification",
      description:
        "Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management.",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Story
            <span className="block text-blue-400">
              From Maintenance to Industrial Leadership
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founded with a clear ambition — to provide reliable industrial
            services to the Oil & Gas sector — MAINA has grown into a
            multidisciplinary partner recognized for its ability to deliver
            complex projects with precision.
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Over the years, our expertise has expanded into welding, piping,
              fabrication of specialized equipment, structural steelwork, water
              treatment, hydraulics, and civil engineering. Today, with a{" "}
              <strong className="text-blue-400">3,000 m² workshop</strong>, a
              team of{" "}
              <strong className="text-blue-400">115 professionals</strong>, and{" "}
              <strong className="text-blue-400">
                ISO 9001:2015 certification
              </strong>{" "}
              (renewed through 2028), MAINA continues to shape Algeria's
              industrial landscape.
            </p>
            <p className="text-xl text-blue-300 font-medium">
              Our story is one of resilience, responsibility, and progress —
              always being present where challenges are greatest, and delivering
              where reliability matters most.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-slate-700/50 border border-slate-600/30 p-6 rounded-2xl text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl mb-4">
                {milestone.icon}
              </div>
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {milestone.year}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {milestone.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-700">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
              15+
            </div>
            <div className="text-gray-400">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
              115
            </div>
            <div className="text-gray-400">Professional Team</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
              3,000m²
            </div>
            <div className="text-gray-400">Workshop Facility</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
              ISO
            </div>
            <div className="text-gray-400">9001:2015 Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
