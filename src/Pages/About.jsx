import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Anandh",
    role: "Founder & CEO",
    img: "/images/team1.jpg", // Replace with your real image path
  },
  {
    name: "Divya Raj",
    role: "UI/UX Designer",
    img: "/images/team2.jpg",
  },
  {
    name: "Sanjana Rao",
    role: "Full Stack Developer",
    img: "/images/team3.jpg",
  },
];

const milestones = [
  { year: "2021", event: "Founded YaaRaa Technologies" },
  { year: "2022", event: "Launched Women-Focused Internship Program" },
  { year: "2023", event: "Trained 500+ Women in IT" },
  { year: "2024", event: "Expanded to 4 More Cities in India" },
];

const testimonials = [
  {
    name: "Priya S.",
    feedback:
      "Yaaraa helped me land my first job in tech! The mentorship and projects were top-notch.",
  },
  {
    name: "Deepa V.",
    feedback:
      "Loved the UI/UX course! Practical tasks and real feedback made all the difference.",
  },
  {
    name: "Revathi M.",
    feedback:
      "Interning with Yaaraa gave me confidence and skills that my college didn’t provide.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-pink-100 py-20 px-6 md:px-24 animate-fadein font-sans">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-rose-700 mb-4">
          About <span className="text-rose-500">YaaRaa Technologies</span>
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Empowering women from Tier-2 cities with cutting-edge IT training,
          real-world internships, and guaranteed placement support.
        </p>
      </div>

      {/* Vision & Services */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-20">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-pink-400"
        >
          <h3 className="text-2xl font-bold text-pink-700 mb-4">🌸 Our Vision</h3>
          <p className="text-gray-700">
            We aim to bridge the opportunity gap by making high-quality tech
            education accessible, inclusive, and impactful for every aspiring
            woman in India.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-pink-400"
        >
          <h3 className="text-2xl font-bold text-pink-700 mb-4">💼 What We Do</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Real-time internships with live projects</li>
            <li>Tech courses from beginner to advanced</li>
            <li>Resume & LinkedIn review sessions</li>
            <li>Corporate training & IT consulting</li>
          </ul>
        </motion.div>
      </div>

      {/* Company Timeline */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h3 className="text-3xl font-bold text-rose-700 mb-8">📅 Milestones</h3>
        <ul className="space-y-4 text-left border-l-4 border-pink-400 pl-6">
          {milestones.map((m, i) => (
            <li key={i} className="text-gray-700">
              <span className="font-semibold text-pink-600">{m.year} —</span> {m.event}
            </li>
          ))}
        </ul>
      </div>

      {/* Meet the Team */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h3 className="text-3xl font-bold text-rose-700 mb-10">💖 Meet Our Team</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-100 object-cover"
              />
              <h4 className="text-lg font-semibold text-pink-700">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h3 className="text-3xl font-bold text-rose-700 mb-10">🗣️ Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow text-left"
            >
              <p className="text-gray-700 mb-4">“{t.feedback}”</p>
              <p className="text-sm font-semibold text-pink-600">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-20">
        <h3 className="text-3xl font-bold text-white mb-4 bg-rose-600 py-6 px-4 rounded">
          🚀 Ready to Start Your IT Journey?
        </h3>
        <Link
          to="/contact"
          className="inline-block mt-4 bg-white text-pink-600 font-semibold px-6 py-3 rounded hover:bg-pink-100 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
