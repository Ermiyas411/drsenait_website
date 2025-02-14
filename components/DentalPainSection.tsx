"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const DentalPainSection = () => {
  const router = useRouter();

  const painPoints = [
    "You're constantly worried about tooth pain, sensitivity, or discomfort.",
    "You're tired of putting off dental visits, knowing the problem is only getting worse.",
    "If this doesn't get fixed soon, you're afraid it could lead to bigger (and more expensive) issues.",
    "You feel anxious about visiting the dentist, worried about pain or bad past experiences.",
    "You're frustrated, avoiding smiling in photos, social events, or even conversations.",
    "Your dental issues are starting to affect your confidence, eating habits, and overall health.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          Is dental pain or anxiety holding you back?
        </motion.h2>

        {/* Pain Points */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-6 h-6 mt-1">
                <CheckIcon className="w-5 h-5 text-[#118c90]" />
              </div>
              <p className="text-gray-700">{point}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution Statement */}
        <motion.div animate={pulseAnimation} className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#118c90] mb-4">
            Don't let dental pain or fear control your life.
          </h3>
          <p className="text-xl text-gray-700">
            Our expert team is here to give you stress-free, pain-free care.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
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
            onClick={() => router.push("/book-appointment")}
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
      </div>
    </section>
  );
};

export default DentalPainSection;
