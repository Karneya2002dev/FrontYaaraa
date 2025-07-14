import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const { name, value } = e.target;

    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 10) {
        setForm({ ...form, phone: cleaned });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.name.trim().length < 2) {
      toast.error('Name must be at least 2 characters.');
      return false;
    }

    if (!emailRegex.test(form.email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      toast.error('Phone number must be exactly 10 digits.');
      return false;
    }

    if (!form.course) {
      toast.error('Please select a course.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch('https://backendweb-production-04a7.up.railway.app/api/course-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('✅ Registered successfully!');
        setTimeout(() => navigate('/thankyou'), 2000);
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Server error. Please try again later.');
    }
  };

  return (
    <section className="bg-rose-50 min-h-screen flex items-center justify-center py-12 px-6">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">
          Course Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            required
            minLength={2}
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
            maxLength={10}
            pattern="\d{10}"
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
              <option key={index} value={course}>
                {course}
              </option>
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
