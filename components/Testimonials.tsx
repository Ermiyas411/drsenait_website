"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "/profile2.jpg",
    content:
      "The level of care and professionalism at this dental practice is outstanding. The team made me feel comfortable throughout my entire treatment.",
    rating: 5,
    treatment: "Cosmetic Dentistry",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/profile.jpg",
    content:
      "I've had a fear of dentists for years, but this team changed everything. Their gentle approach and modern facilities made all the difference.",
    rating: 5,
    treatment: "Dental Implants",
  },
  {
    name: "Emma Williams",
    role: "Teacher",
    image: "/profile3.jpg",
    content:
      "The results of my cosmetic dental work exceeded my expectations. I can't stop smiling now! Highly recommend their services.",
    rating: 5,
    treatment: "Teeth Whitening",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      id="testimonials"
      className="py-20 bg-navy-900 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl  font-bold text-white mb-4">
            What Our <span className="text-[#118c90]">Patients Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real stories from our valued patients about their dental journey
            with us
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="relative h-64 lg:h-full min-h-[400px]">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-6 left-6 text-white"
                          >
                            <h4 className="text-xl font-bold">
                              {testimonial.name}
                            </h4>
                            <p className="text-[#118c90]">{testimonial.role}</p>
                          </motion.div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 lg:p-12">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="flex items-center mb-6">
                              <div className="flex space-x-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <motion.svg
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="w-5 h-5 text-gold-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </motion.svg>
                                ))}
                              </div>
                              <span className="ml-4 text-sm text-gray-500">
                                for {testimonial.treatment}
                              </span>
                            </div>

                            <motion.blockquote
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6 }}
                              className="text-xl text-gray-600 italic mb-6"
                            >
                              "{testimonial.content}"
                            </motion.blockquote>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 }}
                              className="flex items-center justify-between"
                            >
                              <div className="flex space-x-2">
                                {testimonials.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      setActiveIndex(idx);
                                      setIsAutoPlaying(false);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 
                                    ${
                                      idx === activeIndex
                                        ? "w-8 bg-[#118c90]"
                                        : "bg-gray-300 hover:bg-gold-200"
                                    }`}
                                  />
                                ))}
                              </div>
                              <button
                                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                className={`text-sm text-gray-500 hover:text-[#118c90] transition-colors
                                ${isAutoPlaying ? "text-[#118c90]" : ""}`}
                              >
                                {isAutoPlaying ? "Pause" : "Play"} Slideshow
                              </button>
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute top-[40%] -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 -mt-10 md:-mt-16">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setActiveIndex(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  );
                  setIsAutoPlaying(false);
                }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-navy-900 pointer-events-auto hover:bg-[#118c90] hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setActiveIndex((prev) => (prev + 1) % testimonials.length);
                  setIsAutoPlaying(false);
                }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-navy-900 pointer-events-auto hover:bg-[#118c90] hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
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
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
