"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "../teamData";

export default function DoctorProfile() {
  const params = useParams();
  const doctor = teamMembers.find((member) => member.id === params.id);

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="min-h-screen bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <Link
          href="/our-team"
          className="text-white hover:text-[#118c90] transition-colors mb-8 inline-block"
        >
          ← Back to Team
        </Link>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-4xl font-bold mb-4">{doctor.name}</h1>
            <p className="text-[#118c90] text-xl mb-6">{doctor.title}</p>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-3">About</h2>
                <p className="text-gray-300">{doctor.bio}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-[#118c90]/20 text-[#118c90]"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
                <ul className="list-disc list-inside text-gray-300">
                  {doctor.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Connect</h2>
                <div className="flex space-x-4">
                  <a
                    href={doctor.social.linkedin}
                    className="text-[#118c90] hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={doctor.social.twitter}
                    className="text-[#118c90] hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
