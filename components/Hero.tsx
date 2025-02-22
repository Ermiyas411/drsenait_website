"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Hero() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBookingClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSea1gDqkKdokPKkAwYe_-1PKHg0D6RxwftK9RLvysXCNBCbwg/viewform?usp=dialog",
      "_blank"
    );
  };

  // Image carousel configuration
  const carouselImages = [
    {
      src: "/banner/banner1.jpg",
      alt: "Modern Dental Clinic",
    },
    {
      src: "/banner/banner2.jpg",
      alt: "Advanced Dental Technology",
    },
    {
      src: "/banner/banner3.jpg",
      alt: "Comfortable Treatment Room",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(timer);
  }, []);

  // Floating dental elements configuration
  const floatingElements = [
    {
      icon: "🦷", // Tooth
      className: "top-[15%] left-[15%] w-12 h-12",
      animation: {
        y: [0, -20, 0],
        rotate: [0, 10, 0],
        scale: [1, 1.1, 1],
      },
      duration: 8,
    },
    {
      icon: "🦷", // Tooth
      className: "top-[25%] right-[20%] w-10 h-10",
      animation: {
        y: [0, 20, 0],
        rotate: [0, -15, 0],
        scale: [1, 1.2, 1],
      },
      duration: 7,
    },
    {
      icon: "💉", // Syringe (representing dental tools)
      className: "bottom-[30%] left-[25%] w-8 h-8",
      animation: {
        x: [0, 15, 0],
        rotate: [0, 20, 0],
      },
      duration: 6,
    },
    {
      icon: "🔍", // Magnifying glass (representing examination)
      className: "top-[40%] right-[15%] w-10 h-10",
      animation: {
        scale: [1, 1.2, 1],
        rotate: [0, -10, 0],
      },
      duration: 5,
    },
  ];

  // Custom animated dental shapes
  const DentalShape = ({ className }: { className: string }) => (
    <motion.svg
      viewBox="0 0 100 100"
      className={`absolute ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
    >
      <path
        d="M50 5
           C30 5 5 25 5 60
           C5 75 10 95 25 95
           C35 95 45 85 50 85
           C55 85 65 95 75 95
           C90 95 95 75 95 60
           C95 25 70 5 50 5Z"
        fill="currentColor"
        className="text-[#118c90]"
      />
    </motion.svg>
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentImageIndex].src}
              alt={carouselImages[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 via-navy-900/40 to-navy-900/30" />
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${
                index === currentImageIndex
                  ? "w-8 bg-[#118c90]"
                  : "bg-white/50 hover:bg-white"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Shapes - Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-[20%] w-64 h-64 bg-[#118c90]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-[20%] w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Animated Dental Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Existing floating shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-[20%] w-64 h-64 bg-[#118c90]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-[20%] w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        />

        {/* New Floating Dental Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.className}`}
            animate={element.animation}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <span className="text-white/50 text-4xl">{element.icon}</span>
          </motion.div>
        ))}

        {/* Custom Tooth Shapes */}
        <DentalShape className="w-24 h-24 top-[10%] right-[30%] rotate-12" />
        <DentalShape className="w-16 h-16 bottom-[20%] left-[25%] -rotate-12" />
        <DentalShape className="w-20 h-20 top-[30%] left-[15%] rotate-45" />
      </div>

      {/* DNA Helix Animation (representing dental technology) */}
      <div className="absolute right-0 h-full w-32 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 rounded-full border-2 border-[#118c90]/10"
            animate={{
              y: [i * 100, (i - 1) * 100],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Your Journey to a
              <span className="relative inline-block px-2 mx-2">
                <span className="relative z-10 text-[#118c90]">
                  Perfect Smile
                </span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute bottom-0 left-0 h-3 bg-[#118c90]/20 rounded-lg"
                />
              </span>
              Starts Here
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience world-class dental care with our team of expert
            professionals. Your comfort and smile are our top priorities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-[#118c90] font-semibold text-lg 
                        hover:bg-[#0e7476] hover:text-white transition-colors duration-300 
                        shadow-lg hover:shadow-xl hover:shadow-[#118c90]/20"
              onClick={() => handleBookingClick()}
            >
              Book Free Consultation
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "20+", label: "Years Experience" },
              { number: "15k+", label: "Happy Patients" },
              { number: "50+", label: "Expert Dentists" },
              { number: "99%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-3xl font-bold text-[#118c90] mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated Dental Tools at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{ left: `${i * 25}%` }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg
              className="w-12 h-12 text-white/5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-14 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 7, // Match with interval timer
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#118c90] origin-left z-20"
      />
    </section>
  );
}
