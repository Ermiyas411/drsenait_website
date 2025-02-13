"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl  font-bold mb-4">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </h3>
            <p className="text-gray-300 mb-4">
              Providing exceptional dental care with a focus on comfort and
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="text-gray-300 hover:text-[#118c90] transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:border-[#118c90]">
                      {social === "facebook" && (
                        <Link href="https://www.facebook.com/Drsenait/">
                          <svg
                            className="w-4 h-4 fill-current hover:text-[#118c90]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                          </svg>
                        </Link>
                      )}
                      {social === "twitter" && (
                        <Link href="https://twitter.com/DrSenait">
                          <svg
                            className="w-4 h-4 fill-current hover:text-[#118c90]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </Link>
                      )}
                      {social === "instagram" && (
                        <Link href="https://www.instagram.com/drsenaitdental/?hl=en">
                          <svg
                            className="w-4 h-4 fill-current hover:text-[#118c90]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </Link>
                      )}
                      {social === "linkedin" && (
                        <Link href="#">
                          <svg
                            className="w-4 h-4 fill-current hover:text-[#118c90]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#118c90] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "General Dentistry",
                "Cosmetic Dentistry",
                "Dental Implants",
                "Orthodontics",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-[#118c90] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span>📍</span>
                <span className="text-gray-300">
                  Bole Road, Wello Sefer, Fetle Building, 2nd Floor (next to
                  Medco Bio-Medical College)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <span>📞</span>
                <span className="text-gray-300">+251 94 183 8383</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>📧</span>
                <span className="text-gray-300"> todrsenait@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dr.Senait Dental. All rights reserved.
          </p>
          <p className="mt-1 text-xs">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/yohannes-tezera-0b6b83196/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#118c90] hover:text-[#0e7578] transition-colors"
            >
              Ermiyas Kerebih
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
