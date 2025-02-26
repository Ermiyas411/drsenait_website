"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/banner/banner2.jpg"
              alt="Modern Dental Practice"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-8">
              <div className="flex items-center space-x-4">
                <div className="bg-[#118c90] p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-navy-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Certified Excellence</p>
                  <p className="text-gray-300 text-sm">
                    ISO 9001:2015 Certified Practice
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl  font-bold text-navy-900 mb-6">
                Transforming Smiles with
                <span className="text-[#118c90]"> Advanced Care</span>
              </h2>
              <p className="text-gray-600 mb-8">
                With over two decades of excellence, we combine cutting-edge
                technology with compassionate care to deliver exceptional dental
                services. Our commitment to your comfort and satisfaction drives
                everything we do.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "State-of-the-art Technology",
                  "Experienced Dental Team",
                  "Comfortable Environment",
                  "Personalized Care Plans",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-[#118c90] rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-navy-900 text-white px-8 py-3 rounded-full font-medium hover:bg-navy-800 transition-colors"
                >
                  Learn More
                </motion.button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
