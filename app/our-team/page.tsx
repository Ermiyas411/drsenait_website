"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { teamMembers } from "./teamData";

export default function OurTeam() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-navy-900 relative overflow-hidden">
      {/* Fixed Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="group flex items-center space-x-2 bg-white/10 backdrop-blur-md 
                     px-4 py-2 rounded-full border border-white/20 
                     hover:bg-[#118c90]/20 transition-all duration-300
                     shadow-lg hover:shadow-xl"
        >
          <svg
            className="w-5 h-5 text-white transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-white text-sm font-medium">Back to Home</span>
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-[#118c90]">Expert Team</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Dedicated professionals committed to providing you with exceptional
            dental care and beautiful smiles.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
              className="relative group"
            >
              <Link href={`/our-team/${member.id}`}>
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm">
                  {/* Image Container */}
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#118c90] font-medium mb-4">
                        {member.title}
                      </p>

                      {/* Expandable Content */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredMember === index ? 1 : 0,
                          height: hoveredMember === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 text-sm mb-4">
                          {member.bio}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-[#118c90]/20 text-[#118c90] text-xs"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <a
                            href={member.social.linkedin}
                            className="text-gray-400 hover:text-[#118c90] transition-colors"
                          >
                            LinkedIn
                          </a>
                          <a
                            href={member.social.twitter}
                            className="text-gray-400 hover:text-[#118c90] transition-colors"
                          >
                            Twitter
                          </a>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
