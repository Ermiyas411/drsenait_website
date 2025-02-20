"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isScrolling, setIsScrolling] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);

      setTimeoutId(newTimeoutId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <>
      <motion.div
        className="scroll-progress-container"
        style={{
          opacity: isScrolling ? 1 : 0.6,
          transition: "opacity 0.3s ease",
        }}
      >
        <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      </motion.div>

      {/* Floating scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolling ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 bottom-4 bg-white/10 backdrop-blur-md rounded-full p-3 cursor-pointer z-50
                   border border-[#118c90]/20 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          boxShadow: "0 4px 20px rgba(17, 140, 144, 0.15)",
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#118c90]"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <path d="m18 15-6-6-6 6" />
        </motion.svg>
      </motion.div>
    </>
  );
}
