'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Enhanced animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20 }
};

const slideIn = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -50 }
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
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [contactInfo, setContactInfo] = useState<ContactFormData | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const handleBooking = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setContactInfo(data);
      setBookingStatus('success');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#8b5cf6', '#d946ef']
      });
    } catch (error) {
      setBookingStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-4 py-8">
      {/* Hero Section */}
      <motion.section 
        className="max-w-4xl mx-auto text-center mb-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
          Book Your Dental Appointment
        </h1>
        <p className="text-lg text-indigo-600 mb-8">
          Your journey to a healthier smile starts here
        </p>
      </motion.section>

      {/* Contact Form */}
      <motion.div 
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Contact Information</h2>
          <form onSubmit={handleSubmit(handleBooking)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                {...register("fullName")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                {...register("email")}
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="(123) 456-7890"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about us?
              </label>
              <select
                {...register("referralSource")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select an option</option>
                {referralSources.map((source) => (
                  <option key={source.value} value={source.value}>
                    {source.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes (Optional)
              </label>
              <textarea
                {...register("notes")}
                rows={3}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Any special requests or concerns..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
              className={`w-full px-6 py-3 rounded-full text-white font-semibold
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Processing...
                </div>
              ) : (
                'Submit'
              )}
            </motion.button>
          </form>

          {/* Booking Status */}
          {bookingStatus !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg text-center
                ${bookingStatus === 'success' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'}`}
            >
              {bookingStatus === 'success' 
                ? 'Form submitted successfully!'
                : 'Something went wrong. Please try again.'}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
