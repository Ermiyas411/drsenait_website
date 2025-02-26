"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookingClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSea1gDqkKdokPKkAwYe_-1PKHg0D6RxwftK9RLvysXCNBCbwg/viewform?usp=dialog",
      "_blank"
    );
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Team", href: "#our-team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={32}
              className="h-8 w-auto md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 
                  ${
                    isScrolled
                      ? "text-gray-900 hover:text-[#118c90]"
                      : "text-white hover:text-[#118c90]"
                  }
                  relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                  after:h-[2px] after:w-0 after:bg-[#118c90] after:transition-all
                  hover:after:w-full`}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookingClick}
              className="px-4 py-2 rounded-full bg-[#118c90] text-white text-sm font-medium 
                       hover:bg-[#0d6d70] transition-all duration-300 
                       shadow-md hover:shadow-lg"
            >
              Book Appointment
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                }`}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                }`}
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className={`w-full h-0.5 transform transition-all duration-300 ${
                  isScrolled ? "bg-gray-900" : "bg-white"
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="px-4 py-3 space-y-2"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-base font-medium text-gray-900 
                               hover:text-[#118c90] hover:bg-[#118c90]/10 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-2"
                >
                  <button
                    onClick={() => {
                      handleBookingClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-3 py-2 rounded-lg text-base font-medium text-white 
                             bg-[#118c90] hover:bg-[#0d6d70] transition-all duration-300"
                  >
                    Book Appointment
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
