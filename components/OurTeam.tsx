"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { teamMembers } from "../app/our-team/teamData";

export default function OurTeam() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate the number of pages (assuming 3 items per view)
  const itemsPerView = 3;
  const totalPages = Math.ceil(teamMembers.length / itemsPerView);

  // Auto slide functionality
  useEffect(() => {
    if (isHovered) return; // Pause auto-slide when user is hovering

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalPages - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalPages, isHovered]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    const offset = info.offset.x;

    if (Math.abs(offset) > swipeThreshold) {
      if (offset > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (offset < 0 && currentIndex < totalPages - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div
      id="our-team"
      className="min-h-screen bg-navy-900 relative overflow-hidden"
    >
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

        {/* Carousel Container */}
        <div
          className="relative max-w-full overflow-x-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex space-x-8 pb-8"
            drag="x"
            dragConstraints={{ right: 0, left: -(teamMembers.length * 400) }}
            whileTap={{ cursor: "grabbing" }}
            onDragEnd={handleDragEnd}
            animate={{
              x: currentIndex * -400,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              cursor: "grab",
              touchAction: "pan-x",
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onHoverStart={() => setHoveredMember(index)}
                onHoverEnd={() => setHoveredMember(null)}
                className="relative group flex-shrink-0"
                style={{ width: "380px" }} // Fixed width for each card
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
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#118c90] scale-110"
                  : "bg-gray-400 hover:bg-[#118c90]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
