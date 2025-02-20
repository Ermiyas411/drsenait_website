"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { smoothScroll } from "@/utils/smoothScroll";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Our Team", href: "/our-team" },
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
      setIsScrolled(window.scrollY > 10);

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
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-900 hover:text-[#118c90]"
                      : "text-white hover:text-[#118c90]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book-appointment"
                className="px-4 py-2 rounded-full bg-[#118c90] text-white text-sm font-medium 
                         hover:bg-[#0d6d70] transition-colors duration-300"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-b-2xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-[#118c90] hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book-appointment"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#118c90] hover:bg-[#0d6d70]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
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
