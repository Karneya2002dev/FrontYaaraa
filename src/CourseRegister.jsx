import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CourseRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const courses = [
    'Web Development',
    'React & Node.js',
    'Mobile App Development',
    'UI/UX Design',
    'Python with Django',
    'Career Guidance',
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://backendweb-production-04a7.up.railway.app/api/course-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        navigate('/thankyou');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <section className="bg-rose-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">Course Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-pink-200 px-4 py-2 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-pink-200 px-4 py-2 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-pink-200 px-4 py-2 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
          />
          <select
            name="course"
            required
            value={form.course}
            onChange={handleChange}
            className="w-full border border-pink-200 px-4 py-2 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
          >
            <option value="">Select a Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
          <textarea
            name="message"
            rows="4"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-pink-200 px-4 py-2 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-rose-600 text-white font-semibold py-2 rounded-md hover:bg-rose-700 transition"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default CourseRegister;
