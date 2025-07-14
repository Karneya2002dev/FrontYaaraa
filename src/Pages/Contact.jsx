import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.phone && form.phone.length !== 10) {
    toast.error('Phone number must be exactly 10 digits.');
    return;
  }

  try {
    const res = await fetch('https://backendweb-production-04a7.up.railway.app/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      toast.success('Message sent successfully!');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => navigate('/thankyou'), 2000);
    } else {
      toast.error('Failed to send message.');
    }
  } catch (err) {
    console.error(err);
    toast.error('Something went wrong.');
  }
};

  return (
    <section className="bg-gradient-to-b from-white to-rose-50 py-20 px-6 md:px-16">
      <ToastContainer />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-10">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-rose-700">Contact Us</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We'd love to hear from you. Whether you're curious about services, partnership opportunities, or anything else—we’re ready to answer your questions.
          </p>

          <div className="space-y-5 text-sm text-gray-700">
            <div className="flex items-center gap-4">
              <Mail className="text-rose-500" size={22} />
              <div>
                <p className="font-semibold">Email</p>
                <p>info@yaaraa.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-rose-500" size={22} />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91-73394 08488</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-rose-500" size={22} />
              <div>
                <p className="font-semibold">Address</p>
                <p>Madurai, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-rose-200 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-rose-200 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
            />
          </div>
         <input
  name="phone"
  type="tel"
  placeholder="Phone (Optional)"
  value={form.phone}
  onChange={(e) => {
    const cleanedValue = e.target.value.replace(/\D/g, ''); // Only digits
    if (cleanedValue.length <= 10) {
      setForm({ ...form, phone: cleanedValue });
    }
  }}
  pattern="\d{10}"
  maxLength={10}
  className="w-full px-4 py-2 border border-rose-200 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
/>

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-rose-200 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-rose-200 rounded-md focus:ring-2 focus:ring-rose-400 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
