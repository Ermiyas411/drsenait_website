"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    description:
      "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
  },
  {
    icon: "✨",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, whitening, and aesthetic procedures.",
  },
  {
    icon: "🦿",
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions with state-of-the-art implant technology.",
  },
  {
    icon: "👑",
    title: "Crown & Bridges",
    description:
      "Restore damaged teeth and replace missing teeth with custom prosthetics.",
  },
  {
    icon: "😁",
    title: "Orthodontics",
    description:
      "Straighten your teeth with traditional braces or clear aligners.",
  },
  {
    icon: "🎯",
    title: "Emergency Care",
    description:
      "24/7 emergency dental services for immediate pain relief and care.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl  font-bold text-white mb-4">
            Our Premium <span className="text-[#118c90]">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience comprehensive dental care with our range of specialized
            services, delivered with precision and comfort in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-navy-800 p-8 rounded-2xl hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-[#118c90] font-medium flex items-center group"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
