"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const JourneySection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Book Your Appointment in Just 60 Seconds.",
      icon: "📞",
      description:
        "Schedule your free consultation with our expert team and take the first step towards pain-free living.",
      delay: 0.2,
      initial: { x: -50, opacity: 0 },
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      number: "02",
      title: "Meet Our Expert Dental Team and Get Personalized Care.",
      icon: "🩺",
      description:
        "Get personalized treatment from our experienced doctors who understand your unique needs.",
      delay: 0.4,
      initial: { x: 50, opacity: 0 },
      gradient: "from-purple-500 to-blue-400",
    },
    {
      number: "03",
      title: "Enjoy a Healthy, Confident Smile for Life!",
      icon: "😁",
      description:
        "Experience lasting relief and learn techniques to maintain your pain-free lifestyle.",
      delay: 0.6,
      initial: { x: -50, opacity: 0 },
      gradient: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Journey to Get Out of Pain
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Follow our proven three-step process to transform your life and live
            pain-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={step.initial}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: step.delay,
                ease: "easeOut",
              }}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              className="relative group"
            >
              <div
                className={`
                h-full bg-white rounded-2xl p-8
                transform transition-all duration-300
                ${hoveredStep === index ? "scale-105 shadow-2xl" : "shadow-lg"}
                hover:shadow-xl
              `}
              >
                {/* Animated gradient border */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-r ${step.gradient}
                  opacity-0 group-hover:opacity-20 transition-opacity duration-300
                  -z-10 blur-xl
                `}
                />

                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Number Badge */}
                  <motion.div
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center
                      bg-gradient-to-r ${step.gradient} text-white
                      transform transition-transform duration-300
                      opacity-90
                    `}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-xl font-bold">{step.number}</span>
                  </motion.div>

                  {/* Icon */}
                  <motion.span
                    className="text-4xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.icon}
                  </motion.span>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Learn More Button */}
                </div>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-blue-300 to-purple-300 opacity-70" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
