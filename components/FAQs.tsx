"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What dental insurance plans do you accept?",
    answer:
      "We accept most major dental insurance plans and are in-network with several providers. Please contact our office to verify your specific insurance coverage.",
    icon: "💳",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend scheduling regular check-ups and cleanings every six months. However, some patients may need more frequent visits based on their oral health needs.",
    icon: "🦷",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Yes, we provide emergency dental care services. If you experience a dental emergency during office hours, we'll make every effort to see you the same day. For after-hours emergencies, we have an on-call service.",
    icon: "🏥",
  },
  {
    question: "What cosmetic dental procedures do you offer?",
    answer:
      "We offer a comprehensive range of cosmetic dental procedures including teeth whitening, veneers, bonding, crowns, and Invisalign clear aligners. Each treatment is customized to meet your specific needs and goals.",
    icon: "✨",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional teeth whitening is safe when performed under dental supervision. We use clinically proven whitening systems that are both effective and gentle on your teeth and gums.",
    icon: "🌟",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "We accept various payment methods including cash, credit cards, and offer flexible financing options through CareCredit. We also provide in-house payment plans for eligible treatments.",
    icon: "💰",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  icon: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem = ({
  question,
  answer,
  icon,
  isOpen,
  onClick,
  index,
}: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      <motion.div
        className={`bg-white rounded-xl shadow-lg mb-4 overflow-hidden
          ${
            isOpen
              ? "ring-2 ring-[#118c90] shadow-[#118c90]/20"
              : "hover:shadow-xl"
          }
          transition-all duration-300`}
      >
        <button
          className="w-full text-left focus:outline-none"
          onClick={onClick}
        >
          <div className="p-6 flex items-center gap-4">
            <span className="text-2xl">{icon}</span>
            <span className="flex-1 text-lg font-medium text-navy-900">
              {question}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-6 flex items-center justify-center rounded-full
                ${
                  isOpen
                    ? "bg-[#118c90] text-white"
                    : "bg-gray-100 text-navy-900"
                }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </motion.div>
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="p-6 pt-0 text-gray-600 bg-gradient-to-b from-white to-gray-50"
              >
                {answer}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-0 left-1/4 w-12 h-12 text-[#118c90]/20"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, -360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-0 right-1/4 w-12 h-12 text-[#118c90]/20"
          >
            🦷
          </motion.div>

          <h2 className="text-4xl  font-bold text-navy-900 mb-4">
            Frequently Asked <span className="text-[#118c90]">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our dental services,
            insurance coverage, and treatment procedures.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#118c90]/5 via-transparent to-[#118c90]/5 rounded-3xl -m-6 blur-3xl" />

          <div className="relative">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#118c90]/10 via-transparent to-[#118c90]/10 rounded-full blur-2xl" />
            <p className="text-gray-600 mb-6 relative">
              Still have questions? We're here to help!
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-[#118c90] to-[#0e7073] text-navy-900 
                px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-[#118c90]/50 
                transition-shadow"
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
