"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-navy-900 overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white w-full"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get in <span className="text-[#118c90]">Touch</span>
            </h2>
            <p className="text-gray-300 mb-8 text-sm lg:text-base">
              Schedule your consultation today and take the first step towards
              your perfect smile.
            </p>

            <div className="space-y-4 lg:space-y-6">
              {[
                {
                  icon: "📍",
                  title: "Visit Us",
                  content:
                    "Bole Road, Wello Sefer, Fetle Building, 2nd Floor (next to Medco Bio-Medical College)",
                },
                {
                  icon: "📞",
                  title: "Call Us",
                  content: "+251 94 183 8383",
                },
                {
                  icon: "📞",
                  title: "Call Us",
                  content: "+251 94 783 8383",
                },
                {
                  icon: "📧",
                  title: "Email Us",
                  content: "todrsenait@gmail.com",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-3 lg:space-x-4"
                >
                  <span className="text-xl lg:text-2xl flex-shrink-0">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-medium text-[#118c90] text-sm lg:text-base">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base break-words">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Google Maps - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full h-[300px] lg:h-[600px] rounded-xl lg:rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5277853726373!2d38.7678886!3d8.986214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTknMTAuNCJOIDM4wrA0NicwNC40IkU!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Dental Clinic Location"
            ></iframe>

            {/* Overlay Card with Quick Info */}
            <div className="absolute top-2 left-2 lg:top-4 lg:left-4 bg-white p-3 lg:p-4 rounded-lg shadow-lg z-20 max-w-[calc(100%-1rem)] lg:max-w-xs">
              <h3 className="font-semibold text-gray-900 mb-1 lg:mb-2 text-sm lg:text-base">
                Visit Our Clinic
              </h3>
              <p className="text-xs lg:text-sm text-gray-600">
                123 Dental Street, Suite 100
                <br />
                City, State 12345
              </p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=8.986214,38.7678886`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 lg:mt-3 text-xs lg:text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Get Directions →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
