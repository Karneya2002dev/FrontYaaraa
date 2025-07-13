import React from "react";
import { Link } from "react-router-dom";
import FlipCard from "../Componets/ui/FlipCard";

export default function Home() {
  const courses = [
    {
      title: "Web Development",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      description:
        "Learn HTML, CSS, JavaScript and responsive design to build real-world websites.",
    },
    {
      title: "React.js & Node.js",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      description:
        "Master the MERN stack: React, Node, Express & MongoDB for full-stack apps.",
    },
    {
      title: "Mobile App Dev",
      image: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
      description:
        "Build cross-platform apps using React Native and Expo CLI with Firebase.",
    },
    {
      title: "UI/UX Design",
      image: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
      description:
        "Design modern user interfaces using Figma, wireframes, and user testing.",
    },
    {
      title: "Python with Django",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      description:
        "Develop powerful backends with Django, REST APIs and user authentication.",
    },
    {
      title: "Career Guidance",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      description:
        "Get expert resume reviews, LinkedIn help, and mock technical interviews.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 font-sans">
      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-rose-700 mb-6">
          Empowering Women in Tech
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          <span className="text-rose-600 font-semibold">Yaaraa Technologies</span> provides expert-led IT training & internships exclusively for women.
        </p>
        <Link
          to="/register"
          className="inline-block mt-6 px-6 py-3 text-white bg-rose-600 hover:bg-rose-700 rounded shadow"
        >
          Get Started
        </Link>
      </section>

      {/* Courses */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl text-center font-bold text-rose-700 mb-10">
          Popular Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {courses.map((c, i) => (
            <FlipCard
              key={i}
              title={c.title}
              description={c.description}
              image={c.image}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
    <section className="bg-gradient-to-r from-fuchsia-700 via-rose-600 to-pink-500 text-white py-16 px-6 text-center shadow-inner">

        <h2 className="text-3xl font-semibold mb-4">Start Your IT Journey Today</h2>
        <p className="mb-6 text-lg">
          Sign up now to receive free access to resources and upcoming batch details.
        </p>
        <Link
          to="/register"
          className="bg-white text-rose-600 font-semibold px-6 py-3 rounded hover:bg-gray-100"
        >
          Register Now
        </Link>
      </section>
    </main>
  );
}
