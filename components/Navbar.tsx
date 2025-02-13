"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { smoothScroll } from "@/utils/smoothScroll";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Update active section based on scroll position
      const sections = navItems.map((item) =>
        document.getElementById(item.href.substring(1))
      );
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].name.toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    smoothScroll(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-navy-900/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.div
                className="text-2xl  text-white font-bold flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/logo.png" alt="logo" width={150} height={150} />
                <motion.div
                  className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#118c90] group-hover:w-full transition-all duration-300"
                  layoutId="underline"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href.substring(1))}
                  className="relative px-4 py-2 group"
                >
                  <motion.span
                    className={`relative z-10 text-sm font-medium transition-colors duration-200
                      ${
                        activeSection === item.name.toLowerCase()
                          ? "text-[#118c90]"
                          : "text-white group-hover:text-[#118c90]"
                      }`}
                  >
                    {item.name}
                    {activeSection === item.name.toLowerCase() && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute -mt-0.5 -mx-2 px-7 py-3 inset-0 bg-white/10 rounded-full -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
              <motion.button
                onClick={() => router.push("/book-appointment")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 bg-[#118c90] text-white rounded-full font-medium
                  hover:bg-[#118c90] transition-colors duration-200 shadow-lg hover:shadow-[#118c90ae]"
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white focus:outline-none"
            >
              <div className="relative w-6 h-5">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  className="absolute w-full h-0.5 bg-white rounded-full transform transition-all duration-300"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  className="absolute w-full h-0.5 bg-white rounded-full top-2 transform transition-all duration-300"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 16,
                  }}
                  className="absolute w-full h-0.5 bg-white rounded-full bottom-0 transform transition-all duration-300"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 bg-navy-900/95 backdrop-blur-lg md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-4 py-6 space-y-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href.substring(1))}
                    className={`block px-4 py-2 text-lg rounded-lg transition-colors duration-200
                      ${
                        activeSection === item.name.toLowerCase()
                          ? "text-[#118c90] bg-white/10"
                          : "text-white hover:text-[#118c90] hover:bg-white/5"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full px-6 py-3 bg-[#118c90] text-navy-900 rounded-lg font-medium
                  hover:bg-[#118c90] transition-colors duration-200"
                onClick={() => router.push("/book")}
              >
                Book Appointment
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#118c90] origin-left z-50"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </>
  );
}
