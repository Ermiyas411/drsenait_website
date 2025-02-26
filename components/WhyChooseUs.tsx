"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const features = [
  {
    icon: "🦷",
    title: "Advanced Technology",
    description:
      "State-of-the-art equipment and modern dental techniques for optimal care.",
  },
  {
    icon: "👨‍⚕️",
    title: "Expert Team",
    description:
      "Highly qualified and experienced dental professionals dedicated to your smile.",
  },
  {
    icon: "🏆",
    title: "Quality Care",
    description:
      "Comprehensive dental services with a focus on patient comfort and satisfaction.",
  },
  {
    icon: "⏰",
    title: "Flexible Hours",
    description: "Convenient scheduling options to fit your busy lifestyle.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleBookingClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSea1gDqkKdokPKkAwYe_-1PKHg0D6RxwftK9RLvysXCNBCbwg/viewform?usp=dialog",
      "_blank"
    );
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-[#118c90] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience excellence in dental care with our commitment to quality,
            comfort, and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-4 sm:p-6 rounded-xl hover:bg-gray-50 
                transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              <motion.div
                className="w-0 h-1 bg-[#118c90] mt-4"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* CTA Button */}
      <motion.div
        className="text-center mt-14"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <button
          className="
            relative
            px-8 py-4
            text-lg font-semibold text-white
            bg-gradient-to-r from-[#118c90] to-teal-400
            rounded-full
            transform transition-all duration-300
            hover:shadow-lg hover:from-[#118c90] hover:to-teal-500
            focus:outline-none focus:ring-2 focus:ring-[#118c90] focus:ring-offset-2
          "
          onClick={() => handleBookingClick()}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#118c90] blur-md opacity-50 -z-10" />
          BOOK A FREE PHONE CONSULT
          {/* Arrow icon */}
          <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </motion.div>
    </section>
  );
}
