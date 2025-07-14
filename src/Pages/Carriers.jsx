import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Careers = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
  });
  const [resumePreview, setResumePreview] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'resume') {
      const file = files[0];
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!allowedTypes.includes(file.type)) {
        toast.error('Resume must be PDF, DOC or DOCX.');
        return;
      }

      setForm({ ...form, resume: file });
      setResumePreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.name.length < 2) {
      toast.error('Name must be at least 2 characters.');
      return;
    }

    if (!emailRegex.test(form.email)) {
      toast.error('Enter a valid email address.');
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      toast.error('Phone number must be exactly 10 digits.');
      return;
    }

    if (!form.resume) {
      toast.error('Please upload your resume.');
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach(key => formData.append(key, form[key]));

    try {
      const response = await fetch('https://backendweb-production-04a7.up.railway.app/api/apply', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        toast.success('🎉 Application submitted successfully!');
        setForm({ name: '', email: '', phone: '', position: '', resume: null });
        setResumePreview('');
      } else {
        toast.error('❌ Failed to submit application: ' + result.message);
      }
    } catch (error) {
      toast.error('⚠️ Server error: Unable to submit application.');
    }
  };

  return (
    <section className="py-16 px-6 md:px-24 bg-rose-50 min-h-screen">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      
      <div className="bg-white p-10 rounded-xl shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-rose-700">
          Join Our Team
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              minLength={2}
              value={form.name}
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-rose-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-rose-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              pattern="\d{10}"
              maxLength={10}
              value={form.phone}
              onChange={(e) => {
                const cleaned = e.target.value.replace(/\D/g, '');
                if (cleaned.length <= 10) {
                  setForm({ ...form, phone: cleaned });
                }
              }}
              className="w-full border border-pink-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-rose-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Position Applying For</label>
            <select
              name="position"
              required
              value={form.position}
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-lg focus:ring-2 focus:ring-rose-400"
            >
              <option value="">Select a position</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer-Web">Full Stack Developer - Web</option>
              <option value="Full Stack Developer-Mobile">Full Stack Developer - Mobile</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Digital Marketing Executive">Digital Marketing Executive</option>
              <option value="Business Development Associate">Business Development Associate</option>
              <option value="Interns">Interns</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Resume</label>
            <input
              type="file"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full border border-pink-200 px-4 py-2 rounded-lg"
            />
            {resumePreview && (
              <iframe
                src={resumePreview}
                className="w-full h-48 mt-4 border rounded-md"
                title="Resume Preview"
              ></iframe>
            )}
          </div>

          <button
            type="submit"
            className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default Careers;
