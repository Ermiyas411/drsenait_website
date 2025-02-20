"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Enhanced animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20 },
};

const slideIn = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50 },
};

const referralSources = [
  { value: "google", label: "Google Search" },
  { value: "friend", label: "Friend or Family" },
  { value: "social", label: "Social Media" },
  { value: "insurance", label: "Insurance Provider" },
  { value: "other", label: "Other" },
] as const;

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  referralSource: z.string().optional(),
  notes: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function BookAppointment() {
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [contactInfo, setContactInfo] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleBooking = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setContactInfo(data);
      setBookingStatus("success");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#8b5cf6", "#d946ef"],
      });
    } catch (error) {
      setBookingStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Gradient Backgrounds */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Top right gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#118c90]/30 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2" />

        {/* Bottom left gradient */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#118c90]/20 rounded-full blur-[128px] translate-y-1/2 -translate-x-1/2" />

        {/* Center gradient */}
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#118c90]/10 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Fixed Back Button */}
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-6 left-6 z-50 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeftIcon className="w-6 h-6 text-[#118c90]" />
        </motion.div>
      </Link>

      <section className="relative min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Book Your <span className="text-[#118c90]">Appointment</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take the first step towards your perfect smile. Schedule your
              visit with our experienced dental team today.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(handleBooking)}
            className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 space-y-6"
          >
            <div className="space-y-6">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("fullName")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#118c90] focus:border-[#118c90] transition-colors bg-white/80"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#118c90] focus:border-[#118c90] transition-colors bg-white/80"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#118c90] focus:border-[#118c90] transition-colors bg-white/80"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="source"
                >
                  How did you hear about us?
                </label>
                <select
                  id="source"
                  {...register("referralSource")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#118c90] focus:border-[#118c90] transition-colors bg-white/80"
                  required
                >
                  <option value="">Please select</option>
                  <option value="google">Google Search</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend/Family</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="message"
                >
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  {...register("notes")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#118c90] focus:border-[#118c90] transition-colors bg-white/80"
                ></textarea>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#118c90] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#0e7578] transition-colors duration-300 shadow-lg hover:shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Processing...
                </div>
              ) : (
                "Book Appointment"
              )}
            </motion.button>
          </motion.form>

          {/* Booking Status */}
          {bookingStatus !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg text-center
                ${
                  bookingStatus === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
            >
              {bookingStatus === "success"
                ? "Form submitted successfully!"
                : "Something went wrong. Please try again."}
            </motion.div>
          )}
        </div>

        {/* Copyright Footer */}
        <div className="absolute bottom-0 left-0 right-0 py-6 bg-white/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
            <p>
              © {currentYear} Dr. Senait Dental Clinic. All rights reserved.
            </p>
            <p className="mt-1 text-xs">
              Designed & Developed by{" "}
              <a
                href="https://et.linkedin.com/in/ermiyas-kerebih-918464279"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#118c90] hover:text-[#0e7578] transition-colors"
              >
                Ermiyas Kerebih
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
